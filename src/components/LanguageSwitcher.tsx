"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const options: { id: Locale; label: string; name: string }[] = [
  { id: "en", label: "EN", name: "English" },
  { id: "bn", label: "বাং", name: "বাংলা" },
];

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="relative flex items-center rounded-full border border-white/[0.12] bg-white/[0.04] p-0.5 text-xs font-semibold"
      role="group"
      aria-label="Language"
    >
      <span
        aria-hidden
        className={`absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          locale === "bn" ? "translate-x-full" : ""
        }`}
      />
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => router.replace(pathname, { locale: opt.id })}
          className={`relative z-10 w-10 rounded-full py-1.5 text-center transition-colors ${
            locale === opt.id ? "text-white" : "text-white/50 hover:text-white"
          }`}
          aria-pressed={locale === opt.id}
          aria-label={opt.name}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
