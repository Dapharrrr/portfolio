import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  Lightbulb,
  Users,
  Compass,
  RefreshCw
} from 'lucide-react';

import {
  FaReact,
  FaNodeJs
} from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiNestjs,
  SiDocker,
  SiGithubactions,
  SiTailwindcss
} from 'react-icons/si';
import SectionHeading from './SectionHeading';

/* Les couches sont ordonnées de l'interface vers l'infrastructure : l'empilement
 * lui-même raconte la façon de concevoir, là où une liste à plat ne dit que
 * l'outillage. */
const LAYERS = [
  {
    layer: 'Interface',
    caption: 'Ce que voit l’utilisateur',
    skills: [
      { name: 'React', icon: <FaReact size={18} /> },
      { name: 'React Native', icon: <TbBrandReactNative size={18} /> },
      { name: 'Next.js', icon: <SiNextdotjs size={18} /> },
      { name: 'TypeScript', icon: <SiTypescript size={18} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={18} /> },
    ],
  },
  {
    layer: 'Services & API',
    caption: 'La logique métier',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs size={18} /> },
      { name: 'Nest.js', icon: <SiNestjs size={18} /> },
      { name: 'GraphQL', icon: <SiGraphql size={18} /> },
    ],
  },
  {
    layer: 'Données',
    caption: 'Modélisation',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql size={18} /> },
      { name: 'MongoDB', icon: <SiMongodb size={18} /> },
    ],
  },
  {
    layer: 'Infrastructure',
    caption: 'Pratiqué en contexte de formation',
    skills: [
      { name: 'Docker', icon: <SiDocker size={18} /> },
      { name: 'GitHub Actions', icon: <SiGithubactions size={18} /> },
    ],
  },
];

const SOFT_SKILLS = [
  { name: 'Curieux', icon: <Lightbulb size={18} /> },
  { name: "Esprit d'équipe", icon: <Users size={18} /> },
  { name: 'Autonomie', icon: <Compass size={18} /> },
  { name: 'Adaptabilité', icon: <RefreshCw size={18} /> },
];

const chip = 'flex items-center gap-2.5 rounded-full px-4 py-2.5 cursor-default';
const softChip = `bg-accent/8 border border-accent/25 transition-colors duration-300 hover:bg-accent/12 ${chip}`;

const BALL_RADIUS = 6;
const ARC_MS = 720;   // vol de la balle d'un anneau à l'autre
const LAND_MS = 300;  // rebonds d'arrivée
const HOP_PX = 14;    // hauteur du premier rebond
const SWELL = 0.35;   // grossissement à mi-parcours
const LEAP_MAX = 90;  // écart maximal de la balle à l'axe, en px

const easeInOutCubic = (t) =>
  (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);



const Competences = () => {
  const deckRef = useRef(null);
  const ballRef = useRef(null);
  const slabRefs = useRef([]);
  const ballAt = useRef({ x: 0, y: 0 });
  const isFirstPlacement = useRef(true);
  const isTravelling = useRef(false);
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(false);

  /* Les quatre anneaux, mesurés dans le repère du deck.
     clientTop / clientLeft valent l'épaisseur des bordures du panneau : il faut
     les rajouter, l'anneau étant positionné depuis la boîte intérieure de la
     carte quand la balle, elle, l'est depuis le deck qui n'a pas de bordure. */
  const geometry = useCallback(() => {
    const deck = deckRef.current;
    if (!deck) return null;

    const nodes = LAYERS.map((_, i) => {
      const slab = slabRefs.current[i];
      const node = slab?.querySelector('.stack-node');
      if (!slab || !node) return null;
      return {
        x: slab.offsetLeft + slab.clientLeft + node.offsetLeft + node.offsetWidth / 2,
        y: slab.offsetTop + slab.clientTop + node.offsetTop + node.offsetHeight / 2,
      };
    });
    if (nodes.some((n) => !n)) return null;

    const top = nodes[0].y;
    deck.style.setProperty('--node-x', `${nodes[0].x}px`);
    deck.style.setProperty('--rail-top', `${top}px`);
    deck.style.setProperty('--rail-h', `${nodes[nodes.length - 1].y - top}px`);
    return { nodes, top };
  }, []);

  /* Une seule passe : remplit l'axe jusqu'à la balle, puis la positionne.
     Appelée à chaque image tant que l'accordéon bouge. */
  const place = useCallback((geo, x, y, { squash = 0, swell = 0 } = {}) => {
    deckRef.current?.style.setProperty('--rail-fill', `${Math.max(0, y - geo.top)}px`);
    ballAt.current = { x, y };

    const grow = 1 + swell;
    if (ballRef.current) {
      ballRef.current.style.transform =
        `translate(${x - BALL_RADIUS}px, ${y - BALL_RADIUS}px)`
        + ` scale(${grow * (1 + 0.3 * squash)}, ${grow * (1 - 0.34 * squash)})`;
    }
  }, []);

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -15% 0px' }
    );

    observer.observe(deck);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const geo = geometry();
    if (!geo) return undefined;

    const to = geo.nodes[active];
    const from = ballAt.current;

    /* Rien à parcourir : montage, mouvement réduit, ou retour sur la couche déjà
       ouverte. Sans ce court-circuit la balle enflerait sur place. */
    if (isFirstPlacement.current || reduced || Math.abs(to.y - from.y) < 0.5) {
      isFirstPlacement.current = false;
      place(geo, to.x, to.y);
      return undefined;
    }

    isTravelling.current = true;
    let frame;
    let startedAt;

    const step = (now) => {
      if (startedAt === undefined) startedAt = now;
      const elapsed = now - startedAt;

      /* Géométrie relue à chaque image : l'accordéon déplace encore les anneaux
         pendant que la balle voyage. */
      const live = geometry() ?? geo;
      const target = live.nodes[active];

      if (elapsed < ARC_MS) {
        const u = easeInOutCubic(elapsed / ARC_MS);
        /* L'axe reste droit : c'est la balle seule qui décrit un arc, d'autant
           plus ample que les deux anneaux sont éloignés. */
        const leap = Math.min(Math.abs(target.y - from.y) / 2, LEAP_MAX);
        place(
          live,
          from.x + (target.x - from.x) * u + leap * Math.sin(Math.PI * u),
          from.y + (target.y - from.y) * u,
          { swell: SWELL * Math.sin(Math.PI * u) }
        );
        frame = requestAnimationFrame(step);
        return;
      }

      const v = Math.min((elapsed - ARC_MS) / LAND_MS, 1);
      const swing = Math.abs(Math.sin(2 * Math.PI * v)); // deux rebonds
      /* L'écrasement ne se produit qu'aux contacts (v = 0, ½, 1), amorti ensuite */
      place(live, target.x, target.y - HOP_PX * swing * (1 - v), {
        squash: Math.max(0, 1 - swing * 6) * (1 - v),
      });

      if (v < 1) frame = requestAnimationFrame(step);
      else isTravelling.current = false;
    };

    frame = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(frame);
      isTravelling.current = false;
    };
  }, [active, geometry, place]);

  /* Le layout bouge aussi hors animation : arrivée de la police display, largeur
     de fenêtre, retour à la ligne des pastilles. On resynchronise la balle sur
     toute variation — sauf pendant un vol, où c'est la boucle qui commande. */
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck || typeof ResizeObserver === 'undefined') return undefined;

    const observer = new ResizeObserver(() => {
      if (isTravelling.current) return;
      const geo = geometry();
      if (geo) place(geo, geo.nodes[active].x, geo.nodes[active].y);
    });

    observer.observe(deck);
    return () => observer.disconnect();
  }, [active, geometry, place]);

  return (
    <section id="competences" className="py-24">
      <SectionHeading label="Compétences" title="Ce avec quoi je construis" />

      <p className="text-muted text-lg max-w-2xl -mt-6 mb-16">
        De l&apos;interface au déploiement : la stack couche par couche, et les qualités
        que j&apos;apporte à chacune.
      </p>

      <div className="flex flex-col gap-16">
        <div>
          <h3 className="text-xs text-muted uppercase tracking-[0.28em] font-bold mb-8">
            Stack technique
          </h3>

          <div ref={deckRef} className={`stack-deck ${revealed ? 'is-revealed' : ''}`}>
            <span className="stack-rail" aria-hidden="true" />
            <span className="stack-rail-fill" aria-hidden="true" />
            <span ref={ballRef} className="stack-ball" aria-hidden="true" />

            {LAYERS.map(({ layer, caption, skills }, depth) => (
              <div
                key={layer}
                ref={(el) => { slabRefs.current[depth] = el; }}
                className={`stack-slab ${depth === active ? 'is-active' : ''}`}
                style={{ '--depth': depth }}
                onMouseEnter={() => setActive(depth)}
                onClick={() => setActive(depth)}
              >
                <span className="stack-node" aria-hidden="true" />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="stack-num text-accent text-xs font-bold tracking-[0.28em]">
                    {String(depth + 1).padStart(2, '0')}
                  </span>
                  <h4 className="stack-title font-display text-ink">{layer}</h4>
                  <span className="stack-caption text-sm text-muted">— {caption}</span>
                </div>

                <div className="stack-body">
                  <div>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, i) => (
                        <span
                          key={skill.name}
                          className={`stack-chip ${chip}`}
                          style={{ '--i': i }}
                        >
                          <span className="text-accent">{skill.icon}</span>
                          <span className="text-ink font-semibold text-sm">{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs text-muted uppercase tracking-[0.28em] font-bold mb-6">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {SOFT_SKILLS.map((skill) => (
              <div key={skill.name} className={softChip}>
                <span className="text-accent">{skill.icon}</span>
                <span className="text-ink font-semibold text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;
