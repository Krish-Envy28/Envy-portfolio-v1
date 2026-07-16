import React from 'react';
import { motion } from 'motion/react';

export default function AboutServices() {
  const services = [
    "Branding & Identity",
    "Creative Technology",
    "UI/UX Design",
    "Digital Strategy",
    "Motion Graphics",
    "Web Development"
  ];

  return (
    <section id="expertise" className="relative w-full bg-black text-white py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Left: Huge bold statement */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase block mb-8">/ ABOUT & SERVICES</span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter uppercase leading-[0.9] text-white">
            We build <br />
            <span className="text-white/30">digital spaces</span> <br />
            that matter.
          </h2>
          <p className="mt-8 text-sm md:text-base text-white/60 leading-relaxed max-w-sm">
            Based in Amsterdam, our studio partners with ambitious brands to design structured, highly-scalable interfaces. We focus on real-world impact through pristine editorial design.
          </p>
        </motion.div>

        {/* Right: Services List */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col gap-8 md:pt-16"
        >
          <h3 className="text-[10px] font-mono text-white/40 tracking-widest uppercase">/ CAPABILITIES</h3>
          <ul className="flex flex-col border-t border-white/10">
            {services.map((service, index) => (
              <li 
                key={service}
                className="py-6 border-b border-white/10 flex items-center justify-between group cursor-pointer"
              >
                <span className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-white/70 group-hover:text-white transition-colors">
                  {service}
                </span>
                <span className="font-mono text-xs text-white/30 group-hover:text-orange-brand transition-colors">
                  0{index + 1}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
