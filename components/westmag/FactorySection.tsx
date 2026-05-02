import { FACTORY } from "@/lib/westmag/content";

export function FactorySection() {
  return (
    <section className="wm-bg-dark relative flex flex-col items-center px-[100px] py-[60px] max-lg:px-[100px] max-md:px-6">
      <div className="flex h-auto w-full max-w-[1500px] flex-col gap-5">
        <div className="mt-[10px] flex items-center justify-between gap-10 max-lg:flex-col">
          <div className="flex w-[70%] flex-col gap-[10px] max-lg:w-full">
            <h2 className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] text-white max-md:text-[32px] max-md:leading-[36px]">
              {FACTORY.heading}
            </h2>
            <p className="t1 m-0 text-left font-mono text-[20px] leading-[24px] text-white max-lg:text-[16px] max-lg:leading-[20px]">
              {FACTORY.body}
            </p>
          </div>
          <div className="h-[200px] w-[30%] max-lg:h-[250px] max-lg:w-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="h-full w-full border border-gray-500 object-cover"
            >
              <source src="/westmag/videos/factory.webm" type="video/webm" />
              <source src="/westmag/videos/factory.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="wm-bg-sanfran mb-[10px] h-[50svh] w-full" aria-label="South San Francisco facility" />
      </div>
    </section>
  );
}
