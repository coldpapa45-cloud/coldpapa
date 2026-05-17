"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/data";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative border-y border-[var(--border)] bg-[var(--surface-2)]"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <Reveal className="text-center">
          <SectionBadge className="mx-auto">FAQ</SectionBadge>
          <h2 id="faq-title" className="h-section mt-4">Common questions.</h2>
          <p className="body-lead mt-4">
            Honest answers about fees, verification, security, and how Coldpapa works.
          </p>
        </Reveal>

        <Reveal className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            const triggerId = `faq-trigger-${i}`;
            const panelId = `faq-panel-${i}`;

            return (
              <div
                key={f.q}
                className={cn(
                  "rounded-2xl border bg-white px-5 py-4 transition-all duration-300",
                  isOpen
                    ? "border-(--primary)/35 shadow-soft"
                    : "border-border hover:-translate-y-0.5 hover:border-(--primary)/30 hover:shadow-[0_14px_34px_rgba(41,108,233,0.10)]"
                )}
              >
                <button
                  type="button"
                  id={triggerId}
                  aria-expanded={isOpen ? "true" : "false"}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 rounded-lg text-left text-[0.95rem] font-semibold text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#296CE924]"
                >
                  <span>{f.q}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex size-7 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                      isOpen
                        ? "rotate-45 bg-primary text-white"
                        : "bg-surface-2 text-muted hover:bg-primary-soft hover:text-primary"
                    )}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
