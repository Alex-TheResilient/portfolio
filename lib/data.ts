export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  phone: string;
  about: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  role: string;
  stack: Technology[];
  githubUrl?: string;
  image: string;
  link: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  graduationYear: number;
  type: 'university' | 'course' | 'certification';
}

export interface WorkExperience {
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Alex Huaracha',
  email: 'alexhuarachaq@gmail.com',
  location: 'Arequipa, Peru',
  phone: '(+51) 962-334-712',
  title: 'I am a Developer',
  about:
    'Software developer passionate about building innovative applications and solving complex problems through code. I focus on creating efficient, scalable solutions while continuously expanding my knowledge of modern development technologies.',
};

export const technologies: Technology[] = [
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Git', icon: 'git' },
  { name: 'PostgreSQL', icon: 'postgresql' },
];

// To change
export const projects: Project[] = [
  {
    title: 'Pomodoro Timer',
    description:
      'A web application that helps users manage their time using the Pomodoro Technique.',
    role: 'Developer',
    stack: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
    githubUrl: 'https://github.com/Alex-TheResilient/portfolio',
    image: '/images/portfolio.png',
    link: 'https://alex-the-resilient.vercel.app/',
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/Alex-TheResilient',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alex-huaracha/',
    icon: 'linkedin',
  },
];

export const education: Education[] = [
  {
    institution: 'National University of Saint Augustine',
    degree: 'Bachelor of System Engineering',
    location: 'Arequipa, Peru',
    graduationYear: 2025,
    type: 'university',
  },
  {
    institution: 'University of Helsinki',
    degree: 'Full Stack Open 2024',
    location: 'Online',
    graduationYear: 2024,
    type: 'course',
  },
];

export const workExperience: WorkExperience[] = [
  {
    company: 'MOCAR',
    position: 'Software Engineer',
    location: 'Arequipa, Peru',
    duration: '2024 - 2025',
    description: 'Developing web applications using modern frameworks.',
  },
];
