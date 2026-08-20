import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import RootLayout from './layouts/RootLayout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPostPage = lazy(() => import('./pages/BlogPost'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const Ecommerce = lazy(() => import('./pages/Ecommerce'));
const Contact = lazy(() => import('./pages/Contact'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="fixed inset-0 bg-[#050505] flex items-center justify-center z-50">
      {/* Premium loading spinner matching brand styling */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-red-600/10 rounded-full" />
        <div className="absolute inset-0 border-4 border-t-red-600 rounded-full animate-spin" />
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        {/* @ts-expect-error - Routes accepts key prop at runtime for AnimatePresence exit animations */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPostPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="ecommerce" element={<Ecommerce />} />
            <Route path="contact" element={<Contact />} />
            <Route path="case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}
