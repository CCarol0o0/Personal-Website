import { NavLink } from 'react-router-dom';
import { Home, FolderGit2, User, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Sidebar() {
  const { t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), path: '/', icon: <Home className="w-4 h-4" /> },
    { name: t('nav.projects'), path: '/projects', icon: <FolderGit2 className="w-4 h-4" /> },
    { name: t('nav.about'), path: '/about', icon: <User className="w-4 h-4" /> },
    { name: t('nav.resume'), path: '/resume', icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-full md:w-64 flex-shrink-0 md:h-screen md:sticky top-0 p-6 md:border-r border-[var(--color-border)] flex flex-col">
      <div className="mb-10 hidden md:block">
        <h1 className="text-xl font-mono font-bold tracking-tight text-[var(--color-accent)]">
          {t('name')}.
        </h1>
      </div>
      
      <nav className="flex md:flex-col gap-3 overflow-x-auto hide-scrollbar pb-4 md:pb-0">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl font-mono text-sm transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-[var(--color-accent)] text-[var(--color-bg)] font-bold shadow-md'
                  : 'bg-[var(--color-card)] border border-[var(--color-border)] hover:bg-[var(--color-card-hover)] text-[var(--color-text)]'
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
