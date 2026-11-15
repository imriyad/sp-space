"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ArrowUpRight } from "./Icons";

const links = [
  { href: "/services", key: "services" as const },
  { href: "/projects", key: "projects" as const },
  { href: "/process", key: "process" as const },
  { href: "/about", key: "about" as const },
  { href: "/contact", key: "contact" as const },
];

export function Nav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the mobile menu whenever the route changes (Nav lives in the layout).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const solid = scrolled || open;

  return (
    <>
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid
          ? "border-b border-white/[0.08] bg-[#050505]/70 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-media relative flex h-16 items-center justify-between gap-4">
        <Link href="/" className="relative z-10 shrink-0 transition-opacity hover:opacity-80" aria-label="SB Space — home">
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
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 lg:flex"
          aria-label="Primary"
        >
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors duration-300 ${
                  active ? "bg-white/[0.09] text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {t(link.key)}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-10 flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="btn-pill btn-pill-primary !hidden !min-h-10 !px-4 !py-2 !text-[13px] sm:!inline-flex"
          >
            {t("getQuote")}
            <ArrowUpRight size={15} />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-[18px] flex-col gap-[5px]" aria-hidden>
              <span
                className={`h-[1.5px] w-full rounded bg-white transition duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
              />
              <span className={`h-[1.5px] w-full rounded bg-white transition duration-300 ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-[1.5px] w-full rounded bg-white transition duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
    </header>

      {/* Sibling of <header>: its backdrop-filter would otherwise trap this fixed overlay. */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-16 z-[45] overflow-y-auto bg-[#050505]/95 backdrop-blur-2xl transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="pointer-events-none absolute inset-0 atmosphere opacity-60" aria-hidden />
        <nav className="container-media relative flex flex-col py-6" aria-label="Mobile">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`flex items-center justify-between border-b border-white/[0.07] px-1 py-5 text-[1.75rem] font-semibold tracking-tight transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              } ${isActive(link.href) ? "text-white" : "text-white/75"}`}
              style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              {t(link.key)}
              <ArrowUpRight size={22} className="text-white/35" />
            </Link>
          ))}
          <Link
            href="/contact"
            tabIndex={open ? 0 : -1}
            className={`btn-pill btn-pill-primary mt-8 transition-all duration-500 ${open ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: open ? "320ms" : "0ms" }}
            onClick={() => setOpen(false)}
          >
            {t("getQuote")}
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </>
  );
}
