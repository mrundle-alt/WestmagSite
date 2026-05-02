"use client";

import { SCALING } from "@/lib/westmag/content";

type Props = {
  onContactClick: () => void;
};

export function ScalingCTA({ onContactClick }: Props) {
  return (
    <section className="wm-bg-dark flex flex-col items-center px-[100px] py-[60px] max-lg:px-[100px] max-md:px-6">
      <div className="h-[50svh] min-h-[50svh] w-full max-w-[1500px] border border-gray-500 bg-[#36363636] p-[5px] max-lg:h-auto max-lg:min-h-0">
        <div className="wm-bg-stamp flex h-full w-full items-center justify-center gap-[240px] border border-gray-500 px-[60px] py-10 max-lg:flex-col max-lg:gap-5 max-lg:px-6">
          <h2 className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] text-white max-md:text-[32px] max-md:leading-[36px]">
            {SCALING.heading}
          </h2>
          <div className="flex w-1/2 flex-col gap-5 max-lg:w-full">
            <p className="t1 m-0 text-left font-mono text-[20px] leading-[24px] text-white max-lg:text-[16px] max-lg:leading-[20px]">
              {SCALING.body}
            </p>
            <button
              type="button"
              onClick={onContactClick}
              className="wm-btn flex w-full items-center justify-center bg-[var(--orange)] py-5 font-mono font-medium uppercase text-white transition-opacity hover:opacity-75"
            >
              {SCALING.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
