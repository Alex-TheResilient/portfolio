'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
    <div className="shadow-md flex items-center space-x-1 p-1 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
      {/* Dark Mode */}
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition-colors duration-200
          ${
            theme === 'dark'
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100  dark:hover:bg-gray-800'
          }`}
        aria-label="Dark Mode"
      >
        <Moon className="w-5 h-5" />
      </button>

      {/* Light Mode */}
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition-colors duration-200
          ${
            theme === 'light'
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        aria-label="Light Mode"
      >
        <Sun className="w-5 h-5" />
      </button>

      {/* System Mode */}
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full transition-colors duration-200
          ${
            theme === 'system'
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        aria-label="System Mode"
      >
        <Monitor className="w-5 h-5" />
      </button>
    </div>
  );
}
