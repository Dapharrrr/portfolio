import Card from './Card';
import SectionHeading from './SectionHeading';

const Education = () => (
  <section id="education" className="py-24">
    <SectionHeading label="Diplômes" title="Formation" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <div className="relative z-10">
          <h3 className="font-display text-2xl mb-2 text-ink">Master 1 — MBA Développeur Full Stack</h3>
          <span className="text-accent text-sm font-semibold mb-6 block">2025 — 2026</span>
          <p className="text-body text-base">MyDigitalSchool — Paris<br />Titre RNCP de niveau 7</p>
        </div>
      </Card>
      <Card index={2}>
        <div className="relative z-10">
          <h3 className="font-display text-2xl mb-2 text-ink">Bachelor Concepteur Développeur D&apos;applications</h3>
          <span className="text-accent text-sm font-semibold mb-6 block">2024 — 2025</span>
          <p className="text-body text-base">MyDigitalSchool — Paris<br />Titre Professionnel RNCP Niv 6</p>
        </div>
      </Card>
    </div>
  </section>
);

export default Education;
