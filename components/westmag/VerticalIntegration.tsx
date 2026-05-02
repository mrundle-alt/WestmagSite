import Image from "next/image";
import { VERTICAL } from "@/lib/westmag/content";

export function VerticalIntegration() {
  return (
    <section className="wm-bg-grain flex flex-col items-center px-[100px] pb-[60px] pt-0 max-lg:px-10 max-md:px-6">
      <div className="flex h-auto w-full max-w-[1500px] flex-col gap-5">
        <div className="flex items-center justify-between gap-10">
          <div className="flex w-full flex-col gap-[10px]">
            <h2 className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] text-black max-md:text-[32px] max-md:leading-[36px]">
              {VERTICAL.heading}
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-stretch justify-between gap-0 max-lg:flex-col max-lg:gap-3">
            {VERTICAL.cards.map((card, idx) => (
              <div key={card.title} className="contents">
                <div className="h-auto min-h-[400px] w-full border border-gray-500 bg-[#9191912b] p-[5px] max-lg:min-h-[300px]">
                  <div className="flex h-full min-h-[400px] max-h-[400px] flex-col items-start justify-start gap-[10px] overflow-auto border border-gray-500 px-10 pb-10 pt-[60px] max-lg:min-h-[300px] max-lg:max-h-none">
                    <div className="flex items-center gap-[14px]">
                      <div className="h-[15px] w-[15px] rounded-full bg-[var(--orange)]" />
                      <h3 className="m-0 font-mono text-[28px] font-medium uppercase leading-[34px] text-black">
                        {card.title}
                      </h3>
                    </div>
                    <p className="m-0 font-mono text-sm leading-5 text-black">{card.body}</p>
                  </div>
                </div>
                {idx < VERTICAL.cards.length - 1 && (
                  <div className="hidden h-[50px] w-px bg-gray-500 max-lg:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-5 flex w-full items-start justify-between max-lg:hidden">
            <Image
              src="/westmag/icons/connector-line.svg"
              alt=""
              width={1500}
              height={60}
              className="h-[60px] w-full"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
