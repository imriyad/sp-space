import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site, formatOfficeAddress, telHref } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { MailIcon, PhoneIcon } from "./Icons";

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

  const columns = [
    {
      title: t("explore"),
      links: [
        { href: "/services", label: tn("services") },
        { href: "/projects", label: tn("projects") },
        { href: "/process", label: tn("process") },
        { href: "/blog", label: tn("blog") },
        { href: "/faq", label: tn("faq") },
      ],
    },
    {
      title: t("company"),
      links: [
        { href: "/about", label: tn("about") },
        { href: "/contact", label: tn("contact") },
        { href: "/privacy", label: tc("privacy") },
        { href: "/terms", label: tc("terms") },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-black text-sm text-secondary">
      <div className="section-divider absolute inset-x-0 top-0" aria-hidden />
      <div className="container-media relative pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.6fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image src="/brand/logo-nav.png" alt="SB Space" width={169} height={36} className="h-9 w-auto" />
            </Link>
            <p className="mt-5 leading-relaxed">{locale === "bn" ? site.taglineBn : t("tagline")}</p>
            <div className="mt-6 space-y-2.5">
              <a
                href={telHref(site.phone)}
                className="flex items-center gap-3 text-white/80 transition-colors hover:text-white"
              >
                <PhoneIcon size={16} className="text-white/40" />
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-white/80 transition-colors hover:text-white"
              >
                <MailIcon size={16} className="text-white/40" />
                {site.email}
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="link-underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">{tc("offices")}</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {site.offices.map((office) => (
                <div key={office.id}>
                  <p className="font-medium text-white/85">{locale === "bn" ? office.labelBn : office.label}</p>
                  <p className="mt-1.5 leading-relaxed">{formatOfficeAddress(office, locale)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.08] pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {tc("allRights")}
          </p>
          {socialEntries.length > 0 ? (
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-white/50">{tc("followUs")}</span>
              {socialEntries.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-white/80"
                >
                  {s.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <p
          className="pointer-events-none mt-10 select-none bg-gradient-to-b from-white/[0.09] to-transparent bg-clip-text text-center text-[clamp(4rem,19vw,15rem)] font-bold leading-[0.8] tracking-[-0.06em] text-transparent"
          aria-hidden
        >
          SB Space
        </p>
      </div>
    </footer>
  );
}
