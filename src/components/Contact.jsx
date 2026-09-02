import { Mail, FileText } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact = () => (
  <section id="contact" className="py-24">
    <SectionHeading label="Contact" title="Travaillons ensemble" />
    <div className="flex flex-col items-start gap-8">
      <p className="text-body max-w-[560px] leading-relaxed text-lg">
        Je suis à la recherche d&apos;une alternance de 12 mois à partir de septembre 2026
        (Rythme : 2 semaines entreprise / 1 semaine école).
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:dubost.raphael1@gmail.com?subject=Proposition%20d%27Alternance%20%E2%80%94%20Rapha%C3%ABl%20Dubost"
          className="inline-flex items-center gap-2 justify-center bg-accent text-[var(--t-on-accent)] no-underline py-4 px-8 rounded-[30px] text-lg font-semibold transition-transform duration-200 hover:scale-105"
        >
          <Mail size={20} />
          Me contacter
        </a>
        <a
          href="#/cv"
          className="inline-flex items-center gap-2 justify-center border border-accent/40 text-accent no-underline py-4 px-8 rounded-[30px] text-lg font-semibold transition-colors duration-200 hover:bg-accent/10"
        >
          <FileText size={20} />
          Consulter mon CV
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
