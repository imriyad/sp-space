import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site, formatOfficeAddress } from "@/content/site";
import type { Locale } from "@/i18n/routing";

export async function Footer() {
  const t = await getTranslations("footer");
  const tc = await getTranslations("common");
  const tn = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const year = new Date().getFullYear();

  const socialEntries = [
    { key: "facebook", href: site.social.facebook, label: "Facebook" },
    { key: "instagram", href: site.social.instagram, label: "Instagram" },
    { key: "youtube", href: site.social.youtube, label: "YouTube" },
    { key: "linkedin", href: site.social.linkedin, label: "LinkedIn" },
  ].filter((s) => Boolean(s.href));

  return (
    <footer className="border-t border-white/10 bg-black text-[12px] text-secondary">
      <div className="container-media section-pad !py-12">
        <div className="mb-10 max-w-xl">
          <p className="text-lg font-semibold tracking-wide text-white uppercase">{site.shortName}</p>
          <p className="mt-2 body-lg !text-base">{t("tagline")}</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-3 font-semibold text-white">{t("explore")}</p>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:underline">{tn("services")}</Link></li>
              <li><Link href="/projects" className="hover:underline">{tn("projects")}</Link></li>
              <li><Link href="/process" className="hover:underline">{tn("process")}</Link></li>
              <li><Link href="/blog" className="hover:underline">{tn("blog")}</Link></li>
              <li><Link href="/faq" className="hover:underline">{tn("faq")}</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold text-white">{t("company")}</p>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:underline">{tn("about")}</Link></li>
              <li><Link href="/contact" className="hover:underline">{tn("contact")}</Link></li>
              <li><Link href="/privacy" className="hover:underline">{tc("privacy")}</Link></li>
              <li><Link href="/terms" className="hover:underline">{tc("terms")}</Link></li>
            </ul>
          </div>
          <div className="sm:col-span-2">
            <p className="mb-3 font-semibold text-white">{tc("offices")}</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {site.offices.map((office) => (
                <div key={office.id}>
                  <p className="font-medium text-white/90">
                    {locale === "bn" ? office.labelBn : office.label}
                  </p>
                  <p className="mt-1 leading-relaxed">
                    {formatOfficeAddress(office, locale)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-1">
              <p>
                <a href={`tel:${site.phone}`} className="hover:underline">{site.phoneDisplay}</a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
              </p>
            </div>
            {socialEntries.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="font-semibold text-white">{tc("followUs")}</span>
                {socialEntries.map((s) => (
                  <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {s.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <p className="mt-12 border-t border-[var(--divider)] pt-6">
          © {year} {site.name}. {tc("allRights")}
        </p>
      </div>
    </footer>
  );
}
