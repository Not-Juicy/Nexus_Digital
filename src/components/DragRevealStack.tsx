import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

const offsets = [
  { x: 0, y: 0, rotate: 0, scale: 1 },
  { x: 12, y: 8, rotate: 1.5, scale: 0.97 },
  { x: -8, y: 16, rotate: -1, scale: 0.94 },
  { x: 6, y: 24, rotate: 2, scale: 0.91 },
];

const shadows = [
  '0 25px 50px -12px rgba(0,0,0,0.6)',
  '0 20px 40px -10px rgba(0,0,0,0.5)',
  '0 15px 30px -8px rgba(0,0,0,0.4)',
  '0 10px 20px -6px rgba(0,0,0,0.3)',
];

export default function DragRevealStack() {
  const visible = caseStudies.slice(0, 4);

  return (
    <div className="relative w-full" style={{ aspectRatio: '4/5', maxHeight: 560 }}>
      {visible.map((cs, i) => {
        const isTop = i === 0;
        const off = offsets[i] || offsets[offsets.length - 1];
        const z = visible.length - i;

        return (
          <Link
            key={cs.slug}
            to={`/case-studies/${cs.slug}`}
            className="absolute inset-0 group"
            style={{ zIndex: z }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10 transition-all duration-500"
              style={{
                transform: `translate(${off.x}px, ${off.y}px) rotate(${off.rotate}deg)`,
                boxShadow: shadows[i],
                scale: off.scale,
              }}
              whileHover={isTop ? {
                y: -12,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              } : undefined}
            >
              <img
                src={cs.image}
                alt={cs.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

              {isTop && (
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-[8px] font-black text-red-500 uppercase tracking-[0.3em] block mb-2">
                    {cs.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-500 transition-colors mb-1">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-white/50 max-w-md mb-3">{cs.desc}</p>
                  <span className="inline-block text-[10px] font-bold text-white/30 uppercase tracking-widest group-hover:text-red-400 transition-colors">
                    {cs.results}
                  </span>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest bg-red-600 px-4 py-2 rounded-full">
                      View Case Study
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}
