import { experiences } from '@/lib/data';
import { ExperienceCard } from '@/components/ui/ExperienceCard';

export function WorkSection() {
  const workExperiences = experiences.filter((exp) => exp.type === 'work');

  return (
    <div className="space-y-0">
      {/* Open Tag */}
      <span className="inline-flex font-mono ml-2 text-cyan-500 dark:text-cyan-400">
        <span className="dark:text-zinc-50">&lt;</span>
        <span>Work</span>
        <span className="dark:text-zinc-50">&gt;</span>
      </span>
      {/* Content */}
      {workExperiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
      {/* Close Tag */}
      <span className="inline-flex font-mono ml-2 text-cyan-500 dark:text-cyan-400">
        <span className="dark:text-zinc-50">&lt;/</span>
        <span>Work</span>
        <span className="dark:text-zinc-50">&gt;</span>
      </span>
    </div>
  );
}
