"use client";

import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  BsChevronLeft,
  BsChevronRight,
  BsDownload,
  BsXLg,
  BsZoomIn,
} from "react-icons/bs";

interface PageFlipApi {
  flipNext: () => void;
  flipPrev: () => void;
  getPageCount: () => number;
  getOrientation: () => "portrait" | "landscape";
}
interface FlipBookInstance {
  pageFlip: () => PageFlipApi | undefined;
}

// react-pageflip's published types mark every setting as required and don't
// expose the imperative ref cleanly – narrow it to what we actually use.
type FlipBookProps = Record<string, unknown> & {
  ref?: React.Ref<FlipBookInstance>;
  children?: React.ReactNode;
};
const FlipBook = HTMLFlipBook as unknown as React.ComponentType<FlipBookProps>;

interface NewspaperFlipbookProps {
  /** Absolute paths to one image per page, already in reading order. */
  pages: string[];
  /** Absolute path to the full newspaper PDF, or null if not uploaded yet. */
  pdfHref: string | null;
}

const SWIPE_THRESHOLD = 40;

/** Left-hand page index of the spread that page `i` sits in (0 = lone cover). */
const spreadLeft = (i: number) => (i <= 0 ? 0 : i % 2 === 1 ? i : i - 1);

/**
 * Page indices shown together in the zoom lightbox for `index`.
 * Portrait mirrors the book on phones – one page at a time; landscape shows the
 * full left/right spread (the cover and a trailing odd page stand alone).
 */
const zoomSpread = (
  index: number,
  pageCount: number,
  portrait: boolean,
): number[] => {
  if (portrait) return [index];
  const left = spreadLeft(index);
  if (left === 0) return [0];
  return left + 1 < pageCount ? [left, left + 1] : [left];
};

const NewspaperFlipbook = ({ pages, pdfHref }: NewspaperFlipbookProps) => {
  const bookRef = useRef<FlipBookInstance>(null);
  const [page, setPage] = useState(0);
  // Index of the page shown in the zoom lightbox, or null when it's closed.
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  // Only mount the flip engine on the client: react-pageflip mutates the DOM on
  // init, so we render the static fallback for SSR / no-JS and swap in on mount.
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- deliberate client-only gate
  useEffect(() => setMounted(true), []);

  // The flip engine drops to one page at a time on narrow screens ("portrait").
  // Mirror that everywhere else so the counter and the zoom lightbox don't offer
  // a two-page spread that isn't on screen.
  const [portrait, setPortrait] = useState(false);
  useEffect(() => {
    if (!mounted) return;
    const sync = () => {
      const o = bookRef.current?.pageFlip()?.getOrientation();
      if (o) setPortrait(o === "portrait");
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [mounted]);

  const zoomOpen = zoomIndex !== null;

  // Move the lightbox one step forward (1) or back (-1) – a single page in
  // portrait, a whole spread otherwise (the cover / trailing odd page are lone).
  const stepZoom = (dir: -1 | 1) =>
    setZoomIndex((cur) => {
      if (cur === null) return cur;
      if (portrait) {
        const next = cur + dir;
        return next >= 0 && next < pages.length ? next : cur;
      }
      const left = spreadLeft(cur);
      if (dir === 1) {
        const next = left === 0 ? 1 : left + 2;
        return next < pages.length ? next : cur;
      }
      return left <= 1 ? 0 : left - 2;
    });

  // Arrow-key navigation while the lightbox is open.
  useEffect(() => {
    if (!zoomOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") stepZoom(1);
      else if (e.key === "ArrowLeft") stepZoom(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoomOpen]);

  const flip = (dir: "prev" | "next") =>
    dir === "prev"
      ? bookRef.current?.pageFlip()?.flipPrev()
      : bookRef.current?.pageFlip()?.flipNext();

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    if (Math.abs(dx) > SWIPE_THRESHOLD) stepZoom(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const DownloadButton = pdfHref ? (
    <a
      href={pdfHref}
      download
      className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-md font-semibold text-brand-blue shadow-xs transition hover:bg-white/90"
    >
      <BsDownload className="text-lg" />
      Stáhnout PDF
    </a>
  ) : null;

  // ── Empty / single-page / no-JS fallback ────────────────────────────────
  if (!mounted || pages.length < 2) {
    return (
      <div className="flex flex-col items-center gap-6">
        {pages.length === 0 ? (
          <p className="rounded-2xl bg-white/10 px-6 py-8 text-center text-white/80">
            Volební noviny sem brzy nahrajeme.
          </p>
        ) : (
          <div className="w-full max-w-140 space-y-4">
            {pages.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt={`Volební noviny – strana ${i + 1}`}
                className="w-full rounded-xl shadow-2xl ring-1 ring-black/10"
              />
            ))}
          </div>
        )}
        {DownloadButton}
      </div>
    );
  }

  const pageCount = pages.length;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-225 perspective-[2000px]">
        <FlipBook
          ref={bookRef}
          className="mx-auto"
          style={{}}
          width={520}
          height={735}
          size="stretch"
          minWidth={280}
          maxWidth={620}
          minHeight={396}
          maxHeight={877}
          drawShadow
          flippingTime={700}
          maxShadowOpacity={0.4}
          showCover
          usePortrait
          mobileScrollSupport={false}
          clickEventForward={false}
          useMouseEvents
          swipeDistance={30}
          showPageCorners
          startZIndex={0}
          autoSize
          startPage={0}
          disableFlipByClick={false}
          onFlip={(e: { data: number }) => setPage(e.data)}
          onChangeOrientation={(e: { data: "portrait" | "landscape" }) =>
            setPortrait(e.data === "portrait")
          }
        >
          {pages.map((src, i) => (
            <div key={src} className="h-full w-full bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Volební noviny – strana ${i + 1}`}
                className="h-full w-full object-contain"
                draggable={false}
              />
            </div>
          ))}
        </FlipBook>
      </div>

      {/* Controls */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => flip("prev")}
          disabled={page === 0}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 disabled:opacity-30"
        >
          <span className="sr-only">Předchozí strana</span>
          <BsChevronLeft className="text-lg" />
        </button>

        <span className="min-w-24 text-center text-sm font-semibold text-white/80">
          {!portrait && page > 0 && page < pageCount - 1
            ? `${page + 1}–${page + 2}`
            : page + 1}{" "}
          / {pageCount}
        </span>

        <button
          type="button"
          onClick={() => flip("next")}
          disabled={page >= pageCount - 1}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 disabled:opacity-30"
        >
          <span className="sr-only">Další strana</span>
          <BsChevronRight className="text-lg" />
        </button>

        <button
          type="button"
          onClick={() => setZoomIndex(page)}
          className="ml-1 flex h-11 items-center gap-2 rounded-full bg-white/15 px-4 text-sm font-semibold text-white transition hover:bg-white/25"
        >
          <BsZoomIn className="text-base" />
          Zvětšit
        </button>
      </div>

      {DownloadButton && <div className="mt-6">{DownloadButton}</div>}

      {/* Zoom lightbox – one page in portrait, a full spread otherwise; arrow
          keys / swipe / buttons step through it to match. */}
      {(() => {
        const spreadPages =
          zoomIndex === null ? [] : zoomSpread(zoomIndex, pageCount, portrait);
        const atFirst = spreadPages.length === 0 || spreadPages[0] === 0;
        const atLast =
          spreadPages.length === 0 ||
          spreadPages[spreadPages.length - 1] >= pageCount - 1;
        const single = spreadPages.length < 2;
        const label = single
          ? `${(spreadPages[0] ?? 0) + 1}`
          : `${spreadPages[0] + 1}–${spreadPages[1] + 1}`;

        return (
          <Dialog
            open={zoomOpen}
            onClose={() => setZoomIndex(null)}
            className="relative z-70"
          >
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              aria-hidden
            />
            <div className="fixed inset-0 overflow-auto p-4 sm:p-10">
              <DialogPanel
                className="mx-auto flex min-h-full max-w-7xl items-center justify-center"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <button
                  type="button"
                  onClick={() => setZoomIndex(null)}
                  className="fixed right-4 top-4 z-10 rounded-full bg-white p-2.5 text-dark shadow-lg transition hover:bg-white/90"
                >
                  <span className="sr-only">Zavřít</span>
                  <BsXLg className="size-5" />
                </button>

                <button
                  type="button"
                  onClick={() => stepZoom(-1)}
                  disabled={atFirst}
                  className="fixed left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-dark shadow-lg transition hover:bg-white disabled:opacity-30 sm:left-4"
                >
                  <span className="sr-only">
                    {single ? "Předchozí strana" : "Předchozí dvojstrana"}
                  </span>
                  <BsChevronLeft className="text-xl" />
                </button>
                <button
                  type="button"
                  onClick={() => stepZoom(1)}
                  disabled={atLast}
                  className="fixed right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-dark shadow-lg transition hover:bg-white disabled:opacity-30 sm:right-4"
                >
                  <span className="sr-only">
                    {single ? "Další strana" : "Další dvojstrana"}
                  </span>
                  <BsChevronRight className="text-xl" />
                </button>

                <span className="fixed bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-sm font-semibold text-white">
                  {label} / {pageCount}
                </span>

                {zoomOpen && (
                  <div
                    key={spreadPages[0]}
                    className="flex w-full justify-center"
                  >
                    {/* In a landscape spread a lone cover / back page is capped
                        to half width so it renders at the same scale as one
                        page of a pair; in portrait a single page fills the
                        frame. */}
                    <div
                      className={`flex items-stretch overflow-hidden rounded-lg shadow-2xl ${
                        single ? (portrait ? "w-full" : "w-1/2") : "w-full"
                      }`}
                    >
                      {spreadPages.map((i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={i}
                          src={pages[i]}
                          alt={`Volební noviny – strana ${i + 1}, zvětšeno`}
                          className={`h-auto select-none ${
                            single ? "w-full" : "w-1/2"
                          }`}
                          draggable={false}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </DialogPanel>
            </div>
          </Dialog>
        );
      })()}
    </div>
  );
};

export default NewspaperFlipbook;
