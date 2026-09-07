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

const NewspaperFlipbook = ({ pages, pdfHref }: NewspaperFlipbookProps) => {
  const bookRef = useRef<FlipBookInstance>(null);
  const [page, setPage] = useState(0);
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);
  // Only mount the flip engine on the client: react-pageflip mutates the DOM on
  // init, so we render the static fallback for SSR / no-JS and swap in on mount.
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- deliberate client-only gate
  useEffect(() => setMounted(true), []);

  const flip = (dir: "prev" | "next") =>
    dir === "prev"
      ? bookRef.current?.pageFlip()?.flipPrev()
      : bookRef.current?.pageFlip()?.flipNext();

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
          {page > 0 && page < pageCount - 1 ? `${page + 1}–${page + 2}` : page + 1}{" "}
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
          onClick={() => setZoomSrc(pages[page])}
          className="ml-1 flex h-11 items-center gap-2 rounded-full bg-white/15 px-4 text-sm font-semibold text-white transition hover:bg-white/25"
        >
          <BsZoomIn className="text-base" />
          Zvětšit
        </button>
      </div>

      {DownloadButton && <div className="mt-6">{DownloadButton}</div>}

      {/* Zoom lightbox */}
      <Dialog
        open={zoomSrc !== null}
        onClose={() => setZoomSrc(null)}
        className="relative z-70"
      >
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden />
        <div className="fixed inset-0 overflow-auto p-4 sm:p-10">
          <DialogPanel className="mx-auto flex min-h-full max-w-5xl items-center justify-center">
            <button
              type="button"
              onClick={() => setZoomSrc(null)}
              className="fixed right-4 top-4 z-10 rounded-full bg-white p-2.5 text-dark shadow-lg transition hover:bg-white/90"
            >
              <span className="sr-only">Zavřít</span>
              <BsXLg className="size-5" />
            </button>
            {zoomSrc && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={zoomSrc}
                alt={`Volební noviny – strana ${page + 1}, zvětšeno`}
                className="h-auto w-full rounded-lg shadow-2xl"
              />
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default NewspaperFlipbook;
