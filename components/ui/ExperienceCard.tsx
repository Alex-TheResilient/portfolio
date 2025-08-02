import { Experience } from '@/lib/data';
import { BriefcaseBusiness } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div>
      {/* Vertical Line */}
      <div className="ml-2 text-sm text-balance border-l border-zinc-300 dark:border-zinc-700">
        <div className="relative ml-2 py-2">
          {/* Vertical Line */}
          <div className="absolute left-3 top-6 bottom-2 w-px bg-zinc-300 dark:bg-zinc-700"></div>
          {/* Title*/}
          <div className="relative z-[2] mb-2 text-lg font-semibold">
            <div className="flex items-center gap-2">
              <div className="flex size-6 items-center justify-center bg-zinc-50 text-pink-400 dark:bg-zinc-950">
                <BriefcaseBusiness className="w-4 h-4" />
              </div>
              <span>{experience.title}</span>
            </div>
          </div>
          {/* Subtitle */}
          <div className="ml-8 space-y-3 font-mono text-sm">
            <div className="text-zinc-400 ">
              {experience.subtitle} | {experience.duration}
            </div>
            {/* Description */}
            <ul className="space-y-2 list-disc list-outside pl-4 marker:text-zinc-500">
              {experience.description.map((desc, index) => (
                <li key={index} className="pl-2 text-sm text-zinc-300">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
          {/* Technologies */}
          <div>
            {experience.technologies && (
              <div className="ml-8 mt-3 flex flex-wrap gap-4">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs text-gray-400 w-fit gap-2 rounded-full border border-zinc-400 px-1.5 py-0.5  dark:border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
