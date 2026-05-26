import { BlogPost } from '../types';

export interface BlogPostDetail extends BlogPost {
  slug: string;
  content: string[]; // paragraphs
}

export const blogPosts: BlogPostDetail[] = [
  {
    slug: 'hello-world',
    title: 'Hello world!',
    excerpt:
      'Welcome to NEXUS Digital. This is our first post. Stay tuned for more insights into the digital SEA market...',
    date: 'May 16, 2025',
    author: 'Admin',
    readTime: '2 min read',
    category: 'Company News',
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000',
    content: [
      "Welcome to Nexus Digital — we’re a performance-first digital partner for brands in Cambodia and across SEA.",
      "In this blog we’ll share practical insights on paid media, creative systems, landing page optimization, and automation workflows that help teams scale without wasting spend.",
      "If there’s a topic you want us to cover (Meta/TikTok/GoogleAds, tracking, creatives, or CRM automation), reach out and we’ll publish a deep dive."
    ]
  },
  {
    slug: 'best-website-solutions',
    title: 'Get few solutions to make a best website',
    excerpt:
      'Optimizing speed, performance and user experience in the Cambodian digital landscape. Learn how we build for scale...',
    date: 'July 21, 2023',
    author: 'Nexus Team',
    readTime: '5 min read',
    category: 'Development',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000',
    content: [
      "A “best website” is not just design — it’s speed, structure, and messaging that converts.",
      'Start with fundamentals: clear value proposition, mobile-first layout, and simple navigation with strong CTAs.',
      'Then optimize performance: compress images, minimize scripts, lazy-load media, and track Core Web Vitals.',
      'Finally, measure everything: conversion events, form submissions, call clicks, and campaign landing page performance.'
    ]
  },
  {
    slug: 'get-the-most-out-of-creativity',
    title: 'Get the Most out of the Creativity',
    excerpt:
      'Bridging the gap between raw data and creative execution. Strategy is the heart of every digital campaign...',
    date: 'July 21, 2023',
    author: 'Nexus Team',
    readTime: '4 min read',
    category: 'Design',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
    content: [
      'Creative is a system — not a lucky hit.',
      'We recommend building a creative testing pipeline: hooks → angles → offers → formats → iterations.',
      'Use data to guide creative decisions: track CTR, hold rate, CPC/CPM, and post-click conversion rate per creative.',
      'When you find a winner, scale it with controlled variations while preserving the core message.'
    ]
  },
  {
    slug: 'how-much-does-a-website-cost',
    title: 'How Much a Website Cost to develop?',
    excerpt:
      'Breaking down the costs of digital transformation. From basic landing pages to enterprise automation...',
    date: 'July 21, 2023',
    author: 'Admin',
    readTime: '7 min read',
    category: 'Consulting',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    content: [
      'Website cost depends on scope: pages, custom components, integrations, and the level of design/animation.',
      'A simple landing page is usually the fastest path to ROI — especially for paid traffic.',
      'More complex builds (multi-page sites, CMS, e-commerce, CRM integrations) increase time and budget but can unlock higher conversion and better operations.',
      'If you share your requirements, we can recommend the right build level and a phased roadmap.'
    ]
  }
];

