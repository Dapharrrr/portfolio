import Profil from '../assets/Raphael-D-960.jpg';

const NAME_LINES = ['Raphaël', 'Dubost.'];
const TITLE = 'Développeur Web Full Stack';
const NAME_LENGTH = NAME_LINES.join('').length;

/** Découpe le nom en lettres numérotées d'une ligne à l'autre : l'index sert à
 *  la fois à poser la couleur sur la rampe encre → bleu et à décaler la vague. */
const buildName = () => {
  let index = 0;
  return NAME_LINES.map((line) => ({
    line,
    letters: [...line].map((char) => {
      const ratio = Math.round((index / (NAME_LENGTH - 1)) * 100);
      index += 1;
      return { char, ratio, delay: index * 40 };
    }),
  }));
};

const NAME = buildName();
const LETTER_START = 520; // ms : le métier se compose après les deux lignes du nom
const LETTER_STEP = 26;

/** Découpe le métier en mots (pour ne pas casser le retour à la ligne) puis en lettres. */
const buildTitle = () => {
  let index = 0;
  return TITLE.split(' ').map((word) => ({
    word,
    letters: [...word].map((char) => ({ char, delay: LETTER_START + index++ * LETTER_STEP })),
  }));
};

const TITLE_WORDS = buildTitle();

const Hero = () => {
  const handleMouseMove = (e) => {
    const frame = e.currentTarget;
    const rect = frame.getBoundingClientRect();
    const rotateX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -15;
    const rotateY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 15;

    frame.style.transform = `perspective(1000px) scale3d(1.02, 1.02, 1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <header id='a-propos' className="min-h-screen flex flex-col-reverse justify-center gap-10 pt-24 lg:flex-row lg:items-center lg:justify-between lg:gap-16">

      <div className="flex-1 min-w-0 flex flex-col items-start text-left">
        <div className="anim-fade-up inline-block py-2 px-4 bg-accent/10 text-accent rounded-[20px] text-sm font-semibold tracking-[0.5px] mb-8 border border-accent/20">
          Recherche d&apos;alternance (12 mois) — Sept 2026
        </div>

        {/* pt/-mt : de la marge à l'intérieur du masque, sinon la lettre soulevée par la vague est rognée */}
        <h1
          className="name-wave font-display text-[clamp(2.75rem,7vw,4.75rem)] leading-[1.12] mb-3"
          aria-label={NAME_LINES.join(' ')}
        >
          {NAME.map(({ line, letters }, lineIndex) => (
            <span key={line} className="block overflow-hidden pt-[0.2em] -mt-[0.2em] pb-[0.06em]" aria-hidden="true">
              <span className="anim-rise block" style={{ animationDelay: `${120 + lineIndex * 140}ms` }}>
                {letters.map(({ char, ratio, delay }, i) => (
                  <span
                    key={`${char}-${i}`}
                    className="name-letter"
                    style={{
                      color: `color-mix(in oklab, var(--t-ink), var(--t-accent) ${ratio}%)`,
                      animationDelay: `${delay}ms`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </h1>

        <h2
          className="text-[clamp(1.25rem,2.6vw,1.75rem)] uppercase tracking-[0.14em] font-semibold text-accent mb-8"
          aria-label={TITLE}
        >
          {TITLE_WORDS.map(({ word, letters }, wordIndex) => (
            <span key={word} className="inline-block whitespace-nowrap" aria-hidden="true">
              {letters.map(({ char, delay }, i) => (
                <span
                  key={`${char}-${i}`}
                  className="anim-letter inline-block"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {char}
                </span>
              ))}
              {wordIndex < TITLE_WORDS.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h2>

        <p
          className="anim-fade-up max-w-xl text-body text-[1.05rem] leading-relaxed"
          style={{ animationDelay: '900ms' }}
        >
          Passionné par la création d&apos;interfaces fluides et d&apos;architectures robustes, je conçois des applications web et mobile modernes.
        </p>

        <div className="anim-fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: '1020ms' }}>
          <a href="#contact" className="inline-block py-3 px-8 bg-accent text-[var(--t-on-accent)] font-semibold rounded-full no-underline transition-transform duration-300 hover:scale-105">
            Me contacter
          </a>
          <a href="#/cv" className="inline-block py-3 px-8 border border-accent/40 text-accent font-semibold rounded-full no-underline transition-colors duration-300 hover:bg-accent/10">
            Voir mon CV
          </a>
        </div>
      </div>

      {/* L'animation est portée par le wrapper : sinon son transform final écraserait le tilt */}
      <div className="anim-fade-up flex-shrink-0 flex justify-center [perspective:1000px] w-full lg:w-auto mb-10 lg:mb-0" style={{ animationDelay: '200ms' }}>
        <div
          className="w-[240px] sm:w-[300px] lg:w-[320px] aspect-[4/5] rounded-[30px] overflow-hidden transition-transform ease-out duration-200 [transform-style:preserve-3d] shadow-[var(--t-card-shadow)] border border-line"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={Profil}
            alt="Raphaël Dubost"
            width={640}
            height={960}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </header>
  );
};

export default Hero;
