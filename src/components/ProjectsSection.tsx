"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink } from "lucide-react";
import ProjectCard, { Project } from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Image from "next/image";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const featuredProjects = projects.filter((project) => project.featured);

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
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 star-pattern opacity-30" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 gradient-neon text-gradient">ASOBI PLANET</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">遊びから生まれた星</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto mb-24">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-2 border-dashed border-purple-500/50" />
            <div className="absolute w-[450px] h-[450px] md:w-[700px] md:h-[700px] rounded-full border-2 border-dashed border-cyan-500/50" />
            <div className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border-2 border-dashed border-pink-500/50" />
          </div>

          <div className="grid grid-cols-2 gap-y-16 md:gap-y-24">
            {featuredProjects.slice(0, 4).map((project, index) => {
              const positions = [
                "md:justify-self-start md:-translate-x-4 md:-translate-y-4",
                "md:justify-self-end md:translate-x-8 md:translate-y-16",
                "md:justify-self-start md:translate-x-12 md:translate-y-8",
                "md:justify-self-end md:-translate-x-16 md:-translate-y-1",
              ];
              const isLarge = index === 0 || index === 3;
              return (
                <div
                  key={project.id}
                  className={`flex justify-center ${positions[index]}`}
                >
                  <ProjectCard
                    project={project}
                    onCardClick={handleCardClick}
                    index={index}
                    size={isLarge ? "large" : "normal"}
                  />
                </div>
              );
            })}
          </div>

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 z-10 pointer-events-none"
            style={{
              filter:
                "drop-shadow(0 0 20px rgba(251, 166, 56, 0.8)) drop-shadow(0 0 40px rgba(251, 166, 56, 0.5)) drop-shadow(0 0 60px rgba(251, 166, 56, 0.3))",
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl text-center text-slate-300 mb-1">
            すべての星
          </h3>
          <p className="text-sm text-center text-slate-500 mb-6">All Projects</p>

          <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl mx-auto">
            <button
              onClick={() => setSelectedLabel(null)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedLabel === null
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                  : "bg-white/10 text-slate-300 hover:bg-white/20"
              }`}
            >
              すべて
            </button>
            {allLabels.map((label) => (
              <button
                key={label}
                onClick={() => setSelectedLabel(label)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedLabel === label
                    ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                    : "bg-white/10 text-slate-300 hover:bg-white/20"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const planetColors = [
                  "from-cyan-400 via-blue-500 to-indigo-600",
                  "from-pink-400 via-purple-500 to-violet-600",
                  "from-orange-400 via-amber-500 to-yellow-600",
                  "from-emerald-400 via-green-500 to-teal-600",
                  "from-rose-400 via-pink-500 to-fuchsia-600",
                  "from-sky-400 via-cyan-500 to-blue-600",
                  "from-violet-400 via-purple-500 to-indigo-600",
                ];
                const glowColors = [
                  "rgba(34, 211, 238, 0.4)",
                  "rgba(168, 85, 247, 0.4)",
                  "rgba(251, 146, 60, 0.4)",
                  "rgba(52, 211, 153, 0.4)",
                  "rgba(244, 114, 182, 0.4)",
                  "rgba(56, 189, 248, 0.4)",
                  "rgba(139, 92, 246, 0.4)",
                ];
                const colorIndex = index % planetColors.length;
                const planetColor = planetColors[colorIndex];
                const glowColor = glowColors[colorIndex];

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handleCardClick(project)}
                    className="group relative cursor-pointer"
                  >
                    <div
                      className="absolute -inset-1 rounded-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                      style={{ background: glowColor }}
                    />
                    <div
                      className="absolute -top-4 -right-8 w-32 h-8 opacity-60"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${glowColor.replace(
                          "0.4",
                          "0.6"
                        )}, transparent)`,
                        filter: "blur(4px)",
                        transform: "rotate(-15deg)",
                      }}
                    />
                    <div className="relative rounded-2xl bg-slate-900/80 border border-white/10 group-hover:border-white/30 transition-all overflow-hidden backdrop-blur-sm">
                      <div className="relative w-full aspect-video overflow-hidden">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${planetColor} mix-blend-overlay opacity-40 group-hover:opacity-60 transition-opacity duration-300`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                        <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white/20 blur-sm" />
                        <div className="absolute top-4 left-6 w-2 h-2 rounded-full bg-white/30 blur-[2px]" />
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </a>
                      </div>
                      <div className="p-4 relative">
                        <div
                          className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${planetColor} opacity-50`}
                        />
                        <h4 className="text-white font-medium mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all">
                          {project.title}
                        </h4>
                        <p className="text-sm text-slate-500 mb-2 line-clamp-2">
                          {project.description}
                        </p>
                        <p className="text-xs text-slate-500">
                          {project.labels.join(" / ")}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
}
