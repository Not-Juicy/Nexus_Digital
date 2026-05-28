import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Projects';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';
import DragRevealStack from '../components/DragRevealStack';
import { motion } from 'motion/react';
import CountUp from '../components/CountUp';
import { Phone, Mail, Send, Facebook, Linkedin, Target, Users, Rocket, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />

      {/* About NEXUS */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4 block underline">About NEXUS</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-12">
            YOUR DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic pr-4">PARTNER</span> FOR GROWTH.
          </h1>
          <p className="max-w-3xl text-white/60 text-xl md:text-2xl font-medium leading-relaxed">
            We help brands grow fast and smart. We partner with ambitious leaders to build technical strategies that drive real growth — through performance marketing, SaaS product thinking, and AI-powered automation.
          </p>
        </motion.div>
      </section>

      {/* The NEXUS Vision */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 -left-[10%] w-64 h-64 bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 -right-[10%] w-64 h-64 bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block underline">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-8 leading-none">
              THE NEXUS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic">VISION.</span>
            </h2>
            <div className="space-y-6 text-white/50 text-lg leading-relaxed border-l-2 border-red-600/20 pl-6">
              <p>
                In today's digital-first world, visibility, automation, and strategy are no longer optional—they're essential. We bridge the gap between traditional business models and the future of digital commerce.
              </p>
              <p>
                Based in Cambodia, we bring a global perspective to the Southeast Asian market, helping enterprises navigate the complexities of digital transformation with light-speed execution.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Target, title: 'Strategic Planning', text: 'We align your business goals with practical execution that delivers measurable results.' },
              { icon: Users, title: 'Expert Team', text: 'A collective of specialists dedicated to performance marketing and digital dominance.' },
              { icon: Rocket, title: 'Growth Strategy', text: 'We don\'t just maintain; we scale and innovate to keep you ahead of the digital curve.' },
              { icon: ShieldCheck, title: 'Trust & Reliability', text: 'Consistent delivery and transparent communication as your long-term digital partner.' },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#111] border border-white/5 hover:border-red-500/30 transition-all duration-500 group hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(220,38,38,0.15)]"
              >
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-red-500 transition-colors">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-32 bg-[#080808] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.05)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block underline">Performance Metrics</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                ENGINEERING <br />
                <span className="text-red-600">DOMINANCE.</span>
              </h2>
              <p className="text-white/60 text-lg max-w-lg mb-12 font-medium">
                We don't just build websites; we engineer digital high-performance environments that translate directly into business revenue and enterprise stability.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 border border-white/5 bg-black hover:border-red-500/40 transition-all group">
                  <div className="text-4xl font-black text-red-600 mb-2 group-hover:scale-110 transition-transform origin-left"><CountUp value={150} suffix="+" /></div>
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Global Deployments</div>
                </div>
                <div className="p-8 border border-white/5 bg-black hover:border-red-500/40 transition-all group">
                  <div className="text-4xl font-black text-red-600 mb-2 group-hover:scale-110 transition-transform origin-left"><CountUp value={99.9} suffix="%" decimals={1} /></div>
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">System Uptime</div>
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
                    <span className="text-xs font-black text-red-600"><CountUp value={skill.value} suffix="%" /></span>
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

      {/* High-Performance Marquee */}
      <section className="py-16 bg-white overflow-hidden relative group">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              <span className="text-black text-6xl font-black uppercase tracking-tighter">Performance Marketing</span>
              <span className="w-4 h-4 bg-red-600 rotate-45" />
              <span className="text-transparent font-black uppercase tracking-tighter text-6xl [-webkit-text-stroke:1px_black]">SaaS Strategy</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span className="text-black text-6xl font-black uppercase tracking-tighter">AI Automation</span>
              <span className="w-4 h-4 bg-red-600 rotate-45" />
              <span className="text-transparent font-black uppercase tracking-tighter text-6xl [-webkit-text-stroke:1px_black]">Digital Growth</span>
              <span className="w-4 h-4 bg-black rounded-full" />
            </div>
          ))}
        </motion.div>
      </section>

      <Services />
      <Stats />
      <Process />

      {/* Why Choose Us */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <div className="absolute top-0 -left-[10%] w-72 h-72 bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 -right-[10%] w-72 h-72 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block underline">Why Us</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                WHY CHOOSE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">NEXUS DIGITAL.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl">
                We bring together strategic consulting, precision targeting, data-driven strategies, and AI automation — all tailored to your business growth goals.
              </p>
              <div className="space-y-5">
                {[
                  'Strategic alignment with business goals',
                  'High-performance technical execution',
                  'Localized SEA market expertise',
                  'Transparent reporting & constant support'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-white group"
                  >
                    <div className="w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center text-[10px] font-bold text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">✓</div>
                    <span className="text-sm font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <DragRevealStack />
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Quick Contact Bar */}
      <section className="py-20 bg-[#080808] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="text-center lg:text-left">
              <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Reach Out Directly</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
                GET IN <span className="text-red-600">TOUCH.</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <a href="tel:+85581968581" className="flex flex-col items-center gap-3 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">Call Us</span>
              </a>
              <a href="mailto:info@nexus-digital.asia" className="flex flex-col items-center gap-3 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">Email</span>
              </a>
              <a href="https://t.me/DanLP18" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">Telegram</span>
              </a>
              <a href="https://www.facebook.com/Nexusdigital.asia" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Refined CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Action Text */}
            <div className="lg:col-span-7">
              <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Next Steps</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                READY TO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900 pr-6 inline-block">DOMINATE?</span>
              </h2>
<p className="text-white/60 text-xl font-medium max-w-xl leading-relaxed mb-12">
  Stop leaving growth on the table. Get the strategic edge, targeting precision, and automated infrastructure your brand needs to dominate your market.
</p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="https://t.me/DanLP18" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 group rounded-full"
                >
                  Book a Consultation <span className="w-5 h-5 bg-white/20 rounded flex items-center justify-center group-hover:bg-black/10">→</span>
                </a>
              </div>
            </div>

            {/* Metrics Bento */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-8 bg-[#0a0a0a] border border-white/5 hover:border-red-600/30 transition-all group">
                <span className="block text-3xl font-black text-red-600 mb-1"><CountUp value={98} suffix="%" /></span>
                <span className="text-[8px] font-bold text-white/50 uppercase tracking-widest">Retention Rate</span>
              </div>
              <div className="p-8 bg-[#0a0a0a] border border-white/5 hover:border-red-600/30 transition-all group">
                <span className="block text-3xl font-black text-red-600 mb-1"><CountUp value={6} suffix="X" /></span>
                <span className="text-[8px] font-bold text-white/50 uppercase tracking-widest">Average ROI</span>
              </div>
              <div className="p-8 bg-[#0a0a0a] border border-white/5 hover:border-red-600/30 transition-all group">
                <span className="block text-3xl font-black text-red-600 mb-1">24/7</span>
                <span className="text-[8px] font-bold text-white/50 uppercase tracking-widest">Technical Support</span>
              </div>
              <div className="p-8 bg-[#0a0a0a] border border-white/5 hover:border-red-600/30 transition-all group">
                <span className="block text-3xl font-black text-red-600 mb-1"><CountUp value={100} suffix="K+" /></span>
                <span className="text-[8px] font-bold text-white/50 uppercase tracking-widest">Campaigns Run</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
