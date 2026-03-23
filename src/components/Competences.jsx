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
  SiGraphql 
} from 'react-icons/si';

const HARD_SKILLS = [
  { name: 'React', icon: <FaReact size={20} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={20} /> },
  { name: 'TypeScript', icon: <SiTypescript size={20} /> },
  { name: 'Node.js (Nest.js)', icon: <FaNodeJs size={20} /> },
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

const Competences = () => {
  return (
    <section id="competences" className="py-24 w-full flex flex-col items-start">

      <div className="text-left mb-16 w-full max-w-5xl">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#f5f5f7] mb-4">
          Mes <span className="text-[#2997ff]">Compétences</span>
        </h2>
        <p className="text-[#86868b] text-lg max-w-2xl">
          Les technologies et qualités que j&apos;utilise au quotidien pour concevoir des expériences web performantes.
        </p>
      </div>

      <div className="w-full max-w-5xl flex flex-col gap-16">

        {/* HARD SKILLS */}
        <div>
          <h3 className="text-sm text-[#86868b] uppercase tracking-[3px] font-semibold mb-8 text-left">
            Hard Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {HARD_SKILLS.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-default group"
              >
                <div className="text-[#2997ff] group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-[#f5f5f7] font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div>
          <h3 className="text-sm text-[#86868b] uppercase tracking-[3px] font-semibold mb-8 text-left">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SOFT_SKILLS.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#2997ff]/5 border border-[#2997ff]/20 hover:bg-[#2997ff]/10 hover:-translate-y-1 transition-all duration-300 cursor-default group"
              >
                <div className="text-[#2997ff] group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-[#e0f0ff] font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Competences;
