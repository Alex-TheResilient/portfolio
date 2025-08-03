import Link from 'next/link';
import { socialLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="container mx-auto max-w-4xl space-y-4 border-t border-gray-200 pt-8 pb-8 dark:border-zinc-800 dark:text-zinc-400">
      {/* Social Links */}
      <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-sm md:gap-6">
        <div className="flex gap-8 md:gap-4">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <svg className="size-4">
                <use href={`/icons/sprite.svg#${social.icon}`} />
              </svg>
              {social.platform}
            </Link>
          ))}
        </div>
      </div>
      {/* Copyright */}
      <div className="flex justify-center text-center text-sm text-zinc-700 dark:text-zinc-400">
        &copy; {new Date().getFullYear()} Alex Huaracha. All rights reserved.
      </div>
    </footer>
  );
}
