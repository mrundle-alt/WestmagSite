"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { REVOLUTION } from "@/lib/westmag/content";

/**
 * "The drone and robotics revolution is here."
 * Three stacked text-boxes joined by 1px vert-line dividers.
 * The original site highlights the box closest to the viewport center with an orange border —
 * we recreate that with a passive scroll listener that toggles data-active on each box.
 */
export function RevolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const boxes = Array.from(container.querySelectorAll<HTMLElement>(".wm-textbox"));
    const RANGE = 80;

    function update() {
      const viewportCenter = window.innerHeight / 2;
      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const boxCenter = rect.top + rect.height / 2;
        const distance = Math.abs(boxCenter - viewportCenter);
        box.dataset.active = distance <= RANGE ? "true" : "false";
      });
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="wm-bg-grain flex flex-col items-center justify-center py-[60px]">
      <Image
        src="/westmag/images/america-motors-graphic.png"
        alt=""
        width={1988}
        height={1245}
        sizes="(max-width: 1988px) 100vw, 1988px"
        priority
        className="h-auto w-full max-w-[1500px] object-contain"
      />
      <div ref={containerRef} className="flex w-full flex-col items-center px-[100px] pt-5 max-lg:px-10 max-md:px-6">
        {REVOLUTION.blocks.map((block, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="wm-textbox flex h-auto min-w-[600px] max-w-[600px] items-center justify-center px-10 py-[30px] max-md:min-w-0 max-md:max-w-full max-md:w-full">
              <p className="t1 m-0 text-center font-mono text-[20px] leading-[24px] text-black max-lg:text-[16px] max-lg:leading-[20px]">
                {block}
              </p>
            </div>
            {idx < REVOLUTION.blocks.length - 1 && <div className="wm-vert-line" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </section>
  );
}
