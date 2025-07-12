'use client';

import { useState } from 'react';
import ProjectCard, { Project } from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import projectsData from '@/data/projects.json';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = projectsData as Project[];

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          raihara3
        </h1>
        <p className="text-xl text-gray-300">
          Portfolio & Projects
        </p>
      </header>

      <main>
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
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

      <ProjectModal 
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </div>
  );
}
