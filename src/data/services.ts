import { TrendingUp, Lightbulb, Zap } from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    title: 'Digital Consulting',
    desc: 'Data-driven ads campaigns that generate qualified leads, increase conversions, app installs across Facebook, Instagram, TikTok, GoogleAds, and LinkedIn.',
    icon: TrendingUp,
    category: 'Digital'
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
