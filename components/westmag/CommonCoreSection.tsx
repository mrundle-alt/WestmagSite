import { COMMON_CORE, PRODUCTS } from "@/lib/westmag/content";
import { ProductSpec } from "./ProductSpec";

export function CommonCoreSection() {
  return (
    <section
      id="technology-start"
      className="wm-bg-grain flex scroll-mt-24 flex-col items-center px-[100px] py-[60px] max-lg:px-10 max-md:px-6"
    >
      <div className="flex h-auto w-full max-w-[1500px] flex-col gap-5">
        <div className="flex items-center justify-between gap-10 max-lg:flex-col">
          <div className="flex w-full flex-col gap-[10px]">
            <h2 className="wm-section-h2 m-0 font-display text-[40px] uppercase leading-[46px] tracking-[-1px] text-black max-md:text-[32px] max-md:leading-[36px]">
              {COMMON_CORE.heading}
            </h2>
            <p className="t1 m-0 text-left font-mono text-[20px] leading-[24px] text-black max-lg:text-[16px] max-lg:leading-[20px]">
              {COMMON_CORE.body}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-10 max-lg:flex-col">
          {PRODUCTS.map((product) => (
            <ProductSpec key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
