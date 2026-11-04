"use client";

import { useTranslations } from "next-intl";
import { site, telHref } from "@/content/site";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppButton() {
  const t = useTranslations("common");

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-white/10 bg-black/90 px-3 py-2.5 backdrop-blur md:inset-x-auto md:bottom-6 md:right-6 md:w-auto md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-0">
      <a
        href={telHref(site.phone)}
        onClick={() => trackEvent("click_call", { location: "floating" })}
        className="btn-pill btn-pill-primary flex-1 !min-h-11 !px-4 !py-2 text-sm md:flex-none"
      >
        {t("call")} {site.phoneDisplay}
      </a>
      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("click_whatsapp", { location: "floating" })}
        className="btn-pill flex-1 !min-h-11 !px-4 !py-2 bg-[#25D366] text-sm text-white hover:opacity-90 md:flex-none"
      >
        {t("whatsapp")}
      </a>
    </div>
  );
}
