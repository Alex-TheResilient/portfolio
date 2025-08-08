import { technologies } from '@/lib/data';

export function ProjectsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-mono mb-8 text-center">
          Skills & Projects
        </h2>
      </div>

      {/* Tech Stack with Icons */}
      <div className="flex flex-wrap gap-6 justify-center mb-8 py-4">
        <ul className="flex space-x-4">
          {technologies.map((tech) => (
            <li
              key={tech.name}
              className="group relative flex items-center justify-center w-20 h-20 transition-all duration-500 hover:w-32"
            >
              <button className="w-full h-full pointer-events-auto p-2 flex items-center justify-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-full hover:border-cyan-700 dark:hover:border-cyan-300 hover:shadow-lg transition-all duration-300 ease-out">
                {/* Icon */}
                <svg className="w-8 h-8 object-contain text-zinc-700 dark:text-zinc-300 ">
                  <use href={`/icons/sprite.svg#${tech.icon}`} />
                </svg>
              </button>
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {tech.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
