import { motion } from 'motion/react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    return (
      <div className="pt-32 bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Case study not found</h1>
          <button onClick={() => navigate(-1)} className="text-red-500 hover:underline">Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32 bg-black min-h-screen">
      <section className="pt-8 md:pt-16 pb-24 px-6 max-w-4xl mx-auto">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-white/40 hover:text-red-500 transition-colors text-xs font-bold uppercase tracking-widest mb-8">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">{study.category}</span>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-none uppercase italic">
            {study.title}
          </h1>
          <div className="aspect-[16/9] overflow-hidden bg-[#111] border border-white/5 mb-12">
            <img src={study.image} alt={study.title} className="w-full h-full object-cover opacity-70" referrerPolicy="no-referrer" />
          </div>
          <p className="text-white/60 text-xl leading-relaxed mb-8">{study.desc}</p>
          <div className="p-8 bg-[#111] border border-red-600/20 inline-block">
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block mb-2">Key Result</span>
            <span className="text-3xl font-black text-white">{study.results}</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
