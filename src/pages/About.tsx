import TimeWidget from '../components/TimeWidget';
import WeatherWidget from '../components/WeatherWidget';
import Carousel from '../components/Carousel';
import { Mail, Phone, Code, Palette, Database, BookOpen} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Top Section: Bio & Widgets */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bio */}
        <div className="lg:col-span-2 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[2rem] p-8 md:p-10 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold font-mono mb-6 text-[var(--color-accent)]">
            {t('about.title')}
          </h1>
          <div className="space-y-6 text-[var(--color-text)]/80 leading-relaxed text-lg">
            <p>
              <strong className="text-[var(--color-text)] font-semibold">{t('about.bio1')}</strong>
              <br />
              {t('about.bio2')}
            </p>
            <p>
              {t('about.bio3')}
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="mailto:qiufanchen2228@outlook.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] hover:bg-[var(--color-card-hover)] transition-colors text-sm font-mono">
              <Mail className="w-4 h-4 text-[var(--color-accent)]" />
              qiufanchen2228@outlook.com
            </a>
            <a href="tel:+8618736032228" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] hover:bg-[var(--color-card-hover)] transition-colors text-sm font-mono">
              <Phone className="w-4 h-4 text-[var(--color-accent)]" />
              +86 18736032228
            </a>
          </div>
        </div>

        {/* Widgets */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="h-[200px]">
            <TimeWidget />
          </div>
          <div className="h-[200px]">
            <WeatherWidget />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[2rem] p-8 md:p-10 shadow-sm">
        <h2 className="text-2xl font-bold font-mono mb-6 text-[var(--color-text)]">{t('about.skills.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[var(--color-accent)] font-bold mb-2">
              <Database className="w-5 h-5" />
              <span>{t('about.skills.data.title')}</span>
            </div>
            <p className="text-sm text-[var(--color-text)]/80 leading-relaxed">
              {t('about.skills.data')}
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[var(--color-accent)] font-bold mb-2">
              <Palette className="w-5 h-5" />
              <span>{t('about.skills.design.title')}</span>
            </div>
            <p className="text-sm text-[var(--color-text)]/80 leading-relaxed">
              {t('about.skills.design')}
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[var(--color-accent)] font-bold mb-2">
              <Code className="w-5 h-5" />
              <span>{t('about.skills.dev.title')}</span>
            </div>
            <p className="text-sm text-[var(--color-text)]/80 leading-relaxed">
              {t('about.skills.dev')}
            </p>
          </div>
        </div>
      </section>

      {/* Life & Hobbies Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Me */}
         <div className="flex flex-col bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl overflow-hidden shadow-sm h-[360px]">
          <div className="h-[240px] w-full">
            <Carousel images={['/Assets-carol/me1.jpg', '/Assets-carol/me2.jpg', '/Assets-carol/me3.jpg']} altText="This is Me" />
          </div>
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold font-mono text-lg">{t('about.me.title')}</h3>
              <span className="text-xs font-mono px-2 py-1 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)]">Me</span>
            </div>
            <p className="text-xs text-[var(--color-text)]/60">{t('about.me.desc')}</p>
          </div>
        </div>

        {/* Art */}
        <div className="flex flex-col bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl overflow-hidden shadow-sm h-[360px]">
          <div className="h-[240px] w-full">
            <Carousel images={['/Assets-carol/life-art1.jpg', '/Assets-carol/life-art2.jpg', '/Assets-carol/life-art3.jpg', '/Assets-carol/life-art4.jpg', '/Assets-carol/life-art5.jpg', '/Assets-carol/life-art6.jpg']} altText="My Art" />
          </div>
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold font-mono text-lg">{t('about.art.title')}</h3>
              <span className="text-xs font-mono px-2 py-1 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)]">Art</span>
            </div>
            <p className="text-xs text-[var(--color-text)]/60">{t('about.art.desc')}</p>
          </div>
        </div>

        {/* Cat */}
        <div className="flex flex-col bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl overflow-hidden shadow-sm h-[360px]">
          <div className="h-[240px] w-full">
            <Carousel images={['/Assets-carol/life-cat1.jpg', '/Assets-carol/life-cat2.jpg', '/Assets-carol/life-cat3.jpg']} altText="My Cat" />
          </div>
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold font-mono text-lg">{t('about.cat.title')}</h3>
              <span className="text-xs font-mono px-2 py-1 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)]">Life</span>
            </div>
            <p className="text-xs text-[var(--color-text)]/60">{t('about.cat.desc')}</p>
          </div>
        </div>

        {/* Sports */}
        <div className="flex flex-col bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl overflow-hidden shadow-sm h-[360px]">
          <div className="h-[240px] w-full">
            <Carousel images={['/Assets-carol/life-sports1.jpg', '/Assets-carol/life-sports2.jpg', '/Assets-carol/life-sports3.jpg']} altText="Sports" />
          </div>
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold font-mono text-lg">{t('about.sports.title')}</h3>
              <span className="text-xs font-mono px-2 py-1 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)]">Sports</span>
            </div>
            <p className="text-xs text-[var(--color-text)]/60 leading-relaxed">{t('about.sports.desc')}</p>
          </div>
        </div>

        {/* Games */}
        <div className="flex flex-col bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl overflow-hidden shadow-sm h-[360px]">
          <div className="h-[280px] w-full">
            <Carousel 
              images={[
                '/Assets-carol/enjoygame1.jpg', 
                '/Assets-carol/enjoygame2.jpg', 
                '/Assets-carol/enjoygame3.jpg', 
                '/Assets-carol/enjoygame4.jpg', 
                '/Assets-carol/enjoygame5.jpg', 
                '/Assets-carol/enjoygame6.jpg'
              ]} 
              altText="Favorite Games" 
            />
          </div>
          <div className="p-5 flex items-center justify-between">
            <h3 className="font-bold font-mono text-lg">{t('about.games.title')}</h3>
            <span className="text-xs font-mono px-3 py-1.5 rounded-md bg-[var(--color-accent)] text-[var(--color-bg)]">Games</span>
          </div>
        </div>

        {/* Movies/TV */}
        <div className="flex flex-col bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl overflow-hidden shadow-sm h-[360px]">
          <div className="h-[280px] w-full">
            <Carousel 
              images={[
                '/Assets-carol/enjoymovie1.jpg', 
                '/Assets-carol/enjoymovie2.jpg', 
                '/Assets-carol/enjoymovie3.jpg', 
                '/Assets-carol/enjoymovie4.jpg', 
                '/Assets-carol/enjoymovie5.jpg',
                '/Assets-carol/enjoytvshow1.jpg',
                '/Assets-carol/enjoyanime1.jpg',
                '/Assets-carol/enjoyanime2.jpg'
              ]} 
              altText="Watchlist" 
            />
          </div>
          <div className="p-5 flex items-center justify-between">
            <h3 className="font-bold font-mono text-lg">{t('about.movies.title')}</h3>
            <span className="text-xs font-mono px-3 py-1.5 rounded-md bg-[var(--color-accent-secondary)] text-[var(--color-bg)]">Media</span>
          </div>
        </div>
      </section>

       <section className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[2rem] p-8 md:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-[var(--color-accent)]" />
          <h2 className="text-2xl font-bold font-mono text-[var(--color-text)]">{t('about.books.title')}</h2>
        </div>
        <p className="text-[var(--color-text)]/80 leading-relaxed text-lg">
          {t('about.books.desc')}
        </p>
      </section>
    </div>
  );
}
