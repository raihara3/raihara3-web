"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ExternalLink } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  labels: string[];
  description: string;
  detail: string;
  url: string;
  imageUrl: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  onCardClick: (project: Project) => void;
  index: number;
  size?: "normal" | "large";
}

const planetColors = [
  "from-cyan-400 via-blue-500 to-indigo-600",
  "from-pink-400 via-purple-500 to-violet-600",
  "from-orange-400 via-amber-500 to-yellow-600",
  "from-emerald-400 via-green-500 to-teal-600",
  "from-rose-400 via-pink-500 to-fuchsia-600",
  "from-sky-400 via-cyan-500 to-blue-600",
  "from-violet-400 via-purple-500 to-indigo-600",
];

export default function ProjectCard({
  project,
  onCardClick,
  index,
  size = "normal",
}: ProjectCardProps) {
  const cardReference = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardReference, { amount: 0.1 });

  const colorIndex = index % planetColors.length;
  const planetColor = planetColors[colorIndex];
  const randomRotation = ((index * 17) % 25) - 12;
  const randomDelay = (index * 0.7) % 3;

  const labelText = project.labels.slice(0, 2).join(" / ");
  const sizeClass =
    size === "large"
      ? "w-56 h-56 md:w-72 md:h-72"
      : "w-44 h-44 md:w-52 md:h-52";

  return (
    <motion.div
      ref={cardReference}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative group cursor-pointer ${sizeClass}`}
      onClick={() => onCardClick(project)}
      style={{
        transform: `rotate(${randomRotation}deg)`,
      }}
    >
      <motion.div
        animate={isInView ? { y: [0, -10, 0] } : {}}
        transition={{
          duration: 4 + randomDelay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: randomDelay,
        }}
        className="relative"
        style={{ willChange: isInView ? "transform" : "auto" }}
      >
        <div className="relative w-full aspect-square">
          <div
            className="absolute inset-[5%] rounded-full overflow-hidden"
            style={{
              boxShadow:
                "0 0 40px rgba(139, 92, 246, 0.3), inset -10px -10px 30px rgba(0,0,0,0.4)",
            }}
          >
            <div className="absolute inset-0">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${planetColor} mix-blend-overlay opacity-60`}
              />
            </div>

            <div
              className={`absolute inset-0 bg-gradient-to-br ${planetColor} opacity-30 blur-xl`}
            />

            <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-black/20 blur-sm" />
            <div className="absolute bottom-1/3 right-1/3 w-10 h-10 rounded-full bg-black/15 blur-sm" />

            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id={`curve-${project.id}`}
                  d="M 50 92 A 42 42 0 0 0 92 50"
                  fill="none"
                />
              </defs>
              <text
                className="fill-white font-semibold text-[7px]"
                style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.9))" }}
              >
                <textPath
                  href={`#curve-${project.id}`}
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {labelText}
                </textPath>
              </text>
            </svg>

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <h3 className="text-white mb-2 text-base">{project.title}</h3>
              <p className="text-xs text-slate-300 mb-3 line-clamp-3">
                {project.description}
              </p>

              <div className="flex gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  onClick={(event) => event.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="text-center"
        >
          <span className="text-xs text-slate-500">{project.title}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
