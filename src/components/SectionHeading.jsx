/**
 * Titre de section repris du CV : petit label bleu très espacé, titre display,
 * puis le filet fin qui sépare les blocs.
 */
const SectionHeading = ({ label, title }) => (
  <div className="mb-12">
    <p className="text-accent text-xs font-bold uppercase tracking-[0.28em] mb-3">{label}</p>
    <h2 className="font-display text-[clamp(1.9rem,4.5vw,2.9rem)] leading-tight text-ink">{title}</h2>
    <hr className="rule mt-6" />
  </div>
);

export default SectionHeading;
