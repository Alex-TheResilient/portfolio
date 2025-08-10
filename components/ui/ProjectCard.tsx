'use client';

import { useState, useEffect } from 'react';
import { Project } from '@/lib/projects';
import { FolderGit2 } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  selectedTech?: string | null;
}

export function ProjectCard({ project, selectedTech }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="container mx-auto p-1 md:pb-25 md:py-1 px-0 md:p-1 md:px-0">
      <div className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
        {/* Carousel Images */}
        <div className="relative">
          <img
            className="xl:max-w-6xl w-full h-96 object-cover rounded-xl"
            src={project.images[currentImageIndex]}
            alt={`${project.title} - view ${currentImageIndex + 1}`}
          />
        </div>

        {/* Index */}
        {project.images.length > 1 && (
          <div className="absolute top-4 right-4">
            <div className="bg-black/40 dark:bg-black/40 backdrop-blur-md rounded-full px-3 py-1 border border-white/20">
              <span className="text-white text-xs font-medium">
                {currentImageIndex + 1}/{project.images.length}
              </span>
            </div>
          </div>
        )}

        {/* Rol */}
        <div>
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-black/40 dark:bg-black/40 backdrop-blur-md text-zinc-100 dark:text-white text-xs px-3 py-1.5 rounded-full border border-white/30 dark:border-white/20 font-medium shadow-lg">
              {project.role}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="absolute top-1/2 left-0 right-0 p-6">
          <div className="bg-white/20 dark:bg-white/50 backdrop-blur-md rounded-xl p-6 border border-white/20 dark:border-white/10 shadow-2xl">
            {/* Title */}
            <h2 className="text-zinc-600 dark:text-zinc-700 text-xl font-bold mb-3 leading-tight">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-zinc-700 dark:text-zinc-700 text-base mb-4 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`text-xs px-3 py-1.5 rounded-full backdrop-blur-sm font-medium transition-all duration-200 ${
                    tech === selectedTech
                      ? 'bg-cyan-400/30 text-cyan-700 dark:text-cyan-700 border border-cyan-300/30 shadow-lg shadow-cyan-400/20'
                      : 'dark:bg-white/20 bg-zinc-300 text-zinc-700 dark:text-zinc-600 border border-white/20 hover:bg-white/30'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <div className="flex gap-3">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-sm text-zinc-800 dark:text-zinc-700 font-medium text-sm py-2.5 px-4 rounded-lg border border-white/20 dark:border-white/10 transition-all duration-200 hover:border-white/40 dark:hover:border-white/30 hover:shadow-lg"
                >
                  <svg className="size-4">
                    <use href={`/icons/sprite.svg#github`} />
                  </svg>
                  View Code
                </Link>
              )}
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cyan-500/30 hover:bg-cyan-400/40 dark:bg-cyan-500/20 dark:hover:bg-cyan-400/30 backdrop-blur-sm text-cyan-800 dark:text-cyan-700 font-medium text-sm py-2.5 px-4 rounded-lg border border-cyan-400/30 dark:border-cyan-400/20 transition-all duration-200 hover:border-cyan-300/50 dark:hover:border-cyan-300/40 hover:shadow-lg hover:shadow-cyan-400/20"
                >
                  <FolderGit2 className="size-4" />
                  View Demo
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
