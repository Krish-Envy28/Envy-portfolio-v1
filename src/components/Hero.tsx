import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const [isEntering, setIsEntering] = useState(true);

  // Lock scroll during the entrance animation
  useEffect(() => {
    if (isEntering) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isEntering]);

  // Base delay to wait for the preloader to clear completely
  const uiDelay = 4.5; 

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-between p-6 md:p-12 pt-32 select-none">
      
      {/* 1. INITIAL FULL BLACK OVERLAY */}
      <AnimatePresence>
        {isEntering && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            style={{ willChange: "opacity" }}
            className="fixed inset-0 z-[10000] bg-black pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* 2. THE MASK REVEAL PRELOADER */}
      <AnimatePresence>
        {isEntering && (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 150, opacity: 0 }}
            transition={{
              scale: { delay: 2.5, duration: 2.2, ease: [0.83, 0, 0.17, 1] }, 
              opacity: { delay: 4.3, duration: 0.4, ease: "linear" }
            }}
            style={{ willChange: "transform, opacity" }}
            onAnimationComplete={() => setIsEntering(false)}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black mix-blend-multiply pointer-events-none origin-center"
          >
            <h1 className="font-heading font-extrabold text-[22vw] leading-none text-white text-center tracking-tighter whitespace-nowrap">
              KRISH
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Layer with faint grids */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        >
          <source src="/BG.mp4" type="video/mp4" />
        </video>

        {/* Subtle Ambient Digital Mesh overlay */}
        <div className="absolute inset-0 pulsing-grid-glow bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      </div>

      {/* Decorative Fine Borders & Grid Plus Coordinates */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: uiDelay }}
        style={{ willChange: "opacity" }}
        className="absolute top-24 left-6 right-6 bottom-6 border border-white/5 pointer-events-none z-10"
      >
        <div className="absolute top-0 left-0 w-4 h-px bg-white/20"></div>
        <div className="absolute top-0 left-0 w-px h-4 bg-white/20"></div>
        <div className="absolute top-0 right-0 w-4 h-px bg-white/20"></div>
        <div className="absolute top-0 right-0 w-px h-4 bg-white/20"></div>
        <div className="absolute bottom-0 left-0 w-4 h-px bg-white/20"></div>
        <div className="absolute bottom-0 left-0 w-px h-4 bg-white/20"></div>
        <div className="absolute bottom-0 right-0 w-4 h-px bg-white/20"></div>
        <div className="absolute bottom-0 right-0 w-px h-4 bg-white/20"></div>

        {/* Plus symbols */}
        <div className="absolute top-1/2 left-[15%] text-white/20 font-light text-xs -translate-y-1/2 select-none">+</div>
        <div className="absolute bottom-[20%] right-[10%] text-white/20 font-light text-xs select-none">+</div>
        <div className="absolute top-[25%] right-[25%] text-white/10 font-light text-xs select-none">+</div>
      </motion.div>

      {/* Upper Floating Labels Section */}
      <div className="grid grid-cols-2 gap-4 items-start w-full z-10 relative mt-6">
        {/* Left Side: Services Tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: uiDelay + 0.2 }}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col gap-1.5 text-[10px] md:text-xs font-heading font-bold tracking-widest text-white uppercase"
        >
          <span className="hover:text-orange-brand transition-colors cursor-pointer">Branding / Identity</span>
          <span className="hover:text-orange-brand transition-colors cursor-pointer">Design / UI/UX</span>
          <span className="hover:text-orange-brand transition-colors cursor-pointer">Creative Technology</span>
          <span className="hover:text-orange-brand transition-colors cursor-pointer">Digital Strategy</span>
        </motion.div>

        {/* Top Center Blur Element - Simplified for performance */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: uiDelay + 0.5 }}
          style={{ willChange: "transform, opacity" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 flex justify-center pointer-events-none"
        >
          <div className="w-64 h-20 bg-white/10 blur-2xl rounded-full" />
        </motion.div>

        {/* Right Side: Empty to maintain grid */}
        <div />
      </div>

      {/* Huge Editorial Title Section */}
      <div className="w-full z-10 flex flex-col items-center justify-end relative select-none">
        
        {/* Title layout grid */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-baseline justify-between gap-4 md:gap-8 pb-4">
          
          {/* Left: Small Greeting */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: uiDelay + 0.4 }}
            style={{ willChange: "transform, opacity" }}
            className="font-display text-sm md:text-lg text-white/60 tracking-tight flex items-baseline gap-2 self-start md:self-auto"
          >
            <span>Hi, I am</span>
            <span className="w-12 h-px bg-white/30 inline-block align-middle mb-1.5"></span>
          </motion.div>

          {/* Center: Krish in HUGE letters */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: uiDelay }}
            style={{ willChange: "transform, opacity" }}
            className="w-full flex justify-center"
          >
            <h1 className="font-heading text-[16vw] sm:text-[12vw] md:text-[9vw] lg:text-[8vw] font-extrabold tracking-tighter leading-[0.85] text-white flex flex-col items-start w-fit -translate-x-8 md:-translate-x-24">
              <span className="block hover:text-orange-brand transition-colors duration-500 cursor-pointer">Krish</span>
              <span className="block ml-[15%] md:ml-[25%] opacity-95 hover:text-orange-brand hover:opacity-100 transition-all duration-500 cursor-pointer">Shree</span>
              <span className="block ml-[30%] md:ml-[50%] opacity-90 hover:text-orange-brand hover:opacity-100 transition-all duration-500 cursor-pointer">Surya</span>
            </h1>
          </motion.div>

          {/* Right: Empty */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: uiDelay + 0.5 }}
            style={{ willChange: "transform, opacity" }}
            className="font-display text-sm md:text-lg font-medium text-white/0 self-end md:self-auto tracking-widest uppercase font-mono text-right select-none"
          >
            Portfolio
          </motion.div>
        </div>

        {/* Minimalist Down Arrow Scroll Indicator */}
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: uiDelay + 0.7, duration: 0.5 }}
          style={{ willChange: "transform, opacity" }}
          href="#about"
          className="mt-8 mb-2 cursor-pointer text-white/50 hover:text-orange-brand transition-colors duration-500 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ willChange: "transform" }}
          >
            <ArrowDown className="w-8 h-8 stroke-[1]" />
          </motion.div>
        </motion.a>
      </div>

      {/* White Box */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: uiDelay + 0.6 }}
        style={{ willChange: "transform, opacity" }}
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-30 flex max-w-[280px]"
      >
        <div className="bg-white text-black p-3 md:p-5 font-bold text-[13px] md:text-[15px] leading-tight font-heading uppercase tracking-tight w-full shadow-2xl">
          Designing structured<br/>interfaces built for<br/>scale and real-world<br/>impact.
        </div>
      </motion.div>

      {/* Global Edge Vignette Blur Effect (Moved to foreground) */}
      <div className="absolute inset-0 backdrop-blur-[12px] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black_100%)] z-40" />

    </section>
  );
}
