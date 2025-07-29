'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const getButtonClasses = (isActive: boolean) => {
    const baseClasses = 'p-2 rounded-full transition-colors duration-200';
    const activeClasses =
      'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white';
    const inactiveClasses =
      'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800';

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  if (!mounted) {
    return (
      <div className="shadow-md flex items-center space-x-2 p-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <button className="bg-transparent">
          <Moon />
        </button>
        <button className="bg-transparent">
          <Sun />
        </button>
        <button className="bg-transparent">
          <Monitor />
        </button>
      </div>
    );
  }

  console.log('Current theme:', theme);
  return (
    <div className="shadow-md flex items-center rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
      {/* Dark Mode */}
      <button
        onClick={() => setTheme('dark')}
        className={getButtonClasses(theme === 'dark')}
        aria-label="Dark Mode"
      >
        <Moon className="w-4 h-4" />
      </button>

      {/* Light Mode */}
      <button
        onClick={() => setTheme('light')}
        className={getButtonClasses(theme === 'light')}
        aria-label="Light Mode"
      >
        <Sun className="w-4 h-4" />
      </button>

      {/* System Mode */}
      <button
        onClick={() => setTheme('system')}
        className={getButtonClasses(theme === 'system')}
        aria-label="System Mode"
      >
        <Monitor className="w-4 h-4" />
      </button>
    </div>
  );
}
