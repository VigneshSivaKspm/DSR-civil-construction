import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';
import { Magnetic } from './Magnetic';
import { EASE_ARCHITECTURAL } from '../motion/motionTokens';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Track scroll position for header surface elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-260 ${
        isScrolled
          ? 'bg-dsr-white/95 backdrop-blur-md border-b border-dsr-silver shadow-xs'
          : 'bg-dsr-white border-b border-dsr-silver/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Brand Logo */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan py-1"
            aria-label="DSR Civil Constructions Home"
          >
            <img
              src="/images/logo/dsr-logo-transparent.png"
              alt="DSR Civil Constructions"
              className="h-14 sm:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-103"
              width="64"
              height="64"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation (6 short labels) */}
          <nav className="hidden md:flex items-center space-x-0.5 lg:space-x-3 xl:space-x-5" aria-label="Main Navigation">
            {siteConfig.navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-2.5 lg:px-3 py-2 text-sm lg:text-[15px] font-medium transition-colors ${
                    isActive
                      ? 'text-dsr-roof font-semibold'
                      : 'text-dsr-navy hover:text-dsr-roof'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-dsr-cyan rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right: Phone & Primary CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={siteConfig.primaryPhone.tel}
              className="flex items-center space-x-2 text-xs font-semibold text-dsr-civil hover:text-dsr-roof px-2 py-1.5 transition-colors"
              title={`Call ${siteConfig.primaryPhone.display}`}
            >
              <Phone className="w-3.5 h-3.5 text-dsr-roof" aria-hidden="true" />
              <span>{siteConfig.primaryPhone.display}</span>
            </a>

            {/* Prominent Gold Enquiry Button with Magnetic Interaction */}
            <Magnetic strength={6}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-dsr-gold hover:bg-dsr-gold-hover text-dsr-navy font-semibold text-sm tracking-wide shadow-sm hover:shadow transition-all duration-180 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-navy active:scale-98"
              >
                <span>{siteConfig.primaryAction}</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4 text-dsr-navy transition-transform duration-180 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Actions: Call Button & Hamburger Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={siteConfig.primaryPhone.tel}
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2.5 rounded-sm bg-dsr-ice-wash text-dsr-roof border border-dsr-silver hover:bg-dsr-silver/40 active:scale-95 transition-all"
              aria-label={`Call ${siteConfig.primaryPhone.display}`}
            >
              <Phone className="w-5 h-5 text-dsr-roof" />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2.5 rounded-sm text-dsr-navy hover:text-dsr-roof hover:bg-dsr-silver/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-cyan active:scale-95 transition-all"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Accessible Mobile Menu Overlay & Drawer with Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: EASE_ARCHITECTURAL }}
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-50 bg-dsr-white border-t border-dsr-silver flex flex-col justify-between overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
          >
            <div className="px-6 py-6 space-y-2">
              <p className="text-xs uppercase tracking-widest text-dsr-civil/70 font-semibold mb-3 font-mono">
                பக்கங்கள் / NAVIGATION
              </p>
              {siteConfig.navLinks.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.05, duration: 0.25 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-4 py-3.5 text-lg font-medium rounded-sm transition-colors min-h-[44px] flex items-center justify-between ${
                        isActive
                          ? 'bg-dsr-ice-wash text-dsr-roof font-semibold border-l-4 border-dsr-roof'
                          : 'text-dsr-navy hover:bg-dsr-silver/20'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-dsr-cyan font-mono">0{idx + 1}</span>
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Mobile Drawer Bottom: Contact Details & Primary Action */}
            <div className="p-6 bg-dsr-ice-wash border-t border-dsr-silver space-y-4">
              <Link
                to="/contact"
                className="w-full min-h-[48px] inline-flex items-center justify-center px-6 py-3.5 bg-dsr-gold hover:bg-dsr-gold-hover text-dsr-navy font-bold text-base tracking-wide rounded-sm shadow-sm active:scale-98 transition-all"
              >
                <span>{siteConfig.primaryAction}</span>
                <ArrowUpRight className="ml-2 w-5 h-5 text-dsr-navy" />
              </Link>

              <div className="pt-2 space-y-2 text-sm text-dsr-navy">
                <p className="text-xs font-semibold text-dsr-civil uppercase tracking-wider">
                  நேரடித் தொலைபேசி எண்கள் (DIRECT CALL)
                </p>
                <div className="grid grid-cols-1 gap-2">
                  <a
                    href={siteConfig.primaryPhone.tel}
                    className="min-h-[44px] flex items-center space-x-3 px-3 py-2 bg-dsr-white border border-dsr-silver rounded-sm hover:border-dsr-roof transition-colors"
                  >
                    <Phone className="w-4 h-4 text-dsr-roof" />
                    <span className="font-medium">{siteConfig.primaryPhone.display}</span>
                  </a>
                  <a
                    href={siteConfig.secondaryPhone.tel}
                    className="min-h-[44px] flex items-center space-x-3 px-3 py-2 bg-dsr-white border border-dsr-silver rounded-sm hover:border-dsr-roof transition-colors"
                  >
                    <Phone className="w-4 h-4 text-dsr-roof" />
                    <span className="font-medium">{siteConfig.secondaryPhone.display}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
