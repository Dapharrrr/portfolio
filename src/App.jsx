import { useEffect, useState } from 'react';
import './App.css';
import ContourCanvas from './components/ContourCanvas';
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

const App = () => {
  const hash = useHashRoute();

  if (hash.startsWith('#/cv')) return <CV />;

  return (
    <>
      <ContourCanvas />
      <Navbar />
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <Hero />
        <Competences />
        <Experience />
        <Education />
        <Demos />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
