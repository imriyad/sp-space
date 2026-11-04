import { MediaImage as Image } from "@/components/MediaImage";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getFeaturedProjects, getPublishedProjects } from "@/content/projects";
import type { Locale } from "@/i18n/routing";
import { Reveal } from "./Reveal";

export async function ProjectCarousel() {
  const t = await getTranslations("common");
  const locale = (await getLocale()) as Locale;
  const featured = getFeaturedProjects();
  const items = featured.length > 0 ? featured : getPublishedProjects().slice(0, 3);

  return (
    <section className="section-pad bg-bg-alt" aria-labelledby="projects-heading">
      <div className="container-media">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">{t("featuredProjects")}</p>
              <h2 id="projects-heading" className="headline-section mt-3">
                {locale === "bn" ? "বাস্তব প্রজেক্টের এক ঝলক" : "A glimpse of our work"}
              </h2>
            </div>
            <Link href="/projects" className="link-chevron">
              {t("learnMore")}
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(1.25rem,calc((100%-var(--content-media))/2+1.25rem))] scroll-pl-[max(1.25rem,calc((100%-var(--content-media))/2+1.25rem))] pb-4 scrollbar-hide">
        {items.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group card-surface relative w-[min(85vw,420px)] shrink-0 snap-start"
          >
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src={project.coverImage}
                alt={`${project.title[locale]} — ${project.location[locale]}`}
                fill
                className="img-zoom object-cover"
                sizes="420px"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title[locale]}</h3>
              <p className="mt-1 text-secondary">
                {project.location[locale]} · {project.type[locale]}
              </p>
              {project.isPlaceholder ? (
                <p className="mt-2 text-sm text-secondary">{t("placeholderProject")}</p>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
