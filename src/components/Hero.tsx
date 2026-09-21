import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Shield, Sparkles, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: 'var(--forest-base)',
        color: '#FAF5ED',
        minHeight: '100vh',
        position: 'relative',
        paddingTop: '6.5rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Decorative Golden Starbursts in background */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '6%',
          color: 'var(--gold-amber)',
          fontSize: '2rem',
          pointerEvents: 'none',
          animation: 'floatSubtle 3s ease-in-out infinite',
        }}
      >
        ✦
      </div>
      <div
        style={{
          position: 'absolute',
          top: '18%',
          left: '4%',
          color: 'var(--gold-amber)',
          fontSize: '1.25rem',
          pointerEvents: 'none',
          opacity: 0.8,
        }}
      >
        ✦
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '38%',
          color: 'var(--gold-amber)',
          fontSize: '1.5rem',
          pointerEvents: 'none',
        }}
      >
        ✦
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        {/* Main Giant Editorial Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.8rem, 11vw, 8.5rem)',
              fontWeight: 900,
              letterSpacing: '0.04em',
              lineHeight: 0.95,
              color: '#FAF5ED',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            PORTFOLIO
          </h1>
        </div>

        {/* Hero Content Grid (Left: Terracotta Portrait & Quote; Right: Layered Outline PORTFOLIO & Handles) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)',
            gap: '2.5rem',
            alignItems: 'center',
            marginTop: '1rem',
          }}
          className="hero-grid"
        >
          {/* Left Column: Stylized Portrait Card & Manifesto */}
          <div style={{ position: 'relative' }}>
            {/* Terracotta Graphic Box with Portrait Visual */}
            <div
              style={{
                backgroundColor: 'var(--terracotta)',
                borderRadius: '1.75rem',
                padding: '1.75rem',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                overflow: 'hidden',
                border: '2px solid rgba(244, 162, 31, 0.3)',
              }}
            >
              {/* Inner Portrait Silhouette Art & Coding Vibe */}
              <div
                style={{
                  height: '340px',
                  borderRadius: '1.25rem',
                  backgroundColor: '#1E2F24',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(180deg, rgba(20,42,30,0.85) 0%, rgba(14,28,20,0.95) 100%)',
                  border: '1px solid rgba(250,245,237,0.15)',
                }}
              >
                {/* SVG Artistic Avatar & Tech Vector Backdrop */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.12,
                    background: 'radial-gradient(circle at 50% 50%, var(--gold-amber) 10%, transparent 60%)',
                  }}
                />

                {/* Developer Persona Artwork */}
                <div
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--gold-amber), var(--terracotta))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                    marginBottom: '1rem',
                    border: '3px solid #FAF5ED',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '3.5rem',
                      fontWeight: 800,
                      color: '#151816',
                    }}
                  >
                    SV
                  </span>
                </div>

                <div style={{ textAlign: 'center', zIndex: 5, padding: '0 1rem' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#FAF5ED',
                      letterSpacing: '0.02em',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Shreepurnaa V
                  </p>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--gold-amber)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    CS Engineering • AI/ML & Cybersecurity
                  </p>
                </div>

                {/* Starburst inside portrait frame */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '16px',
                    color: 'var(--gold-amber)',
                    fontSize: '1.25rem',
                  }}
                >
                  ✦
                </div>
              </div>

              {/* Personal Manifesto / Philosophy Card */}
              <div
                style={{
                  marginTop: '1.25rem',
                  backgroundColor: 'rgba(20, 42, 30, 0.92)',
                  borderRadius: '1rem',
                  padding: '1rem 1.25rem',
                  border: '1px solid rgba(250, 245, 237, 0.15)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                }}
              >
                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    color: '#FAF5ED',
                    opacity: 0.95,
                    fontStyle: 'italic',
                  }}
                >
                  "I love engineering software at the intersection of AI and security. I approach complex technical challenges
                  with analytical rigor to build resilient, functional, and meaningful digital solutions."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Hollow PORTFOLIO Strokes & Handle Directory */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Outlined Wireframe PORTFOLIO Text Repeated */}
            <div style={{ userSelect: 'none', pointerEvents: 'none' }}>
              <div
                className="stroke-text-gold-thick"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
                  fontWeight: 900,
                  letterSpacing: '0.04em',
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                }}
              >
                PORTFOLIO
              </div>
              <div
                className="stroke-text-gold-thick"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
                  fontWeight: 900,
                  letterSpacing: '0.04em',
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  opacity: 0.75,
                }}
              >
                PORTFOLIO
              </div>
              <div
                className="stroke-text-gold-thick"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
                  fontWeight: 900,
                  letterSpacing: '0.04em',
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  opacity: 0.5,
                }}
              >
                PORTFOLIO
              </div>
            </div>

            {/* Directory Handles Box (like in the reference photo) */}
            <div
              style={{
                marginTop: '2rem',
                display: 'inline-flex',
                flexDirection: 'column',
                gap: '0.75rem',
                backgroundColor: 'rgba(20, 42, 30, 0.7)',
                padding: '1.25rem 1.5rem',
                borderRadius: '1.25rem',
                border: '1px solid rgba(244, 162, 31, 0.3)',
                maxWidth: '320px',
                backdropFilter: 'blur(8px)',
              }}
            >
              <a
                href="https://github.com/shree0731"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#FAF5ED',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-amber)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#FAF5ED')}
              >
                <span style={{ color: 'var(--gold-amber)', fontWeight: 800 }}>GH:</span>
                <span>/shree0731</span>
              </a>

              <a
                href="https://linkedin.com/in/shreepurnaa"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#FAF5ED',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-amber)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#FAF5ED')}
              >
                <span style={{ color: 'var(--gold-amber)', fontWeight: 800 }}>LI:</span>
                <span>/in/shreepurnaa</span>
              </a>

              <a
                href="mailto:kvgeethashree12@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#FAF5ED',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-amber)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#FAF5ED')}
              >
                <span style={{ color: 'var(--gold-amber)', fontWeight: 800 }}>EM:</span>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  kvgeethashree12@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Floating Circular "Scroll Down" Button overlapping seam */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3.5rem',
          position: 'relative',
          zIndex: 20,
        }}
      >
        <a
          href="#about"
          className="scroll-down-badge"
          title="Scroll down to About section"
          aria-label="Scroll down to About section"
        >
          <span>Scroll</span>
          <span>down</span>
          <ArrowDown size={16} style={{ marginTop: '3px' }} />
        </a>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;