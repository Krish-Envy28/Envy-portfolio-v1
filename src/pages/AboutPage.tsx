import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  const skills = [
    "AI Generalist", "UI/UX", "Python", "Visual Design", 
    "Design Systems", "Figma", "Front-End Development", "Embedded Systems"
  ];

  const expertise = [
    { num: "01", title: "AI Agentic Workflows" },
    { num: "02", title: "UI/UX Design." },
    { num: "03", title: "Programming and Embedded Systems" }
  ];

  const experience = [
    {
      date: "PRESENT",
      title: "Front-end AI Engineering Intern",
      company: "FlyRank AI",
      description: "Building AI-powered web interfaces and integrating modern AI workflows to create responsive, user-focused applications while gaining hands-on experience in frontend AI engineering."
    },
    {
      date: "2026",
      title: "UI/UX Design Intern",
      company: "Cognifyz Technologies",
      description: "Designed intuitive user interfaces and reusable components while applying UX principles, visual hierarchy, accessibility, and cohesive design systems to create user-centered digital experiences."
    },
    {
      date: "2026",
      title: "Artificial Intelligence Intern",
      company: "CodeAlpha",
      description: "Developed AI-powered applications, including an intelligent chatbot and an AI translator, while gaining practical experience with APIs, prompt engineering, and real-world AI workflows."
    }
  ];

  const education = [
    {
      date: "AUGUST 2025",
      title: "Bachelor of Engineering - BE, Electrical, Electronics and Communications Engineering",
      company: "Sri Ramakrishna Institute of Technology",
      description: "Currently pursuing 2nd year."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-40 pb-24 font-sans relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col gap-24 relative z-10">
        
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/50 hover:text-white transition-colors w-fit"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Intro Section */}
        <div className="flex flex-col gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="font-heading text-[11vw] sm:text-[8.5vw] md:text-[7.5vw] lg:text-[6vw] font-extrabold tracking-tighter uppercase leading-[0.85] w-full break-words"
          >
            <span className="block">Where Design</span>
            <span className="block">Meets Intelligence.</span>
          </motion.h2>
        </div>

        {/* 3-Column Intro Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-12 lg:gap-24 items-start">
          
          {/* Col 1: Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="w-full max-w-[240px] aspect-[4/5] flex items-center justify-center relative overflow-hidden mx-auto md:mx-0 group cursor-pointer bg-black"
          >
            <img 
              src="/profile.jpeg" 
              alt="Profile" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1] mix-blend-lighten"
            />
          </motion.div>

          {/* Col 2: Vertical Skill Pills */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap md:flex-col gap-2 md:gap-3 justify-center md:justify-start"
          >
            {skills.map((skill, index) => (
              <div key={index} className="px-4 py-1.5 rounded-full border border-white/20 bg-transparent text-white/80 font-mono text-[10px] uppercase tracking-widest w-fit hover:border-orange-brand hover:text-orange-brand transition-colors cursor-default">
                {skill}
              </div>
            ))}
          </motion.div>

          {/* Col 3: Description */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="flex flex-col items-center md:items-start text-center md:text-left gap-12"
          >
            <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              An AI Engineer, Frontend Developer, and UI/UX Designer dedicated to crafting intelligent, user-centered, and visually compelling digital experiences.
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white/60 text-sm leading-relaxed">
              <p>
                With a passion for design, development, and emerging technologies, I transform ideas into intuitive digital products that seamlessly blend aesthetics with functionality. My approach is rooted in user-first thinking, clean design systems, scalable development, and solving real-world problems through purposeful innovation.
              </p>
              <p>
                From modern interfaces and responsive web applications to AI-powered solutions and interactive experiences, I collaborate with startups, businesses, and creators to build products that leave a lasting impact. Every project is driven by creativity, technical precision, and a commitment to delivering meaningful digital experiences.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Expertise Section */}
        <div className="flex flex-col mt-12">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/50 mb-12 text-center md:text-left"
          >
            Core Expertise
          </motion.h4>
          <div className="flex flex-col">
            {expertise.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-6 py-8 border-t border-white/10 group cursor-default"
              >
                <span className="font-mono text-sm text-white/30 group-hover:text-orange-brand transition-colors">{item.num}</span>
                <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500 break-words">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex flex-col mt-12">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/50 mb-12 text-center md:text-left"
          >
            Experience
          </motion.h4>
          <div className="flex flex-col">
            {experience.map((job, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12 py-12 border-t border-white/10 group"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-white/50 mt-2">
                  {job.date}
                </div>
                
                <div className="flex flex-col gap-4 max-w-2xl">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tighter group-hover:text-orange-brand transition-colors">
                    {job.title}
                  </h3>
                  <div className="font-mono text-xs uppercase tracking-widest text-white/40">
                    {job.company}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mt-2">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="flex flex-col mt-12">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/50 mb-12 text-center md:text-left"
          >
            Education
          </motion.h4>
          <div className="flex flex-col">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12 py-12 border-t border-white/10 group"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-white/50 mt-2">
                  {edu.date}
                </div>
                
                <div className="flex flex-col gap-4 max-w-2xl">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tighter group-hover:text-orange-brand transition-colors">
                    {edu.title}
                  </h3>
                  <div className="font-mono text-xs uppercase tracking-widest text-white/40">
                    {edu.company}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mt-2">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
