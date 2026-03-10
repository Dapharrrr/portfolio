const linkClass = 'text-[#f5f5f7] no-underline text-sm font-normal py-2 px-3 sm:px-4 rounded-[20px] transition-all duration-300 hover:bg-white/10 hover:text-[#2997ff]';

const Navbar = () => (
  <nav className="fixed top-6 sm:top-8 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xl border border-white/[0.08] rounded-[40px] py-2 px-2 sm:px-4 flex gap-1 sm:gap-3 z-[100] shadow-[0_10px_30px_rgba(0,0,0,0.5)] whitespace-nowrap">
    <a href="#a-propos" className={linkClass}>A propos de moi</a>
    <a href="#experience" className={linkClass}>Expérience</a>
    <a href="#education" className={linkClass}>Formation</a>
    <a href="#demos" className={linkClass}>Démos</a>
    <a href="#contact" className={linkClass}>Contact</a>
  </nav>
);

export default Navbar;
