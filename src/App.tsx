import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPost';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import Ecommerce from './pages/Ecommerce';
import CaseStudyDetail from './pages/CaseStudyDetail';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error - key is used by AnimatePresence for transitions */}
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
    </AnimatePresence>
  );
}
