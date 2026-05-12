import Image from "next/image";
import { HERO, INVESTORS } from "@/lib/westmag/content";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden max-md:h-[650px] max-md:min-h-[650px] max-md:py-[220px]">
      {/* Video background */}
      <div className="absolute inset-0 z-0 flex min-h-[100svh] flex-col items-center justify-center max-md:h-[650px] max-md:min-h-[650px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover"
        >
          <source src="/westmag/videos/hero.webm" type="video/webm" />
          <source src="/westmag/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay gradient */}
      <div className="wm-vid-overlay pointer-events-none absolute inset-0 z-[1] max-md:h-[650px] max-md:min-h-[650px]" />

      {/* Headline + tagline */}
      <div className="relative z-[2] flex max-w-[50%] flex-col items-center justify-center gap-4 text-center max-lg:max-w-[80%] max-lg:min-w-0 max-lg:px-6 lg:min-w-[900px]">
        <h1 className="wm-hero-h1 m-0 font-display text-[72px] font-black uppercase leading-[80px] tracking-[-1px] text-white max-lg:text-[48px] max-lg:leading-[56px]">
          {HERO.heading}
        </h1>
        <p className="t1 m-0 font-mono text-[20px] leading-[24px] text-white max-lg:text-[16px] max-lg:leading-[20px]">
          {HERO.body}
        </p>
        <Image
          src="/westmag/icons/orange-triangle-down.svg"
          alt=""
          width={20}
          height={20}
          style={{ height: "auto" }}
          className="mt-2 w-5"
          aria-hidden="true"
        />
      </div>

      {/* Investor strip — pinned to bottom of hero */}
      <div className="absolute inset-x-0 bottom-0 z-[2] flex items-center justify-center gap-[100px] py-10 max-lg:gap-10 max-md:relative max-md:inset-auto">
        {INVESTORS.map((inv) => (
          <Image
            key={inv.name}
            src={inv.src}
            alt={inv.name}
            width={120}
            height={40}
            style={{ width: "auto" }}
            className="h-10 max-lg:h-[35px]"
          />
        ))}
      </div>
    </section>
  );
}
