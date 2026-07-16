import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrainCircuit, PenTool, Cloud, Cpu, MessageSquare, Briefcase, ArrowRight, Search, ShieldCheck, ExternalLink, ArrowLeft, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

type CredentialType = 'Certification' | 'Internship' | 'Achievement';
type Category = 'All' | 'AI' | 'Design' | 'Cloud' | 'Engineering' | 'Communication' | 'Experience' | 'Marketing';

interface Credential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: CredentialType;
  categories: Category[];
  summary: string;
  pdfLink?: string;
}

const credentialsData: Credential[] = [
  { 
    id: 'ai-1', 
    title: 'Fundamentals of Machine Learning and Artificial Intelligence', 
    issuer: 'AWS', 
    date: 'March 10, 2026', 
    type: 'Certification', 
    categories: ['AI'], 
    summary: 'Gained foundational knowledge in ML concepts, algorithms, and applied artificial intelligence solutions.',
    pdfLink: '/Certifications/Fundamentals of Machine Learning and Artificial Intelligence.pdf'
  },
  { 
    id: 'ai-2', 
    title: 'Foundations of Prompt Engineering', 
    issuer: 'AWS', 
    date: 'April 7, 2026', 
    type: 'Certification', 
    categories: ['AI'], 
    summary: 'Learned core principles for designing effective prompts and optimizing large language model outputs.',
    pdfLink: '/Certifications/Foundations of Prompt Engineering.pdf'
  },
  { 
    id: 'ai-3', 
    title: 'Fundamentals of Prompt Engineering with Claude', 
    issuer: 'AWS', 
    date: 'April 7, 2026', 
    type: 'Certification', 
    categories: ['AI'], 
    summary: 'Mastered advanced prompt crafting methodologies specifically tailored for Anthropic\'s Claude model.',
    pdfLink: '/Certifications/Fundamentals of Prompt Engineering with Claude.pdf'
  },
  { 
    id: 'ai-4', 
    title: 'Introducing AI Fundamentals', 
    issuer: 'SAP', 
    date: 'April 15, 2026', 
    type: 'Certification', 
    categories: ['AI'], 
    summary: 'Explored enterprise AI integrations and fundamental business strategies for deploying intelligent systems.',
    pdfLink: '/Certifications/Introducing AI Fundamentals.pdf'
  },
  { 
    id: 'ai-5', 
    title: 'Introduction to Generative AI', 
    issuer: 'Simplilearn', 
    date: 'March 1, 2026', 
    type: 'Certification', 
    categories: ['AI'], 
    summary: 'Studied generative models, neural architectures, and their real-world impact across industries.',
    pdfLink: '/Certifications/Introduction to Generative AI.pdf'
  },
  { 
    id: 'ai-6', 
    title: 'Artificial Intelligence Internship', 
    issuer: 'CodeAlpha', 
    date: 'June 1, 2026 – June 30, 2026', 
    type: 'Internship', 
    categories: ['AI', 'Experience'], 
    summary: 'Applied theoretical AI concepts to real-world projects, developing and deploying machine learning models.',
    pdfLink: '/Certifications/Artificial Intelligence Internship.pdf'
  },
  { 
    id: 'uiux-1', 
    title: 'UI/UX Design Internship', 
    issuer: 'Cognifyz', 
    date: 'June 7, 2026 – July 7, 2026', 
    type: 'Internship', 
    categories: ['Design', 'Experience'], 
    summary: 'Designed user-centric interfaces, built design systems, and conducted usability testing for web applications.',
    pdfLink: '/Certifications/UIUX Design Internship.pdf'
  },
  { 
    id: 'uiux-2', 
    title: 'Design Thinking - A Primer', 
    issuer: 'NPTEL', 
    date: 'Jan–Feb 2026', 
    type: 'Certification', 
    categories: ['Design'], 
    summary: 'Learned human-centered problem solving and iterative design processes for product development.',
    pdfLink: '/Certifications/Design Thinking - A Primer.pdf'
  },
  { 
    id: 'cloud-1', 
    title: 'Amazon Connect Getting Started', 
    issuer: 'AWS', 
    date: 'May 7, 2026', 
    type: 'Certification', 
    categories: ['Cloud'], 
    summary: 'Configured and managed scalable cloud-based contact centers using Amazon Connect infrastructure.',
    pdfLink: '/Certifications/Amazon Connect Getting Started.pdf'
  },
  { 
    id: 'comm-1', 
    title: 'Linguaskill Business', 
    issuer: 'Cambridge', 
    date: 'CEFR Level B2', 
    type: 'Certification', 
    categories: ['Communication'], 
    summary: 'Demonstrated professional-level English proficiency in a global corporate business context.',
    pdfLink: '/Certifications/Linguaskill.pdf'
  },
  { 
    id: 'comm-2', 
    title: 'Communication Skills', 
    issuer: 'TCS iON', 
    date: 'Completed 2026', 
    type: 'Certification', 
    categories: ['Communication'], 
    summary: 'Developed effective corporate communication, active listening, and professional interpersonal skills.',
    pdfLink: '/Certifications/Communication.pdf'
  },
  { 
    id: 'eng-1', 
    title: 'VLSI Course', 
    issuer: 'Simplilearn', 
    date: 'Completed 2026', 
    type: 'Certification', 
    categories: ['Engineering'], 
    summary: 'Studied Very Large Scale Integration design principles, circuit architecture, and semiconductor design.',
    pdfLink: '/Certifications/VLSI Course.pdf'
  },
  { 
    id: 'eng-2', 
    title: 'EFx SRIT 2026 Participation', 
    issuer: 'ASME', 
    date: '2026', 
    type: 'Achievement', 
    categories: ['Engineering'], 
    summary: 'Participated in technical engineering competitions, collaborative workshops, and design challenges.',
    pdfLink: '/Certifications/EFx SRIT 2026 Participation.pdf'
  },
  {
    id: 'udemy-1',
    title: 'UI/UX Web Design in Figma 2026 | AI & Big Projects',
    issuer: 'Udemy',
    date: 'July 7, 2026',
    type: 'Certification',
    categories: ['Design'],
    summary: 'Comprehensive UI/UX design training with Figma, focusing on AI-driven workflows and real-world large-scale projects.',
    pdfLink: '/Certifications/UI_UX Figma.pdf'
  },
  {
    id: 'udemy-2',
    title: 'The AI Engineer Course 2026: Complete AI Engineer Bootcamp',
    issuer: 'Udemy',
    date: 'June 27, 2026',
    type: 'Certification',
    categories: ['AI'],
    summary: 'Intensive bootcamp covering machine learning, deep learning, data science, and modern AI engineering practices.',
    pdfLink: '/Certifications/AI Engineer 2026.pdf'
  },
  {
    id: 'udemy-3',
    title: 'Generative AI for Beginners',
    issuer: 'Udemy',
    date: 'June 26, 2026',
    type: 'Certification',
    categories: ['AI'],
    summary: 'Explored the fundamentals of generative AI models, including natural language processing and creative applications.',
    pdfLink: '/Certifications/Gen AI.pdf'
  },
  {
    id: 'udemy-4',
    title: 'ChatGPT for Marketing, Content, Social Media, and PR',
    issuer: 'Udemy',
    date: 'June 28, 2026',
    type: 'Certification',
    categories: ['AI', 'Marketing'],
    summary: 'Leveraged ChatGPT and prompt engineering for generating marketing content, social media strategies, and PR campaigns.',
    pdfLink: '/Certifications/ChatGPT for Marketing, Content, Social Media, and PR.pdf'
  },
  {
    id: 'udemy-5',
    title: 'Social Media Marketing with ChatGPT & Generative AI Tools',
    issuer: 'Udemy',
    date: 'June 28, 2026',
    type: 'Certification',
    categories: ['AI', 'Marketing'],
    summary: 'Applied various generative AI tools to optimize social media marketing workflows, audience engagement, and content creation.',
    pdfLink: '/Certifications/Social Media Marketing with ChatGPT & Generative Al Tools.pdf'
  }
];

const overviewCategories = [
  { id: 'AI', name: 'Artificial Intelligence', icon: BrainCircuit, count: 10, desc: 'Machine learning & prompt engineering.', bgImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop' },
  { id: 'Design', name: 'UI/UX Design', icon: PenTool, count: 3, desc: 'Human-centered design & interfaces.', bgImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop' },
  { id: 'Marketing', name: 'AI Marketing', icon: TrendingUp, count: 2, desc: 'AI-driven content & marketing strategy.', bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop' },
  { id: 'Cloud', name: 'Cloud & AWS', icon: Cloud, count: 1, desc: 'Cloud infrastructure & services.', bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop' },
  { id: 'Engineering', name: 'Engineering', icon: Cpu, count: 2, desc: 'Hardware architecture & technical problem solving.', bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' },
  { id: 'Communication', name: 'Communication', icon: MessageSquare, count: 2, desc: 'Professional and corporate communication.', bgImage: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=800&auto=format&fit=crop' },
  { id: 'Experience', name: 'Professional Experience', icon: Briefcase, count: 2, desc: 'Industry internships & applied roles.', bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop' },
];

export default function CredentialsPage() {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filteredCredentials = useMemo(() => {
    return credentialsData.filter(cred => {
      const matchesSearch = cred.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            cred.issuer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'All' || cred.categories.includes(activeFilter);
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const filters: Category[] = ['All', 'AI', 'Design', 'Marketing', 'Cloud', 'Engineering', 'Communication', 'Experience'];

  return (
    <section className="relative w-full bg-black text-white py-24 md:py-32 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Back Button */}
        <div className="flex w-full mb-12">
          <Link to="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-16 md:mb-24 text-center md:text-left max-w-3xl">
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tighter uppercase leading-[0.9]">
            Continuous <span className="text-white/30">Learning</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            A curated collection of industry-recognized certifications, internships, and professional achievements that reflect continuous learning and practical application.
          </p>
        </div>

        {/* Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {overviewCategories.map((cat, i) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative border border-white/10 rounded-sm overflow-hidden flex flex-col min-h-[240px]"
            >
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${cat.bgImage}')` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full justify-between gap-6 pointer-events-none">
                <div className="flex justify-end items-start">
                  <span className="text-xs font-mono text-white/60 tracking-widest">{String(cat.count).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl uppercase font-bold tracking-tight mb-2 group-hover:text-orange-brand transition-colors duration-500">{cat.name}</h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Primary Action Button */}
        <div className="flex justify-center md:justify-start">
          <motion.button 
            layout
            onClick={() => setIsArchiveOpen(!isArchiveOpen)}
            className="group flex items-center gap-4 bg-white text-black px-8 py-5 rounded-sm font-heading font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-all duration-300 overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isArchiveOpen ? 'close' : 'open'}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="whitespace-nowrap"
              >
                {isArchiveOpen ? 'Close Archive' : 'Open Credential Archive'}
              </motion.span>
            </AnimatePresence>
            <motion.div
              animate={{ rotate: isArchiveOpen ? 90 : 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={!isArchiveOpen ? "group-hover:translate-x-1 transition-transform duration-300" : ""}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>

        {/* Expandable Archive Section */}
        <AnimatePresence>
          {isArchiveOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mt-24"
            >
              {/* Archive Controls */}
              <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center mb-16 pt-16 border-t border-white/10">
                {/* Search */}
                <div className="relative w-full lg:w-96">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input 
                    type="text" 
                    placeholder="Search credentials..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-sm py-3 pl-12 pr-4 text-sm font-light text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                
                {/* Filters */}
                <div className="flex flex-wrap gap-2">
                  {filters.map(filter => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-2 text-xs font-mono tracking-widest uppercase rounded-sm border transition-all duration-300 ${
                        activeFilter === filter 
                          ? 'border-white bg-white text-black' 
                          : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Credentials List */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredCredentials.map((cred, i) => (
                    <motion.div
                      layout
                      key={cred.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="group relative border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] p-8 md:p-10 rounded-sm transition-colors duration-500 flex flex-col justify-between"
                    >
                      <div>
                        {/* Meta Header */}
                        <div className="flex justify-between items-start mb-8">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-mono tracking-widest uppercase border border-white/20 px-3 py-1 rounded-sm text-white/70">
                              {cred.type}
                            </span>
                            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                              {cred.date}
                            </span>
                          </div>
                          <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-xs font-bold font-heading text-white/50">
                            {cred.issuer.substring(0, 2).toUpperCase()}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="mb-8">
                          <h4 className="text-white/50 font-mono text-xs uppercase tracking-widest mb-3">
                            {cred.issuer}
                          </h4>
                          <h3 className="font-heading text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-orange-brand transition-colors duration-500">
                            {cred.title}
                          </h3>
                          <p className="text-white/60 font-light text-sm md:text-base leading-relaxed line-clamp-2">
                            {cred.summary}
                          </p>
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40">
                          <ShieldCheck className="w-4 h-4" />
                          <span>Verified</span>
                        </div>
                        
                        {cred.pdfLink && (
                          <a href={cred.pdfLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-brand/70 hover:text-orange-brand transition-colors group/link">
                            <span>View</span>
                            <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {filteredCredentials.length === 0 && (
                  <div className="col-span-1 lg:col-span-2 py-24 text-center border border-white/5 rounded-sm">
                    <p className="text-white/40 font-mono text-sm uppercase tracking-widest">No credentials found matching your criteria.</p>
                  </div>
                )}
              </div>

              {/* LinkedIn Verification */}
              <div className="mt-16 pt-8 border-t border-white/5 text-center flex flex-col items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-white/20" />
                <p className="text-white/50 font-light text-sm max-w-lg leading-relaxed">
                  For further verification of credentials and professional background, please visit my <a href="https://www.linkedin.com/in/krish-shree-surya-s-91932b394" target="_blank" rel="noreferrer" className="text-white hover:text-orange-brand underline underline-offset-4 transition-colors font-medium">LinkedIn Profile</a>.
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
