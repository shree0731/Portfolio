/**
 * @file Projects.tsx
 * @description Curated engineering projects showcase with interactive blueprint architecture modals.
 */
import React, { useState } from 'react';
import { Github, ExternalLink, Sparkles, FolderGit2, X, Shield, Brain, Vote, ScanLine } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'ai' | 'ml' | 'blockchain' | 'security';
  categoryLabel: string;
  tagline: string;
  description: string;
  architecture: string;
  highlights: string[];
  tech: string[];
  github?: string | null;
  featured?: boolean;
}

const projectsList: Project[] = [
  {
    id: 'ocr-evaluator',
    title: 'OCR Automated Answer Evaluation System',
    category: 'ai',
    categoryLabel: 'AI & Computer Vision',
    tagline: 'Deep OCR pipeline evaluating handwritten answer scripts using fuzzy matching.',
    description:
      'An intelligent end-to-end evaluation pipeline that ingests handwritten student answer sheets, conducts image preprocessing and binarization via OpenCV, extracts text with Tesseract & EasyOCR, and scores answers against master keys using tokenized fuzzy logic matching and semantic similarity.',
    architecture:
      'Input Image → Grayscale & Bilateral Filtering → Adaptive Thresholding → Contour Extraction → Dual OCR Engine (Tesseract + EasyOCR) → Levenshtein & Cosine Distance Scoring → Automated Marks & Analytics Report.',
    highlights: [
      'Dual-engine OCR voting mechanism for high accuracy on irregular handwriting',
      'Robust noise removal and skew correction with OpenCV',
      'Fuzzy token set ratio algorithm preventing unfair penalties for minor misspellings',
    ],
    tech: ['Python', 'OpenCV', 'Tesseract OCR', 'EasyOCR', 'FuzzyWuzzy', 'NumPy'],
    github: 'https://github.com/shree0731',
    featured: true,
  },
  {
    id: 'fitness-checker',
    title: 'Fitness Checker ML Classifier',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    tagline: 'Predictive health and fitness level assessment using Random Forest ensemble.',
    description:
      'A machine learning application trained on multi-variable health datasets (BMI, heart rate variance, resting metabolic rate, exercise frequency) to classify individual fitness tiers with high precision and provide actionable wellness guidance.',
    architecture:
      'Data Ingestion → Feature Scaling & Imputation → Exploratory Data Analysis → Random Forest Classifier Training → Hyperparameter Tuning (GridSearchCV) → Performance Metrics & Confusion Matrix Evaluation.',
    highlights: [
      'Engineered feature selection reducing model variance while maximizing precision',
      'Interactive prediction script with instant categorical fitness classification',
      'Comprehensive data visualization using Matplotlib and Seaborn',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/shree0731/Fitness_checker',
    featured: true,
  },
  {
    id: 'voting-dapp',
    title: 'Decentralized Electoral Voting DApp',
    category: 'blockchain',
    categoryLabel: 'Blockchain & Web3',
    tagline: 'Tamper-proof, transparent ballot casting powered by Ethereum smart contracts.',
    description:
      'A decentralized voting protocol built on Ethereum smart contracts. Ensures zero ballot manipulation, provable voter eligibility, instant cryptographic tallying, and public auditability without requiring a centralized electoral authority.',
    architecture:
      'Solidity Smart Contract (Ballot Logic) → Remix IDE Compilation & Gas Optimization → MetaMask Web3 Provider → Client Interface (React & Ethers.js) → Distributed Ledger State Verification.',
    highlights: [
      'Immutable state transitions preventing double voting and unauthorized voter injection',
      'Gas-optimized contract methods with strict role-based access control',
      'Real-time cryptographic ballot count visible on-chain',
    ],
    tech: ['Solidity', 'MetaMask', 'Remix IDE', 'JavaScript', 'Web3.js', 'HTML/CSS'],
    github: 'https://github.com/shree0731',
    featured: true,
  },
  {
    id: 'cyber-auditor',
    title: 'Cyber Threat Scanner & Port Auditor',
    category: 'security',
    categoryLabel: 'Cybersecurity',
    tagline: 'Network vulnerability detection and active service port enumeration tool.',
    description:
      'A multithreaded network scanning utility developed in Python to audit local subnet interfaces, discover open TCP/UDP ports, banner-grab active services, and flag potentially vulnerable service configurations.',
    architecture:
      'Subnet Target Specification → Socket Connection Dispatcher → Multi-Threaded Port Scanner → Service Banner Identification → Threat & Misconfiguration Report Generator.',
    highlights: [
      'Fast concurrent socket scanning with asynchronous thread pools',
      'Service fingerprinting to cross-reference common vulnerability databases',
      'Clean terminal CLI and structured JSON log outputs',
    ],
    tech: ['Python', 'Socket Library', 'Threading', 'Network Protocols', 'Linux CLI'],
    github: 'https://github.com/shree0731',
    featured: false,
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'ml' | 'blockchain' | 'security'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'all'
      ? projectsList
      : projectsList.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      style={{
        backgroundColor: 'var(--forest-base)',
        color: '#FAF5ED',
        padding: '5.5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Layered Wireframe Stroke PROJECTS in Background */}
      <div
        style={{
          position: 'absolute',
          top: '2%',
          left: '50%',
          transform: 'translateX(-50%)',
          userSelect: 'none',
          pointerEvents: 'none',
          opacity: 0.12,
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          className="stroke-text-cream"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem, 12vw, 9rem)',
            fontWeight: 900,
            letterSpacing: '0.06em',
            lineHeight: 0.9,
          }}
        >
          PROJECTS
        </div>
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--gold-amber)', fontSize: '1.25rem' }}>✦</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--gold-amber)',
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Selected Works
            </span>
            <span style={{ color: 'var(--gold-amber)', fontSize: '1.25rem' }}>✦</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5.5vw, 3.8rem)',
              fontWeight: 900,
              color: '#FAF5ED',
              letterSpacing: '-0.02em',
            }}
          >
            Engineering & Prototypes
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#D2DDD5',
              maxWidth: '38rem',
              margin: '0.75rem auto 0',
              lineHeight: 1.6,
            }}
          >
            A curated showcase of artificial intelligence, machine learning, decentralized blockchain systems, and cybersecurity applications I have built.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '3rem',
          }}
        >
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'ai', label: 'AI & Vision' },
            { id: 'ml', label: 'Machine Learning' },
            { id: 'blockchain', label: 'Blockchain DApps' },
            { id: 'security', label: 'Cybersecurity' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              style={{
                backgroundColor: filter === cat.id ? 'var(--gold-amber)' : 'rgba(20, 42, 30, 0.7)',
                color: filter === cat.id ? '#141715' : '#FAF5ED',
                border: filter === cat.id ? '1px solid var(--gold-amber)' : '1px solid rgba(250, 245, 237, 0.2)',
                borderRadius: '9999px',
                padding: '0.5rem 1.25rem',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: 'var(--charcoal-card)',
                borderRadius: '1.5rem',
                padding: '2rem',
                border: '1px solid rgba(244, 162, 31, 0.25)',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
              className="editorial-card-dark"
            >
              <div>
                {/* Card Header: Category Tag & Icon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: 'rgba(244, 162, 31, 0.15)',
                      color: 'var(--gold-amber)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.85rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(244, 162, 31, 0.3)',
                    }}
                  >
                    {project.categoryLabel}
                  </span>

                  {project.featured && (
                    <span style={{ color: 'var(--gold-amber)', fontSize: '0.8rem', fontWeight: 700 }}>
                      ✦ Featured
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.55rem',
                    fontWeight: 700,
                    color: '#FAF5ED',
                    lineHeight: 1.25,
                    marginBottom: '0.85rem',
                  }}
                >
                  {project.title}
                </h3>

                {/* Tagline */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#D4DDD7',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {project.tagline}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.75rem' }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        backgroundColor: '#161917',
                        color: '#E8E4DC',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        border: '1px solid rgba(250, 245, 237, 0.1)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      backgroundColor: 'var(--gold-amber)',
                      color: '#141715',
                      border: 'none',
                      padding: '0.55rem 1.15rem',
                      borderRadius: '9999px',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--gold-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--gold-amber)')}
                  >
                    <span>Blueprint Details</span>
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: 'transparent',
                        color: '#FAF5ED',
                        border: '1px solid rgba(250, 245, 237, 0.3)',
                        padding: '0.55rem 0.9rem',
                        borderRadius: '9999px',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--gold-amber)';
                        e.currentTarget.style.color = 'var(--gold-amber)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(250, 245, 237, 0.3)';
                        e.currentTarget.style.color = '#FAF5ED';
                      }}
                    >
                      <Github size={15} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Blueprint Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div>
                <span
                  style={{
                    backgroundColor: 'var(--charcoal-dark)',
                    color: 'var(--gold-amber)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.85rem',
                    borderRadius: '9999px',
                    display: 'inline-block',
                    marginBottom: '0.5rem',
                  }}
                >
                  {selectedProject.categoryLabel}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.85rem',
                    fontWeight: 800,
                    color: 'var(--charcoal-dark)',
                    lineHeight: 1.2,
                  }}
                >
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--muted-stone)',
                  cursor: 'pointer',
                  padding: '0.25rem',
                }}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Description */}
            <p style={{ fontSize: '0.95rem', color: '#333C37', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {selectedProject.description}
            </p>

            {/* Architecture Pipeline */}
            <div
              style={{
                backgroundColor: 'var(--cream-bg)',
                borderRadius: '1rem',
                padding: '1.25rem',
                marginBottom: '1.5rem',
                border: '1px solid var(--border-cream)',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--forest-base)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem',
                }}
              >
                Technical Architecture Workflow
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--charcoal-dark)',
                  lineHeight: 1.5,
                }}
              >
                {selectedProject.architecture}
              </p>
            </div>

            {/* Key Innovations */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--charcoal-dark)',
                  marginBottom: '0.5rem',
                }}
              >
                Key Highlights & Engineering Feats
              </h4>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', color: '#444C47', lineHeight: 1.6 }}>
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} style={{ marginBottom: '0.25rem' }}>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Tags */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--charcoal-dark)',
                  marginBottom: '0.5rem',
                }}
              >
                Technologies Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      backgroundColor: 'var(--cream-bg)',
                      color: 'var(--forest-base)',
                      border: '1px solid var(--border-cream)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ fontSize: '0.85rem', padding: '0.55rem 1.4rem' }}
                >
                  <Github size={16} />
                  <span>View Repository</span>
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  backgroundColor: 'var(--cream-bg)',
                  color: 'var(--charcoal-dark)',
                  border: '1px solid var(--border-cream)',
                  padding: '0.55rem 1.25rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
