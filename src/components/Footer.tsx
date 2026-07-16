import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', project: 'Web Design', details: '', _honey: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'rate_limit'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', project: 'Web Design', details: '', _honey: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else if (response.status === 429) {
        setStatus('rate_limit');
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-black text-white pt-24 pb-12 overflow-hidden flex flex-col font-sans">
      
      {/* Container for the CTA Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col gap-8">
        
        {/* Top Indicators */}
        <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase">
          <span>• 01</span>
          <span className="text-red-500">Contact Me</span>
          <span>© 2026</span>
        </div>

        {/* Huge Title */}
        <h2 className="font-heading text-[18vw] sm:text-8xl md:text-[11vw] font-extrabold tracking-tighter uppercase leading-[0.8] mb-8 md:mb-12 break-words">
          Let's Talk
        </h2>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-32">
          
          {/* Left Column: Testimonial & Socials */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            {/* Testimonial Box */}
            <div className="bg-[#111] p-8 md:p-12 rounded-sm flex flex-col gap-12 max-w-md">
              <p className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight leading-[1.1]">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center">
                   {/* Abstract shape representing avatar from reference */}
                   <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[12px] border-b-black border-r-[8px] border-r-transparent -rotate-12"></div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm tracking-tight">Steve Jobs</span>
                  <span className="text-white/50 text-xs">Co-founder, Apple Inc.</span>
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="mt-8 md:mt-0 font-heading text-sm md:text-base font-bold uppercase tracking-widest text-white/70 flex flex-wrap gap-x-2 gap-y-2">
              <a href="tel:6380223232" className="hover:text-white transition-colors">/ MOBILE </a>
              <a href="mailto:krishshreesurya@gmail.com" className="hover:text-white transition-colors">/ EMAIL </a>
              <a href="https://www.linkedin.com/in/krish-shree-surya-s-91932b394" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">/ LINKEDIN </a>
              <a href="https://github.com/Krish-Envy28" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">/ GITHUB</a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h3 className="font-heading text-3xl font-bold uppercase tracking-tighter mb-12">
              <span className="text-white/40 mr-2">¬</span>GET IN TOUCH
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-12 font-heading font-bold uppercase tracking-widest text-sm">
              
              {/* Honeypot Field */}
              <input 
                type="text" 
                name="_honey" 
                value={formData._honey}
                onChange={(e) => setFormData({ ...formData, _honey: e.target.value })}
                className="opacity-0 absolute -z-10 w-0 h-0" 
                tabIndex={-1} 
                autoComplete="off" 
              />
              
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex flex-col w-full group">
                  <label htmlFor="name" className="text-white/50 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-white transition-colors text-white" 
                  />
                </div>
                <div className="flex flex-col w-full group">
                  <label htmlFor="email" className="text-white/50 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-white transition-colors text-white" 
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col w-full relative">
                <label htmlFor="project" className="text-white/50 mb-2">Project Type</label>
                <select 
                  id="project" 
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-white transition-colors text-white appearance-none cursor-pointer"
                >
                  <option value="Web Design" className="bg-[#111]">Web Design</option>
                  <option value="App Design" className="bg-[#111]">App Design</option>
                  <option value="Branding" className="bg-[#111]">Branding</option>
                  <option value="Other" className="bg-[#111]">Other</option>
                </select>
                <ChevronDown className="absolute right-0 bottom-4 w-4 h-4 text-white/50 pointer-events-none" />
              </div>

              {/* Row 3 */}
              <div className="flex flex-col w-full relative">
                <label htmlFor="details" className="text-white/50 mb-2">Tell me about your project</label>
                <textarea 
                  id="details" 
                  rows={3} 
                  required
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-white transition-colors text-white resize-none"
                ></textarea>
                <div className="absolute right-0 bottom-4 text-white/20 rotate-45 select-none pointer-events-none">∥</div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success' || status === 'rate_limit'}
                className="bg-white text-black self-start px-8 py-3 text-xs tracking-widest hover:bg-white/90 transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'SENDING...' : 
                 status === 'success' ? 'SENT!' : 
                 status === 'rate_limit' ? 'TOO MANY REQUESTS' : 
                 status === 'error' ? 'ERROR! TRY AGAIN' : "LET'S TALK"}
              </button>

            </form>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="w-full border-t border-white/10 my-8"></div>

      {/* Final Footer Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-8 pt-12 relative">
        
        {/* Col 1: Logo */}
        <div className="flex flex-col md:col-span-1 max-w-sm justify-center">
          <img 
            src="/Hero icon.png" 
            alt="Logo" 
            className="w-48 md:w-64 h-auto object-contain"
          />
        </div>

        {/* Col 2: Navigation */}
        <div className="flex flex-col md:col-span-2">
          <h4 className="text-white/50 font-sans text-sm mb-6">Navigation</h4>
          <nav className="flex flex-col font-heading text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tighter leading-[0.9]">
            <Link to="/" className="text-[#555] hover:text-white transition-colors">Home</Link>
            <Link to="/#about" className="text-[#555] hover:text-white transition-colors">About Me</Link>
            <Link to="/#projects" className="text-[#555] hover:text-white transition-colors">Projects</Link>
            <Link to="/credentials" className="text-[#555] hover:text-white transition-colors">Credentials</Link>
            <Link to="/#contact" className="text-white hover:text-orange-brand transition-colors">Contact</Link>
          </nav>
        </div>

        {/* Col 3: Contact Details */}
        <div className="flex flex-col md:col-span-2 relative md:pl-16 lg:pl-24">
          <h4 className="text-white/50 font-sans text-sm mb-6">Contact</h4>
          <nav className="flex flex-col font-heading text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tighter leading-[0.9]">
            <a href="tel:6380223232" className="text-[#555] hover:text-white transition-colors">Mobile</a>
            <a href="mailto:krishshreesurya@gmail.com" className="text-[#555] hover:text-white transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/krish-shree-surya-s-91932b394" target="_blank" rel="noreferrer" className="text-[#555] hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/Krish-Envy28" target="_blank" rel="noreferrer" className="text-[#555] hover:text-white transition-colors">GitHub</a>
          </nav>

          {/* Back to top (Absolute top right of this col on desktop, flow on mobile) */}
          <button onClick={scrollToTop} className="mt-8 md:mt-0 md:absolute md:top-0 md:right-0 self-start font-mono text-[10px] font-bold uppercase tracking-widest underline underline-offset-4 hover:text-orange-brand transition-colors">
            Back To Top
          </button>
        </div>

      </div>

    </footer>
  );
}
