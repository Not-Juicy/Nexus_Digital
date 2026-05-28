import { motion } from 'motion/react';
import CountUp from '../components/CountUp';
import { Target, Users, Rocket, ShieldCheck, Mail, Phone, Send, ArrowRight, BarChart3, Cog, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { processSteps } from '../data/process';
import { caseStudies } from '../data/caseStudies';

export default function About() {
  const values = [
    { icon: Target, title: 'Strategic Planning', text: 'We align your business goals with practical execution that delivers measurable results.' },
    { icon: Users, title: 'Expert Team', text: 'A collective of specialists dedicated to performance marketing and digital dominance.' },
    { icon: Rocket, title: 'Growth Strategy', text: 'We don\'t just maintain; we scale and innovate to keep you ahead of the digital curve.' },
    { icon: ShieldCheck, title: 'Trust & Reliability', text: 'Consistent delivery and transparent communication as your long-term digital partner.' },
  ];

  return (
    <div className="pt-32 bg-black">
      {/* Hero Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.08)_0%,transparent_70%)]" />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4 block underline">About NEXUS</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-12 leading-none"
          >
            YOUR DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic pr-4">PARTNER</span> FOR GROWTH.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl text-white/60 text-xl md:text-2xl font-medium leading-relaxed"
          >
            We help brands grow fast and smart. We partner with ambitious leaders to build technical strategies that drive real growth — through performance marketing, SaaS product thinking, and AI-powered automation.
          </motion.p>
        </div>
      </section>

      {/* Vision + Values */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[40%] h-[60%] bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.04)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 text-[25vw] font-black text-white/[0.015] select-none pointer-events-none tracking-tighter italic leading-none">NEXUS</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-5 block">Our Foundation</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight leading-[1.1]">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 italic pr-2">NEXUS</span> Vision
            </h2>
            <div className="border-l-2 border-red-600/30 pl-6 space-y-5 text-white/50 text-lg leading-relaxed">
              <p className="text-white/60">
                In today&apos;s digital-first world, visibility, automation, and strategy are no longer optional — <span className="text-white/80 font-medium">they&apos;re essential.</span>
              </p>
              <p className="text-white/50">
                We bridge the gap between traditional business models and the future of digital commerce.
              </p>
              <p className="text-white/50">
                Based in Cambodia, we bring a global perspective to the Southeast Asian market, helping enterprises navigate the complexities of digital transformation with light-speed execution.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 bg-[#111] border border-white/5 hover:border-red-500/30 transition-all duration-500 group hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(220,38,38,0.1)]"
              >
                <div className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-600 transition-colors duration-500">
                  <v.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-32 bg-[#080808] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.05)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block underline">Performance Metrics</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                ENGINEERING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic">DOMINANCE.</span>
              </h2>
              <p className="text-white/60 text-lg max-w-lg mb-12 font-medium">
                We don't just build websites; we engineer digital high-performance environments that translate directly into business revenue and enterprise stability.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 border border-white/5 bg-black hover:border-red-500/40 transition-all group"
                >
                  <div className="text-4xl font-black text-red-600 mb-2 group-hover:scale-110 transition-transform origin-left"><CountUp value={150} suffix="+" /></div>
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Global Deployments</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-8 border border-white/5 bg-black hover:border-red-500/40 transition-all group"
                >
                  <div className="text-4xl font-black text-red-600 mb-2 group-hover:scale-110 transition-transform origin-left"><CountUp value={99.9} suffix="%" decimals={1} /></div>
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">System Uptime</div>
                </motion.div>
              </div>
            </div>

            <div className="space-y-5">
              {[
                { icon: BarChart3, label: 'E-Commerce Infrastructure', value: 94 },
                { icon: Cog, label: 'Cloud Automation Systems', value: 88 },
                { icon: Globe, label: 'Performance Marketing Data', value: 97 },
                { icon: Zap, label: 'Enterprise Security Protocols', value: 100 }
              ].map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#111] p-6 border border-white/5 hover:border-red-500/20 transition-colors"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-4 h-4 text-red-600 shrink-0" />
                      <span className="text-xs font-bold text-white/70 uppercase tracking-widest">{skill.label}</span>
                    </div>
                    <span className="text-xs font-black text-red-600"><CountUp value={skill.value} suffix="%" /></span>
                  </div>
                  <div className="h-1.5 bg-white/5 w-full relative rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'circOut' }}
                      className="absolute top-0 left-0 h-full bg-red-600 rounded-full" 
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12">
          <div>
            <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block underline">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
              HOW WE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic">DELIVER.</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/40 text-sm leading-relaxed uppercase tracking-wide">
            A proven framework from discovery to scale — built for ambitious brands.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />
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
                  <span className="text-7xl font-black text-white/[0.04] group-hover:text-red-600/20 transition-colors absolute -top-1 right-4 leading-none select-none">{step.phase}</span>
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-red-600 transition-colors">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-red-500 transition-colors">{step.title}</h3>
                  <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">{step.subtitle}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-32 bg-[#080808] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12">
            <div>
              <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block underline">Case Studies</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
                PROVEN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic">RESULTS.</span>
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
                  <div className="aspect-[16/10] overflow-hidden bg-[#111] border border-white/5 relative mb-8 rounded-xl">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-600/90 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest rounded">
                      {cs.category}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="text-[9px] font-black text-white bg-red-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full">View Project</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors leading-tight italic tracking-tight">
                    {cs.title}
                  </h3>

                  <p className="text-white/40 text-sm leading-relaxed mb-5">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.06)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-2">PARTNER WITH US.</h2>
              <p className="text-white/80 font-bold uppercase tracking-widest text-sm">Direct support at your fingertips.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="tel:+85581968581" className="flex items-center gap-3 text-white font-black hover:scale-110 transition-transform">
                <Phone size={24} /> <span>+855 81 968 581</span>
              </a>
              <a href="https://t.me/NexusDigital_Support" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white font-black hover:scale-110 transition-transform">
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
