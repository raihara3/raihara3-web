"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProjectCard, { Project } from "./ProjectCard";
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

  const filteredProjects = useMemo(() => {
    if (!selectedLabel) return reversedProjects;
    return reversedProjects.filter((project) =>
      project.labels.includes(selectedLabel)
    );
  }, [reversedProjects, selectedLabel]);

  const filters = [null, ...allLabels];

  return (
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
                className={project.featured ? "sm:col-span-2 lg:col-span-2" : ""}
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

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
