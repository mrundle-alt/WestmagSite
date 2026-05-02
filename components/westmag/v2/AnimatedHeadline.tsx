"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  delay?: number;
};

/**
 * Splits text into words and reveals each with a clipped slide-up.
 * Word-level (not char-level) so natural kerning + text-stroke render correctly.
 */
export function AnimatedHeadline({ text, className, delay = 0 }: Props) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <h1 className={className} aria-label={text}>
      {words.map((word, wIdx) => (
        <span
          key={wIdx}
          className="relative inline-block overflow-hidden align-bottom"
          aria-hidden="true"
        >
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%" }}
            animate={reduce ? undefined : { y: 0 }}
            transition={{
              duration: 0.9,
              delay: delay + wIdx * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {wIdx < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </h1>
  );
}
