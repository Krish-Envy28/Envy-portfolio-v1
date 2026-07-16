import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black text-white py-24 md:py-32 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row">
        
        {/* Left Side: Vertical text */}
        <div className="hidden md:flex flex-col items-center justify-start shrink-0 pr-8 md:pr-16">
          <span 
            className="font-heading text-6xl lg:text-[110px] font-extrabold tracking-tighter text-white/5 uppercase leading-none mt-4"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            /about me
          </span>
        </div>

        {/* Right Side: Main Content */}
        <div className="flex flex-col w-full">
          
          {/* Top Divider & Labels */}
          <div className="flex items-center w-full mb-16">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 shrink-0 pr-4">01</span>
            <div className="h-px bg-white/10 flex-grow" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 shrink-0 pl-4">/INTRODUCTION</span>
          </div>

          {/* Main Statement */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="font-sans text-3xl md:text-5xl lg:text-[52px] tracking-tight leading-[1.2] mb-20 text-white/70 max-w-5xl"
          >
            I craft visual systems where <span className="font-medium text-white">design meets intelligence</span>. My work blends human insight with <span className="font-medium text-white">machine precision</span> — without losing meaning.
          </motion.h2>

          {/* Bottom Row: Bio & Button */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
            
            {/* Small Bio Text (No Profile Image as requested) */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="text-white/50 text-sm md:text-base leading-relaxed max-w-xl font-sans"
            >
              I am Krish — A.I. Engineer, Frontend Developer, and UI/UX Designer. I help brands, creators, and businesses transform complex workflows into intuitive, intelligent visual narratives.
            </motion.p>

            {/* Corner Bracket Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="shrink-0 w-full md:w-auto"
            >
              <Link 
                to="/about"
                className="relative group flex items-center justify-center px-12 py-8 hover:bg-white/5 transition-colors duration-500 cursor-pointer w-full md:w-auto"
              >
                {/* Brackets */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30 group-hover:border-white transition-colors" />
                <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30 group-hover:border-white transition-colors" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/30 group-hover:border-white transition-colors" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30 group-hover:border-white transition-colors" />
                
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-white/80 group-hover:text-white transition-colors">
                  FULL PROFILE
                </span>
              </Link>
            </motion.div>

          </div>

          {/* Worked With Section */}
          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center gap-12 opacity-80">
             <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 shrink-0">/WORKED WITH</span>
             <div className="flex items-center w-full">
               
               <a 
                 href="https://flyrank.ai" 
                 target="_blank" 
                 rel="noreferrer"
                 className="flex items-center gap-4 group grayscale hover:grayscale-0 transition-all duration-500"
               >
                 {/* Icon */}
                 <div className="w-12 h-12 rounded-full bg-[#0a1a18] flex items-center justify-center shadow-lg border border-[#142d2a] group-hover:border-[#3ce09f] transition-colors">
                   <span className="text-[#3ce09f] font-sans italic font-bold text-xl leading-none pr-0.5">y</span>
                 </div>
                 
                 {/* Text Content */}
                 <div className="flex flex-col justify-center">
                   <span className="font-sans text-xl font-medium text-white group-hover:text-white transition-colors">FlyRank</span>
                 </div>
               </a>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
