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
          <span className={cardDate}>Déc 2025 — Présent • Projet entrepreneurial</span>
          <p className={cardText}>Réalisation d&apos;un MVP axé sur l&apos;expérience utilisateur dans le cadre d&apos;un programme école.</p>
          <p className={cardText}>Architecture et développement d&apos;une application mobile cross-platform avec React Native.</p>
        </div>
      </Card>
      <Card>
        <div className={content}>
          <h3 className={cardTitle}>AUGMANTED</h3>
          <span className={cardDate}>Sept 2025 — Présent • Alternance</span>
          <p className={cardText}><strong className="text-[#f5f5f7]">Service Informatique</strong></p>
          <p className={cardText}>Maintenance applicative : assurer la pérennité des applications internes.</p>
          <p className={cardText}>Optimisation logicielle : poursuite du développement et amélioration de l&apos;application métier initiée durant mon stage.</p>
        </div>
      </Card>
      <Card>
        <div className={content}>
          <h3 className={cardTitle}>MY-SERIOUS-GAME</h3>
          <span className={cardDate}>Sept 2024 — Août 2025 • Alternance</span>
          <p className={cardText}><strong className="text-[#f5f5f7]">Service Informatique</strong></p>
          <p className={cardText}>Développement de mécaniques de jeu pour une application Tap-to-Earn.</p>
          <p className={cardText}>Création d&apos;un starter web &quot;out-of-the-box&quot; pour faciliter le déploiement de nouveaux projets.</p>
        </div>
      </Card>
      <Card>
        <div className={content}>
          <h3 className={cardTitle}>MY-SERIOUS-GAME</h3>
          <span className={cardDate}>Avril — Juillet 2024 • Stage</span>
          <p className={cardText}><strong className="text-[#f5f5f7]">Service Informatique</strong></p>
          <p className={cardText}>Création d&apos;une application web dédiée à la personnalisation de personnages 2D à partir d&apos;une bibliothèque d&apos;assets.</p>
          <p className={cardText}>Conception d&apos;interfaces dynamiques avec React et gestion de version avec Git.</p>
        </div>
      </Card>
    </div>
  </section>
);

export default Experience;
