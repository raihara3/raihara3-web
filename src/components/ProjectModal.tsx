"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Project } from "./ProjectCard";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-[2px_2px_5px_0px_rgba(0,0,0,0.2)]"
          >
            <button
              onClick={onClose}
              aria-label="閉じる"
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-[var(--gray)] hover:bg-[var(--gray)]/80 transition-colors"
            >
              <X className="w-6 h-6 text-[var(--black)]" />
            </button>

            <div className="relative w-full aspect-video">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-4">
                <h2 className="font-[family-name:var(--font-saira)] font-semibold text-2xl text-[var(--black)] mb-3">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.labels.map((label) => (
                    <span
                      key={label}
                      className="font-[family-name:var(--font-saira)] text-sm text-[var(--black)] opacity-70"
                    >
                      #{label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-[family-name:var(--font-saira)] font-semibold text-lg text-[var(--black)] mb-2">
                  概要
                </h3>
                <p className="font-[family-name:var(--font-saira)] text-sm text-[var(--black)] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-saira)] font-semibold text-lg text-[var(--black)] mb-2">
                  詳細
                </h3>
                <p className="font-[family-name:var(--font-saira)] text-sm text-[var(--black)] leading-relaxed">
                  {project.detail}
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[var(--black)] text-white font-[family-name:var(--font-saira)] font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  プロジェクトを見る
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[var(--gray)] text-[var(--black)] font-[family-name:var(--font-saira)] hover:opacity-80 transition-opacity"
                >
                  閉じる
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
