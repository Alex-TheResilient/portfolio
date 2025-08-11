'use client';

import { useState } from 'react';
import { technologies } from '@/lib/data';
import { projects } from '@/lib/projects';
import { ProjectCard } from '../ui/ProjectCard';

export function ProjectsSection() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const handleTechClick = (techName: string) => {
    if (selectedTech === techName) {
      setSelectedTech(null);
    } else {
      console.log(`Selected technology: ${techName}`);
      setSelectedTech(techName);
    }
  };

  const filteredProjects = selectedTech
    ? projects.filter((project) => project.technologies.includes(selectedTech))
    : [];

  return (
    <section className="-mt-7">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-mono mb-8 text-center">
          Skills & Projects
        </h2>
      </div>

      <div className="text-center mb-6">
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          Click on a technology to view related projects
        </p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-6 justify-center mb-8 py-4">
        <ul className="flex space-x-4">
          {technologies.map((tech) => (
            <li
              key={tech.name}
              className={`group relative flex items-center justify-center h-20 transition-all duration-500 ${
                selectedTech === tech.name ? 'w-32' : 'w-20 hover:w-32'
              }`}
            >
              {/* Button */}
              <button
                onClick={() => handleTechClick(tech.name)}
                className={`w-full h-full pointer-events-auto p-2 flex items-center justify-center bg-white dark:bg-zinc-900 border rounded-full transition-all duration-300 ease-out cursor-pointer hover:scale-105 ${
                  selectedTech === tech.name
                    ? 'border-cyan-500 dark:border-cyan-400 shadow-lg shadow-cyan-400/20 bg-cyan-50 dark:bg-cyan-900/20 scale-105'
                    : 'border-zinc-200 dark:border-zinc-700 hover:border-cyan-700 dark:hover:border-cyan-300 hover:shadow-lg hover:bg-cyan-50 dark:hover:bg-cyan-900/10'
                }`}
              >
                {/* Icon */}
                <svg
                  className={`w-8 h-8 object-contain transition-colors duration-200 ${
                    selectedTech === tech.name
                      ? 'text-cyan-600 dark:text-cyan-400'
                      : 'text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'
                  }`}
                >
                  <use href={`/icons/sprite.svg#${tech.icon}`} />
                </svg>
              </button>
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                {tech.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Title Selected tech */}
      {selectedTech && (
        <div className="text-center mb-6">
          <p className="text-xl font-mono text-zinc-600 dark:text-zinc-400">
            {filteredProjects.length > 0
              ? 'Projects using'
              : 'No projects available for'}{' '}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">
              {selectedTech}
            </span>
          </p>
        </div>
      )}

      {/* Grid 2 columns */}
      {filteredProjects.length > 0 && (
        <div className="container mx-auto px-4 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                selectedTech={selectedTech}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
