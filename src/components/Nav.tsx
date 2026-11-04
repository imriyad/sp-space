"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

const links = [
  { href: "/services", key: "services" as const },
  { href: "/projects", key: "projects" as const },
  { href: "/process", key: "process" as const },
  { href: "/about", key: "about" as const },
  { href: "/contact", key: "contact" as const },
];

export function Nav() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="container-media relative flex h-16 items-center justify-between gap-4">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src="/brand/logo-nav.png"
            alt="SB Space"
            width={169}
            height={36}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-white/60 transition hover:text-white"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="btn-pill btn-pill-primary !hidden !min-h-10 !px-4 !py-2 !text-[13px] sm:!inline-flex"
          >
            {t("getQuote")}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden>
              <span
                className={`h-0.5 w-full bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`h-0.5 w-full bg-white transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-0.5 w-full bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 z-40 bg-[#050505]/98 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <nav className="container-media flex flex-col gap-1 py-8" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-4 text-2xl font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-pill btn-pill-primary mt-6 self-start"
              onClick={() => setOpen(false)}
            >
              {t("getQuote")}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
