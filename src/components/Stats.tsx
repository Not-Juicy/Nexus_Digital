import { motion } from 'motion/react';

const stats = [
  { value: '6X', label: 'AVERAGE ROAS', suffix: '' },
  { value: '150', label: 'MRR GROWTH', suffix: '%' },
  { value: '60', label: 'MANUAL REDUCTION', suffix: '%' },
  { value: '99', label: 'CLIENT RETENTION', suffix: '%' },
];

export default function Stats() {
  return (
    <section className="py-32 bg-[#020202] border-y border-white/5 relative overflow-hidden">
      {/* Dynamic Mesh Gradient (Liquid) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 150, -100, 0], 
            y: [0, -100, 150, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 -left-[10%] w-[50%] h-[50%] bg-red-600/10 rounded-full blur-[80px] md:blur-[140px] opacity-60 will-change-transform" 
        />
        <motion.div 
          animate={{ 
            x: [0, -200, 100, 0], 
            y: [0, 150, -100, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-[10%] w-[40%] h-[40%] bg-rose-600/5 rounded-full blur-[60px] md:blur-[120px] opacity-40 will-change-transform" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-emerald-500/5 rounded-full blur-[80px] md:blur-[120px] will-change-transform" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="relative group"
            >
              {/* Glass Card */}
              <div className="h-full p-10 bg-white/[0.03] backdrop-blur-lg md:backdrop-blur-3xl backdrop-saturate-150 border border-white/10 rounded-[2rem] flex flex-col justify-between min-h-[300px] transition-all duration-700 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_40px_rgba(220,38,38,0.1)] group-hover:-translate-y-2">
                
                {/* Decorative Elements */}
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] font-black text-white/20 uppercase tracking-widest">
                      System_Node
                    </span>
                    <span className="font-mono text-[9px] font-black text-red-500/40 uppercase tracking-widest">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-white/10" />
                    <div className="w-1 h-1 rounded-full bg-white/10" />
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1 h-1 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" 
                    />
                  </div>
                </div>

                <div className="relative">
                  <div className="mb-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 + 0.3 }}
                      className="text-5xl md:text-6xl font-black text-white tracking-tighter flex items-baseline leading-none group-hover:scale-[1.02] transition-transform duration-700"
                    >
                      {stat.value}
                      {stat.suffix && (
                        <span className="text-red-500 text-3xl ml-1 font-bold italic opacity-80 decoration-red-500/30 underline underline-offset-8">
                          {stat.suffix}
                        </span>
                      )}
                    </motion.div>
                  </div>
                  
                  <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6" />
                  
                  <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em] group-hover:text-white/70 transition-colors duration-500">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scanner Beam Effect - Only on Desktop */}
      <motion.div 
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-red-500/5 to-transparent pointer-events-none z-0 hidden md:block will-change-transform" 
      />
    </section>
  );
}
