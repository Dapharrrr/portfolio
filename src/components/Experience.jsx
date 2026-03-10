import Card from './Card';

const sectionTitle = 'text-[2.5rem] font-semibold mb-12 tracking-[-0.03em] text-center text-[#f5f5f7]';
const grid = 'grid grid-cols-1 md:grid-cols-2 gap-8';
const content = 'relative z-10';
const cardTitle = 'text-2xl mb-2 font-semibold text-[#f5f5f7]';
const cardDate = 'text-[#2997ff] text-sm mb-6 block';
const cardText = 'text-[#86868b] text-base mb-3';

const Experience = () => (
  <section id="experience" className="py-24">
    <h2 className={sectionTitle}>Expérience Professionnelle</h2>
    <div className={grid}>
      <Card>
        <div className={content}>
          <h3 className={cardTitle}>Sakado</h3>
          <span className={cardDate}>Déc 2025 — Présent</span>
          <p className={cardText}><strong className="text-[#f5f5f7]">Projet entrepreneurial</strong> — Développement d&apos;un MVP pour valider le concept.</p>
          <p className={cardText}>Conception et développement d&apos;une application mobile en React Native.</p>
        </div>
      </Card>
      <Card>
        <div className={content}>
          <h3 className={cardTitle}>MY-SERIOUS-GAME</h3>
          <span className={cardDate}>Sept 2024 — Présent (Alternance)</span>
          <p className={cardText}><strong className="text-[#f5f5f7]">Service Informatique</strong></p>
          <p className={cardText}>Maintenance et amélioration des applications internes. Contribution à une app TapToEarn.</p>
        </div>
      </Card>
      <Card>
        <div className={content}>
          <h3 className={cardTitle}>MY-SERIOUS-GAME</h3>
          <span className={cardDate}>Avril — Juillet 2024 (Stage)</span>
          <p className={cardText}>Création d&apos;une application web interne en React pour personnaliser des personnages 2D à partir de leurs assets. Git.</p>
        </div>
      </Card>
      <Card>
        <div className={content}>
          <h3 className={cardTitle}>PORTE 7 (Agence Web)</h3>
          <span className={cardDate}>Avril — Juin 2023 (Stage)</span>
          <p className={cardText}>Apprentissage de React, Git/GitHub. Extraction de données via API et création d&apos;une app interne de carte de visite.</p>
        </div>
      </Card>
    </div>
  </section>
);

export default Experience;
