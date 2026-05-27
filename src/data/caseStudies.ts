import { Project } from '../types';

export interface CaseStudy extends Project {
  slug: string;
  desc: string;
  results: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ecommerce-scale-cambodia',
    title: 'E-Commerce Scale — Cambodia',
    category: 'Performance Marketing',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
    desc: 'Scaled a local e-commerce brand from $10K to $120K monthly revenue through omnichannel paid media and creative optimization.',
    results: '12X revenue growth in 6 months'
  },
  {
    slug: 'saas-launch-sea',
    title: 'SaaS Product Launch — SEA',
    category: 'SaaS Strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    desc: 'End-to-end go-to-market strategy for a B2B SaaS platform targeting SMEs across Southeast Asia.',
    results: '5,000+ signups in first quarter'
  },
  {
    slug: 'ai-automation-enterprise',
    title: 'AI Automation — Enterprise',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
    desc: 'Designed and deployed custom AI workflows reducing manual operations by 70% for a logistics enterprise.',
    results: '70% operational cost reduction'
  },
  {
    slug: 'enterprise-scale',
    title: 'Enterprise Scale',
    category: 'Digital Strategy',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000',
    desc: 'Full-scale digital transformation for a multi-national enterprise, integrating performance marketing, automation, and SaaS infrastructure.',
    results: '300% revenue increase across all channels'
  }
];
