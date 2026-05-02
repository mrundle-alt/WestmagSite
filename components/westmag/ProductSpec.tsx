import Image from "next/image";
import type { ProductSpec as ProductSpecType } from "@/lib/westmag/content";

export function ProductSpec({ product }: { product: ProductSpecType }) {
  return (
    <div className="h-auto w-1/2 border border-gray-500 bg-[#4f4f4f42] p-[5px] max-lg:w-full">
      <div className="flex h-auto items-center justify-center border border-gray-500 px-0 py-5 max-lg:p-5">
        <Image
          src={product.image}
          alt={product.imageAlt}
          width={600}
          height={500}
          sizes="(max-width: 479px) 100vw, 600px"
          className="h-[500px] w-[600px] object-contain max-lg:h-auto max-lg:w-full max-lg:max-w-full"
        />
      </div>
      <div className="flex h-auto flex-col items-start justify-start gap-[30px] px-[10px] pb-[10px] pt-[15px]">
        <div className="flex flex-col gap-[10px]">
          <h3 className="m-0 font-mono text-[28px] font-medium uppercase leading-[34px] text-black">
            {product.title}
          </h3>
          <p className="t2 m-0 text-left font-mono text-[15px] leading-5 text-black">
            {product.body}
          </p>
        </div>
        <div className="flex w-full flex-col gap-2">
          {product.specs.map((spec) => (
            <div key={spec.label} className="flex items-center gap-5">
              <div className="flex w-[100px] items-center gap-2 font-mono text-sm text-black">
                <span className="text-[var(--orange)]">{"\u2022"}</span>
                <span>{spec.label}</span>
              </div>
              <div className="font-mono text-sm text-black">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
