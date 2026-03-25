import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-colors font-mono text-sm font-bold"
      aria-label="Toggle Language"
    >
      <Languages className="w-4 h-4 text-[var(--color-accent)]" />
      <span className="text-[var(--color-text)] uppercase">{language}</span>
    </button>
  );
}
