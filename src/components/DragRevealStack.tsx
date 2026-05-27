import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

export default function DragRevealStack() {
  const [index, setIndex] = useState(0);
  const total = caseStudies.length;

  const next = () => setIndex((index + 1) % total);
  const prev = () => setIndex((index - 1 + total) % total);

  const cs = caseStudies[index];

  return (
    <div className="relative w-full" style={{ aspectRatio: '4/5', maxHeight: 520 }}>
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
            <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10">
              <img
                src={cs.image}
                alt={cs.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-[8px] font-black text-red-500 uppercase tracking-[0.3em] block mb-2">{cs.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{cs.title}</h3>
                <p className="text-sm text-white/60 max-w-md mb-3">{cs.desc}</p>
                <span className="inline-block text-[10px] font-bold text-white/40 uppercase tracking-widest">{cs.results}</span>
              </div>

              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <span className="text-[10px] font-black text-white uppercase tracking-widest bg-red-600/90 px-4 py-2 rounded-full">View</span>
              </div>
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white/50 hover:text-white hover:bg-black/80 transition-all"
      >‹</button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white/50 hover:text-white hover:bg-black/80 transition-all"
      >›</button>

      <div className="absolute top-4 left-4 z-10">
        <span className="text-[10px] font-mono font-bold text-white/50 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
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
