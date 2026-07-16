export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  challenges: string[];
  results: string[];
  stats: { label: string; value: string }[];
  link?: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface LeadMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  timestamp: string;
  status: 'new' | 'read' | 'replied';
}

export interface FAQItem {
  question: string;
  answer: string;
}
