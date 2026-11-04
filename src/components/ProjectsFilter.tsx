"use client";

import { useMemo, useState } from "react";
import { MediaImage as Image } from "@/components/MediaImage";
import { Link } from "@/i18n/navigation";
import type { Project, projectFilters } from "@/content/projects";
import type { Locale } from "@/i18n/routing";

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
      <div className="flex flex-wrap gap-2" role="list">
        {filters.map((filter) => {
          const isActive = active === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              role="listitem"
              className={`btn-pill text-sm ${isActive ? "btn-pill-primary" : "border border-[var(--divider)]"}`}
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
              className="group card-surface block bg-bg-alt"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={`${project.title[locale]} — ${project.location[locale]}`}
                  fill
                  className="img-zoom object-cover"
                  sizes="(max-width:1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold">{project.title[locale]}</h2>
                <p className="mt-1 text-secondary">
                  {project.location[locale]} · {project.type[locale]}
                </p>
                {project.isPlaceholder ? (
                  <p className="mt-2 text-sm text-secondary">{placeholderLabel}</p>
                ) : null}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
