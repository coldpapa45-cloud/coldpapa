"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "header" | "article";
  amount?: number;
  once?: boolean;
};

export function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  as = "div",
  amount = 0.2,
  once = true,
}: Props) {
  const prefersReduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (prefersReduced) {
    const Tag = as as React.ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
