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
      // Lock body scroll while the drawer is open.
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [project, onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const projectNumber = project
    ? String(project.number).padStart(3, "0")
    : "";

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 280 }}
            className="fixed right-0 top-0 h-full w-full overflow-y-auto bg-surface shadow-[-8px_0_40px_rgba(12,14,18,0.18)] md:w-[60vw] md:max-w-[720px]"
          >
            <button
              onClick={onClose}
              aria-label="閉じる"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-bg/80 text-ink backdrop-blur transition-colors hover:text-orange"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-video w-full bg-line">
              {project.imageUrl && (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 720px"
                />
              )}
            </div>

            <div className="p-6 md:p-10">
              <span className="font-mono text-[11px] tracking-[0.15em] text-ink-sub/70">
                PLN-{projectNumber}
              </span>
              <h2 className="mt-2 font-[family-name:var(--font-saira)] text-2xl font-semibold text-ink md:text-3xl">
                {project.title}
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.labels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full bg-line px-2.5 py-0.5 font-[family-name:var(--font-saira)] text-xs text-ink-sub"
                  >
                    #{label}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-[family-name:var(--font-saira)] text-sm font-medium tracking-[0.08em] text-ink-sub">
                  OVERVIEW
                </h3>
                <p className="mt-2 font-[family-name:var(--font-noto)] text-[15px] leading-[1.9] text-ink">
                  {project.description}
                </p>
              </div>

              {project.detail && (
                <div className="mt-6">
                  <h3 className="font-[family-name:var(--font-saira)] text-sm font-medium tracking-[0.08em] text-ink-sub">
                    DETAIL
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-noto)] text-[15px] leading-[1.9] text-ink">
                    {project.detail}
                  </p>
                </div>
              )}

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-[family-name:var(--font-saira)] text-sm font-medium text-white transition-colors hover:bg-orange"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visit site
                </a>
              )}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
