"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HERO } from "@/lib/westmag/content";
import { AnimatedHeadline } from "./AnimatedHeadline";
import { HeroSpotlight } from "./HeroSpotlight";
import { InvestorMarquee } from "./InvestorMarquee";

const INTRO_DONE = 0; // intro overlay removed — animations start immediately

export function HeroV2() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Video drifts downward and scales slightly as user scrolls past hero
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  // Text fades + drifts up
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden max-md:h-[650px] max-md:min-h-[650px] max-md:py-[220px]"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: videoY, scale: videoScale }}
      >
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
      </motion.div>

      {/* Dark overlay + cursor-follow spotlight */}
      <div className="wm-vid-overlay pointer-events-none absolute inset-0 z-[1]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-black/70" />
      <HeroSpotlight />

      {/* Headline + tagline */}
      <motion.div
        className="relative z-[2] flex max-w-[50%] flex-col items-center justify-center gap-4 text-center max-lg:max-w-[80%] max-lg:min-w-0 max-lg:px-6 lg:min-w-[900px]"
        style={{ y: textY, opacity: textOpacity }}
      >
        <AnimatedHeadline
          text={HERO.heading}
          delay={INTRO_DONE - 0.3}
          className="wm-hero-h1 m-0 font-display text-[72px] font-black uppercase leading-[80px] tracking-[-1px] text-white max-lg:text-[48px] max-lg:leading-[56px]"
        />
        <motion.p
          className="t1 m-0 font-mono text-[20px] leading-[24px] text-white max-lg:text-[16px] max-lg:leading-[20px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: INTRO_DONE + 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {HERO.body}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: INTRO_DONE + 0.85, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="mt-2"
          >
            <Image
              src="/westmag/icons/orange-triangle-down.svg"
              alt=""
              width={20}
              height={20}
              style={{ height: "auto" }}
              className="w-5"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Investor strip — continuous marquee */}
      <InvestorMarquee />
    </section>
  );
}
