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

export interface Experience {
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  description: string[];
  type: 'work' | 'education';
  technologies?: string[];
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

export const experiences: Experience[] = [
  {
    title: 'MOCAR',
    subtitle: 'Intern',
    location: 'Arequipa, Peru',
    duration: '2024 - 2025',
    description: [
      'I had the opportunity to intern at a technology company where I got to work on real-world software development projects. During my internship, I learned how to work in a team, manage my time, and apply my knowledge to solving real-world problems.',
      'This was an important stepping stone to help me better understand the professional working environment and strengthen my skills.',
    ],
    type: 'work',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'REST APIs'],
  },
  {
    title: 'National University of Saint Augustine',
    subtitle: 'Bachelor of System Engineering',
    location: 'Arequipa, Peru',
    duration: '2025',
    description: [
      'I had the opportunity to intern at a technology company where I got to work on real-world software development projects. During my internship, I learned how to work in a team, manage my time, and apply my knowledge to solving real-world problems.',
      'These experiences nurtured a passion for technology and a willingness to adapt to change.',
    ],
    type: 'education',
    technologies: ['Java', 'Python', 'SQL', 'Teamwork', 'Git/GitHub'],
  },
  {
    title: 'University of Helsinki',
    subtitle: 'Full Stack Open 2024',
    location: 'Online',
    duration: '2024',
    description: [
      'Comprehensive online course covering modern JavaScript-based web development with focus on single page applications.',
      'Built REST APIs, worked with databases, and learned modern development practices including testing and deployment.',
    ],
    type: 'education',
    technologies: [
      'React',
      'Redux',
      'Node.js',
      'MongoDB',
      'GraphQL',
      'TypeScript',
      'JavaScript',
      'Express.js',
      'Jest',
      'REST APIs',
    ],
  },
];
