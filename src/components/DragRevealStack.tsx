import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

export default function DragRevealStack() {
  return (
    <div className="relative w-full" style={{ height: `${caseStudies.length * 380}px` }}>
      {caseStudies.map((cs, i) => {
        const isLast = i === caseStudies.length - 1;
        return (
          <Link
            key={cs.slug}
            to={`/case-studies/${cs.slug}`}
            className="group block w-full"
            style={{
              position: 'sticky',
              top: `${80 + i * 60}px`,
              marginBottom: isLast ? '0' : `-${380 - 100}px`,
              zIndex: caseStudies.length - i,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative w-full h-[380px] overflow-hidden rounded-2xl border border-white/10 group cursor-pointer hover:border-red-500/30 transition-all duration-500"
            >
              <img
                src={cs.image}
                alt={cs.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[8px] font-black text-red-500 uppercase tracking-[0.3em] block mb-2">{cs.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-500 transition-colors mb-1">{cs.title}</h3>
                <p className="text-sm text-white/50 max-w-md mb-3">{cs.desc}</p>
                <span className="inline-block text-[10px] font-bold text-white/30 uppercase tracking-widest group-hover:text-red-400 transition-colors">{cs.results}</span>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black text-white uppercase tracking-widest bg-red-600 px-4 py-2 rounded-full">View Case Study</span>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}
