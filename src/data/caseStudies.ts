import { Project } from '../types';

export interface CaseStudy extends Project {
  slug: string;
  desc: string;
  results: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'digital-consulting-lead-gen',
    title: 'Digital Consulting — Lead Generation',
    category: 'Digital Consulting',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1000',
    desc: 'Scaling businesses through strategic, data-driven advertising campaigns that generate qualified leads, increase conversions, and maximize ROI across Facebook, Instagram, TikTok, LinkedIn, and beyond.',
    results: '5X lead volume at 40% lower CPA'
  },
  {
    slug: 'saas-launch-sea',
    title: 'SaaS Product Launch — SEA',
    category: 'SaaS Strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    desc: 'Product strategy, roadmap planning, and go-to-market execution for SaaS businesses. From PRDs to launch and beyond.',
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
    image: '/img/why-choose.webp',
    desc: 'Full-scale digital transformation for a multi-national enterprise, integrating performance marketing, automation, and SaaS infrastructure.',
    results: '300% revenue increase across all channels'
  }
];
