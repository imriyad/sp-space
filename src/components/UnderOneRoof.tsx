import { getLocale, getTranslations } from "next-intl/server";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { Reveal } from "./Reveal";

function initials(name: string) {
  return name
    .replace(/^Md\.?\s*/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
}

export async function UnderOneRoof() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("common");

  return (
    <section className="section-pad relative overflow-hidden bg-bg-dark text-white">
      <div className="section-divider absolute inset-x-0 top-0" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[700px] max-w-full -translate-x-1/2 rounded-full bg-[#5b6cff]/10 blur-[110px]"
        aria-hidden
      />
      <div className="container-text relative text-center">
        <Reveal>
          <p className="eyebrow">{t("teamTitle")}</p>
          <h2 className="headline-section mt-5 text-balance">
            {locale === "bn"
              ? "নকশা ও সাইট—এক ভাষায় কথা বলে"
              : "Drawings and site that speak the same language."}
          </h2>
          <p className="body-lg mx-auto mt-6 max-w-2xl text-pretty !text-secondary-dark">
            {locale === "bn"
              ? "ইন-হাউস স্থপতি (MIAB), কাঠামো প্রকৌশলী (MIEB) এবং নির্মাণ দল—একসঙ্গে কাজ করে যাতে নকশা ও সাইট এক ভাষায় কথা বলে।"
              : "In-house architect (MIAB), structural engineer (MIEB) and builders—working together so drawings and site speak the same language."}
          </p>
        </Reveal>
        <ul className="mx-auto mt-12 grid max-w-3xl gap-4 text-left sm:grid-cols-2">
          {site.team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <li className="card-surface-sm card-interactive flex items-center gap-4 p-5 transition-[border-color,box-shadow,transform] duration-500">
                <span
                  className="glow-border flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2f8bff]/25 to-[#7c5cff]/20 text-lg font-bold tracking-tight"
                  aria-hidden
                >
                  {initials(member.name)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[17px] font-semibold">{member.name}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-secondary-dark">
                    {locale === "bn" ? member.roleBn : member.role}
                    {member.credential ? (
                      <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[11px] font-semibold tracking-wide text-white/80">
                        {member.credential}
                      </span>
                    ) : null}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
