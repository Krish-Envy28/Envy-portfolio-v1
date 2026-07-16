import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CredentialsPage from './pages/CredentialsPage';
import AboutPage from './pages/AboutPage';
import PageTransition from './components/PageTransition';

function ScrollToHashElement() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [hash, pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  // Initialize Lenis for buttery smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // Ultra-smooth floating scroll interpolation
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative font-sans selection:bg-orange-brand selection:text-white">
      
      {/* Background Grid Accent Lines spanning full-body in faint opacity */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] select-none">
        <div className="absolute inset-y-0 left-12 border-l border-white"></div>
        <div className="absolute inset-y-0 right-12 border-r border-white"></div>
        <div className="absolute inset-y-0 left-1/4 border-l border-white"></div>
        <div className="absolute inset-y-0 right-1/4 border-r border-white"></div>
      </div>

      <ScrollToHashElement />
      
      {/* Header element */}
      <Header />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/credentials" element={<PageTransition><CredentialsPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
