import { personalInfo, technologies } from '@/lib/data';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section>
      <div className="flex gap-8">
        {/* Card */}
        <div className="backdrop-blur">
          <div className="bg-black h-32"></div>
          <div className="size-32 rounded-full overflow-hidden -top-15 -bottom-10 relative">
            <img src="/images/avatar.png" alt={personalInfo.name} />
          </div>
          <div>
            <h1>{personalInfo.name}</h1>
            <p>
              <Mail />
              {personalInfo.email}
            </p>
            <p>
              <MapPin />
              {personalInfo.location}
            </p>
            <p>
              <Phone />
              {personalInfo.phone}
            </p>
          </div>
        </div>
        <div>
          <h2>Hello</h2>
          <p>{personalInfo.title}</p>
          <p>{personalInfo.about}</p>
          <div>
            {technologies.map((tech) => (
              <span key={tech.name}>
                <img src={`/icons/${tech.icon}.svg`} alt={tech.name} />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
