import Profil from '../assets/Raphael-D.jpg';

const HARD_SKILLS = ['React', 'Next.js', 'TypeScript', 'Node.js (Nest.js)', 'MongoDB', 'PostgreSQL', 'GraphQL'];
const SOFT_SKILLS = ["Curieux", "Esprit d'équipe", "Autonomie", "Adaptabilité"];

const pillBase = 'py-2 px-4 rounded-[30px] text-sm transition-all duration-300 hover:bg-[#f5f5f7] hover:text-black cursor-default';

const Hero = () => {
  const handleMouseMove = (e) => {
    const frame = e.currentTarget;
    const rect = frame.getBoundingClientRect();
    const rotateX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -15;
    const rotateY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 15;
    frame.style.transform = `perspective(1000px) scale3d(1.02,1.02,1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <header id='a-propos' className="min-h-screen flex flex-col-reverse items-center justify-center gap-10 pt-24 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
      <div className="flex-1 min-w-0 flex flex-col items-center text-center lg:items-start lg:text-left">
        <div className="inline-block py-2 px-4 bg-[#2997ff]/10 text-[#2997ff] rounded-[20px] text-sm font-semibold tracking-[0.5px] mb-8 border border-[#2997ff]/20">
          Recherche d&apos;alternance (12 mois) — Sept 2026
        </div>
        <h1 className="gradient-text text-[clamp(3rem,8vw,5.5rem)] font-bold tracking-[-0.05em] leading-[1.1] mb-4">
          Raphaël<br />Dubost.
        </h1>
        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-normal text-[#86868b] mb-10">
          Développeur Web Full Stack
        </h2>

        <div className="mt-2">
          <div className="text-xs text-[#86868b] uppercase tracking-[2px] mb-3 mt-5 font-semibold">Hard Skills</div>
          <div className="flex flex-wrap gap-[10px] justify-center lg:justify-start">
            {HARD_SKILLS.map(s => (
              <span key={s} className={`${pillBase} bg-white/5 border border-white/10 text-[#f5f5f7]`}>{s}</span>
            ))}
          </div>
          <div className="text-xs text-[#86868b] uppercase tracking-[2px] mb-3 mt-5 font-semibold">Soft Skills</div>
          <div className="flex flex-wrap gap-[10px] justify-center lg:justify-start">
            {SOFT_SKILLS.map(s => (
              <span key={s} className={`${pillBase} bg-[#2997ff]/5 border border-[#2997ff]/30 text-[#e0f0ff]`}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 flex justify-center [perspective:1000px]">
        <div
          className="w-[240px] sm:w-[300px] lg:w-[320px] aspect-[4/5] rounded-[30px] overflow-hidden transition-transform ease-out duration-100 [transform-style:preserve-3d]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img src={Profil} alt="Raphaël Dubost" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
