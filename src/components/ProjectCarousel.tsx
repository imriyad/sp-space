import { MediaImage as Image } from "@/components/MediaImage";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getFeaturedProjects, getPublishedProjects } from "@/content/projects";
import type { Locale } from "@/i18n/routing";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./Icons";

export async function ProjectCarousel() {
  const t = await getTranslations("common");
  const locale = (await getLocale()) as Locale;
  const featured = getFeaturedProjects();
  const items = featured.length > 0 ? featured : getPublishedProjects().slice(0, 3);

  return (
    <section className="section-pad relative bg-background" aria-labelledby="projects-heading">
      <div className="container-media">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">{t("featuredProjects")}</p>
              <h2 id="projects-heading" className="headline-section mt-4">
                {locale === "bn" ? "বাস্তব প্রজেক্টের এক ঝলক" : "A glimpse of our work"}
              </h2>
            </div>
            <Link href="/projects" className="link-chevron">
              {locale === "bn" ? "সব প্রজেক্ট" : "All projects"}
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(1.25rem,calc((100%-var(--content-media))/2+1.25rem))] pb-4 scroll-pl-[max(1.25rem,calc((100%-var(--content-media))/2+1.25rem))] scrollbar-hide md:grid md:snap-none md:grid-cols-2 md:overflow-visible">
        {items.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08} className="w-[min(85vw,420px)] shrink-0 snap-start md:w-auto">
            <Link
              href={`/projects/${project.slug}`}
              className="group card-surface relative block aspect-[4/5] sm:aspect-[5/4]"
            >
              <Image
                src={project.coverImage}
                alt={`${project.title[locale]} — ${project.location[locale]}`}
                fill
                className="img-zoom object-cover"
                sizes="(max-width:768px) 85vw, 50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"
                aria-hidden
              />
              <span className="icon-circle absolute right-5 top-5">
                <ArrowUpRight size={18} />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <span className="chip">{project.type[locale]}</span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
                  {project.title[locale]}
                </h3>
                <p className="mt-1 text-white/65">{project.location[locale]}</p>
                {project.isPlaceholder ? (
                  <p className="mt-2 text-sm text-white/50">{t("placeholderProject")}</p>
                ) : null}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
