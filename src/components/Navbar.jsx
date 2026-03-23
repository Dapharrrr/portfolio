import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'À propos', href: '#a-propos' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Formation', href: '#education' },
    { name: 'Démos', href: '#demos' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* VERSION DESKTOP : La bulle flottante (cachée sur mobile) */}
      <nav className="hidden md:flex fixed top-8 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xl border border-white/[0.08] rounded-[40px] py-2 px-4 gap-3 z-[100] shadow-[0_10px_30px_rgba(0,0,0,0.5)] whitespace-nowrap">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="text-[#f5f5f7] no-underline text-sm font-normal py-2 px-4 rounded-[20px] transition-all duration-300 hover:bg-white/10 hover:text-[#2997ff]">
            {link.name}
          </a>
        ))}
      </nav>

      {/* VERSION MOBILE : Bouton Hamburger (caché sur Desktop) */}
      <div className="md:hidden fixed top-4 right-4 z-[101]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-black/60 backdrop-blur-xl border border-white/[0.1] rounded-full text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform active:scale-95"
        >
          {isOpen ? <X size={24} className="text-[#2997ff]" /> : <Menu size={24} />}
        </button>
      </div>

      {/* VERSION MOBILE : Menu plein écran (Overlay) */}
      <div 
        className={`md:hidden fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-semibold text-[#f5f5f7] transition-all duration-300 hover:text-[#2997ff] ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${isOpen ? '100ms' : '0ms'}` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
