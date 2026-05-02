import Image from "next/image";
import Link from "next/link";
import { FOOTER } from "@/lib/westmag/content";

export function Footer() {
  return (
    <footer className="wm-bg-grain flex flex-col items-stretch bg-[#b2b2b2]">
      <Image
        src="/westmag/icons/matrix-dot.svg"
        alt=""
        width={1500}
        height={60}
        className="w-full"
        aria-hidden="true"
      />
      <section className="wm-bg-dark relative flex min-h-[50svh] flex-col items-center px-[100px] py-[60px] max-md:px-6">
        <div className="z-[2] flex flex-col items-center">
          <Link href="/" aria-label="Westmag home" className="transition-opacity hover:opacity-75">
            <Image
              src="/westmag/logos/westmag-wordmark.svg"
              alt="Westmag"
              width={300}
              height={80}
              className="max-w-[300px] pb-5"
            />
          </Link>
          <div className="flex items-center justify-center gap-[50px]">
            {FOOTER.socials.map((s) => {
              const isExternal = s.href.startsWith("http");
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="transition-opacity hover:opacity-75"
                >
                  <Image src={s.icon} alt="" width={56} height={56} className="h-auto w-14" />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-0 flex items-start justify-center">
          <Image
            src="/westmag/logos/croppedlogomark.svg"
            alt=""
            width={1500}
            height={400}
            className="block w-full max-w-[90%]"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-[3] flex items-end justify-between px-5 pb-[10px]">
          <div className="text-center">
            <p className="m-0 font-display text-sm leading-tight text-[#737373]">
              {FOOTER.address}
              <br />
              {FOOTER.copyright}
            </p>
          </div>
          <Link href={FOOTER.termsHref} className="text-decoration-none">
            <span className="font-display text-sm text-[#737373]">{FOOTER.termsLabel}</span>
          </Link>
        </div>
      </section>
    </footer>
  );
}
