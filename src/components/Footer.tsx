/**
 * @file Footer.tsx
 * @description Editorial dark footer with branding, social links, and smooth back-to-top trigger.
 */
import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Sparkles, Shield, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--forest-dark)',
        color: '#FAF5ED',
        padding: '4rem 0 2.5rem',
        borderTop: '2px solid rgba(244, 162, 31, 0.25)',
        position: 'relative',
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand Mark */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ color: 'var(--gold-amber)', fontSize: '1.4rem' }}>✦</span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 900,
                letterSpacing: '0.02em',
                color: '#FAF5ED',
              }}
            >
              Shreepurnaa V
            </span>
            <span style={{ color: 'var(--gold-amber)', fontSize: '1.4rem' }}>✦</span>
          </div>

          <p
            style={{
              fontSize: '0.95rem',
              color: '#B0BCB4',
              maxWidth: '32rem',
              lineHeight: 1.6,
            }}
          >
            Aspiring Computer Science Engineer passionate about Cybersecurity, Artificial Intelligence, and scalable Web Architecture.
          </p>

          {/* Quick Nav Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
            }}
          >
            {[
              { label: 'About', href: '#about' },
              { label: 'Resume', href: '#resume' },
              { label: 'Skills', href: '#skills' },
              { label: 'Projects', href: '#projects' },
              { label: 'Competitions', href: '#hackathons' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: '#FAF5ED',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  opacity: 0.8,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--gold-amber)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#FAF5ED';
                  e.currentTarget.style.opacity = '0.8';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href="https://github.com/shree0731"
              target="_blank" rel="noopener noreferrer" rel="noopener noreferrer"
              rel="noopener noreferrer"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(250, 245, 237, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FAF5ED',
                transition: 'all 0.2s',
                border: '1px solid rgba(250, 245, 237, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--gold-amber)';
                e.currentTarget.style.color = '#141715';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(250, 245, 237, 0.08)';
                e.currentTarget.style.color = '#FAF5ED';
              }}
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/shreepurnaa"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(250, 245, 237, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FAF5ED',
                transition: 'all 0.2s',
                border: '1px solid rgba(250, 245, 237, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--gold-amber)';
                e.currentTarget.style.color = '#141715';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(250, 245, 237, 0.08)';
                e.currentTarget.style.color = '#FAF5ED';
              }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:kvgeethashree12@gmail.com"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(250, 245, 237, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FAF5ED',
                transition: 'all 0.2s',
                border: '1px solid rgba(250, 245, 237, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--gold-amber)';
                e.currentTarget.style.color = '#141715';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(250, 245, 237, 0.08)';
                e.currentTarget.style.color = '#FAF5ED';
              }}
              aria-label="Email Contact"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(250, 245, 237, 0.12)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#A0ACA4',
          }}
        >
          <p>© {new Date().getFullYear()} Shreepurnaa V. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--gold-amber)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontWeight: 700,
              fontSize: '0.85rem',
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
