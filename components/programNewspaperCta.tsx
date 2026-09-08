"use client";

import { useEffect, useState } from "react";

import { webButtonArrow } from "@/data/webGlobals";

// Square card that floats over the viewport only while the programme section is
// on screen. It points at the newspaper flip-through section (#noviny).
const ProgramNewspaperCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("program");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      // Show once the section is meaningfully in view, hide before it fully
      // leaves at either edge.
      { rootMargin: "-15% 0px -40% 0px", threshold: 0 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#noviny"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-4 right-4 z-40 flex size-44 flex-col justify-end overflow-hidden rounded-xl bg-white p-5 shadow-2xl ring-1 ring-black/5 transition-all duration-300 ease-out motion-reduce:transition-none sm:bottom-6 sm:right-6 sm:size-52 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {/* Faint newspaper mockup behind the text. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/noviny.webp"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
      />

      <span className="relative text-sm font-semibold leading-snug text-dark">
        Kompletní program a všechna data?{" "}
        <span className="text-brand-blue">
          Nahlédněte do našich novin.{" "}
          <span aria-hidden>{webButtonArrow}</span>
        </span>
      </span>
    </a>
  );
};

export default ProgramNewspaperCta;
