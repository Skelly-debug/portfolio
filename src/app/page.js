'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import CursorGlow from '../components/CursorGlow/CursorGlow';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Toolkit from '../components/Toolkit/Toolkit';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-paper">
      <CursorGlow />
      <Navbar />

      <Hero />
      <Toolkit />
      <Projects />
      <About />
      <Contact />
      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 z-50 rounded-full border border-line bg-surface p-4 text-paper shadow-lg transition-colors hover:border-signal/40 hover:text-signal"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
