"use client";

import { useCallback, useEffect, useRef } from "react";

// Pointer-repel effect: cards inside RADIUS of the cursor slide directly away
// from it, hardest up close, "making room" around the pointer. The card the
// cursor is actually over stays put so it's still easy to click.
const RADIUS = 380; // px – influence zone around the cursor
const MAX_PUSH = 42; // px – furthest a card is nudged
const FALLOFF = 1.35; // >1 makes the push fade faster with distance

export function useCardRepel<T extends HTMLElement>() {
  const cards = useRef<(T | null)[]>([]);
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const raf = useRef<number | null>(null);
  const reduced = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      reduced.current = mq.matches;
    };
    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, []);

  const paint = useCallback(() => {
    raf.current = null;
    const p = pointer.current;
    const els = cards.current;
    // Read every rect first, then write – avoids layout thrashing.
    const rects = els.map((el) => (el ? el.getBoundingClientRect() : null));

    els.forEach((el, i) => {
      if (!el) return;
      const r = rects[i];

      if (!p || !r) {
        el.style.transform = "";
        return;
      }

      // Cursor is over this card – leave it alone so it stays clickable.
      if (p.x >= r.left && p.x <= r.right && p.y >= r.top && p.y <= r.bottom) {
        el.style.transform = "";
        return;
      }

      const dx = r.left + r.width / 2 - p.x;
      const dy = r.top + r.height / 2 - p.y;
      const dist = Math.hypot(dx, dy) || 0.001;

      if (dist >= RADIUS) {
        el.style.transform = "";
        return;
      }

      const push = (1 - dist / RADIUS) ** FALLOFF * MAX_PUSH;
      const nx = ((dx / dist) * push).toFixed(2);
      const ny = ((dy / dist) * push).toFixed(2);
      el.style.transform = `translate3d(${nx}px, ${ny}px, 0)`;
    });
  }, []);

  const schedule = useCallback(() => {
    if (raf.current == null) raf.current = requestAnimationFrame(paint);
  }, [paint]);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduced.current) return;
      pointer.current = { x: e.clientX, y: e.clientY };
      schedule();
    },
    [schedule],
  );

  const onMouseLeave = useCallback(() => {
    pointer.current = null;
    schedule();
  }, [schedule]);

  const register = useCallback(
    (index: number) => (el: T | null) => {
      cards.current[index] = el;
    },
    [],
  );

  return { register, repelHandlers: { onMouseMove, onMouseLeave } };
}
