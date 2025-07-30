import { personalInfo, technologies } from '@/lib/data';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="container space-y-8 xl:px-16">
        <div className="min-h-[calc(100vh-56px)] items-center space-y-8 md:flex md:space-y-0">
          <div className="grid items-center gap-x-16 md:grid-cols-2 xl:gap-x-28">
            {/* Profile Card */}
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-sm backdrop-blur-2xl dark:border-zinc-800 dark:text-zinc-50">
              {/* Banner with cover image */}
              <div className="relative aspect-[3/1] overflow-hidden before:absolute before:inset-0 before:bg-[image:url(/images/cover.avif)] before:bg-cover before:bg-center after:absolute after:bottom-0 after:left-0 after:z-[1] after:h-px after:w-full after:bg-white/20" />

              {/* Avatar */}
              <div className="relative left-[5px] z-[1] -mt-12 h-48 px-8 lg:-mt-24 lg:mb-6">
                <Image
                  src="/images/avatar.avif"
                  alt={personalInfo.name}
                  width={192}
                  height={192}
                  className="rounded-full"
                />
              </div>

              {/* Profile Info */}
              <div className="px-8 pb-6 space-y-6">
                {/* Name */}
                <h1 className="text-3xl md:text-4xl font-mono font-bold text-gray-800 dark:text-white">
                  {personalInfo.name}
                </h1>

                {/* Contact Info */}
                <div className="space-y-2 text-sm md:text-base font-mono">
                  {[
                    {
                      icon: Mail,
                      content: (
                        // eslint-disable-next-line @next/next/no-html-link-for-pages
                        <a href={`mailto:${personalInfo.email}`}>
                          {personalInfo.email}
                        </a>
                      ),
                    },
                    { icon: MapPin, content: personalInfo.location },
                    { icon: Phone, content: personalInfo.phone },
                  ].map(({ icon: Icon, content }, index) => (
                    <div key={index} className="flex items-center">
                      <Icon className="w-5 h-5 mr-4 text-zinc-500 shrink-0" />
                      {content}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-8 dark:text-slate-50">
              {/* Greeting */}
              <div className="space-y-2 text-center hidden md:block">
                <h2 className="select-none bg-gradient-to-t from-zinc-950 to-zinc-600 bg-clip-text pt-1 font-display-pacifico text-8xl text-transparent dark:from-zinc-500 dark:to-white">
                  Hi
                </h2>
                <p className="font-mono text-xl lg:text-2xl dark:text-white">
                  &lt;<span className="text-red-500">p</span>&gt;
                  {personalInfo.title}
                  &lt;/<span className="text-red-500">p</span>&gt;
                </p>
              </div>

              {/* About Text */}
              <div className="text-balance text-center font-mono text-sm">
                <p>
                  &lt;<span className="text-cyan-700">About</span>&gt;
                  {personalInfo.about}
                  &lt;/<span className="text-cyan-700">About</span>&gt;
                </p>
              </div>

              {/* Tech Stack */}
              <div className="backdrop-blur rounded-2xl p-4 shadow-sm flex gap-3 justify-center">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="w-10 h-10 p-1.5 bg-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    title={tech.name}
                  >
                    <svg className="w-5 h-5">
                      <use href={`/icons/sprite.svg#${tech.icon}`} />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
