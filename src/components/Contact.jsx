import SectionHeading from './SectionHeading';

/* Le sommet : un seul bloc inversé, le plus contrasté de la page */
const Contact = () => (
  <section id="contact" className="section">
    <SectionHeading id="contact" title="Contact" />

    <div className="section-body card-invert p-8 sm:p-14" data-reveal>
      <p className="text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1] tracking-[-0.04em]">
        Travaillons ensemble.
      </p>
      <p className="mt-8 max-w-xl text-lg leading-relaxed opacity-70">
        Je suis à la recherche d&apos;une alternance de 12 mois à partir de septembre 2026 (Rythme : 2 semaines entreprise / 1 semaine école).
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a
          href="mailto:dubost.raphael1@gmail.com?subject=Proposition%20d%27Alternance%20%E2%80%94%20Rapha%C3%ABl%20Dubost"
          className="rounded-full bg-page px-6 py-3 text-sm font-medium text-ink no-underline transition-opacity hover:opacity-85"
        >
          Me contacter
        </a>
        <a href="#/cv" className="link-arrow text-sm font-medium text-page hover:!text-page hover:opacity-70">Consulter mon CV</a>
      </div>
    </div>
  </section>
);

export default Contact;
