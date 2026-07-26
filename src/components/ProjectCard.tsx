"use client";

import Image from "next/image";
import type { Project } from "@/lib/types";

export type { Project };

interface ProjectCardProps {
  project: Project;
  onCardClick: (project: Project) => void;
}

function FileTab({
  label,
  isFeatured,
}: {
  label: string;
  isFeatured: boolean;
}) {
  return (
    <div className="relative w-[100px] h-[26px] md:w-[115px] md:h-[30px] shrink-0">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 115 30"
        fill={isFeatured ? "#FF4800" : "#ffffff"}
        preserveAspectRatio="none"
      >
        <path
          d="M3 0H112L115 30H0L3 0Z"
          fill={isFeatured ? "#FF4800" : "#ffffff"}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-saira)] font-semibold text-sm md:text-[20px] text-[var(--black)]">
        {label}
      </span>
    </div>
  );
}

export default function ProjectCard({
  project,
  onCardClick,
}: ProjectCardProps) {
  const projectNumber = String(project.number).padStart(3, "0");

  return (
    <div
      className="flex flex-col items-start cursor-pointer w-full"
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
      <FileTab label={`PLN-${projectNumber}`} isFeatured={project.featured} />

      <div className="bg-white flex flex-col gap-[10px] items-start px-2 py-[9px] w-full">
        <div className="relative bg-[var(--gray)] w-full aspect-[333/215]">
          {project.imageUrl && (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
            />
          )}
        </div>

        <div className="flex flex-col items-start text-sm text-[var(--black)] w-full">
          <p className="font-[family-name:var(--font-saira)] font-semibold leading-normal">
            {project.title}
          </p>
          <p className="font-[family-name:var(--font-saira)] font-normal leading-normal line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="flex gap-[15px] items-center text-xs text-[var(--black)] w-full">
          {project.labels.map((label) => (
            <span
              key={label}
              className="font-[family-name:var(--font-saira)] font-normal opacity-70"
            >
              #{label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
