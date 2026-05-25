import { TrendingUp, Lightbulb, Zap } from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    title: 'Digital Consulting',
    desc: 'Performance-driven campaigns across Google, Meta, and TikTok. We optimize every dollar for maximum return with data-backed strategies.',
    icon: TrendingUp,
    category: 'Marketing'
  },
  {
    title: 'SaaS Strategy',
    desc: 'Product strategy, roadmap planning, and go-to-market execution for SaaS businesses. From PRDs to launch and beyond.',
    icon: Lightbulb,
    category: 'SaaS'
  },
  {
    title: 'AI & Automation',
    desc: 'Integrate AI tools and workflows into your business operations. Automate repetitive tasks and unlock new capabilities with intelligent systems.',
    icon: Zap,
    category: 'Automation'
  }
];
