"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import { Project } from "./ProjectCard";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-slate-900 via-purple-950/50 to-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-white/10"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative">
            <div className="relative w-full aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover rounded-t-3xl w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>
          </div>

          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.labels.map((label, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 text-sm bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-white rounded-full border border-white/20"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">概要</h3>
              <p className="text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">詳細</h3>
              <p className="text-slate-300 leading-relaxed">{project.detail}</p>
            </div>

            <div className="flex gap-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full gradient-cosmic text-white flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <ExternalLink className="w-4 h-4" />
                プロジェクトを見る
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
              >
                閉じる
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
