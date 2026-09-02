import { useEffect, useRef, useState } from 'react';

const TILT = 4; // degrés max d'inclinaison au survol

/**
 * Trois déclinaisons du même vocabulaire : l'orientation du dégradé de surface,
 * le bord où se trace le filet d'accent et la direction d'entrée changent.
 * Assez pour que deux cartes voisines ne soient jamais identiques.
 */
const VARIANTS = [
  {
    sheen: 'bg-[radial-gradient(120%_90%_at_85%_0%,var(--t-spotlight-far),transparent_60%)]',
    edge: 'bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 group-hover/card:scale-x-100',
    enter: 'translate-y-10',
  },
  {
    sheen: 'bg-[radial-gradient(120%_90%_at_10%_100%,var(--t-spotlight-far),transparent_60%)]',
    edge: 'top-0 left-0 h-full w-[3px] origin-top scale-y-0 group-hover/card:scale-y-100',
    enter: 'translate-y-10 -translate-x-5',
  },
  {
    sheen: 'bg-[radial-gradient(120%_90%_at_100%_100%,var(--t-spotlight-far),transparent_60%)]',
    edge: 'top-0 right-0 h-[3px] w-full origin-right scale-x-0 group-hover/card:scale-x-100',
    enter: 'translate-y-10 translate-x-5',
  },
];

/**
 * Carte du portfolio. Le wrapper gère l'apparition au scroll ; la carte
 * elle-même bascule légèrement vers le curseur et son ombre s'ouvre, ce qui la
 * décolle de la page au lieu de la décorer.
 */
const Card = ({ children, className = '', index = 0, ...props }) => {
  const wrapperRef = useRef(null);
  const variant = VARIANTS[index % VARIANTS.length];

  // Sans animation demandée, la carte est visible dès le premier rendu
  const [revealed, setRevealed] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (revealed) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px' }
    );

    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [revealed]);

  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);

    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -TILT;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * TILT;
    el.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.015)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <div
      ref={wrapperRef}
      className={`h-full transition-all duration-700 ease-out ${
        revealed ? 'translate-x-0 translate-y-0 opacity-100' : `${variant.enter} opacity-0`
      }`}
      style={{ transitionDelay: `${(index % VARIANTS.length) * 110}ms` }}
    >
      <div
        className={`card group/card h-full border border-line rounded-3xl p-8 sm:p-10 relative cursor-default overflow-hidden hover:border-accent/40 ${className}`.trim()}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Lumière rasante propre à la variante : donne son épaisseur à la surface */}
        <span aria-hidden="true" className={`pointer-events-none absolute inset-0 opacity-60 ${variant.sheen}`} />
        {children}
        <span
          aria-hidden="true"
          className={`absolute bg-accent transition-transform duration-500 ease-out ${variant.edge}`}
        />
      </div>
    </div>
  );
};

export default Card;
