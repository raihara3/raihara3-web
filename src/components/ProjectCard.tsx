"use client";

import Image from "next/image";
import type { Project } from "@/lib/types";

export type { Project };

interface ProjectCardProps {
  project: Project;
  onCardClick: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onCardClick,
}: ProjectCardProps) {
  const projectNumber = String(project.number).padStart(3, "0");

  return (
    <div
      className="group flex cursor-pointer flex-col transition-transform duration-300 hover:-translate-y-[3px]"
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
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-line transition-shadow duration-300 group-hover:shadow-[0_12px_36px_rgba(20,20,20,0.08)]">
        {project.imageUrl && (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          />
        )}
      </div>

      <div className="mt-4 flex flex-col items-start">
        {/* The catalog number is the modern remnant of the "Launch Station" brand. */}
        <span
          className={`font-mono text-[11px] tracking-[0.15em] ${
            project.featured ? "text-orange" : "text-ink-sub/70"
          }`}
        >
          PLN-{projectNumber}
        </span>

        <h3 className="mt-1.5 font-[family-name:var(--font-saira)] text-lg font-medium leading-snug text-ink">
          {project.title}
        </h3>
        <p className="mt-1 font-[family-name:var(--font-noto)] text-sm leading-relaxed text-ink-sub line-clamp-2">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.labels.map((label) => (
            <span
              key={label}
              className="rounded-full bg-line px-2.5 py-0.5 font-[family-name:var(--font-saira)] text-xs text-ink-sub"
            >
              #{label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
