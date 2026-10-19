import { useState } from 'react';
import SectionHeading from './SectionHeading';
import somebuddyVideo from '../assets/somebuddy.mp4';

const sakadoVideo = 'https://github.com/Dapharrrr/portfolio/releases/download/assets-v1/sakadoV2.mp4';

/* Aperçu muet : un bouton lecture blanc posé sur la vidéo, rien d'autre */
const VideoPreview = ({ src, onClick, portrait = false }) => (
  <button
    type="button"
    aria-label="Lire la vidéo"
    className={`group relative block h-full w-full cursor-pointer overflow-hidden rounded-2xl bg-page ${portrait ? 'min-h-[26rem]' : 'aspect-video lg:aspect-auto lg:min-h-[20rem]'}`}
    onClick={onClick}
  >
    <video src={src} muted loop playsInline preload="metadata" className={`absolute inset-0 h-full w-full ${portrait ? 'object-contain' : 'object-cover'}`} />
    <span className="absolute inset-0 grid place-items-center">
      <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-[#111113] shadow-[var(--t-card-shadow)] transition-transform duration-300 group-hover:scale-110">
        <svg className="ml-0.5 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 4.5v11a.5.5 0 0 0 .77.42l8.5-5.5a.5.5 0 0 0 0-.84l-8.5-5.5A.5.5 0 0 0 6 4.5Z" /></svg>
      </span>
    </span>
  </button>
);

const PROJECTS = [
  {
    title: 'Application Sakado',
    badges: [{ label: 'BETA' }, { label: 'Projet entrepreneurial', accent: true }],
    text: 'Aperçu de l\'application mobile développée en React Native. Actuellement, nous réalisons des phases de bêta test avant de sortir l\'application sur les stores.',
    video: sakadoVideo,
    portrait: true,
  },
  {
    title: 'Générateur de Persos 2D',
    badges: [{ label: 'Outil interne' }],
    text: 'Démonstration de l\'outil interne créé lors de mon stage chez My-Serious-Game.',
    video: somebuddyVideo,
  },
  {
    title: 'AppHub',
    github: 'https://github.com/Dapharrrr/apphub/tree/main',
    badges: [{ label: 'En cours', accent: true }],
    text: 'Conception d\'un espace de travail unifié et modulaire. Ce projet combine une architecture cœur robuste (authentification, base de données centralisée) avec un tableau de bord hautement personnalisable. L\'objectif est de permettre à l\'utilisateur de greffer et d\'organiser différentes mini-applications (gestionnaire de tâches, notes, flux d\'API externes) sur une seule interface fluide.',
  },
  {
    title: 'Soft Skills Families',
    github: 'https://github.com/Dapharrrr/soft-skills-families',
    badges: [{ label: 'En cours', accent: true }],
    text: 'Jeu de cartes physique en anglais inspiré des 7 familles, centré sur les soft skills. Les joueurs jouent avec de vraies cartes, et lorsqu\'une famille est complétée, l\'application web prend le relais : elle affiche une question bonus, et accorde un pouvoir spécial en cas de bonne réponse.',
  },
];

const withVideo = PROJECTS.filter((project) => project.video);
const textOnly = PROJECTS.filter((project) => !project.video);

const ProjectText = ({ project, className = '' }) => (
  <div className={`flex flex-col ${className}`.trim()}>
    <p className="text-sm text-muted">{project.badges.map(({ label }) => label).join(' · ')}</p>
    <h3 className="mt-2 text-xl font-medium tracking-[-0.01em] text-ink">{project.title}</h3>
    <p className="mt-4 leading-relaxed text-body">{project.text}</p>
    {project.github && (
      <a href={project.github} target="_blank" rel="noreferrer" className="link-arrow mt-auto pt-6 text-sm font-medium text-ink">
        Voir sur GitHub
      </a>
    )}
  </div>
);

const Demos = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const closeVideo = () => setActiveVideo(null);

  return (
    <section id="demos" className="section">
      <SectionHeading id="demos" title="Démos & projets" />

      <div className="section-body space-y-4">
        {/* Projets avec démo : carte large, la vidéo à gauche */}
        {withVideo.map((project) => (
          <article key={project.title} data-reveal className="card grid gap-2 p-3 lg:grid-cols-[1.25fr_1fr]">
            <VideoPreview src={project.video} onClick={() => setActiveVideo(project.video)} portrait={project.portrait} />
            <ProjectText project={project} className="p-5 lg:p-7" />
          </article>
        ))}

        {/* Projets sans démo : deux cartes côte à côte */}
        <div className="grid gap-4 sm:grid-cols-2">
          {textOnly.map((project) => (
            <article key={project.title} data-reveal className="card">
              <ProjectText project={project} className="p-7 sm:p-8" />
            </article>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={closeVideo}>
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 z-[60] grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[#111113] transition-transform hover:scale-105" onClick={closeVideo} aria-label="Fermer la vidéo">✕</button>
            <video src={activeVideo} autoPlay controls className="w-full h-auto max-h-[85vh] object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Demos;
