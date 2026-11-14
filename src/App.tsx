import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CursorProvider } from './context/CursorContext';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { SkipLink } from './components/SkipLink';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Owner } from './pages/Owner';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { pageTransitionVariants } from './motion/motionTokens';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const activeTransition = shouldReduceMotion
    ? {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 1, y: 0 },
      }
    : pageTransitionVariants;

  return (
    <CursorProvider>
      <div className="flex flex-col min-h-screen bg-dsr-white text-dsr-navy font-sans selection:bg-dsr-cyan/30 selection:text-dsr-navy relative">
        <ScrollProgress />
        <CustomCursor />
        <ScrollToTop />
        <SkipLink />
        <Header />

        <div className="flex-grow flex flex-col relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={activeTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-grow flex flex-col w-full"
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/projects" element={<Navigate to="/gallery" replace />} />
                <Route path="/owner" element={<Owner />} />
                <Route path="/founder" element={<Navigate to="/owner" replace />} />
                <Route path="/leadership" element={<Navigate to="/owner" replace />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </div>

        <FloatingActions />
        <Footer />
      </div>
    </CursorProvider>
  );
};
