"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProjectCard, { Project } from "./ProjectCard";
import FeaturedCard from "./FeaturedCard";
import ProjectModal from "./ProjectModal";
import SectionHeader from "./SectionHeader";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const allLabels = useMemo(() => {
    const labelSet = new Set<string>();
    projects.forEach((project) => {
      project.labels.forEach((label) => labelSet.add(label));
    });
    return Array.from(labelSet).sort();
  }, [projects]);

  const reversedProjects = useMemo(() => {
    return [...projects].reverse();
  }, [projects]);

  // Featured works shown right under the profile (newest first, capped at 4).
  const featuredProjects = useMemo(() => {
    return reversedProjects.filter((project) => project.featured).slice(0, 4);
  }, [reversedProjects]);

  const filteredProjects = useMemo(() => {
    if (!selectedLabel) return reversedProjects;
    return reversedProjects.filter((project) =>
      project.labels.includes(selectedLabel)
    );
  }, [reversedProjects, selectedLabel]);

  const filters = [null, ...allLabels];

  return (
    <>
      {featuredProjects.length > 0 && (
        <section
          id="featured"
          className="mx-auto max-w-[940px] px-5 pt-12 md:px-8 md:pt-16"
        >
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
            {featuredProjects.map((project) => (
              <FeaturedCard
                key={project.id}
                project={project}
                onCardClick={setSelectedProject}
              />
            ))}
          </div>
        </section>
      )}

      <section id="products" className="py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <SectionHeader title="PRODUCTS" subtitle="作っているもの" />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {filters.map((label) => {
              const isSelected = selectedLabel === label;
              return (
                <button
                  key={label ?? "all"}
                  onClick={() => setSelectedLabel(label)}
                  className={`rounded-full px-4 py-1.5 font-[family-name:var(--font-saira)] text-sm transition-colors duration-200 ${
                    isSelected
                      ? "bg-orange text-white"
                      : "border border-line text-ink-sub hover:text-ink"
                  }`}
                >
                  #{label ?? "All"}
                </button>
              );
            })}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard
                    project={project}
                    onCardClick={setSelectedProject}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
