import { Dumbbell, ChevronRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-16">
      {/* Logo and Name */}
      <a href="/" className="flex flex-col text-black dark:text-white">
        <div className="flex items-center text-4xl group">
          <Dumbbell className="w-6 h-6 text-red-500" />
          <ChevronRight className="w-8 h-8 text-cyan-500 -ml-2" />
          <span className="text-xl font-bold -ml-2">Alex Huaracha</span>
        </div>
        <div>
          <p className="text-xs font-display-pacifico ">
            "If you can imagine it, you can code it."
          </p>
        </div>
      </a>
      {/* Theme Toggle */}
      <div className="flex items-center space-x-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
