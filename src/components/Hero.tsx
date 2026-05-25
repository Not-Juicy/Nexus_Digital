import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-red-500/5 blur-[100px] rounded-full" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 border border-red-600/30 rounded-full text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-8 bg-red-600/5">
            Based in Cambodia • Serving Clients Globally
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.1] mb-8 uppercase px-4">
            DIGITAL STRATEGY. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic">AI AUTOMATION.</span> <br />
            REAL GROWTH.
          </h1>
          <p className="max-w-3xl mx-auto text-white/60 text-lg md:text-xl font-medium mb-12 leading-relaxed">
            We partner with ambitious brands to build digital strategies that drive real growth — through performance marketing, SaaS product thinking, and AI-powered automation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
            <a 
              href="https://t.me/DanLP18" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all transform hover:scale-105 rounded-full"
            >
              CONSULTATION
            </a>
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest hover:border-white transition-all transform hover:scale-105 text-center flex items-center justify-center rounded-full"
            >
              See Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}