import SectionHeading from './SectionHeading';

const DEGREES = [
  {
    years: ['2024', '2025'],
    title: 'Bachelor Concepteur Développeur D\'applications',
    school: 'MyDigitalSchool — Paris',
    level: 'Titre Professionnel RNCP Niv 6',
  },
  {
    years: ['2025', '2026'],
    title: 'Master 1 — MBA Développeur Full Stack',
    school: 'MyDigitalSchool — Paris',
    level: 'Titre RNCP de niveau 7',
  },
];

const Education = () => (
  <section id="education" className="section">
    <SectionHeading id="education" title="Formation" />

    <ol className="section-body grid gap-4 sm:grid-cols-2">
      {[...DEGREES].reverse().map(({ years, title, school, level }) => (
        <li key={title} data-reveal className="card flex flex-col justify-between gap-10 p-7 sm:p-8">
          <p className="font-mono text-xs text-muted">{years[0]} — {years[1]}</p>
          <div>
            <h3 className="text-lg font-medium leading-snug tracking-[-0.01em] text-ink">{title}</h3>
            <p className="mt-2 text-sm text-muted">{school}<br />{level}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default Education;
