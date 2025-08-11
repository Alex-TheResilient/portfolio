export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 'system-automation-requirements',
    title: 'Software Project Documentation Management System',
    description:
      'Full-stack platform that automates the creation and management of technical documentation for development teams. Centralizes the administration of requirements, evidence, risks, and specifications.',
    role: 'Backend Developer',
    technologies: [
      'React',
      'Node.js',
      'TypeScript',
      'Express.js',
      'Prisma ORM',
    ],
    features: [
      'Gestión integral de artefactos de proyecto (requisitos, riesgos, especificaciones)',
      'Sistema de roles y permisos para equipos colaborativos',
      'Automatización de plantillas y generación de reportes',
      'Carga y gestión centralizada de archivos',
      'Interfaz intuitiva para documentación técnica',
    ],
    githubUrl:
      'https://github.com/Alex-TheResilient/template-automation-system',
    images: [
      '/images/template-automation/1.avif',
      '/images/template-automation/2.avif',
      '/images/template-automation/3.avif',
      '/images/template-automation/4.avif',
      '/images/template-automation/5.avif',
      '/images/template-automation/6.avif',
      '/images/template-automation/7.avif',
      '/images/template-automation/8.avif',
      '/images/template-automation/9.avif',
      '/images/template-automation/10.avif',
    ],
  },
  {
    id: 'nextjs-dashboard',
    title: 'Business Management Dashboard',
    description:
      'Complete dashboard built with Next.js to manage users, clients, and invoices. Includes authentication, pagination, search, CRUD forms, and visual components with loading states.',
    role: 'Personal Project',
    technologies: ['Next.js', 'React', 'TypeScript'],
    features: [
      'Full authentication system',
      'CRUD management for users, clients, and invoices',
      'Dashboards with charts and visualizations',
      'Advanced search and pagination',
      'Dynamic forms for creating/editing records',
      'Loading states with skeleton components',
    ],
    githubUrl: 'https://github.com/tu-usuario/nextjs-dashboard',
    demoUrl: 'https://nextjs-dashboard-phi-three-37.vercel.app/',
    images: [
      '/images/nextjs-dashboard/1.avif',
      '/images/nextjs-dashboard/2.avif',
      // ... more images
    ],
  },
];
