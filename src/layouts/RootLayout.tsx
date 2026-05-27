import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function RootLayout() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef<Record<string, number>>({});
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Save scroll on leave, restore on back, scroll top on forward
  useEffect(() => {
    const lenis = lenisRef.current;

    if (navigationType === 'POP') {
      const saved = scrollPositions.current[pathname];
      if (saved && lenis) {
        lenis.scrollTo(saved, { immediate: true });
      }
    } else if (!hash) {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    }

    return () => {
      scrollPositions.current[pathname] = window.scrollY;
    };
  }, [pathname, hash, navigationType]);

  // Handle hash scrolling
  useEffect(() => {
    if (hash && lenisRef.current) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          lenisRef.current?.scrollTo(element, { offset: -80, duration: 1.2 });
        }, 200);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-black selection:bg-red-600 selection:text-white relative">
      
      <Navbar />
      
      <motion.main
        key={navigationType === 'POP' ? 'static' : pathname}
        initial={navigationType === 'POP' ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Outlet />
      </motion.main>

      <Footer />
    </div>
  );
}
