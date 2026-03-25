import { FileText, Download, Github, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Resume() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 animate-in fade-in duration-700 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold font-mono mb-6 text-[var(--color-accent)]">
        {t('resume.title')}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <a
          href="/Assets-carol/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center p-10 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[2rem] hover:-translate-y-1 hover:shadow-lg transition-all"
        >
          <div className="w-16 h-16 rounded-full bg-[var(--color-bg)] flex items-center justify-center mb-6 border border-[var(--color-border)] group-hover:border-[var(--color-accent)] transition-colors">
            <FileText className="w-8 h-8 text-[var(--color-accent)]" />
          </div>
          <h2 className="font-bold font-mono text-lg">{t('resume.view')}</h2>
        </a>

        <a
          href="/Assets-carol/Resume.pdf"
          download
          className="group flex flex-col items-center justify-center p-10 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[2rem] hover:-translate-y-1 hover:shadow-lg transition-all"
        >
          <div className="w-16 h-16 rounded-full bg-[var(--color-bg)] flex items-center justify-center mb-6 border border-[var(--color-border)] group-hover:border-[var(--color-accent)] transition-colors">
            <Download className="w-8 h-8 text-[var(--color-accent)]" />
          </div>
          <h2 className="font-bold font-mono text-lg">{t('resume.download')}</h2>
        </a>

        <a
          href="https://github.com/CCarol0o0"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center p-10 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[2rem] hover:-translate-y-1 hover:shadow-lg transition-all"
        >
          <div className="w-16 h-16 rounded-full bg-[var(--color-bg)] flex items-center justify-center mb-6 border border-[var(--color-border)] group-hover:border-[var(--color-accent)] transition-colors">
            <Github className="w-8 h-8 text-[var(--color-accent)]" />
          </div>
          <h2 className="font-bold font-mono text-lg">{t('resume.github')}</h2>
        </a>

        <a
          href="https://www.instagram.com/ccarol0o0/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center p-10 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[2rem] hover:-translate-y-1 hover:shadow-lg transition-all"
        >
          <div className="w-16 h-16 rounded-full bg-[var(--color-bg)] flex items-center justify-center mb-6 border border-[var(--color-border)] group-hover:border-[var(--color-accent)] transition-colors">
            <Instagram className="w-8 h-8 text-[var(--color-accent)]" />
          </div>
          <h2 className="font-bold font-mono text-lg">{t('resume.instagram')}</h2>
        </a>
      </div>
    </div>
  );
}
