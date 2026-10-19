import SectionHeading from './SectionHeading';

const STEPS = [
  {
    when: 'Avr. 2024',
    company: 'MY-SERIOUS-GAME',
    date: 'Avril — Juillet 2024 • Stage',
    team: 'Service Informatique',
    lines: [
      'Conception et développement d\'une application web de personnalisation de personnages 2D à partir d\'une bibliothèque d\'assets.',
      'Interfaces dynamiques en React, gestion de version avec Git.',
    ],
  },
  {
    when: 'Sept. 2024',
    company: 'MY-SERIOUS-GAME',
    date: 'Sept 2024 — Août 2025 • Alternance',
    team: 'Service Informatique',
    lines: [
      'Conception d\'un starter web "out-of-the-box" : un socle technique commun, réutilisé d\'un projet à l\'autre pour industrialiser le démarrage et le déploiement des nouveaux projets.',
      'Développement des mécaniques de jeu d\'une application Tap-to-Earn.',
    ],
  },
  {
    when: 'Sept. 2025',
    company: 'AUGMANTED',
    date: 'Sept 2025 — Présent • Alternance',
    team: 'Service Informatique',
    lines: [
      'Maintenance évolutive du parc applicatif interne : garantir la pérennité et la continuité de service des outils métier.',
      'Poursuite du développement de l\'application métier initiée en stage : optimisation logicielle et évolutions fonctionnelles sur un existant.',
    ],
  },
  {
    when: 'Déc. 2025',
    kicker: 'Projet Entrepreneurial',
    company: 'Sakado',
    date: 'Déc 2025 — Présent • Programme école',
    lines: [
      'Conception de l\'architecture d\'une application mobile cross-platform en React Native : découpage applicatif et choix techniques du MVP.',
      'Développement du MVP, centré sur l\'expérience utilisateur, dans le cadre d\'un programme d\'école.',
    ],
  },
];

/**
 * Parcours du plus récent au plus ancien, une carte par poste. Un point vert
 * signale les postes en cours.
 */
const Experience = () => (
  <section id="experience" className="section">
    <SectionHeading id="experience" title="Expérience" />

    <ol className="section-body space-y-4">
      {[...STEPS].reverse().map((step) => {
        const [period, kind] = step.date.split(' • ');
        return (
          <li key={`${step.company}-${step.when}`} data-reveal className="card p-7 sm:p-9">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-xl font-medium tracking-[-0.01em] text-ink">{step.company}</h3>
              <p className="flex items-center gap-2 font-mono text-xs text-muted">
                {period.includes('Présent') && <span className="availability-dot" aria-hidden="true" />}
                {period}
              </p>
            </div>
            <p className="mt-1 text-sm text-muted">
              {[step.kicker, kind, step.team].filter(Boolean).join(' · ')}
            </p>
            <div className="mt-6 max-w-2xl space-y-3 leading-relaxed text-body">
              {step.lines.map((line) => <p key={line}>{line}</p>)}
            </div>
          </li>
        );
      })}
    </ol>
  </section>
);

export default Experience;
