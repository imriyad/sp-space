"use client";

import { useMemo, useState } from "react";
import { MediaImage as Image } from "@/components/MediaImage";
import { Link } from "@/i18n/navigation";
import type { Project, projectFilters } from "@/content/projects";
import type { Locale } from "@/i18n/routing";
import { ArrowUpRight } from "./Icons";

type Filter = (typeof projectFilters)[number];

export function ProjectsFilter({
  filters,
  locale,
  projects,
  placeholderLabel,
}: {
  filters: Filter[];
  locale: Locale;
  projects: Project[];
  placeholderLabel: string;
}) {
  const [active, setActive] = useState<string>("all");

  const visible = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((filter) => {
          const isActive = active === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={isActive}
              className={`btn-pill !min-h-10 !px-4 !py-2 text-sm ${
                isActive ? "btn-pill-light" : "border border-white/12 text-white/70 hover:border-white/30 hover:text-white"
              }`}
              onClick={() => setActive(filter.id)}
            >
              {filter.label[locale]}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group card-surface relative block aspect-[4/5]"
            >
              <Image
                src={project.coverImage}
                alt={`${project.title[locale]} — ${project.location[locale]}`}
                fill
                className="img-zoom object-cover"
                sizes="(max-width:1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" aria-hidden />
              <span className="icon-circle absolute right-4 top-4">
                <ArrowUpRight size={18} />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="chip">{project.type[locale]}</span>
                <h2 className="mt-3 text-xl font-semibold tracking-tight">{project.title[locale]}</h2>
                <p className="mt-1 text-white/65">{project.location[locale]}</p>
                {project.isPlaceholder ? (
                  <p className="mt-2 text-sm text-white/50">{placeholderLabel}</p>
                ) : null}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
