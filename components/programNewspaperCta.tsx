"use client";

import { useEffect, useState } from "react";
import { Newspaper } from "lucide-react";

import { webButtonArrow } from "@/data/webGlobals";

// Small card that floats over the viewport only while the programme section is
// on screen. It points at the newspaper card in the "O nás" section (#noviny).
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
      className={`fixed inset-x-4 bottom-4 z-40 mx-auto flex max-w-md items-center gap-4 rounded-xl border border-black/5 bg-white p-4 shadow-2xl ring-1 ring-black/5 transition-all duration-300 ease-out motion-reduce:transition-none sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-sm ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
        <Newspaper className="h-6 w-6" aria-hidden />
      </span>
      <span className="text-sm font-semibold leading-snug text-dark">
        Kompletní program a všechna data?{" "}
        <span className="text-brand-blue">Nahlédněte do našich novin.</span>
      </span>
      <span aria-hidden className="ml-auto pl-1 text-brand-blue">
        {webButtonArrow}
      </span>
    </a>
  );
};

export default ProgramNewspaperCta;
