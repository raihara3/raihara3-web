import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import { getProjects } from "@/lib/microcms";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-[var(--gray)]">
      <div className="relative">
        <Header />
        <Hero />
      </div>

      <main className="flex flex-col gap-[45px] pt-[30px] pb-[80px]">
        <ProjectsSection projects={projects} />
        <AboutSection />
      </main>
    </div>
  );
}
