import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-[#010101] border-y border-white/5 overflow-hidden relative">
      {/* Liquid Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [-100, 100], y: [-50, 50], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-[10%] w-[40%] h-[40%] bg-red-900/10 rounded-full blur-[80px] md:blur-[120px] will-change-transform" 
        />
        <motion.div 
          animate={{ x: [100, -100], y: [50, -50], scale: [1, 0.8, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-[10%] w-[30%] h-[30%] bg-indigo-900/10 rounded-full blur-[60px] md:blur-[100px] will-change-transform" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-2xl">
          <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-[0.6em] mb-4 block">Global Feedback</span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
            CLIENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">VERDICTS.</span>
          </h2>
        </div>
        <p className="text-white/30 font-bold uppercase tracking-[0.3em] text-[9px] max-w-[250px] leading-relaxed border-l border-red-600/30 pl-4">
          Data-driven results from high-performance digital deployments across the SEA region.
        </p>
      </div>

      <div className="relative z-10">
        {/* Glass Edge Gradients */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#010101] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#010101] to-transparent z-10 pointer-events-none" />

        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap gap-8"
        >
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="w-[450px] bg-white/[0.02] backdrop-blur-lg md:backdrop-blur-2xl border border-white/5 p-12 rounded-[2.5rem] flex flex-col justify-between shrink-0 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 group cursor-default"
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={10} className={`${idx < t.rating ? 'fill-red-500 text-red-500' : 'text-white/10'} transition-colors`} />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-white/5 group-hover:text-red-500/20 transition-colors" />
                </div>
                
                <p className="text-xl text-white/80 font-bold tracking-tight italic leading-relaxed whitespace-normal group-hover:text-white transition-colors duration-500">
                  "{t.content}"
                </p>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="block text-white font-black uppercase tracking-tighter text-lg mb-1">{t.name}</span>
                  <span className="text-white/30 text-[9px] font-bold uppercase tracking-[0.3em] group-hover:text-red-400 transition-colors">{t.role}</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-500/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Background massive letters */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-white/[0.01] select-none pointer-events-none tracking-tighter">
        PROOF
      </div>
    </section>
  );
}
