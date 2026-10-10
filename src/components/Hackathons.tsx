/**
 * @file Hackathons.tsx
 * @description Competitive achievements, technical hackathons, and CTF events showcase.
 */
import React from 'react';
import { Trophy, Award, Medal, Sparkles, CheckCircle } from 'lucide-react';

const Hackathons: React.FC = () => {
  const events = [
    {
      title: 'AI Verse Tech Challenge',
      year: '2024',
      badge: 'Finalist & Prototype Award',
      category: 'AI & OCR Innovation',
      description:
        'Engineered an automated script evaluation pipeline capable of scanning handwritten papers, applying fuzzy string distance scoring against model answer keys, and producing real-time scorecards.',
      tags: ['Computer Vision', 'OCR Engineering', 'Rapid Prototyping', 'Team Collaboration'],
    },
    {
      title: 'Inter-Collegiate Cyber Quest & CTF',
      year: '2024',
      badge: 'Active Participant',
      category: 'Cybersecurity & CTF',
      description:
        'Participated in intense CTF challenges spanning network protocol analysis, basic cryptography, security auditing, and web vulnerabilities.',
      tags: ['Network Security', 'Cryptography', 'Problem Solving'],
    },
    {
      title: 'College Web & Algorithm Hackfest',
      year: '2023',
      badge: 'Top Submission',
      category: 'Full-Stack Development',
      description:
        'Designed and implemented responsive web applications with clean frontend architecture and secure client-server authentication flows.',
      tags: ['React', 'JavaScript', 'UI/UX Design'],
    },
  ];

  return (
    <section
      id="hackathons"
      style={{
        backgroundColor: 'var(--cream-bg)',
        color: 'var(--charcoal-text)',
        padding: '5rem 0',
        position: 'relative',
        borderTop: '1px solid var(--border-cream)',
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--terracotta)', fontSize: '1.25rem' }}>✦</span>
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
              Achievements & Challenges
            </span>
            <span style={{ color: 'var(--terracotta)', fontSize: '1.25rem' }}>✦</span>
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
            Competitions & Hackathons
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--muted-stone)',
              maxWidth: '36rem',
              margin: '0.5rem auto 0',
            }}
          >
            Real-time hackathons, technical challenges, and competitive engineering events where ideas were turned into working prototypes.
          </p>
        </div>

        {/* Hackathon Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="editorial-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                {/* Card Top Pill & Trophy Icon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(244, 162, 31, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold-amber)',
                    }}
                  >
                    <Trophy size={22} />
                  </div>

                  <span
                    style={{
                      backgroundColor: 'var(--forest-base)',
                      color: '#FAF5ED',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {event.badge}
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--terracotta)',
                    fontWeight: 700,
                  }}
                >
                  {event.year} • {event.category}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: 'var(--charcoal-dark)',
                    marginTop: '0.25rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  {event.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#454E49',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {event.description}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid var(--border-cream)' }}>
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      backgroundColor: 'var(--cream-bg)',
                      color: 'var(--forest-base)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      border: '1px solid var(--border-cream)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
