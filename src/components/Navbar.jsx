import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

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
    { name: 'CV', href: '#/cv' },
  ];

  return (
    <>
      {/* VERSION DESKTOP : La bulle flottante (cachée sur mobile) */}
      <nav className="hidden md:flex fixed top-8 left-1/2 -translate-x-1/2 items-center surface-raised backdrop-blur-xl border border-line rounded-[40px] py-2 px-4 gap-1 z-[100] whitespace-nowrap">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="text-body no-underline text-sm py-2 px-4 rounded-[20px] transition-colors duration-300 hover:bg-accent/10 hover:text-accent">
            {link.name}
          </a>
        ))}
        <span className="mx-1 h-5 w-px bg-line" aria-hidden="true" />
        <ThemeToggle className="h-9 w-9 hover:bg-accent/10" />
      </nav>

      {/* VERSION MOBILE : Bouton Hamburger + bascule de thème (cachés sur Desktop) */}
      <div className="md:hidden fixed top-4 right-4 z-[101] flex items-center gap-2">
        <ThemeToggle className="h-11 w-11 surface-raised backdrop-blur-xl border border-line" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 surface-raised backdrop-blur-xl border border-line rounded-full text-ink transition-transform active:scale-95"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isOpen ? <X size={24} className="text-accent" /> : <Menu size={24} />}
        </button>
      </div>

      {/* VERSION MOBILE : Menu plein écran (Overlay) */}
      <div
        className={`md:hidden fixed inset-0 z-[100] bg-page/95 backdrop-blur-xl transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-display text-3xl text-ink transition-all duration-300 hover:text-accent ${
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
