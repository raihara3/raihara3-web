"use client";

import Image from "next/image";
import type { Project } from "@/lib/types";

interface FeaturedCardProps {
  project: Project;
  onCardClick: (project: Project) => void;
}

/**
 * Featured work card used under the profile. A wide landscape image leads,
 * with the title and description below — larger and more image-forward than the
 * PRODUCTS cards so the highlighted works stand out.
 */
export default function FeaturedCard({
  project,
  onCardClick,
}: FeaturedCardProps) {
  return (
    <div
      className="group flex w-full cursor-pointer flex-col transition-transform duration-300 hover:-translate-y-[3px] sm:w-[calc(50%-16px)]"
      role="button"
      tabIndex={0}
      onClick={() => onCardClick(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onCardClick(project);
        }
      }}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-line transition-shadow duration-300 group-hover:shadow-[0_12px_36px_rgba(20,20,20,0.08)]">
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, 460px"
          />
        )}
      </div>

      <div className="mt-4 flex flex-col items-start">
        <h3 className="font-[family-name:var(--font-saira)] text-lg font-medium leading-snug text-ink">
          {project.title}
        </h3>
        <p className="mt-1 font-[family-name:var(--font-noto)] text-sm leading-relaxed text-ink-sub line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}
