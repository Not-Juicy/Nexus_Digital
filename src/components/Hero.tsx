import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#050505] pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-red-600/10 blur-[130px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 40, 0],
            y: [0, 20, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-red-900/10 blur-[130px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-[35%] h-[35%] bg-red-500/5 blur-[110px] rounded-full" 
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Elegant Large Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="text-[25vw] font-black text-white/[0.01] tracking-tighter uppercase italic">
          NEXUS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 border border-red-500/20 rounded-full text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-8 bg-red-950/10 shadow-[0_0_15px_rgba(239,68,68,0.05)]">
            Based in Cambodia • Serving Clients Globally
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-8 uppercase px-4">
            WE HELP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-800 italic pr-2 drop-shadow-[0_0_35px_rgba(239,68,68,0.15)]">BUSINESSES SCALE</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-800 italic pr-2 drop-shadow-[0_0_35px_rgba(239,68,68,0.15)]">WITH DIGITAL &amp; AI.</span>
          </h1>
<p className="max-w-3xl mx-auto text-white/60 text-lg md:text-xl font-medium mb-12 leading-relaxed">
  We combine strategic consulting, precision targeting, creative optimization, data-driven strategies and AI automation to help ambitious brands scale smarter.
</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
            <a 
              href="https://t.me/DanLP18" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-white to-neutral-200 text-black font-black uppercase tracking-widest hover:from-red-600 hover:to-red-800 hover:text-white transition-all duration-300 transform hover:scale-105 rounded-full shadow-[0_10px_35px_rgba(255,255,255,0.08)] hover:shadow-[0_10px_35px_rgba(220,38,38,0.3)] flex items-center justify-center"
            >
              CONSULTATION
            </a>
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-12 py-5 border border-white/10 text-white font-bold uppercase tracking-widest hover:border-red-600 hover:bg-red-600/10 transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center rounded-full"
            >
              See Services
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[8px] font-bold text-white uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1.5">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" 
          />
        </div>
      </div>
    </section>
  );
}
