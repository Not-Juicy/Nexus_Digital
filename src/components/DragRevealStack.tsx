import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

export default function DragRevealStack() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const total = caseStudies.length;

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [total, paused]);

  if (total === 0) {
    return (
      <div className="relative w-full flex items-center justify-center bg-[#0a0a0a] border border-white/10 rounded-2xl" style={{ aspectRatio: '4/5', maxHeight: 520, minHeight: 400 }}>
        <p className="text-white/30 text-sm">No case studies available.</p>
      </div>
    );
  }

  const next = () => setIndex((index + 1) % total);
  const prev = () => setIndex((index - 1 + total) % total);

  const cs = caseStudies[index];

  return (
    <div
      className="relative w-full group"
      style={{ aspectRatio: '4/5', maxHeight: 520, minHeight: 400 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Link to={`/case-studies/${cs.slug}`} className="group block w-full h-full">
            <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
              <img
                src={cs.image}
                alt={cs.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                draggable={false}
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-16 pb-6 px-6 md:px-8">
                <div className="border-l-2 border-red-500 pl-4">
                  <span className="text-[8px] font-black text-red-500 uppercase tracking-[0.3em] block mb-2">{cs.category}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 leading-tight">{cs.title}</h3>
                  <p className="text-xs md:text-sm text-white/70 max-w-md mb-2 leading-relaxed">{cs.desc}</p>
                  <span className="inline-block text-[9px] font-bold text-white/50 uppercase tracking-widest">{cs.results}</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 z-10">
                <span className="text-[9px] font-black text-white uppercase tracking-widest bg-red-600/90 px-4 py-2 rounded-full shadow-lg">View Case Study</span>
              </div>
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-black/60 text-white/60 hover:text-white hover:bg-black/90 hover:border-red-500/30 transition-all border border-white/10 text-lg backdrop-blur-sm"
      >‹</button>
      <button
        onClick={next}
        className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-black/60 text-white/60 hover:text-white hover:bg-black/90 hover:border-red-500/30 transition-all border border-white/10 text-lg backdrop-blur-sm"
      >›</button>

      <div className="absolute top-4 left-4 z-10">
        <span className="text-[9px] font-mono font-bold text-white/60 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {caseStudies.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'bg-red-500 w-5' : 'bg-white/20 w-1.5 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
