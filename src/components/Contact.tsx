/**
 * @file Contact.tsx
 * @description Contact channels with one-click copy and interactive dispatch form.
 */
import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Check, Copy, Sparkles, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create mailto link as direct action
    const mailtoUrl = `mailto:kvgeethashree12@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactChannels = [
    {
      icon: Mail,
      label: 'Email Address',
      value: 'kvgeethashree12@gmail.com',
      copyValue: 'kvgeethashree12@gmail.com',
      href: 'mailto:kvgeethashree12@gmail.com',
      id: 'email',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/shreepurnaa',
      copyValue: 'https://linkedin.com/in/shreepurnaa',
      href: 'https://linkedin.com/in/shreepurnaa',
      id: 'linkedin',
    },
    {
      icon: Github,
      label: 'GitHub Code Repos',
      value: 'github.com/shree0731',
      copyValue: 'https://github.com/shree0731',
      href: 'https://github.com/shree0731',
      id: 'github',
    },
    {
      icon: MapPin,
      label: 'Current Location',
      value: 'Chennai, Tamil Nadu, India',
      copyValue: 'Chennai, Tamil Nadu, India',
      href: null,
      id: 'location',
    },
  ];

  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--forest-base)',
        color: '#FAF5ED',
        padding: '5.5rem 0 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Starbursts */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          right: '8%',
          color: 'var(--gold-amber)',
          fontSize: '2rem',
          pointerEvents: 'none',
        }}
      >
        ✦
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--gold-amber)', fontSize: '1.25rem' }}>✦</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--gold-amber)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Get In Touch
            </span>
            <span style={{ color: 'var(--gold-amber)', fontSize: '1.25rem' }}>✦</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
              fontWeight: 900,
              color: '#FAF5ED',
              letterSpacing: '-0.02em',
            }}
          >
            Let's Build Something Great
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#D4DDD7',
              maxWidth: '36rem',
              margin: '0.5rem auto 0',
            }}
          >
            Whether you are looking to collaborate on AI/ML projects, cybersecurity research, discuss internships, or simply say hello!
          </p>
        </div>

        {/* 2-Column Split: Quick Channels (Left) & Interactive Form (Right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Contact Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#FAF5ED',
                marginBottom: '0.25rem',
              }}
            >
              Direct Channels
            </h3>

            {contactChannels.map((item) => {
              const Icon = item.icon;
              const isCopied = copiedField === item.id;
              return (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: 'var(--charcoal-card)',
                    borderRadius: '1.25rem',
                    padding: '1.25rem 1.5rem',
                    border: '1px solid rgba(244, 162, 31, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0 }}>
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
                        shrink: 0,
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontSize: '0.75rem', color: '#B0BCB4', fontWeight: 600, textTransform: 'uppercase' }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                          rel="noopener noreferrer"
                          style={{
                            color: '#FAF5ED',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            display: 'block',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-amber)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#FAF5ED')}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          style={{
                            color: '#FAF5ED',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(item.copyValue, item.id)}
                    style={{
                      background: 'rgba(250, 245, 237, 0.08)',
                      border: '1px solid rgba(250, 245, 237, 0.15)',
                      color: isCopied ? 'var(--gold-amber)' : '#FAF5ED',
                      padding: '0.45rem 0.75rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'all 0.2s',
                    }}
                    title="Copy to clipboard"
                  >
                    {isCopied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{isCopied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div
            style={{
              backgroundColor: 'var(--charcoal-card)',
              borderRadius: '1.75rem',
              padding: '2rem 2.25rem',
              border: '1px solid rgba(244, 162, 31, 0.3)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#FAF5ED',
                marginBottom: '1.5rem',
              }}
            >
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#B0BCB4',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: '#161917',
                    border: '1px solid rgba(250, 245, 237, 0.15)',
                    borderRadius: '10px',
                    padding: '0.75rem 1rem',
                    color: '#FAF5ED',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-sans)',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#B0BCB4',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}
                >
                  Your Email *
                </label>
                <input
                  type="email" autoComplete="email" spellCheck="false"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: '#161917',
                    border: '1px solid rgba(250, 245, 237, 0.15)',
                    borderRadius: '10px',
                    padding: '0.75rem 1rem',
                    color: '#FAF5ED',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-sans)',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#B0BCB4',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. Internship Opportunity / Tech Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: '#161917',
                    border: '1px solid rgba(250, 245, 237, 0.15)',
                    borderRadius: '10px',
                    padding: '0.75rem 1rem',
                    color: '#FAF5ED',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-sans)',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#B0BCB4',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}
                >
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your note, question, or project idea here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: '#161917',
                    border: '1px solid rgba(250, 245, 237, 0.15)',
                    borderRadius: '10px',
                    padding: '0.75rem 1rem',
                    color: '#FAF5ED',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-sans)',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-gold"
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  fontSize: '0.95rem',
                  marginTop: '0.5rem',
                }}
              >
                <Send size={18} />
                <span>Send Message Now</span>
              </button>

              {isSubmitted && (
                <div
                  style={{
                    backgroundColor: 'rgba(244, 162, 31, 0.2)',
                    border: '1px solid var(--gold-amber)',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    textAlign: 'center',
                    color: 'var(--gold-light)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  ✓ Prepared email client dispatch! Thank you for reaching out.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
