import { Project, Testimonial, FAQItem, PricingPlan } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'voxora',
    title: 'Voxora',
    category: 'Productivity & AI',
    year: '2026',
    description: 'A modern language translation workspace built to make multilingual communication simple, fast, and accessible. Unlike traditional translator applications, Voxora focuses on creating a clean workspace experience inspired by modern productivity tools and developer platforms. Users can translate text, upload documents, listen to translated content, and manage their translation history from a single interface.',
    tags: ['AI Translation', 'Workspace UI', 'Productivity'],
    challenges: [],
    results: [],
    stats: [],
    link: 'https://voxoraai-six.vercel.app/',
    image: '/Voxora.jpeg'
  },
  {
    id: 'pathfinder',
    title: 'PathFinder AI',
    category: 'Career Intelligence',
    year: '2026',
    description: 'An AI-powered Career & Placement Intelligence Assistant designed to help students and fresh graduates navigate internships, placements, resume building, interview preparation, LinkedIn optimization, and career planning.',
    tags: ['Career Planning', 'AI Assistant', 'EdTech'],
    challenges: [],
    results: [],
    stats: [],
    link: 'https://pathfinderai-mu.vercel.app/',
    image: '/PathFinder AI.jpeg'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'gorgia',
    quote: 'Working with Krish was seamless — high-quality work, fast turnaround, and impressive attention to detail. She transformed our fragmented SaaS dashboard into a cohesive, high-performance workspace.',
    author: 'Gorgia Ferico',
    role: 'Co-Founder',
    company: 'Luca',
    rating: 5
  },
  {
    id: 'marcus',
    quote: 'Krish possesses a rare combination of pure visual taste and hard technical understanding. She designed our entire brand system and web app layout, leading to a record-breaking Series A round.',
    author: 'Marcus Vance',
    role: 'VP of Product',
    company: 'Scribe AI',
    rating: 5
  },
  {
    id: 'helena',
    quote: 'The design system Krish built is incredibly robust. Our developers find it an absolute pleasure to build on top of, and our release velocity has doubled since implementation.',
    author: 'Helena Rostov',
    role: 'Engineering Lead',
    company: 'Veridian',
    rating: 5
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What is your refund policy?',
    answer: 'For design subscription plans, you can cancel at any time. Due to the high-quality customized nature of design delivery, we do not issue full refunds once work has commenced, but we provide unlimited revisions until you are 100% satisfied.'
  },
  {
    question: 'How do you weigh different criteria in your process?',
    answer: 'We balance three key pillars: user needs (behavioral metrics), business strategy (conversions & growth), and brand expression. We start with rigorous discovery workshops to map these before sketching a single pixel.'
  },
  {
    question: 'How do I get started?',
    answer: 'Simply fill out our interactive project planner at the bottom of the page, or subscribe directly to one of our flat-rate plans. We will schedule a 30-minute kickoff call within 24 hours.'
  },
  {
    question: 'Can I customize the packages you offer?',
    answer: 'Absolutely! If your project doesn’t fit into our regular or business subscriptions, we can draft a bespoke fixed-price proposal tailored to your specific scope, budget, and timeline.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Individual page designs or brand concepts are delivered within 3-5 business days. A full complex mobile or web app UI design with custom system tokens typically takes 4-6 weeks from initial kickoff.'
  }
];

export const PRICING_DATA = {
  monthly: [
    {
      name: 'Regular',
      price: 500,
      period: 'month',
      description: 'Perfect for startups and builders needing consistent design support with rapid turnaround.',
      features: [
        '02 Design Requests at a time',
        'Unlimited Revisions',
        'Standard Email & Slack Support',
        'Figma Source Files Included',
        'Native Mobile & Web UI Support'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: 1300,
      period: 'month',
      description: 'Ideal for scaling companies seeking a dedicated design partner to handle end-to-end UX systems.',
      features: [
        'Unlimited Design Requests',
        'Unlimited Revisions',
        'Priority Slack & Call Support',
        'Full Interactive Prototypes',
        'Custom Design System Tokens',
        'Invoice and Easy Billing'
      ],
      popular: true
    }
  ],
  yearly: [
    {
      name: 'Regular',
      price: 400, // 20% discount
      period: 'month',
      description: 'Perfect for startups and builders needing consistent design support with rapid turnaround.',
      features: [
        '02 Design Requests at a time',
        'Unlimited Revisions',
        'Standard Email & Slack Support',
        'Figma Source Files Included',
        'Native Mobile & Web UI Support'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: 1040, // 20% discount
      period: 'month',
      description: 'Ideal for scaling companies seeking a dedicated design partner to handle end-to-end UX systems.',
      features: [
        'Unlimited Design Requests',
        'Unlimited Revisions',
        'Priority Slack & Call Support',
        'Full Interactive Prototypes',
        'Custom Design System Tokens',
        'Invoice and Easy Billing'
      ],
      popular: true
    }
  ]
};
