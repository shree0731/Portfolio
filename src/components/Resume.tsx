import React, { useState } from 'react';
import { Download, FileText, ExternalLink, Check, Copy, Sparkles, Shield, Award } from 'lucide-react';

const Resume: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopySummary = () => {
    const summaryText = `Shreepurnaa V - Computer Science Engineering Student (2nd Year, Easwari Engineering College, Chennai).
Specialization: AI/ML, Cybersecurity, and Full-Stack Web Development.
Projects: OCR Automated Answer Evaluation, Fitness Checker ML Classifier, Decentralized Voting DApp.
Contact: kvgeethashree12@gmail.com | GitHub: github.com/shree0731 | LinkedIn: linkedin.com/in/shreepurnaa`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="resume"
      style={{
        backgroundColor: 'var(--cream-bg)',
        padding: '5rem 0',
        position: 'relative',
        borderTop: '1px solid var(--border-cream)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--gold-amber)', fontSize: '1.25rem' }}>✦</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--forest-base)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Curriculum Vitae
            </span>
            <span style={{ color: 'var(--gold-amber)', fontSize: '1.25rem' }}>✦</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
              fontWeight: 900,
              color: 'var(--charcoal-dark)',
              letterSpacing: '-0.02em',
            }}
          >
            Resume & Credentials
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--muted-stone)',
              maxWidth: '36rem',
              margin: '0.5rem auto 0',
            }}
          >
            A consolidated overview of my academic foundation, technical stack, leadership experiences, and engineering projects.
          </p>
        </div>

        {/* Certificate-style Showcase Card */}
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: 'var(--cream-surface)',
              borderRadius: '2rem',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              border: '2px solid var(--border-cream)',
              boxShadow: '0 20px 45px rgba(28, 61, 43, 0.08)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Border Gold Accent Ribbon */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: 'linear-gradient(90deg, var(--forest-base), var(--gold-amber), var(--terracotta))',
              }}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Document Icon Graphic */}
              <div
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '1.5rem',
                  backgroundColor: 'rgba(244, 162, 31, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--forest-base)',
                  marginBottom: '1.5rem',
                  border: '1.5px solid rgba(244, 162, 31, 0.4)',
                }}
              >
                <FileText size={42} color="var(--gold-amber)" />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.25rem',
                  fontWeight: 900,
                  color: 'var(--charcoal-dark)',
                  letterSpacing: '-0.01em',
                  marginBottom: '0.35rem',
                }}
              >
                Shreepurnaa V
              </h3>

              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--forest-base)',
                  marginBottom: '1.25rem',
                }}
              >
                Computer Science Engineering • Easwari Engineering College
              </p>

              <div
                style={{
                  backgroundColor: 'var(--cream-bg)',
                  borderRadius: '1.25rem',
                  padding: '1.25rem 1.75rem',
                  border: '1px solid var(--border-cream)',
                  width: '100%',
                  textAlign: 'left',
                  marginBottom: '2rem',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted-stone)', textTransform: 'uppercase' }}>
                      Degree & Major
                    </span>
                    <p style={{ fontWeight: 700, color: 'var(--charcoal-dark)', fontSize: '0.95rem' }}>
                      B.E. Computer Science Engg
                    </p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted-stone)', textTransform: 'uppercase' }}>
                      Specializations
                    </span>
                    <p style={{ fontWeight: 700, color: 'var(--charcoal-dark)', fontSize: '0.95rem' }}>
                      AI/ML, Cybersecurity, Web
                    </p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted-stone)', textTransform: 'uppercase' }}>
                      Location
                    </span>
                    <p style={{ fontWeight: 700, color: 'var(--charcoal-dark)', fontSize: '0.95rem' }}>
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  justifyContent: 'center',
                }}
              >
                <a
                  href="/resume.pdf"
                  download
                  className="btn-gold"
                  style={{
                    padding: '0.75rem 1.75rem',
                    fontSize: '0.95rem',
                  }}
                >
                  <Download size={18} />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-forest"
                  style={{
                    padding: '0.75rem 1.75rem',
                    fontSize: '0.95rem',
                  }}
                >
                  <ExternalLink size={18} />
                  <span>View PDF in Browser</span>
                </a>

                <button
                  onClick={handleCopySummary}
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--charcoal-dark)',
                    border: '1.5px solid var(--border-cream)',
                    borderRadius: '9999px',
                    padding: '0.75rem 1.5rem',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--cream-bg)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  {copied ? <Check size={18} color="green" /> : <Copy size={18} />}
                  <span>{copied ? 'Summary Copied!' : 'Copy Summary'}</span>
                </button>
              </div>

              <p style={{ fontSize: '0.8rem', color: 'var(--muted-stone)', marginTop: '1.75rem' }}>
                Academic Year: 2024–2028 • Updated for College & Internship Applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
