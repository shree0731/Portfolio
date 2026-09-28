/**
 * @file Skills.tsx
 * @description Technical skills, language fluencies, and illustrated personal interests.
 */
import React, { useState } from 'react';
import {
  Code2,
  Shield,
  Brain,
  Layers,
  Database,
  Terminal,
  Music,
  Gamepad2,
  Palette,
  Compass,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'security' | 'web' | 'tools'>('all');

  // Square software badges inspired by Ps/Ai/Id icons in reference
  const softwareBadges = [
    { code: 'Py', name: 'Python', color: '#F4A21F' },
    { code: 'C', name: 'C Lang', color: '#FAF5ED' },
    { code: 'Jv', name: 'Java', color: '#FAF5ED' },
    { code: 'Sol', name: 'Solidity', color: '#F4A21F' },
    { code: 'Js', name: 'JavaScript', color: '#FAF5ED' },
    { code: 'CV', name: 'OpenCV', color: '#F4A21F' },
    { code: 'Ocr', name: 'Tesseract', color: '#FAF5ED' },
    { code: 'Git', name: 'Git/GitHub', color: '#FAF5ED' },
  ];

  const skillGroups = [
    {
      category: 'ai',
      title: 'AI, ML & Computer Vision',
      skills: ['OpenCV', 'Tesseract OCR', 'EasyOCR', 'Scikit-learn', 'Pandas', 'NumPy', 'Fuzzy Matching Algorithms'],
    },
    {
      category: 'security',
      title: 'Cybersecurity & Systems',
      skills: ['Network Security Basics', 'Port Auditing', 'Vulnerability Assessment', 'Cryptography Basics', 'Linux Shell'],
    },
    {
      category: 'web',
      title: 'Web & Blockchain',
      skills: ['React', 'TypeScript', 'HTML5 & CSS3', 'JavaScript (ES6+)', 'Solidity', 'MetaMask Integration', 'REST APIs'],
    },
    {
      category: 'tools',
      title: 'Databases & Tools',
      skills: ['MongoDB', 'SQL', 'Git & GitHub', 'VS Code', 'Remix IDE', 'Postman'],
    },
  ];

  const filteredSkills =
    activeTab === 'all'
      ? skillGroups
      : skillGroups.filter((group) => group.category === activeTab);

  const languages = [
    { name: 'English', level: 'Fluent / Professional' },
    { name: 'Tamil', level: 'Native / Bilingual' },
    { name: 'Hindi', level: 'Conversational' },
  ];

  const hobbies = [
    {
      icon: Music,
      title: 'Music & Podcasts',
      desc: 'Lo-Fi, Classical & Tech Discussions',
    },
    {
      icon: Gamepad2,
      title: 'Chess & Strategy',
      desc: 'Tactical thinking & puzzle solving',
    },
    {
      icon: Palette,
      title: 'Digital & UI Design',
      desc: 'Creative interfaces & typography',
    },
    {
      icon: Compass,
      title: 'Cyber Challenges',
      desc: 'CTF explorations & security quests',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
      {/* Background Wireframe RESUME Outlined Watermarks */}
      <div
        style={{
          position: 'absolute',
          top: '-15px',
          right: '0',
          userSelect: 'none',
          pointerEvents: 'none',
          opacity: 0.18,
          zIndex: 0,
        }}
      >
        <div
          className="stroke-text-gold"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 900,
            letterSpacing: '0.05em',
            lineHeight: 0.95,
          }}
        >
          RESUME
        </div>
        <div
          className="stroke-text-gold"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 900,
            letterSpacing: '0.05em',
            lineHeight: 0.95,
          }}
        >
          RESUME
        </div>
        <div
          className="stroke-text-gold"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 900,
            letterSpacing: '0.05em',
            lineHeight: 0.95,
          }}
        >
          RESUME
        </div>
      </div>

      {/* Technical Skills Header */}
      <div style={{ position: 'relative', zIndex: 5 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <span style={{ color: 'var(--gold-amber)', fontSize: '1.5rem' }}>✦</span>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.25rem',
              fontWeight: 800,
              color: 'var(--gold-amber)',
              fontStyle: 'italic',
            }}
          >
            Technical skills
          </h3>
        </div>

        {/* Software Skills Icon Badges (like Ps, Ai, Id in reference) */}
        <div style={{ marginBottom: '1.75rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.15rem',
              color: 'var(--charcoal-dark)',
              marginBottom: '0.75rem',
            }}
          >
            Core Tech Stack
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            {softwareBadges.map((badge) => (
              <div
                key={badge.code}
                style={{
                  width: '46px',
                  height: '46px',
                  backgroundColor: 'var(--charcoal-dark)',
                  color: badge.color,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-mono)',
                  border: '1.5px solid rgba(244, 162, 31, 0.4)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                  transition: 'transform 0.2s',
                  cursor: 'default',
                }}
                title={badge.name}
              >
                {badge.code}
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {[
            { id: 'all', label: 'All Stack' },
            { id: 'ai', label: 'AI & Vision' },
            { id: 'security', label: 'Cybersecurity' },
            { id: 'web', label: 'Web & Web3' },
            { id: 'tools', label: 'Databases & Tools' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                backgroundColor: activeTab === tab.id ? 'var(--charcoal-dark)' : 'var(--cream-card)',
                color: activeTab === tab.id ? 'var(--gold-amber)' : 'var(--charcoal-text)',
                border: '1px solid var(--border-cream)',
                borderRadius: '9999px',
                padding: '0.35rem 0.85rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Detailed Skills Breakdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {filteredSkills.map((group) => (
            <div
              key={group.title}
              style={{
                backgroundColor: 'var(--cream-surface)',
                borderRadius: '1rem',
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--border-cream)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--forest-base)',
                  marginBottom: '0.65rem',
                }}
              >
                {group.title}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      backgroundColor: 'var(--cream-bg)',
                      color: 'var(--charcoal-dark)',
                      border: '1px solid var(--border-cream)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Category Pill Tags (like black buttons in reference) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
          {['AI / ML Models', 'Cybersecurity', 'Computer Vision', 'Web Development', 'Smart Contracts'].map(
            (pill) => (
              <span
                key={pill}
                style={{
                  backgroundColor: 'var(--charcoal-dark)',
                  color: '#FAF5ED',
                  padding: '0.45rem 1.1rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                }}
              >
                {pill}
              </span>
            )
          )}
        </div>
      </div>

      {/* Languages & Hobbies Split Grid (matching bottom right of reference) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.35fr',
          gap: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px dashed var(--border-cream)',
        }}
        className="lang-hobbies-grid"
      >
        {/* Languages */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem',
              fontWeight: 800,
              color: 'var(--charcoal-dark)',
              marginBottom: '1rem',
            }}
          >
            Language
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {languages.map((lang) => (
              <div key={lang.name}>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: 'var(--charcoal-dark)',
                  }}
                >
                  {lang.name}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted-stone)', fontWeight: 500 }}>
                  {lang.level}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies & Interests with Golden Icons */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem',
              fontWeight: 800,
              color: 'var(--charcoal-dark)',
              marginBottom: '1rem',
            }}
          >
            Hobbies & Interests
          </h4>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
            }}
          >
            {hobbies.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '0.4rem',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(244, 162, 31, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold-amber)',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--charcoal-dark)',
                        lineHeight: 1.2,
                      }}
                    >
                      {h.title}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--muted-stone)' }}>{h.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .lang-hobbies-grid {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
