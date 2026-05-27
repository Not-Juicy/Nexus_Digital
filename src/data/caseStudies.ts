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
    image: '/img/imagee (1).png',
    desc: 'Scaling businesses through strategic, data-driven advertising campaigns that generate qualified leads, increase conversions, and maximize ROI across Facebook, Instagram, TikTok, LinkedIn, and beyond.',
    results: '5X lead volume at 40% lower CPA'
  },
  {
    slug: 'saas-launch-sea',
    title: 'SaaS Product Launch — SEA',
    category: 'SaaS Strategy',
    image: '/img/imagee (2).png',
    desc: 'Product strategy, roadmap planning, and go-to-market execution for SaaS businesses. From PRDs to launch and beyond.',
    results: '5,000+ signups in first quarter'
  },
  {
    slug: 'ai-automation-enterprise',
    title: 'AI Automation — Enterprise',
    category: 'AI & Automation',
    image: '/img/imagee (3).png',
    desc: 'Integrate AI tools and workflows into your business operations. Automate repetitive tasks and unlock new capabilities with intelligent systems.',
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
