"use client";

import { useState, useMemo } from "react";
import FeaturedCard from "./FeaturedCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/lib/types";

interface FeaturedSectionProps {
  projects: Project[];
}

export default function FeaturedSection({ projects }: FeaturedSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Featured works shown right under the profile (newest first, capped at 4).
  const featuredProjects = useMemo(() => {
    return [...projects]
      .reverse()
      .filter((project) => project.featured)
      .slice(0, 4);
  }, [projects]);

  if (featuredProjects.length === 0) return null;

  return (
    <section id="featured" className="pt-12 md:pt-16">
      <div className="mx-auto max-w-[940px] px-5 md:px-8">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
          {featuredProjects.map((project) => (
            <FeaturedCard
              key={project.id}
              project={project}
              onCardClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
