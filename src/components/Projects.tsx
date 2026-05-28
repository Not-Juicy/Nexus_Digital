import { motion } from 'motion/react';
import { Target, Zap, Shield, TrendingUp, ChevronRight } from 'lucide-react';

import { processSteps } from '../data/process';

export default function Process() {
  return (
    <section id="process" className="py-32 bg-[#020202] relative overflow-hidden">
      {/* Background Liquid Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <span className="text-red-500 font-mono text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Methodology</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-[0.85]">
              PROVEN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 pr-4">PROCESS.</span>
            </h2>
          </div>
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em] max-w-[250px] leading-relaxed border-l border-red-600/30 pl-4">
            Structured methodology designed to deliver measurable, scalable digital outcomes globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative"
            >
              <div className={`h-full p-10 bg-white/[0.02] backdrop-blur-lg md:backdrop-blur-3xl border border-white/5 rounded-[2.5rem] flex flex-col justify-between min-h-[400px] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-700 group-hover:-translate-y-2`}>
                
                {/* Glow behind icon */}
                <div className={`absolute top-10 right-10 w-20 h-20 bg-gradient-to-br ${step.color} blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div>
                  <div className="flex justify-between items-start mb-12 relative z-10">
                    <span className="font-mono text-3xl font-black text-white/5 group-hover:text-red-500/20 transition-colors">
                      {step.phase}
                    </span>
                    <step.icon size={32} className="text-white/20 group-hover:text-red-500 transition-all duration-500" />
                  </div>
                  
                  <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-1 italic">
                      {step.title}
                    </h3>
                    <p className="text-[10px] font-black text-red-500/60 uppercase tracking-[0.3em] mb-6">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="h-px w-12 bg-white/10 mb-6 group-hover:w-full transition-all duration-700" />
                  <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                    {step.desc}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-red-500 transition-colors">
                    Learn Details <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[20vw] font-black text-white/[0.01] select-none pointer-events-none tracking-tighter uppercase whitespace-nowrap">
        Scale Up
      </div>
    </section>
  );
}

