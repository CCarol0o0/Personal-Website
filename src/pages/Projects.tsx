import Carousel from '../components/Carousel';
import { ExternalLink, BarChart2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const asset = (fileName: string) => `${import.meta.env.BASE_URL}Assets-carol/${fileName}`;

  const projects = [
    {
      title: t('projects.indie.title'),
      badge: t('projects.indie.badge'),
      desc: t('projects.indie.desc'),
      images: [asset('game-herroom.jpg'), asset('game-drawing.jpg'), asset('game-ui1.jpg'), asset('game-ui2.jpg'), asset('game-ui3.jpg'), asset('game-ui4.jpg')],
      link: 'https://noobflash-study.itch.io/herroom',
      linkText: t('projects.indie.link'),
    },
    {
      title: t('projects.bi.title'),
      badge: t('projects.bi.badge'),
      desc: t('projects.bi.desc'),
      images: [asset('project-powerbi.jpg'), asset('project-powerbi1.png'), asset('project-powerbi2.png'), asset('project-tableaui.jpg')],
    },
    {
      title: t('projects.sim.title'),
      badge: t('projects.sim.badge'),
      desc: t('projects.sim.desc'),
      images: [asset('project-simulation(des).jpg')],
    },
    {
      title: t('projects.consumer.title'),
      badge: t('projects.consumer.badge'),
      desc: t('projects.consumer.desc'),
      images: [asset('project-skin.jpg')],
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Featured Project */}
      <section>
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--color-card)] border border-[var(--color-border)] shadow-sm group">
          <div className="h-[300px] md:h-[400px] w-full overflow-hidden">
            <Carousel images={[asset('Group 1.png'), asset('Group 3.png'), asset('project-twin-fullgraph-topology.jpg'), asset('project-twin-platformgraph-topology.jpg')]} altText="Digital Twin" />
          </div>
          <div className="p-8 md:p-10 bg-[var(--color-card)] relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase rounded-full bg-[var(--color-accent)] text-[var(--color-bg)]">
                {t('projects.featured')}
              </span>
              <span className="text-sm font-mono text-[var(--color-text)]/60">{t('projects.featured.badge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 text-[var(--color-text)]">
              {t('projects.featured.title')}
            </h2>
            <p className="text-lg text-[var(--color-text)]/80 mb-8 max-w-3xl leading-relaxed">
              {t('projects.featured.desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={asset('subway-dashboard.html')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-text)] text-[var(--color-bg)] font-medium hover:bg-[var(--color-accent)] hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {t('projects.featured.btn1')}
              </a>
              <a
                href={asset('subway-analysis.html')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-colors"
              >
                <BarChart2 className="w-4 h-4" />
                {t('projects.featured.btn2')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section>
        <h2 className="text-2xl font-bold font-mono mb-6 text-[var(--color-text)]">{t('projects.portfolio.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-[240px] w-full">
                <Carousel images={project.images} altText={project.title} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--color-accent-secondary)] mb-2">
                  {project.badge}
                </span>
                <h3 className="text-xl font-bold font-mono mb-3">{project.title}</h3>
                <p className="text-[var(--color-text)]/80 text-sm leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-secondary)] transition-colors mt-auto"
                  >
                    {project.linkText} <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
