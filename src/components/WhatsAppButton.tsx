"use client";

import { useTranslations } from "next-intl";
import { site, telHref } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export function WhatsAppButton() {
  const t = useTranslations("common");

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-white/10 bg-[#050505]/85 px-3 pb-[max(0.625rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl md:inset-x-auto md:bottom-6 md:right-6 md:flex-col md:items-end md:gap-3 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-0">
      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("click_whatsapp", { location: "floating" })}
        aria-label={t("whatsapp")}
        className="group btn-pill flex-1 !min-h-11 !px-4 !py-2 bg-[#25D366] text-sm text-[#04210f] shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] hover:bg-[#2ee072] md:h-14 md:w-14 md:flex-none md:!p-0"
      >
        <WhatsAppIcon size={20} />
        <span className="md:sr-only">{t("whatsapp")}</span>
      </a>
      <a
        href={telHref(site.phone)}
        onClick={() => trackEvent("click_call", { location: "floating" })}
        aria-label={`${t("call")} ${site.phoneDisplay}`}
        className="btn-pill btn-pill-primary flex-1 !min-h-11 !px-4 !py-2 text-sm md:h-14 md:w-14 md:flex-none md:!p-0"
      >
        <PhoneIcon size={18} />
        <span className="md:sr-only">
          {t("call")} {site.phoneDisplay}
        </span>
      </a>
    </div>
  );
}
