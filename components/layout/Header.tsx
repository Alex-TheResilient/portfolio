import { Dumbbell, ChevronRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

export function Header() {
  return (
    <div className="container">
      <header className="flex h-18 items-center justify-between">
        {/* Logo and Name */}
        <Link href="/" className="flex-col text-black dark:text-white">
          <div className="flex items-center text-4xl group">
            <Dumbbell className="w-7 h-7 text-red-500" />
            <ChevronRight className="w-9 h-9 text-cyan-500 -ml-2" />
            <span className="text-xl font-bold -ml-2">Alex Huaracha</span>
          </div>
          <div>
            <p className="text-xs font-display-pacifico ">
              {'"If you can imagine it, you can code it."'}
            </p>
          </div>
        </Link>
        {/* Theme Toggle */}
        <ThemeToggle />
      </header>
    </div>
  );
}
