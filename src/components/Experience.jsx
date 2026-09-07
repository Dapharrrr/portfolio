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
          <p className={cardText}>Maintenance évolutive du parc applicatif interne : garantir la pérennité et la continuité de service des outils métier.</p>
          <p className={cardText}>Poursuite du développement de l&apos;application métier initiée en stage : optimisation logicielle et évolutions fonctionnelles sur un existant.</p>
        </div>
      </Card>
      <Card index={1}>
        <div className={content}>
          <h3 className={cardTitle}>MY-SERIOUS-GAME</h3>
          <span className={cardDate}>Sept 2024 — Août 2025 • Alternance</span>
          <p className={cardText}><strong className="text-ink">Service Informatique</strong></p>
          <p className={cardText}>Conception d&apos;un starter web &quot;out-of-the-box&quot; : un socle technique commun, réutilisé d&apos;un projet à l&apos;autre pour industrialiser le démarrage et le déploiement des nouveaux projets.</p>
          <p className={cardText}>Développement des mécaniques de jeu d&apos;une application Tap-to-Earn.</p>
        </div>
      </Card>
      <Card index={2}>
        <div className={content}>
          <h3 className={cardTitle}>MY-SERIOUS-GAME</h3>
          <span className={cardDate}>Avril — Juillet 2024 • Stage</span>
          <p className={cardText}><strong className="text-ink">Service Informatique</strong></p>
          <p className={cardText}>Conception et développement d&apos;une application web de personnalisation de personnages 2D à partir d&apos;une bibliothèque d&apos;assets.</p>
          <p className={cardText}>Interfaces dynamiques en React, gestion de version avec Git.</p>
        </div>
      </Card>
    </div>

    <h3 className="text-xs text-muted uppercase tracking-[0.28em] font-bold mt-16 mb-8">Projet Entrepreneurial</h3>
    <Card index={1}>
      <div className={content}>
        <h3 className={cardTitle}>Sakado</h3>
        <span className={cardDate}>Déc 2025 — Présent • Programme école</span>
        <p className={cardText}>Conception de l&apos;architecture d&apos;une application mobile cross-platform en React Native : découpage applicatif et choix techniques du MVP.</p>
        <p className={cardText}>Développement du MVP, centré sur l&apos;expérience utilisateur, dans le cadre d&apos;un programme d&apos;école.</p>
      </div>
    </Card>
  </section>
);

export default Experience;
