import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';
import { motion } from 'motion/react';
import { Phone, Mail, Send, Facebook, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      
      {/* High-Performance Marquee */}
      <section className="py-16 bg-white overflow-hidden border-y border-black relative group">
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
      <Projects />
      <Testimonials />

      {/* Quick Contact Bar */}
      <section className="py-20 bg-[#080808] border-y border-white/5 relative overflow-hidden">
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
      <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
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
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                READY TO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900 pr-6 inline-block">DOMINATE?</span>
              </h2>
<p className="text-white/40 text-xl font-medium max-w-xl leading-relaxed mb-12">
  We combine strategic consulting, precision targeting, creative optimization, data-drive and automation to help ambitious brands scale smarter.
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
                <span className="block text-3xl font-black text-red-600 mb-1">98%</span>
                <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Retention Rate</span>
              </div>
              <div className="p-8 bg-[#0a0a0a] border border-white/5 hover:border-red-600/30 transition-all group">
                <span className="block text-3xl font-black text-red-600 mb-1">10X</span>
                <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Average ROI</span>
              </div>
              <div className="p-8 bg-[#0a0a0a] border border-white/5 hover:border-red-600/30 transition-all group">
                <span className="block text-3xl font-black text-red-600 mb-1">24/7</span>
                <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Technical Support</span>
              </div>
              <div className="p-8 bg-[#0a0a0a] border border-white/5 hover:border-red-600/30 transition-all group">
                <span className="block text-3xl font-black text-red-600 mb-1">5K+</span>
                <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Campaigns Run</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
