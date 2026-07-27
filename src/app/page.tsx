import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import WorkSection from "@/components/WorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
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
        <FeaturedSection projects={projects} />
        <WorkSection />
        <ProjectsSection projects={projects} />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
