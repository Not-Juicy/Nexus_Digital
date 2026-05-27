import { motion } from 'motion/react';
import { Target, Users, Rocket, ShieldCheck, Mail, Phone, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { processSteps } from '../data/process';
import { caseStudies } from '../data/caseStudies';

export default function About() {
  const values = [
    { icon: Target, title: 'Strategic Planning', text: 'We align your business goals with practical execution that delivers measurable results.' },
    { icon: Users, title: 'Expert Team', text: 'A collective of specialists dedicated to performance marketing and digital dominance.' },
    { icon: Rocket, title: 'Growth Mindset', text: 'We don\'t just maintain; we scale and innovate to keep you ahead of the digital curve.' },
    { icon: ShieldCheck, title: 'Trust & Reliability', text: 'Consistent delivery and transparent communication as your long-term digital partner.' },
  ];

  return (
    <div className="pt-32 bg-black">
      {/* Hero Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4 block underline">About NEXUS</span>
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-12">
            YOUR DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic">PARTNER</span> FOR GROWTH.
          </h1>
          <p className="max-w-3xl text-white/60 text-xl md:text-2xl font-medium leading-relaxed">
            We help brands grow fast and smart. We partner with ambitious leaders to build technical strategies that drive real growth — through performance marketing, SaaS product thinking, and AI-powered automation.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight italic">The NEXUS Vision</h2>
            <div className="space-y-6 text-white/50 text-lg leading-relaxed">
              <p>
                In today’s digital-first world, visibility, automation, and strategy are no longer optional—they’re essential. We bridge the gap between traditional business models and the future of digital commerce.
              </p>
              <p>
                Based in Cambodia, we bring a global perspective to the Southeast Asian market, helping enterprises navigate the complexities of digital transformation with light-speed execution.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#111] border border-white/5 hover:border-red-500/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement / Capabilities Section */}
      <section className="py-32 bg-[#080808] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.05)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block underline">Performance Metrics</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                ENGINEERING <br />
                <span className="text-red-600">DOMINANCE.</span>
              </h2>
              <p className="text-white/40 text-lg max-w-lg mb-12 font-medium">
                We don't just build websites; we engineer digital high-performance environments that translate directly into business revenue and enterprise stability.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 border border-white/5 bg-black hover:border-red-500/40 transition-all group">
                  <div className="text-4xl font-black text-red-600 mb-2 group-hover:scale-110 transition-transform origin-left">150+</div>
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Global Deployments</div>
                </div>
                <div className="p-8 border border-white/5 bg-black hover:border-red-500/40 transition-all group">
                  <div className="text-4xl font-black text-red-600 mb-2 group-hover:scale-110 transition-transform origin-left">99.9%</div>
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">System Uptime</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: 'E-Commerce Infrastructure', value: 94 },
                { label: 'Cloud Automation Systems', value: 88 },
                { label: 'Performance Marketing Data', value: 97 },
                { label: 'Enterprise Security Protocols', value: 100 }
              ].map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#111] p-6 border border-white/5"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-white/70 uppercase tracking-widest">{skill.label}</span>
                    <span className="text-xs font-black text-red-600">{skill.value}%</span>
                  </div>
                  <div className="h-1 bg-white/5 w-full relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="absolute top-0 left-0 h-full bg-red-600" 
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12">
          <div>
            <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block underline">Our Process</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
              HOW WE <span className="text-red-600">DELIVER.</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/40 text-sm leading-relaxed uppercase tracking-wide">
            A proven framework from discovery to scale — built for ambitious brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-[#0a0a0a] p-10 border border-white/5 hover:border-red-500/30 transition-all overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${step.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <span className="text-5xl font-black text-white/5 group-hover:text-red-600/20 transition-colors mb-6 block">{step.phase}</span>
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-red-600 transition-colors">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-red-500 transition-colors">{step.title}</h3>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">{step.subtitle}</p>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-32 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12">
            <div>
              <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block underline">Case Studies</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
                PROVEN <span className="text-red-600">RESULTS.</span>
              </h2>
            </div>
            <p className="max-w-sm text-white/40 text-sm leading-relaxed uppercase tracking-wide">
              Real deployments, real outcomes — from startups to enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <Link key={cs.slug} to={`/case-studies/${cs.slug}`} className="group block">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="cursor-pointer"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[#111] border border-white/5 relative mb-8">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 px-4 py-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest">
                      {cs.category}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors leading-tight italic tracking-tight">
                    {cs.title}
                  </h3>

                  <p className="text-white/40 text-sm leading-relaxed mb-6">
                    {cs.desc}
                  </p>

                  <div className="inline-flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all border-b border-red-600/30 pb-2">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-24 bg-red-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-2">PARTNER WITH US.</h2>
              <p className="text-white/80 font-bold uppercase tracking-widest text-sm">Direct support at your fingertips.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="tel:+85581968581" className="flex items-center gap-3 text-white font-black hover:scale-110 transition-transform">
                <Phone size={24} /> <span>+855 81 968 581</span>
              </a>
              <a href="https://t.me/DanLP18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white font-black hover:scale-110 transition-transform">
                <Send size={24} /> <span>Telegram</span>
              </a>
              <a href="mailto:info@nexus-digital.asia" className="flex items-center gap-3 text-white font-black hover:scale-110 transition-transform">
                <Mail size={24} /> <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      </section>
    </div>
  );
}
