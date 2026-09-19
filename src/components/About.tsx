/**
 * @file About.tsx
 * @description Editorial about section highlighting education, passions, and core contacts.
 */
import React from 'react';
import { Linkedin, Github, Mail, MapPin, ExternalLink, ShieldCheck, Sparkles, Cpu, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--cream-bg)',
        color: 'var(--charcoal-text)',
        padding: '5rem 0',
        position: 'relative',
        borderTop: '1px solid var(--border-cream)',
      }}
    >
      <div className="section-container">
        {/* Subtle Section Brand Marker */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <span style={{ color: 'var(--terracotta)', fontSize: '1.2rem' }}>✦</span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--charcoal-dark)',
            }}
          >
            Shreepurnaa V
          </span>
        </div>

        {/* 2-Column Split Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Hello Statement & Bio */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: 'var(--charcoal-dark)',
                marginBottom: '1.75rem',
              }}
            >
              Hello, <br />
              <span style={{ color: 'var(--forest-base)' }}>I'm Shreepurnaa !</span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#343A36',
                marginBottom: '1.5rem',
              }}
            >
              I am a <strong>2nd Year Computer Science Engineering student</strong> at <strong>Easwari Engineering College</strong>, Chennai, with a dedicated focus on <strong>Cybersecurity</strong>, <strong>AI/Machine Learning</strong>, and <strong>Modern Full-Stack Development</strong>.
            </p>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#343A36',
                marginBottom: '2rem',
              }}
            >
              Whether it's training machine learning classifiers, architecting OCR-driven automated evaluation systems, analyzing network security protocols, or building decentralized blockchain applications, I strive to write secure, scalable, and elegant code that solves real-world challenges.
            </p>

            {/* Pill CTA Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a
                href="https://linkedin.com/in/shreepurnaa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-action focus-visible:outline-none focus-visible:ring-2"
              >
                <Linkedin size={18} />
                <span>linkedin.com/in/shreepurnaa</span>
              </a>

              <a
                href="https://github.com/shree0731"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'var(--forest-base)',
                  color: '#FAF5ED',
                  padding: '0.65rem 1.4rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 12px rgba(28, 61, 43, 0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--forest-light)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--forest-base)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Github size={18} />
                <span>github.com/shree0731</span>
              </a>
            </div>

            {/* Highlights Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginTop: '2.5rem',
                paddingTop: '2rem',
                borderTop: '1px dashed var(--border-cream)',
              }}
              className="about-stats-grid"
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: 'var(--forest-base)',
                    display: 'block',
                  }}
                >
                  2nd Year
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--muted-stone)', fontWeight: 500 }}>
                  B.E. CSE Student
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: 'var(--terracotta)',
                    display: 'block',
                  }}
                >
                  4+
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--muted-stone)', fontWeight: 500 }}>
                  Featured Projects
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: 'var(--gold-amber)',
                    display: 'block',
                  }}
                >
                  100%
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--muted-stone)', fontWeight: 500 }}>
                  Curiosity & Drive
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Arch Portrait & Attached Dark Contact Card */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Visual Portrait Graphic with Arch Forest Backdrop */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '380px',
              }}
            >
              {/* Floating Pill Tag Top-Left */}
              <div
                className="floating-pill"
                style={{
                  top: '18%',
                  left: '-15px',
                  backgroundColor: 'var(--gold-amber)',
                }}
              >
                🎓 Easwari Engg College
              </div>

              {/* Floating Pill Tag Right-Center */}
              <div
                className="floating-pill"
                style={{
                  top: '48%',
                  right: '-10px',
                  backgroundColor: 'var(--gold-amber)',
                  animationDelay: '1.5s',
                }}
              >
                ⚡ 2nd Year CSE
              </div>

              {/* Arch Card Backdrop */}
              <div
                style={{
                  width: '100%',
                  height: '360px',
                  backgroundColor: 'var(--forest-base)',
                  borderTopLeftRadius: '180px',
                  borderTopRightRadius: '180px',
                  borderBottomLeftRadius: '1.5rem',
                  borderBottomRightRadius: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 18px 40px rgba(28, 61, 43, 0.25)',
                  border: '3px solid var(--cream-surface)',
                }}
              >
                {/* Decorative Inner Circle Graphic */}
                <div
                  style={{
                    width: '210px',
                    height: '210px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(250, 245, 237, 0.12)',
                    position: 'absolute',
                    top: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1.5px dashed rgba(244, 162, 31, 0.4)',
                  }}
                >
                  <div
                    style={{
                      width: '170px',
                      height: '170px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(244, 162, 31, 0.2)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: '1rem',
                    }}
                  >
                    <ShieldCheck size={48} color="var(--gold-amber)" />
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: '#FAF5ED',
                        fontSize: '1rem',
                        fontWeight: 700,
                        marginTop: '0.25rem',
                      }}
                    >
                      Cyber & AI
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '25px',
                    textAlign: 'center',
                    padding: '0 1.5rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      color: '#FAF5ED',
                      fontWeight: 700,
                    }}
                  >
                    Shreepurnaa V
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--gold-light)', fontWeight: 500 }}>
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Attached Midnight Black Contact Box (Exactly as in Reference Design) */}
              <div
                style={{
                  backgroundColor: 'var(--charcoal-dark)',
                  color: '#FAF5ED',
                  borderRadius: '1.25rem',
                  padding: '1.5rem',
                  marginTop: '-1.5rem',
                  position: 'relative',
                  zIndex: 20,
                  boxShadow: '0 15px 35px rgba(0,0,0,0.35)',
                  border: '1px solid rgba(244, 162, 31, 0.3)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: '#FAF5ED',
                    textAlign: 'center',
                    marginBottom: '1rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  Contact
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <MapPin size={16} color="var(--gold-amber)" />
                    <span style={{ color: '#E4DFD7' }}>Chennai, Tamil Nadu, India</span>
                  </div>

                  <a
                    href="mailto:kvgeethashree12@gmail.com"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      color: '#E4DFD7',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-amber)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#E4DFD7')}
                  >
                    <Mail size={16} color="var(--gold-amber)" />
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      kvgeethashree12@gmail.com
                    </span>
                  </a>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Cpu size={16} color="var(--gold-amber)" />
                    <span style={{ color: '#E4DFD7' }}>Easwari Engineering College</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 540px) {
          .about-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
