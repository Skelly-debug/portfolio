'use client';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';

const NAV_ITEMS = ['work', 'toolkit', 'about', 'contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? 'border-line bg-ink/80 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <ScrollLink
          to="home"
          smooth
          duration={500}
          className="cursor-pointer font-mono text-sm tracking-widest text-paper"
        >
          SP<span className="text-signal">_</span>
        </ScrollLink>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth
              duration={500}
              offset={-72}
              className="cursor-pointer font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-paper"
              activeClass="text-paper"
              spy
            >
              {item}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            smooth
            duration={500}
            offset={-72}
            className="cursor-pointer rounded-full border border-signal/40 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-signal transition-colors hover:bg-signal/10"
          >
            Say hi
          </ScrollLink>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="h-px w-6 bg-paper"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="h-px w-6 bg-paper"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="h-px w-6 bg-paper"
          />
        </button>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {NAV_ITEMS.map((item) => (
                <ScrollLink
                  key={item}
                  to={item}
                  smooth
                  duration={500}
                  offset={-56}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer font-mono text-sm uppercase tracking-[0.2em] text-muted hover:text-paper"
                >
                  {item}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
