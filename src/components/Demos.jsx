import { useState } from 'react';
import Card from './Card';
import sakadoVideo from '../assets/sakado.mp4';
import somebuddyVideo from '../assets/somebuddy.mp4';

const VideoPreview = ({ src, onClick }) => (
  <div className="relative w-full aspect-video rounded-xl mb-6 overflow-hidden border border-white/[0.08] cursor-pointer group" onClick={onClick}>
    <video src={src} muted loop playsInline preload="metadata" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover:bg-black/20 transition-all">
      <svg className="w-14 h-14 text-white/80 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" fillRule="evenodd" />
      </svg>
    </div>
  </div>
);

const Demos = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const closeVideo = () => setActiveVideo(null);

  return (
    <section id="demos" className="py-24">
      <h2 className="text-[2.5rem] font-semibold mb-12 tracking-[-0.03em] text-center text-[#f5f5f7]">Démos &amp; Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <div className="relative z-10 flex flex-col h-full">
            <VideoPreview src={sakadoVideo} onClick={() => setActiveVideo(sakadoVideo)} />
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-semibold text-[#f5f5f7]">Application Sakado</h3>
              <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium border border-purple-500/20">BETA</span>
            </div>
            <p className="text-[#86868b] text-base">Aperçu de l&apos;application mobile développée en React Native. Actuellement, nous réalisons des phases de bêta test avant de sortir l&apos;application sur les stores.</p>
          </div>
        </Card>

        <Card>
          <div className="relative z-10 flex flex-col h-full">
            <VideoPreview src={somebuddyVideo} onClick={() => setActiveVideo(somebuddyVideo)} />
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-semibold text-[#f5f5f7]">Générateur de Persos 2D</h3>
              <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/20">Outil interne</span>
            </div>
            <p className="text-[#86868b] text-base">Démonstration de l&apos;outil interne créé lors de mon stage chez My-Serious-Game.</p>
          </div>
        </Card>

        <Card>
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-full aspect-video bg-black/50 rounded-xl mb-6 border border-white/[0.08] flex gap-2 items-center justify-center text-[#86868b]/50 text-sm cursor-not-allowed" title="Vidéo non disponible pour le moment">
              <svg className="w-8 h-8 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
              <span>Vidéo non disponible</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-semibold text-[#f5f5f7]">AppHub</h3>
              <span className="px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-medium border border-orange-500/20">En cours</span>
            </div>
            <p className="text-[#86868b] text-base">Conception d&apos;un espace de travail unifié et modulaire. Ce projet combine une architecture cœur robuste (authentification, base de données centralisée) avec un tableau de bord hautement personnalisable. L&apos;objectif est de permettre à l&apos;utilisateur de greffer et d&apos;organiser différentes mini-applications (gestionnaire de tâches, notes, flux d&apos;API externes) sur une seule interface fluide.</p>
          </div>
        </Card>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={closeVideo}>
          <div className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 z-[60] bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors" onClick={closeVideo} aria-label="Fermer la vidéo">✕</button>
            <video src={activeVideo} autoPlay controls className="w-full h-auto max-h-[85vh] object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Demos;
