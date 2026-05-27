import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

const stackRotations = [-2.2, 1.8, -1.4, 2.6];

export default function DragRevealStack() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const [dragX, setDragX] = useState(0);
  const dragStarted = useRef(false);
  const total = caseStudies.length;

  const goTo = (i: number) => {
    const next = ((i % total) + total) % total;
    setDir(next > index ? 1 : -1);
    setIndex(next);
    setDragX(0);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const cs = caseStudies[index];
  const prevIdx = (index - 1 + total) % total;
  const nextIdx = (index + 1) % total;

  const counter = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 320 : -320, opacity: 0, scale: 0.92 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -320 : 320, opacity: 0, scale: 0.92 }),
  };

  return (
    <div className="relative w-full select-none" style={{ aspectRatio: '4/5', maxHeight: 540 }}>
      {/* stack behind */}
      <div className="absolute inset-0 flex items-center justify-center">
        {caseStudies.map((_, i) => {
          if (i === index || i === prevIdx || i === nextIdx) return null;
          const dist = Math.min((i - index + total) % total, (index - i + total) % total);
          return (
            <div
              key={i}
              className="absolute w-[86%] h-[86%] rounded-2xl border border-white/5 bg-[#0a0a0a] transition-all duration-700"
              style={{
                zIndex: -dist,
                transform: `scale(${1 - dist * 0.05}) translateY(${dist * 10}px) rotate(${stackRotations[i % stackRotations.length]}deg)`,
              }}
            />
          );
        })}
      </div>

      {/* peek prev */}
      <motion.div
        key={`peek-prev-${index}`}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 0.5, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.4 }}
        className="absolute left-[-20%] top-[6%] w-[44%] h-[88%] rounded-2xl border border-white/5 bg-[#0a0a0a] overflow-hidden pointer-events-none z-[5]"
        style={{ transform: 'rotate(-3deg)' }}
      >
        <img
          src={caseStudies[prevIdx].image}
          alt=""
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-[9px] font-bold text-white/40 uppercase tracking-wider truncate">{caseStudies[prevIdx].title}</p>
        </div>
      </motion.div>

      {/* peek next */}
      <motion.div
        key={`peek-next-${index}`}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.5, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 0.4 }}
        className="absolute right-[-20%] top-[6%] w-[44%] h-[88%] rounded-2xl border border-white/5 bg-[#0a0a0a] overflow-hidden pointer-events-none z-[5]"
        style={{ transform: 'rotate(3deg)' }}
      >
        <img
          src={caseStudies[nextIdx].image}
          alt=""
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-[9px] font-bold text-white/40 uppercase tracking-wider truncate text-right">{caseStudies[nextIdx].title}</p>
        </div>
      </motion.div>

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
            transition={{ type: 'spring', stiffness: 280, damping: 24, mass: 0.9 }}
            className="absolute inset-0"
            style={{ perspective: 1200 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragStart={() => { dragStarted.current = true; }}
            onDrag={(_, info) => setDragX(Math.max(-140, Math.min(140, info.offset.x)))}
            onDragEnd={(_, info) => {
              dragStarted.current = false;
              setDragX(0);
              if (info.offset.x > 75) prev();
              else if (info.offset.x < -75) next();
            }}
          >
            <Link to={`/case-studies/${cs.slug}`} className="group block w-full h-full">
              <div
                className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10 transition-shadow duration-300 hover:shadow-[0_0_40px_-8px_rgba(220,38,38,0.15)]"
                style={{
                  transform: `rotateY(${dragX * 0.12}deg) rotateX(${Math.abs(dragX) * 0.02}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                {/* glass info panel */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="backdrop-blur-xl bg-white/[0.04] rounded-xl p-4 md:p-5 border border-white/[0.06] shadow-lg">
                    <span className="text-[7px] font-black text-red-500 uppercase tracking-[0.35em] block mb-2">{cs.category}</span>
                    <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-red-500 transition-colors mb-1">{cs.title}</h3>
                    <p className="text-xs md:text-sm text-white/50 max-w-md mb-2 leading-relaxed">{cs.desc}</p>
                    <span className="inline-block text-[9px] font-bold text-white/30 uppercase tracking-widest group-hover:text-red-400 transition-colors">{cs.results}</span>
                  </div>
                </div>

                {/* view badge */}
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <span className="text-[9px] font-black text-white uppercase tracking-widest bg-red-600/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg shadow-red-600/20">View Case Study</span>
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* nav arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 border border-white/[0.06] text-white/50 hover:text-white hover:bg-black/80 hover:border-red-500/30 transition-all text-lg backdrop-blur-md"
      >‹</button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 border border-white/[0.06] text-white/50 hover:text-white hover:bg-black/80 hover:border-red-500/30 transition-all text-lg backdrop-blur-md"
      >›</button>

      {/* counter */}
      <div className="absolute top-4 left-4 z-20">
        <span className="text-[9px] font-mono font-bold text-white/40 tracking-[0.25em] bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.06]">
          {counter}
        </span>
      </div>

      {/* drag hint */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-[15] pointer-events-none bg-gradient-to-r from-red-500/8 to-transparent opacity-0 lg:opacity-0 transition-opacity duration-500 lg:group-hover:opacity-100" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-[15] pointer-events-none bg-gradient-to-l from-red-500/8 to-transparent opacity-0 lg:opacity-0 transition-opacity duration-500 lg:group-hover:opacity-100" />

      {/* dots */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {caseStudies.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'bg-red-500 w-5' : 'bg-white/15 w-1.5 hover:bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
