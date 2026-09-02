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
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiNestjs
} from 'react-icons/si';
import SectionHeading from './SectionHeading';

const HARD_SKILLS = [
  { name: 'React', icon: <FaReact size={20} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={20} /> },
  { name: 'TypeScript', icon: <SiTypescript size={20} /> },
  { name: 'Node.js', icon: <FaNodeJs size={20} /> },
  { name: 'Nest.js', icon: <SiNestjs size={20} /> },
  { name: 'MongoDB', icon: <SiMongodb size={20} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={20} /> },
  { name: 'GraphQL', icon: <SiGraphql size={20} /> },
];

const SOFT_SKILLS = [
  { name: 'Curieux', icon: <Lightbulb size={20} /> },
  { name: "Esprit d'équipe", icon: <Users size={20} /> },
  { name: 'Autonomie', icon: <Compass size={20} /> },
  { name: 'Adaptabilité', icon: <RefreshCw size={20} /> },
];

const Competences = () => (
  <section id="competences" className="py-24">
    <SectionHeading label="Compétences" title="Ce avec quoi je construis" />

    <p className="text-muted text-lg max-w-2xl -mt-6 mb-16">
      Les technologies et qualités que j&apos;utilise au quotidien pour concevoir des expériences web performantes.
    </p>

    <div className="flex flex-col gap-14">
      <div>
        <h3 className="text-xs text-muted uppercase tracking-[0.28em] font-bold mb-6">Hard Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {HARD_SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="surface-raised flex items-center gap-3 p-4 rounded-2xl border border-line transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[var(--t-card-shadow-hover)] cursor-default group"
            >
              <div className="text-accent transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-ink font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs text-muted uppercase tracking-[0.28em] font-bold mb-6">Soft Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SOFT_SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 p-4 rounded-2xl bg-accent/8 border border-accent/25 shadow-[var(--t-card-shadow)] transition-all duration-300 hover:-translate-y-1.5 hover:bg-accent/12 hover:shadow-[var(--t-card-shadow-hover)] cursor-default group"
            >
              <div className="text-accent transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <span className="text-ink font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Competences;
