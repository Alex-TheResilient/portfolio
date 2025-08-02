import { experiences } from '@/lib/data';
import { ExperienceCard } from '../ui/ExperienceCard';

export function EducationSection() {
  const educationExperiences = experiences.filter(
    (exp) => exp.type === 'education'
  );

  return (
    <div className="space-y-0">
      {/* Open Tag */}
      <span className="inline-flex font-mono ml-2 text-cyan-500 dark:text-cyan-400">
        <span className="dark:text-zinc-50">&lt;</span>
        <span>Education</span>
        <span className="dark:text-zinc-50">&gt;</span>
      </span>
      {/* Content */}
      {educationExperiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
      {/* Close Tag */}
      <span className="inline-flex font-mono ml-2 text-cyan-500 dark:text-cyan-400">
        <span className="dark:text-zinc-50">&lt;/</span>
        <span>Education</span>
        <span className="dark:text-zinc-50">&gt;</span>
      </span>
    </div>
  );
}
