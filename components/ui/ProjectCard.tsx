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
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {project.images.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border-2 ${
                  index === currentImageIndex
                    ? 'bg-cyan-500 border-cyan-500 scale-125 shadow-lg'
                    : 'bg-transparent border-cyan-400/80'
                }`}
              />
            ))}
          </div>
        )}

        {/* Project Content */}
        <div className="content rounded-3xl font-mono bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm p-2 pt-8 md:p-7 pb-12 lg:max-w-lg w-full lg:absolute top-50 left-1/3 shadow-xl">
          {/* Title */}
          <h2 className="text-lg font-bold mt-1 text-zinc-900 dark:text-zinc-100 leading-tight">
            {project.title}
          </h2>
          {/* Description */}
          <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.description}
          </p>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 my-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`
                  text-xs px-2 py-1 rounded-full font-medium
                  ${
                    tech === selectedTech
                      ? 'bg-cyan-100 dark:bg-cyan-900/40 border border-cyan-300 dark:border-cyan-600 text-cyan-700 dark:text-cyan-300'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }
                `}
              >
                {tech}
              </span>
            ))}
          </div>
          {/* Botones de acción */}
          <div className="flex gap-3 mt-2 md:mt-5">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline p-3 px-2 rounded-lg bg-black dark:bg-zinc-700 text-white font-bold text-xs hover:bg-gray-800 dark:hover:bg-zinc-600 transition-colors"
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
                className="flex items-center gap-2 hover:underline p-3 px-2 rounded-lg bg-black dark:bg-zinc-700 text-white font-bold text-xs hover:bg-gray-800 dark:hover:bg-zinc-600 transition-colors"
              >
                <FolderGit2 className="size-4" />
                Ver Demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
