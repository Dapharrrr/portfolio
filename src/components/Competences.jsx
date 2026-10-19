import { Lightbulb, Users, Compass, RefreshCw } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { LAYERS } from '../stack';

const SOFT_SKILLS = [
  { name: 'Curieux', icon: <Lightbulb size={18} /> },
  { name: "Esprit d'équipe", icon: <Users size={18} /> },
  { name: 'Autonomie', icon: <Compass size={18} /> },
  { name: 'Adaptabilité', icon: <RefreshCw size={18} /> },
];

/* Grille en mosaïque : l'interface, la couche la plus fournie, prend la grande
   case ; les qualités ferment la grille sur toute une ligne. */
const CARDS = [
  ...LAYERS.map(({ layer, caption, skills }) => ({ title: layer, caption, items: skills })),
  { title: 'Qualités', caption: 'Au quotidien', items: SOFT_SKILLS },
];

const SPANS = [
  'sm:col-span-2 lg:row-span-2',
  '',
  '',
  '',
  'sm:col-span-2',
];

const Competences = () => (
  <section id="competences" className="section">
    <SectionHeading id="competences" title="Compétences" />

    <div className="section-body">
      <p data-reveal className="max-w-2xl text-[clamp(1.35rem,2.4vw,1.75rem)] leading-snug tracking-[-0.015em] text-ink">
        De l&apos;interface au déploiement : la stack couche par couche, et les qualités que j&apos;apporte à chacune.
      </p>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map(({ title, caption, items }, i) => (
          <article
            key={title}
            data-reveal
            className={`card flex flex-col justify-between gap-10 p-7 ${SPANS[i]}`.trim()}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div>
              <span className="font-mono text-xs text-accent tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              {/* La grande case porte un titre à son échelle */}
              <h3 className={`mt-3 font-medium text-ink ${i ? 'text-lg tracking-[-0.01em]' : 'text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.035em]'}`}>{title}</h3>
              <p className={`text-muted ${i ? 'mt-0.5 text-sm' : 'mt-3'}`}>{caption}</p>
            </div>
            <ul className={`grid gap-x-6 gap-y-3 ${items.length > 3 ? 'grid-cols-2' : ''}`}>
              {items.map(({ name, icon }) => (
                <li key={name} className="flex items-center gap-2.5 text-sm text-body">
                  <span className="text-muted">{icon}</span>
                  {name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Competences;
