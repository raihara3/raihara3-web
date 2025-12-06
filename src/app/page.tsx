"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import projectsData from "@/data/projects.json";
import { Project } from "@/components/ProjectCard";

export default function Home() {
  const projects = projectsData as Project[];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="projects">
          <ProjectsSection projects={projects} />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
