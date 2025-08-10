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
    id: 'sistema-catalogo-requisitos',
    title: 'Sistema de Gestión de Documentación de Proyectos de Software',
    description:
      'Plataforma full-stack que automatiza la creación y gestión de documentación técnica para equipos de desarrollo. Centraliza la administración de requisitos, evidencias, riesgos y especificaciones.',
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
    title: 'Dashboard de Gestión Empresarial',
    description:
      'Dashboard completo con Next.js para gestionar usuarios, clientes e invoices. Incluye autenticación, paginación, búsqueda, formularios CRUD y componentes visuales con estados de carga.',
    role: 'Personal Project',
    technologies: ['Next.js', 'React', 'TypeScript'], // Agrega las que uses
    features: [
      'Sistema de autenticación completo',
      'Gestión CRUD de usuarios, clientes y facturas',
      'Dashboards con gráficos y visualizaciones',
      'Búsqueda avanzada y paginación',
      'Formularios dinámicos para crear/editar registros',
      'Estados de carga con skeleton components',
    ],
    githubUrl: 'https://github.com/tu-usuario/nextjs-dashboard',
    demoUrl: 'https://nextjs-dashboard-phi-three-37.vercel.app/',
    images: [
      '/images/nextjs-dashboard/1.avif',
      '/images/nextjs-dashboard/2.avif',
      // ... más imágenes
    ],
  },
];
