"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/content/faqs";
import type { Locale } from "@/i18n/routing";
import { PlusIcon } from "./Icons";

type FAQProps = {
  items: FaqItem[] | { id?: string; question: { en: string; bn: string }; answer: { en: string; bn: string } }[];
  locale: Locale;
  title: string;
  eyebrow?: string;
};

export function FAQ({ items, locale, title, eyebrow }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const uid = useId();

  return (
    <section className="section-pad relative bg-background" aria-labelledby="faq-heading">
      <div className="container-media grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 id="faq-heading" className="headline-section mt-4 text-balance">
            {title}
          </h2>
          <p className="mt-5 max-w-sm text-secondary">
            {locale === "bn"
              ? "আরও প্রশ্ন আছে? কল বা হোয়াটসঅ্যাপে সরাসরি জিজ্ঞেস করুন।"
              : "Still have a question? Call or WhatsApp us — we reply quickly."}
          </p>
        </div>

        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {items.map((item, index) => {
            const id = ("id" in item && item.id) || `faq-${index}`;
            const isOpen = openId === id;
            const panelId = `${uid}-panel-${index}`;
            return (
              <div key={id}>
                <h3>
                  <button
                    type="button"
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : id)}
                  >
                    <span
                      className={`text-[17px] font-semibold tracking-tight transition-colors md:text-lg ${
                        isOpen ? "text-white" : "text-white/85 group-hover:text-white"
                      }`}
                    >
                      {item.question[locale]}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-white bg-white text-black"
                          : "border-white/15 text-white/70 group-hover:border-white/35 group-hover:text-white"
                      }`}
                      aria-hidden
                    >
                      <PlusIcon size={16} />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                  inert={!isOpen}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pr-12 text-pretty leading-relaxed text-secondary md:text-[17px]">
                      {item.answer[locale]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
