import { useRef } from 'react';
import Profil from '../assets/Raphael-D-960.jpg';
import { useScrollProgress } from '../scroll';

/* Deux lignes de crête en segments droits, dans un repère 1000 × 200 étiré sur
 * la largeur de l'écran : un aplat lointain, un aplat proche avec le sommet. */
const BACK = [[0, 120], [90, 95], [170, 110], [260, 70], [330, 88], [420, 55], [500, 80], [590, 42], [680, 74], [760, 50], [850, 85], [930, 62], [1000, 90]];
const FRONT = [[0, 150], [110, 126], [200, 140], [300, 104], [380, 120], [470, 94], [560, 118], [640, 58], [705, 92], [780, 112], [880, 96], [1000, 132]];

const toShape = (points) => `M${points.map(([x, y]) => `${x} ${y}`).join(' L')} L1000 200 L0 200 Z`;

const Hero = () => {
  // Le plan lointain descend un peu quand on quitte le Hero
  const heroRef = useRef(null);
  useScrollProgress(heroRef, 'exit');

  return (
    <header ref={heroRef} id="a-propos" className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-48">
      <div className="relative z-[1] grid items-end gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="anim-fade-up flex items-baseline gap-3 font-mono text-xs">
            <span data-waypoint="a-propos" className="text-accent tabular-nums">01</span>
            <span className="text-muted">Départ</span>
          </p>

          <h1
            className="anim-fade-up mt-8 text-[clamp(3.25rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.045em] text-ink"
            style={{ animationDelay: '80ms' }}
          >
            Raphaël Dubost
          </h1>
          <p
            className="anim-fade-up mt-5 text-[clamp(1.15rem,2vw,1.4rem)] tracking-[-0.01em] text-muted"
            style={{ animationDelay: '160ms' }}
          >
            Développeur web full stack
          </p>

          <p
            className="anim-fade-up mt-10 max-w-lg text-lg leading-relaxed text-body"
            style={{ animationDelay: '240ms' }}
          >
            Passionné par la création d&apos;interfaces fluides et d&apos;architectures robustes, je conçois des applications web et mobile modernes.
          </p>

          <div className="anim-fade-up mt-10 flex flex-wrap items-center gap-x-8 gap-y-4" style={{ animationDelay: '320ms' }}>
            <a href="#contact" className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-page no-underline transition-opacity hover:opacity-80">
              Me contacter
            </a>
            <a href="#/cv" className="link-arrow text-sm font-medium text-ink">Voir mon CV</a>
          </div>

          <p className="anim-fade-up mt-12 flex items-center gap-2.5 text-sm text-muted" style={{ animationDelay: '400ms' }}>
            <span className="availability-dot" aria-hidden="true" />
            Recherche d&apos;alternance (12 mois) — Sept 2026
          </p>
        </div>

        <div className="anim-fade-up lg:col-span-4 lg:justify-self-end" style={{ animationDelay: '200ms' }}>
          <img
            src={Profil}
            alt="Raphaël Dubost"
            width={640}
            height={960}
            className="aspect-[4/5] w-44 rounded-2xl object-cover sm:w-56 lg:w-64"
          />
        </div>
      </div>

      <div className="hero-range full-bleed" aria-hidden="true">
        <svg viewBox="0 0 1000 200" preserveAspectRatio="none">
          <path className="is-back" d={toShape(BACK)} />
          <path className="is-front" d={toShape(FRONT)} />
        </svg>
      </div>
    </header>
  );
};

export default Hero;
