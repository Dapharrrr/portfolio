import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

// Le thème initial est déjà posé sur <html> par le script inline de index.html
const readTheme = () => document.documentElement.getAttribute('data-theme') || 'dark';

const ThemeToggle = ({ className = '' }) => {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // navigation privée ou stockage bloqué : le thème reste valable pour la session
    }
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Passer en thème clair' : 'Passer en thème sombre'}
      title={isDark ? 'Thème clair' : 'Thème sombre'}
      className={`grid place-items-center rounded-full text-muted transition-colors duration-300 hover:text-accent ${className}`.trim()}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
