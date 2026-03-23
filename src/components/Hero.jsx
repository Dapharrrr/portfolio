import Profil from '../assets/Raphael-D.jpg';

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
        <div className="inline-block py-2 px-4 bg-[#2997ff]/10 text-[#2997ff] rounded-[20px] text-sm font-semibold tracking-[0.5px] mb-8 border border-[#2997ff]/20">
          Recherche d&apos;alternance (12 mois) — Sept 2026
        </div>

        <h1 className="gradient-text text-[clamp(3rem,8vw,5.5rem)] font-bold tracking-[-0.05em] leading-[1.1] mb-2">
          Raphaël<br />Dubost.
        </h1>

        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-normal text-[#f5f5f7] mb-8">
          Développeur Web Full Stack en apprentissage
        </h2>

        <div className="max-w-xl text-[#86868b] text-[1.1rem] leading-relaxed space-y-4">
          <p>
            Passionné par la création d'interfaces fluides et d'architectures robustes, je conçois des applications web et mobile modernes.
          </p>
          <p>
            Actuellement en formation, je suis à la recherche d'une alternance de 12 mois à partir de septembre 2026 pour mettre mes compétences au service d'une équipe ambitieuse.
          </p>
        </div>

        <div className="mt-10">
          <a href="#contact" className="inline-block py-3 px-8 bg-white text-black font-semibold rounded-full hover:bg-[#2997ff] hover:text-white transition-colors duration-300">
            Me contacter
          </a>
        </div>
      </div>

      <div className="flex-shrink-0 flex justify-center [perspective:1000px] w-full lg:w-auto mb-10 lg:mb-0">
        <div
          className="w-[240px] sm:w-[300px] lg:w-[320px] aspect-[4/5] rounded-[30px] overflow-hidden transition-transform ease-out duration-200 [transform-style:preserve-3d] shadow-2xl shadow-[#2997ff]/10"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img 
            src={Profil} 
            alt="Raphaël Dubost" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

    </header>
  );
};

export default Hero;
