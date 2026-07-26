import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { getProjects } from "@/lib/microcms";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <Hero />

      <main>
        <ProjectsSection projects={projects} />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
