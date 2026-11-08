import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SEO from './components/SEO';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const placeholderHeights = {
  about: '100vh',
  experience: '100vh',
  projects: '1080px',
  contact: '100vh',
  footer: '420px',
};

function SectionPlaceholder({ id, name }) {
  return (
    <div
      id={id}
      className={`section-placeholder section-placeholder--${name}`}
      style={{ minHeight: placeholderHeights[name] }}
      aria-hidden="true"
    />
  );
}

function DeferredSection({ id, name, children }) {
  const placeholderRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!id) return undefined;

    const loadForHash = () => {
      if (window.location.hash === `#${id}`) setShouldLoad(true);
    };

    loadForHash();
    window.addEventListener('hashchange', loadForHash);
    return () => window.removeEventListener('hashchange', loadForHash);
  }, [id]);

  useEffect(() => {
    if (shouldLoad) return undefined;

    const placeholder = placeholderRef.current;
    if (!placeholder) return undefined;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        { rootMargin: '0px 0px 600px 0px' }
      );
      observer.observe(placeholder);
      return () => observer.disconnect();
    }

    const loadWhenNear = () => {
      if (placeholder.getBoundingClientRect().top <= window.innerHeight + 600) {
        setShouldLoad(true);
      }
    };

    loadWhenNear();
    window.addEventListener('scroll', loadWhenNear, { passive: true });
    window.addEventListener('resize', loadWhenNear);
    return () => {
      window.removeEventListener('scroll', loadWhenNear);
      window.removeEventListener('resize', loadWhenNear);
    };
  }, [shouldLoad]);

  useEffect(() => {
    if (!id || window.location.hash !== `#${id}`) return undefined;

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target) return;

      const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [id]);

  const fallback = (
    <SectionPlaceholder
      id={id}
      name={name}
    />
  );

  if (!shouldLoad) {
    return (
      <div ref={placeholderRef}>
        {fallback}
      </div>
    );
  }

  return <Suspense fallback={fallback}>{children}</Suspense>;
}

/**
 * Keep the above-the-fold navigation and Hero eager. Lower sections are loaded
 * shortly before they enter view, while their placeholders retain anchor IDs
 * and reserve their approximate layout height until the original section mounts.
 */
function App() {
  return (
    <>
      <SEO />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <DeferredSection id="about" name="about">
          <About />
        </DeferredSection>
        <DeferredSection id="experience" name="experience">
          <Experience />
        </DeferredSection>
        <DeferredSection id="projects" name="projects">
          <Projects />
        </DeferredSection>
        <DeferredSection id="contact" name="contact">
          <Contact />
        </DeferredSection>
      </main>
      <DeferredSection name="footer">
        <Footer />
      </DeferredSection>
      <style>{`
        .section-placeholder { width: 100%; }
        .section-placeholder--about { background: #f7fbf4; }
        .section-placeholder--experience { background: #e8f5e9; }
        .section-placeholder--projects { background: #f8faf5; }
        .section-placeholder--contact { background: #f7fbf4; }
        .section-placeholder--footer { background: #1e4023; }
        @media (max-width: 760px) {
          .section-placeholder--projects { min-height: 920px !important; }
          .section-placeholder--footer { min-height: 390px !important; }
        }
      `}</style>
    </>
  );
}

export default App;
