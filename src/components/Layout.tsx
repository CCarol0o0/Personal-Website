import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 p-6 md:p-12 overflow-y-auto w-full max-w-6xl mx-auto">
        <header className="flex justify-end mb-8 gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </header>
        <Outlet />
      </main>
    </div>
  );
}
