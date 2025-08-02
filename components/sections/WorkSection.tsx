import { experiences } from '@/lib/data';
import { ExperienceCard } from '@/components/ui/ExperienceCard';

export function WorkSection() {
  const workExperiences = experiences.filter((exp) => exp.type === 'work');

  return (
    <div className="space-y-0">
      {workExperiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </div>
  );
}
