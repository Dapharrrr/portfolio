import { 
  Lightbulb,
  Users,
  Compass,
  RefreshCw
} from 'lucide-react';

const ReactIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
    <circle cx="0" cy="0" r="2.05" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextJsIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128ZM84.7212 95.8906L44.375 42H38V86H44.1875V51.0156L80.5 99.5C81.9333 98.412 83.3553 97.2025 84.7212 95.8906ZM90 42H83.8125V86H90V42Z" />
  </svg>
);

const TypeScriptIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 2h20v20H2V2zm10.669 14.156c-.23-1.002-.516-1.579-1.349-1.956-1.121-.497-1.334-.735-1.334-1.29 0-.649.525-1.071 1.34-1.071.745 0 1.258.375 1.543 1.054l1.637-.996c-.477-1.139-1.545-1.841-3.155-1.841-1.884 0-3.23.966-3.23 2.825 0 1.91 1.455 2.536 2.861 3.12 1.096.444 1.294.697 1.294 1.353 0 .764-.694 1.156-1.554 1.156-.991 0-1.74-.471-2.133-1.309l-1.688 1a3.614 3.614 0 0 0 3.842 2.112c2.164 0 3.528-1.082 3.528-2.936a2.805 2.805 0 0 0-.602-1.221zM7.185 10.126H11V8.291H1.411v1.835h3.834v9.648h1.94v-9.648z"/>
  </svg>
);

const NodeJsIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" fill="currentColor">
    <path d="M64 4.544c-1.39 0-2.836.438-4.062 1.12L15.362 31.396a8.218 8.218 0 0 0-4.085 7.042v51.104c0 2.924 1.59 5.674 4.103 7.13L60.01 122.42c1.23.712 2.587 1.037 3.99 1.037 1.413 0 2.768-.328 4.02-1.052L112.553 96.69A8.106 8.106 0 0 0 116.717 89.6V38.455c0-2.894-1.61-5.656-4.087-7.114L68.086 5.666a8.1 8.1 0 0 0-4.086-1.122zm26.234 32.44v41.674H81.71v-27.182c0-7.8-2.83-11.854-9.873-11.854-3.66 0-7.397 1.353-9.914 3.737v35.3h-8.52V36.983h8.52v5.82c4.14-5.065 9.176-7.058 14.88-7.058 9.183 0 13.435 5.518 13.435 15.34L90.237 36.98z"/>
  </svg>
);

const MongoDbIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.96 0c0 0-1.88.6-3.15 2.1-1.37 1.6-1.55 3.54-1.55 3.54s-.32 4.14 1.25 7.24c1.17 2.3 2.15 4.1 2.5 5.2.39 1.14.36 2.05.3 2.92.06.01.12.01.18.01 3.51 0 5.43-1.6 5.43-1.6.01 0-.15-2.26-1.35-4.47-1.47-3-1.9-4.32-2.14-5.32-.47-1.97-.24-3.4-.24-3.4 0-.82-.26-1.35-.4-1.5-.47-.5-.49-1.99-.49-1.99s.61 2.1 1.54 3.53c1.7 2.65 3.8 6.54 2.8 9.9 0 0-3.35 1.76-4.99 1.84.05-.72.08-1.46-.07-2.14-.38-1.5-1.57-3.6-2.9-6-1.6-2.9-2.31-5.45-2.28-7.46.03-2.1.8-3.4 2.63-4.96C11.66.42 11.96 0 11.96 0zM9 19c.1 2.3 3.1 4.7 3.1 4.7s2.5-1.8 2.8-4.4c-.1.3-1 .5-2.7.5-1.7 0-3-.3-3.2-.8z"/>
  </svg>
);

const PostgreSqlIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.25 18c-1.31 0-2.58.5-3.55 1.34-1.07-1.26-2.29-3.26-2.02-5.46.21-.05.42-.09.64-.13.91-.18 1.83-.3 2.75-.4l-.06-.51c-.93.1-1.86.21-2.79.38-.28.06-.55.12-.83.18-.08-.47-.13-.97-.13-1.49 0-.32.02-.65.05-.98.81.08 1.62.15 2.45.2l.06-.49c-.83-.05-1.65-.12-2.47-.21.08-.66.21-1.31.39-1.93.68.27 1.34.54 2 .8zM12 2C6.48 2 2 6.48 2 12c0 2.21.72 4.25 1.94 5.91l1.58-15.01L12 2zm3.32 17.07c-1.47 1.09-3.3 1.96-5.32 2.69V6.01L6.15 19.46v-.01A9.972 9.972 0 0 0 12 22v-3.72l-.02-.1h.47v2.79c1.94-.69 3.65-1.57 5.06-2.59l-.02-.03-.89.89-1.38-4.14c.8-1.12 2.1-1.85 3.55-1.85 2.41 0 4.38 1.96 4.38 4.36s-1.96 4.36-4.38 4.36z"/>
  </svg>
);

const GraphQlIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-.68 0-1.25.56-1.25 1.25S11.32 4.5 12 4.5s1.25-.56 1.25-1.25S12.68 2 12 2zm-6.05 3.53C5.51 5.25 5 5.58 4.7 6.03c-.3.45-.25 1.05.13 1.45.38.4.98.48 1.45.18.47-.3.73-.83.6-1.35-.13-.53-.58-.9-1.11-.9-.05 0-.1 0-.15.03zm12.1 0v.02c-.52 0-.96.35-1.11.86-.14.5.11 1.05.57 1.36.46.3 1.07.24 1.45-.15.38-.39.43-1 .14-1.45s-.8-.74-1.24-.74-.01 0-.01 0zM3.56 10.66c-.66.08-1.13.71-.97 1.35.15.65.77 1.1 1.45 1.05s1.21-.6 1.15-1.27c-.06-.67-.6-1.22-1.27-1.22-.05 0-.1 0-.15.04zm16.88 0c-.04-.03-.09-.04-.14-.04-.68 0-1.22.54-1.27 1.21-.06.67.46 1.31 1.14 1.37.68.06 1.3-.4 1.45-1.05s-.3-1.27-.97-1.35c.01-.01 0-.01-.13-.01zM8.32 15.62c-.17-.18-.42-.25-.66-.18-.63.16-1.04.81-.88 1.45.16.63.81 1.04 1.45.88.63-.16 1.04-.81.88-1.45-.1-.38-.41-.65-.79-.7zm8.01 0c-.1.01-.22.04-.32.12-.55.42-.58 1.22-.07 1.68.51.46 1.31.35 1.69-.24s.24-1.38-.3-1.7c-.2-.1-.45-.1-.7-.1zm-4.33 3.88c-.68 0-1.25.56-1.25 1.25 0 .68.56 1.25 1.25 1.25.68 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25z"/>
  </svg>
);

const HARD_SKILLS = [
  { name: 'React', icon: <ReactIcon size={20} /> },
  { name: 'Next.js', icon: <NextJsIcon size={20} /> },
  { name: 'TypeScript', icon: <TypeScriptIcon size={20} /> },
  { name: 'Node.js (Nest.js)', icon: <NodeJsIcon size={20} /> },
  { name: 'MongoDB', icon: <MongoDbIcon size={20} /> },
  { name: 'PostgreSQL', icon: <PostgreSqlIcon size={20} /> },
  { name: 'GraphQL', icon: <GraphQlIcon size={20} /> },
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

      {/* Alignement à gauche pour l'en-tête */}
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
