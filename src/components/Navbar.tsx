/**
 * @file Navbar.tsx
 * @description Sticky editorial glassmorphic navigation header with mobile drawer.
 * @author Shreepurnaa V
 */
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About me', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#projects' },
    { label: 'Competitions', href: '#hackathons' },
  ];

  return (
    <header role="banner" aria-label="Main Navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(20, 42, 30, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(244, 162, 31, 0.2)' : 'none',
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
      }}
    >
      <div className="site-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            color: '#FAF5ED',
          }}
        >
          <span style={{ color: 'var(--gold-amber)', fontSize: '1.25rem' }}>✦</span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.45rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Shreepurnaa V
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: '#FAF5ED',
                textDecoration: 'none',
                fontSize: '0.925rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
                opacity: 0.9,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-amber)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#FAF5ED')}
            >
              {link.label}
            </a>
          ))}

          {/* Prominent Golden Pill Action Button */}
          <a
            href="#contact"
            className="btn-gold focus-visible:ring-2 focus-visible:ring-amber-400"
            style={{
              padding: '0.55rem 1.4rem',
              fontSize: '0.9rem',
              letterSpacing: '0.01em',
            }}
          >
            Get in touch!
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: '#FAF5ED',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--forest-dark)',
            borderBottom: '2px solid var(--gold-amber)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#FAF5ED',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                fontFamily: 'var(--font-display)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-gold"
            style={{ textAlign: 'center', marginTop: '0.5rem' }}
          >
            Get in touch!
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;