import { Dumbbell, ChevronRight, ChevronLeft } from 'lucide-react';
export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-4">
      {/* Logo and Name */}
      <a href="/" className="flex items-center">
        <div className="flex items-center text-4xl group">
          <ChevronLeft className="w-8 h-8 text-blue-500" />
          <Dumbbell className="w-8 h-8 text-red-500" />
          <ChevronRight className="w-8 h-8 text-cyan-500 -ml-2" />
        </div>
        <span className="text-2xl font-bold">Alex Huaracha</span>
      </a>
      {/* Theme Toggle */}
    </header>
  );
}
