import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CredentialProof from './components/CredentialProof';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LivingGradientBackground from './components/LivingGradientBackground';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      <LivingGradientBackground />
      <div className="site-shell">
        <Navbar />
        <Hero />
        <Marquee />
        <Skills />
        <Experience />
        <CredentialProof />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
