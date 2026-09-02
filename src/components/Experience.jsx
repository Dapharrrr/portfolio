import Card from './Card';
import SectionHeading from './SectionHeading';

const grid = 'grid grid-cols-1 md:grid-cols-3 gap-8';
const content = 'relative z-10';
const cardTitle = 'font-display text-2xl mb-2 text-ink';
const cardDate = 'text-accent text-sm font-semibold mb-6 block';
const cardText = 'text-body text-base mb-3';

const Experience = () => (
  <section id="experience" className="py-24">
    <SectionHeading label="Parcours" title="Expérience professionnelle" />
    <div className={grid}>
      <Card>
        <div className={content}>
          <h3 className={cardTitle}>AUGMANTED</h3>
          <span className={cardDate}>Sept 2025 — Présent • Alternance</span>
          <p className={cardText}><strong className="text-ink">Service Informatique</strong></p>
          <p className={cardText}>Maintenance applicative : assurer la pérennité des applications internes.</p>
          <p className={cardText}>Optimisation logicielle : poursuite du développement et amélioration de l&apos;application métier initiée durant mon stage.</p>
        </div>
      </Card>
      <Card index={1}>
        <div className={content}>
          <h3 className={cardTitle}>MY-SERIOUS-GAME</h3>
          <span className={cardDate}>Sept 2024 — Août 2025 • Alternance</span>
          <p className={cardText}><strong className="text-ink">Service Informatique</strong></p>
          <p className={cardText}>Développement de mécaniques de jeu pour une application Tap-to-Earn.</p>
          <p className={cardText}>Création d&apos;un starter web &quot;out-of-the-box&quot; pour faciliter le déploiement de nouveaux projets.</p>
        </div>
      </Card>
      <Card index={2}>
        <div className={content}>
          <h3 className={cardTitle}>MY-SERIOUS-GAME</h3>
          <span className={cardDate}>Avril — Juillet 2024 • Stage</span>
          <p className={cardText}><strong className="text-ink">Service Informatique</strong></p>
          <p className={cardText}>Création d&apos;une application web dédiée à la personnalisation de personnages 2D à partir d&apos;une bibliothèque d&apos;assets.</p>
          <p className={cardText}>Conception d&apos;interfaces dynamiques avec React et gestion de version avec Git.</p>
        </div>
      </Card>
    </div>

    <h3 className="text-xs text-muted uppercase tracking-[0.28em] font-bold mt-16 mb-8">Projet Entrepreneurial</h3>
    <Card index={1}>
      <div className={content}>
        <h3 className={cardTitle}>Sakado</h3>
        <span className={cardDate}>Déc 2025 — Présent • Programme école</span>
        <p className={cardText}>Réalisation d&apos;un MVP axé sur l&apos;expérience utilisateur dans le cadre d&apos;un programme d&apos;école.</p>
        <p className={cardText}>Architecture et développement d&apos;une application mobile cross-platform avec React Native.</p>
      </div>
    </Card>
  </section>
);

export default Experience;
