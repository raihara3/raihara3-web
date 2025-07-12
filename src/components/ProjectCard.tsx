'use client';

import Image from 'next/image';

export interface Project {
  id: string;
  title: string;
  labels: string[];
  description: string;
  detail: string;
  url: string;
  imageUrl: string;
}

interface ProjectCardProps {
  project: Project;
  onCardClick: (project: Project) => void;
}

export default function ProjectCard({ project, onCardClick }: ProjectCardProps) {
  return (
    <div 
      className="card cursor-pointer overflow-hidden"
      onClick={() => onCardClick(project)}
    >
      <div className="flex flex-col h-full">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.labels.map((label, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm bg-blue-600 text-white rounded-full"
              >
                {label}
              </span>
            ))}
          </div>
          
          <p className="text-gray-300 mb-4 flex-grow line-clamp-3">{project.description}</p>
          
          <div className="flex justify-between items-center">
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              詳細を見る →
            </button>
            
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              外部リンク ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}