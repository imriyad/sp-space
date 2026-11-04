"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    router.replace(pathname, { locale: next });
  }

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-white/12 bg-white/5 px-1 py-0.5 text-xs font-semibold"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={`rounded-full px-2.5 py-1.5 ${locale === "en" ? "bg-white/10 text-white" : "text-white/50 hover:text-white"}`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchTo("bn")}
        className={`rounded-full px-2.5 py-1.5 ${locale === "bn" ? "bg-white/10 text-white" : "text-white/50 hover:text-white"}`}
        aria-pressed={locale === "bn"}
      >
        বাং
      </button>
    </div>
  );
}
