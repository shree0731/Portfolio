/**
 * @file Experience.tsx
 * @description High-contrast golden experience card with project roles and skill tags.
 */
import React from 'react';
import { Briefcase, Code, Sparkles, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      year: '2024 – Pres',
      title: 'AI & Systems Project Lead',
      description: 'Developing automated answer script evaluation pipelines using Tesseract, EasyOCR, OpenCV, and fuzzy logic grading algorithms.',
    },
    {
      year: '2024',
      title: 'AI Verse Tech Challenge Finalist',
      description: 'Architected OCR text parsing components, trained classification models, and collaborated with cross-functional peers to present the solution.',
    },
    {
      year: '2023 – 2024',
      title: 'Independent Web & DApp Developer',
      description: 'Built decentralized smart contract applications with Solidity and full-stack responsive web apps using modern JavaScript frameworks.',
    },
  ];

  const tags = [
    '#Cybersecurity',
    '#MachineLearning',
    '#FullStack',
    '#ProblemSolver',
    '#Detail-oriented',
    '#Adaptability',
    '#Innovation',
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--gold-amber)',
        borderRadius: '1.75rem',
        padding: '2rem 2.25rem',
        boxShadow: '0 15px 35px rgba(244, 162, 31, 0.3)',
        color: '#141715',
        position: 'relative',
        overflow: 'hidden',
        border: '2px solid rgba(20, 42, 30, 0.15)',
      }}
    >
      {/* Title */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.35rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#141715',
          }}
        >
          Experience
        </h3>
        <span style={{ fontSize: '1.5rem', color: '#141715' }}>✦</span>
      </div>

      {/* Experience Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            style={{
              display: 'grid',
              gridTemplateColumns: '110px 1fr',
              gap: '1rem',
              alignItems: 'baseline',
            }}
            className="exp-item-row"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '1rem', color: '#141715', fontWeight: 800 }}>✦</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  color: '#141715',
                }}
              >
                {exp.year}
              </span>
            </div>

            <div>
              <h4
                style={{
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  color: '#141715',
                  marginBottom: '0.2rem',
                }}
              >
                {exp.title}
              </h4>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#282C29',
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pill Tags at bottom of yellow card (like reference) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1.25rem', borderTop: '1.5px solid rgba(20,42,30,0.15)' }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              backgroundColor: '#141715',
              color: '#FAF5ED',
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              letterSpacing: '0.02em',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <style>{`
        @media (max-width: 550px) {
          .exp-item-row {
            grid-template-columns: 1fr !important;
            gap: 0.25rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;