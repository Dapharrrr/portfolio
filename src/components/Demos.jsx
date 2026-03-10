import Card from './Card';

const Demos = () => (
  <section id="demos" className="py-24">
    <h2 className="text-[2.5rem] font-semibold mb-12 tracking-[-0.03em] text-center text-[#f5f5f7]">Démos &amp; Projets</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <div className="relative z-10">
          <div className="w-full aspect-video bg-black/50 rounded-xl mb-6 border border-white/[0.08] flex items-center justify-center text-[#86868b] text-sm">
            Espace Vidéo / iFrame
          </div>
          <h3 className="text-2xl mb-2 font-semibold text-[#f5f5f7]">Application Sakado (MVP)</h3>
          <p className="text-[#86868b] text-base">Aperçu de l&apos;application mobile développée en React Native.</p>
        </div>
      </Card>
      <Card>
        <div className="relative z-10">
          <div className="w-full aspect-video bg-black/50 rounded-xl mb-6 border border-white/[0.08] flex items-center justify-center text-[#86868b] text-sm">
            Espace Vidéo / iFrame
          </div>
          <h3 className="text-2xl mb-2 font-semibold text-[#f5f5f7]">Générateur de Persos 2D</h3>
          <p className="text-[#86868b] text-base">Démonstration de l&apos;outil interne créé lors de mon stage chez My-Serious-Game.</p>
        </div>
      </Card>
    </div>
  </section>
);

export default Demos;
