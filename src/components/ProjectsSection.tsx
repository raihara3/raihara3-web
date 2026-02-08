"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProjectCard, { Project } from "./ProjectCard";
import ProjectModal from "./ProjectModal";

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

  return (
    <section id="products" className="py-12">
      <div className="max-w-[1150px] mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-5 items-center">
          <div className="bg-[var(--black)] px-[15px] flex items-center justify-center">
            <h2 className="font-[family-name:var(--font-saira)] font-semibold text-[26px] text-white text-center leading-normal">
              Products
            </h2>
          </div>

          <div className="flex flex-wrap gap-[15px] items-center justify-center text-base text-center">
            <button
              onClick={() => setSelectedLabel(null)}
              className={`font-[family-name:var(--font-saira)] underline ${
                selectedLabel === null
                  ? "font-semibold text-[var(--orange)]"
                  : "font-normal text-[var(--black)]"
              }`}
            >
              #All
            </button>
            {allLabels.map((label) => (
              <button
                key={label}
                onClick={() => setSelectedLabel(label)}
                className={`font-[family-name:var(--font-saira)] underline ${
                  selectedLabel === label
                    ? "font-semibold text-[var(--orange)]"
                    : "font-normal text-[var(--black)]"
                }`}
              >
                #{label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-[17px] items-start w-full">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full sm:w-[calc(50%-9px)] lg:w-[350px]"
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    onCardClick={setSelectedProject}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
