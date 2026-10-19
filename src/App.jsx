import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competences from './components/Competences';
import Experience from './components/Experience';
import Education from './components/Education';
import Demos from './components/Demos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CV from './components/CV';

// Routage minimal par hash : les ancres de section restent intactes,
// seul un hash commençant par "#/" désigne une page.
const useHashRoute = () => {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return hash;
};

/* Apparition douce : chaque bloc marqué `data-reveal` remonte en fondu la
   première fois qu'il entre à l'écran. */
const useReveal = (enabled) => {
  useEffect(() => {
    if (!enabled) return undefined;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [enabled]);
};

const App = () => {
  const hash = useHashRoute();
  const isCV = hash.startsWith('#/cv');
  useReveal(!isCV);

  if (isCV) return <CV />;

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1120px] px-6 sm:px-10">
        <Hero />
        <Competences />
        <Experience />
        <Education />
        <Demos />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
