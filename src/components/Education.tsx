import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      period: '2024 – Present',
      degree: 'B.E. Computer Science Engineering',
      institution: 'Easwari Engineering College, Chennai',
      description: 'Currently pursuing Bachelor of Engineering with focused coursework in Data Structures, AI/ML, Cybersecurity, and Web Technologies.',
    },
    {
      period: '2022 – 2024',
      degree: 'Higher Secondary (Bio-Maths)',
      institution: 'Higher Secondary Certificate',
      description: 'Graduated with strong foundation in advanced mathematics, analytical reasoning, and computing fundamentals.',
    },
  ];

  const activities = [
    {
      year: '2024',
      title: 'AI Verse Tech Challenge',
      role: 'Participant & OCR Prototype Builder',
    },
    {
      year: '2024',
      title: 'College Tech Symposiums & CTF Events',
      role: 'Cybersecurity & Code Debugging Challenges',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {/* Education Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <span style={{ color: 'var(--gold-amber)', fontSize: '1.5rem' }}>✦</span>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 800,
              color: 'var(--gold-amber)',
              fontStyle: 'italic',
            }}
          >
            Education
          </h3>
        </div>

        {/* Timeline Entries */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {educationData.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: '130px 1fr',
                gap: '1rem',
                alignItems: 'baseline',
              }}
              className="education-row"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--gold-amber)', fontSize: '0.9rem' }}>✦</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: 'var(--charcoal-dark)',
                  }}
                >
                  {item.period}
                </span>
              </div>

              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: 'var(--charcoal-dark)',
                    marginBottom: '0.15rem',
                  }}
                >
                  {item.institution}
                </h4>
                <p
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--forest-base)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {item.degree}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted-stone)', lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities Timeline */}
      <div style={{ marginTop: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <span style={{ color: 'var(--gold-amber)', fontSize: '1.5rem' }}>✦</span>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 800,
              color: 'var(--charcoal-dark)',
              fontStyle: 'italic',
            }}
          >
            Activities & Events
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {activities.map((act, idx) => (
            <div
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: '90px 1fr',
                gap: '1rem',
                alignItems: 'baseline',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--gold-amber)', fontSize: '0.9rem' }}>✦</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: 'var(--charcoal-dark)',
                  }}
                >
                  {act.year}
                </span>
              </div>

              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--charcoal-dark)',
                  }}
                >
                  {act.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted-stone)' }}>{act.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .education-row {
            grid-template-columns: 1fr !important;
            gap: 0.25rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Education;
