import { Mail } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-24">
    <h2 className="text-[2.5rem] font-semibold mb-12 tracking-[-0.03em] text-center text-[#f5f5f7]">Travaillons Ensemble</h2>
    <div className="flex flex-col items-center text-center gap-8">
      <p className="text-[#86868b] max-w-[500px] leading-relaxed">
        Je suis à la recherche d'une alternance de 12 mois à partir de septembre 2026
        (Rythme : 2 semaines entreprise / 1 semaine école).
      </p>
      <a
        href="mailto:dubost.rapahel1@gmail.com?subject=Proposition%20d%27Alternance%20%E2%80%94%20Rapha%C3%ABl%20Dubost"
        className="inline-flex items-center gap-2 justify-center bg-[#f5f5f7] text-black no-underline py-4 px-8 rounded-[30px] text-lg font-semibold transition-all duration-200 shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover:scale-105 hover:bg-white"
      >
        <Mail size={20} />
        Me contacter
      </a>
    </div>
  </section>
);

export default Contact;
