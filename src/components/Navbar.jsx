import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { WAYPOINTS, readRoute } from '../itinerary';
import { subscribeScroll } from '../scroll';

// Les étapes après le départ, puis le CV qui est une page à part
const navLinks = [
  ...WAYPOINTS.slice(1).map(({ id, name }) => ({ id, name, href: `#${id}` })),
  { id: 'cv', name: 'CV', href: '#/cv' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(-1);

  useEffect(() => subscribeScroll(() => {
    const route = readRoute();
    if (route) setCurrent(route.index);
  }), []);

  const currentId = WAYPOINTS[current]?.id;

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] bg-page/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6 sm:px-10">
          <a href="#a-propos" className="text-sm font-medium text-ink no-underline">Raphaël Dubost</a>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-current={link.id === currentId ? 'location' : undefined}
                className={`text-sm no-underline transition-colors duration-300 hover:text-ink ${
                  link.id === currentId ? 'text-ink' : 'text-muted'
                }`}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle className="-mr-2 h-9 w-9" />
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle className="h-10 w-10" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="grid h-10 w-10 place-items-center text-ink"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* VERSION MOBILE : Menu plein écran (Overlay) */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-[99] bg-page transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-6 px-6 pt-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              aria-current={link.id === currentId ? 'location' : undefined}
              className={`text-3xl font-medium tracking-[-0.02em] no-underline ${link.id === currentId ? 'text-ink' : 'text-muted'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
