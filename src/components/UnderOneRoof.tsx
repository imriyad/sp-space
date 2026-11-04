import { getLocale } from "next-intl/server";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { Reveal } from "./Reveal";

export async function UnderOneRoof() {
  const locale = (await getLocale()) as Locale;

  return (
    <section className="section-pad bg-bg-dark text-white">
      <div className="container-text text-center">
        <Reveal>
          <h2 className="headline-section text-balance">
            {locale === "bn" ? site.differentiatorBn : site.differentiatorEn}
          </h2>
          <p className="body-lg mx-auto mt-6 max-w-3xl !text-secondary-dark">
            {locale === "bn"
              ? "ইন-হাউস স্থপতি (MIAB), কাঠামো প্রকৌশলী (MIEB) এবং নির্মাণ দল—একসঙ্গে কাজ করে যাতে নকশা ও সাইট এক ভাষায় কথা বলে।"
              : "In-house architect (MIAB), structural engineer (MIEB) and builders—working together so drawings and site speak the same language."}
          </p>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-2">
            {site.team.map((member) => (
              <li key={member.name} className="card-surface-sm bg-bg-dark-elevated p-5">
                <p className="text-lg font-semibold">{member.name}</p>
                <p className="mt-1 text-secondary-dark">
                  {locale === "bn" ? member.roleBn : member.role}
                  {member.credential ? ` · ${member.credential}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
