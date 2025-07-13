"use client";

import Image from "next/image";
import { Project } from "./ProjectCard";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-zinc-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white text-xl w-8 h-8 flex items-center justify-center bg-black bg-opacity-50 rounded-full"
          >
            ✕
          </button>

          <div className="relative w-full">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="object-cover rounded-t-lg w-full"
            />
          </div>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white mb-3">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.labels.map((label, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded-full"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">概要</h3>
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">詳細</h3>
            <p className="text-gray-300 leading-relaxed">{project.detail}</p>
          </div>

          <div className="flex gap-4">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              プロジェクトを見る
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-600 text-gray-300 rounded hover:bg-gray-800 transition-colors"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
