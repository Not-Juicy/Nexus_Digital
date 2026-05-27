import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

export default function DragRevealStack() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);

  const goTo = (i: number) => {
    setDir(i > index ? 1 : -1);
    setIndex(i);
  };

  const next = () => goTo((index + 1) % caseStudies.length);
  const prev = () => goTo((index - 1 + caseStudies.length) % caseStudies.length);

  const cs = caseStudies[index];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  return (
    <div className="relative w-full select-none" style={{ aspectRatio: '4/5', maxHeight: 520 }}>
      {/* stack behind */}
      <div className="absolute inset-0 flex items-center justify-center">
        {caseStudies.map((_, i) => {
          if (i === index) return null;
          const dist = (i - index + caseStudies.length) % caseStudies.length;
          const behind = Math.min(dist, caseStudies.length - dist);
          const z = -behind;
          const s = 1 - behind * 0.04;
          const y = behind * 8;
          return (
            <div
              key={i}
              className="absolute w-[92%] h-[92%] rounded-2xl border border-white/5 bg-[#0a0a0a] transition-all duration-500"
              style={{ zIndex: z, transform: `scale(${s}) translateY(${y}px)` }}
            />
          );
        })}
      </div>

      {/* main card */}
      <div className="relative w-full h-full z-10">
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={index}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 260, damping: 26, mass: 0.8 }}
            className="absolute inset-0"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragEnd={(_, info) => {
              if (info.offset.x > 80) prev();
              else if (info.offset.x < -80) next();
            }}
          >
            <Link
              to={`/case-studies/${cs.slug}`}
              className="group block w-full h-full"
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <span className="text-[8px] font-black text-red-500 uppercase tracking-[0.3em] block mb-2">{cs.category}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-500 transition-colors mb-1">{cs.title}</h3>
                  <p className="text-sm text-white/50 max-w-md mb-2">{cs.desc}</p>
                  <span className="inline-block text-[10px] font-bold text-white/30 uppercase tracking-widest group-hover:text-red-400 transition-colors">{cs.results}</span>
                </div>
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest bg-red-600 px-4 py-2 rounded-full">View</span>
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* nav arrows */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white/60 hover:text-white hover:bg-black/80 hover:border-red-500/30 transition-all text-lg"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white/60 hover:text-white hover:bg-black/80 hover:border-red-500/30 transition-all text-lg"
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {caseStudies.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? 'bg-red-500 w-5' : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
