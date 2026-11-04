"use client";

import { useState } from "react";
import type { FaqItem } from "@/content/faqs";
import type { Locale } from "@/i18n/routing";

type FAQProps = {
  items: FaqItem[] | { id?: string; question: { en: string; bn: string }; answer: { en: string; bn: string } }[];
  locale: Locale;
  title: string;
  eyebrow?: string;
};

export function FAQ({ items, locale, title, eyebrow }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="section-pad bg-background" aria-labelledby="faq-heading">
      <div className="container-text">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 id="faq-heading" className="headline-section mt-3">
          {title}
        </h2>

        <div className="mt-10 divide-y divide-[var(--divider)] border-y border-[var(--divider)]">
          {items.map((item, index) => {
            const id = ("id" in item && item.id) || `faq-${index}`;
            const isOpen = openId === id;
            return (
              <div key={id}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : id)}
                >
                  <span className="text-lg font-semibold tracking-tight md:text-xl">
                    {item.question[locale]}
                  </span>
                  <span className="text-2xl text-secondary" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p className="pb-5 text-secondary md:text-[19px]">{item.answer[locale]}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
