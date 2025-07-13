"use client";

import { useState } from "react";
import ProjectCard, { Project } from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import projectsData from "@/data/projects.json";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string>("ALL");
  const projects = projectsData as Project[];

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleLabelClick = (label: string) => {
    setSelectedLabel(label);
  };

  const labelCounts = projects.reduce((acc, project) => {
    project.labels.forEach((label) => {
      acc[label] = (acc[label] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const uniqueLabels = Object.keys(labelCounts).sort(
    (a, b) => labelCounts[b] - labelCounts[a]
  );

  const filteredProjects =
    selectedLabel === "ALL"
      ? projects
      : projects.filter((project) => project.labels.includes(selectedLabel));

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20 relative z-10">
        <section id="projects" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Projects
            </h2>

            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              <button
                onClick={() => handleLabelClick("ALL")}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedLabel === "ALL"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                ALL
              </button>
              {uniqueLabels.map((label) => (
                <button
                  key={label}
                  onClick={() => handleLabelClick(label)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedLabel === label
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects
                .slice()
                .reverse()
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onCardClick={handleCardClick}
                  />
                ))}
            </div>
          </div>
        </section>

        <AboutSection />
        <ContactSection />
      </main>

      <footer className="text-center py-8 text-gray-500">
        <p>&copy; 2024 raihara3. All rights reserved.</p>
      </footer>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
}
