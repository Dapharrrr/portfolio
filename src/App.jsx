import './App.css';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Demos from './components/Demos';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <>
    <ParticleCanvas />
    <Navbar />
    <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
      <Hero />
      <Experience />
      <Education />
      <Demos />
      <Contact />
    </div>
    <Footer />
  </>
);

export default App;
