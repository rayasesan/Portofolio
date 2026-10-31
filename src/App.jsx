import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CredentialProof from './components/CredentialProof';
import Projects from './components/Projects';
import ProjectPage from './components/ProjectPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useScrollReveal } from './hooks/useScrollReveal';
import { projectPages } from './data/projectPages';

// Project pages live at #/projects/<slug>; any other hash is a home section.
const homeTitle = document.title;
const pageFromHash = (hash) => projectPages.find((page) => hash === `#/projects/${page.slug}`);

function App() {
  useScrollReveal();
  const [hash, setHash] = useState(window.location.hash);
  const page = pageFromHash(hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (page) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.title = `${page.title} | Raya Sesan Firdaus`;
    } else {
      document.title = homeTitle;
      if (hash.length > 1) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
    }
  }, [page, hash]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      {page ? (
        <ProjectPage key={page.slug} page={page} />
      ) : (
        <>
          <Hero />
          <Marquee />
          <Skills />
          <Experience />
          <CredentialProof />
          <Projects />
        </>
      )}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
