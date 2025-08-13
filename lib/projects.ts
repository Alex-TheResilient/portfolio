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
    id: 'ecommerce-microservices',
    title: 'E-commerce Microservices Platform',
    description:
      'Enterprise-grade microservices architecture with event-driven notifications system. Features real-time communication between services, queue-based processing with Redis/Bull, and multi-channel notifications (email + in-app). Built with Docker orchestration and comprehensive API documentation.',
    role: 'Backend Developer',
    technologies: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Bull Queues',
      'JWT',
      'Swagger',
      'Handlebars',
      'Winston',
    ],
    features: [
      'Event-driven microservice communication',
      'Multi-channel notification system (Email + In-App)',
      'Queue-based processing with Redis & Bull',
      'JWT authentication with role-based access',
      'API Gateway pattern with circuit breaker',
      'Handlebars email template engine',
      'Comprehensive Swagger API documentation',
      'Docker containerization & orchestration',
      'Health monitoring & centralized logging',
      'Horizontal scaling architecture',
    ],
    githubUrl: 'https://github.com/Alex-TheResilient/ecommerce-microservices',
    // demoUrl: undefined, // Commented since no live deploy
    images: [
      '/images/ecommerce/api-overview.avif',
      '/images/ecommerce/event-response.avif',
      '/images/ecommerce/event-docs.avif',
      '/images/ecommerce/templates.avif',
    ],
  },
];
