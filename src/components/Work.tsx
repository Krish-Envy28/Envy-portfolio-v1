import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data';

export default function Work() {
  return (
    <section id="projects" className="relative w-full bg-black text-white py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Section Header (Smaller Single Row Style) */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-4xl">
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter uppercase leading-[0.9] text-center md:text-left">
              Selected Work & <span className="text-white/30">Case Studies</span>
            </h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-sm md:text-lg text-white/60 font-sans max-w-2xl text-center md:text-left">
              Explore my recent projects, showcasing innovative solutions, technical precision, and user-centered design in real-world applications.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-12 pb-12 items-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="flex flex-col w-[85vw] md:w-[60vw] lg:w-[45vw] shrink-0 snap-center md:snap-start group"
            >
              {/* Image Block */}
              <div className="w-full aspect-[4/3] rounded-sm overflow-hidden relative bg-zinc-900 border border-white/5 shadow-2xl mb-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <img 
                    src={project.image || `https://images.unsplash.com/photo-${index % 2 === 0 ? '1600132806370-bf17e65e942f' : '1618005182384-a83a8bd57fbe'}?q=80&w=2000&auto=format&fit=crop`} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                  />
                </motion.div>
              </div>

              {/* Content Block */}
              <div className="flex flex-col flex-grow">
                <div className="font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-widest mb-4">
                  {project.year} • {project.category}
                </div>
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight group-hover:text-orange-brand transition-colors duration-500 mb-4">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase font-mono tracking-widest text-white/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-6 py-3 sm:py-2 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 font-heading font-bold text-xs uppercase tracking-widest rounded-sm shrink-0 text-center"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
