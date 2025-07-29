import { personalInfo, technologies } from '@/lib/data';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="container relative z-10 mx-auto max-w-full space-y-8 xl:px-16">
        <div className="min-h-[calc(100vh-56px)] items-center space-y-8 md:flex md:space-y-0">
          <div className="grid items-center gap-x-16 md:grid-cols-2 xl:gap-x-28">
            {/* Card */}
            <div className="backdrop-blur-md relative rounded-2xl shadow-lg w-96 md:w-[450px] lg:w-[600px] overflow-hidden border border-white/20 dark:border-gray-700/30 [--banner-height:10rem] md:[--banner-height:12rem] lg:[--banner-height:14rem] [--avatar-size:9rem] md:[--avatar-size:10rem] lg:[--avatar-size:10rem]">
              {/* Banner */}
              <div className="bg-black h-[var(--banner-height)]"></div>

              {/* Avatar */}
              <div className="size-[var(--avatar-size)] absolute top-[calc(var(--banner-height)-var(--avatar-size)/2)] left-4 rounded-full overflow-hidden border-4 border-white/50 dark:border-gray-600/50 shadow-lg">
                <img src="/images/avatar.png" alt={personalInfo.name} />
              </div>

              {/* Personal Info */}
              <div className="pt-[calc(var(--avatar-size)/2+1rem)] space-y-4 px-4 pb-6">
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                    {personalInfo.name}
                  </h1>
                </div>

                <div className="space-y-3 text-gray-600 text-base dark:text-white">
                  <p className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    {personalInfo.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {personalInfo.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    {personalInfo.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Presentation */}
            <div className="space-y-8 dark:text-slate-50">
              <div className="space-y-2 text-center hidden md:block">
                <div className="select-none bg-gradient-to-t from-zinc-950 to-zinc-600 bg-clip-text pt-1 font-display-pacifico text-8xl text-transparent dark:from-zinc-500 dark:to-white">
                  Hi
                </div>
                <div className="font-mono text-xl dark:text-white lg:text-2xl">
                  <p className="inline-flex">
                    &lt;<span className="text-red-500">p</span>&gt;
                    <span className="">{personalInfo.title}</span>
                    &lt;/<span className="text-red-500">p</span>&gt;
                  </p>
                </div>
              </div>
              {/* About */}
              <div className="text-balance text-center font-mono text-sm">
                <p className="">
                  &lt;<span className="text-cyan-700">About</span>&gt;
                  <span className="">{personalInfo.about}</span>
                  &lt;/<span className="text-cyan-700">About</span>&gt;
                </p>
              </div>

              {/* Icons */}
              <div className="backdrop-blur rounded-2xl p-4 shadow-sm flex gap-3">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="w-10 h-10 p-1.5 bg-gray-200 rounded-full flex items-center justify-center hover:scale-130 transition-transform"
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
