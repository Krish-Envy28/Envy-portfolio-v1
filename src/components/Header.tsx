import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Credentials', href: '/credentials' },
    { label: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#') && window.location.pathname === '/') {
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', href);
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex items-center justify-between pointer-events-none">
        <Link 
          to="/" 
          className={`font-heading text-2xl md:text-3xl tracking-tight text-white font-extrabold flex items-center gap-1 transition-opacity duration-700 pointer-events-auto ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
        >
          Envy<span className="text-orange-brand">.</span>
        </Link>

        <div className="flex items-center gap-4 pointer-events-auto">
          {/* Minimalist menu icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex flex-col justify-center items-end w-8 h-8 gap-1.5 focus:outline-none cursor-pointer group"
            aria-label="Toggle Menu"
          >
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-7 group-hover:w-5'}`} />
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-5 group-hover:w-7'}`} />
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6 group-hover:w-4'}`} />
          </button>
        </div>
      </header>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-between p-8 md:p-16 pt-32"
          >
            {/* Ambient Background Grid lines */}
            <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-5">
              <div className="border-r border-white"></div>
              <div className="border-r border-white"></div>
              <div className="border-r border-white"></div>
              <div></div>
            </div>

            <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full h-full">
              {/* Navigation links */}
              <nav className="flex flex-col gap-4 md:gap-6 justify-center items-center">
                <span className="text-xs font-mono text-white/40 tracking-widest uppercase mb-4">/ NAVIGATION</span>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    <Link
                      to={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white/60 hover:text-white hover:scale-105 transition-all duration-300 flex items-baseline gap-4 group"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs font-mono text-white/40">
              <div /> {/* Empty div to maintain flex-between layout if needed, or just let the links align right */}
              <div className="flex gap-6 mt-4 sm:mt-0">
                <Link to="/#projects" onClick={(e) => handleNavClick(e, '/#projects')} className="hover:text-white transition-colors">WORK</Link>
                <Link to="/credentials" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">CREDENTIALS</Link>
                <Link to="/#contact" onClick={(e) => handleNavClick(e, '/#contact')} className="hover:text-white transition-colors">LET'S TALK</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
