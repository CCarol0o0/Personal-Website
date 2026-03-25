import { Link } from 'react-router-dom';
import { FolderGit2, User, FileText } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)] p-6 transition-colors duration-300">
      <div className="absolute top-6 right-6 flex items-center gap-3">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <div className="text-center max-w-2xl mx-auto space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-mono tracking-widest uppercase text-[var(--color-accent-secondary)]">
            {t('home.greeting')}
          </p>
          <h1 className="text-6xl md:text-8xl font-bold font-mono tracking-tighter text-[var(--color-accent)] drop-shadow-sm">
            {t('name')}
          </h1>
          <p className="text-lg md:text-xl font-mono text-[var(--color-text)]/80">
            {t('home.role')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
          <Link
            to="/projects"
            className="group flex flex-col items-center justify-center p-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            <FolderGit2 className="w-8 h-8 mb-4 text-[var(--color-accent)] group-hover:scale-110 transition-transform" />
            <h2 className="font-bold font-mono mb-1">{t('nav.projects')}</h2>
            <p className="text-xs text-[var(--color-text)]/60">{t('home.projects.desc')}</p>
          </Link>

          <Link
            to="/about"
            className="group flex flex-col items-center justify-center p-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            <User className="w-8 h-8 mb-4 text-[var(--color-accent)] group-hover:scale-110 transition-transform" />
            <h2 className="font-bold font-mono mb-1">{t('nav.about')}</h2>
            <p className="text-xs text-[var(--color-text)]/60">{t('home.about.desc')}</p>
          </Link>

          <Link
            to="/resume"
            className="group flex flex-col items-center justify-center p-8 bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            <FileText className="w-8 h-8 mb-4 text-[var(--color-accent)] group-hover:scale-110 transition-transform" />
            <h2 className="font-bold font-mono mb-1">{t('nav.resume')}</h2>
            <p className="text-xs text-[var(--color-text)]/60">{t('home.resume.desc')}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
