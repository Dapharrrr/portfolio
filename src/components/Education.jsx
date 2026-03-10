import Card from './Card';

const Education = () => (
  <section id="education" className="py-24">
    <h2 className="text-[2.5rem] font-semibold mb-12 tracking-[-0.03em] text-center text-[#f5f5f7]">Formation</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <div className="relative z-10">
          <h3 className="text-2xl mb-2 font-semibold text-[#f5f5f7]">Master 1 — MBA Développeur Full Stack</h3>
          <span className="text-[#2997ff] text-sm mb-6 block">2025 — 2026</span>
          <p className="text-[#86868b] text-base">MyDigitalSchool — Paris<br />Titre RNCP de niveau 7</p>
        </div>
      </Card>
      <Card>
        <div className="relative z-10">
          <h3 className="text-2xl mb-2 font-semibold text-[#f5f5f7]">Bachelor Concepteur Développeur</h3>
          <span className="text-[#2997ff] text-sm mb-6 block">2024 — 2025</span>
          <p className="text-[#86868b] text-base">MyDigitalSchool — Paris<br />Titre Professionnel RNCP Niv 6</p>
        </div>
      </Card>
    </div>
  </section>
);

export default Education;
