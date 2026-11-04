"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { site, formatOfficeAddress, googleMapsEmbedUrl, googleMapsLink } from "@/content/site";
import type { Locale } from "@/i18n/routing";

export function OfficeSwitcher({ locale }: { locale: Locale }) {
  const t = useTranslations("common");
  const [active, setActive] = useState<(typeof site.offices)[number]["id"]>("madhabdi");
  const office = site.offices.find((o) => o.id === active) ?? site.offices[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Offices">
        <button
          type="button"
          role="tab"
          aria-selected={active === "madhabdi"}
          className={`btn-pill text-sm ${active === "madhabdi" ? "btn-pill-primary" : "border border-[var(--divider)]"}`}
          onClick={() => setActive("madhabdi")}
        >
          {t("madhabdiTab")}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={active === "dhaka"}
          className={`btn-pill text-sm ${active === "dhaka" ? "btn-pill-primary" : "border border-[var(--divider)]"}`}
          onClick={() => setActive("dhaka")}
        >
          {t("dhakaTab")}
        </button>
      </div>

      <div className="mt-6" role="tabpanel">
        <h3 className="text-2xl font-semibold">
          {locale === "bn" ? office.labelBn : office.label}
        </h3>
        <p className="mt-2 text-secondary">{formatOfficeAddress(office, locale)}</p>
        <p className="mt-2 text-secondary">
          {site.hours || t("hoursPending")}
        </p>
        <a
          href={googleMapsLink(office)}
          target="_blank"
          rel="noopener noreferrer"
          className="link-chevron mt-3 inline-block"
        >
          {t("openInMaps")}
        </a>
        <div className="card-surface mt-6 overflow-hidden bg-bg-alt">
          <iframe
            title={`${locale === "bn" ? office.labelBn : office.label} map`}
            src={googleMapsEmbedUrl(office)}
            className="h-72 w-full border-0 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
