import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Hackathons from '@/components/Hackathons';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--cream-bg)', color: 'var(--charcoal-text)' }}>
      <Navbar />

      <main>
        {/* Section 1: Dark Forest Green Editorial Hero */}
        <Hero />

        {/* Section 2: Warm Cream About Section */}
        <About />

        {/* Section 3: Dual Column Education & Experience (Left) + Technical Skills & Hobbies (Right) */}
        <section
          id="skills"
          style={{
            backgroundColor: 'var(--cream-bg)',
            padding: '5rem 0',
            borderTop: '1px solid var(--border-cream)',
            position: 'relative',
          }}
        >
          <div className="section-container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)',
                gap: '3.5rem',
                alignItems: 'start',
              }}
              className="editorial-dual-grid"
            >
              {/* Left Column: Education Timeline + Golden Experience Card */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <Education />
                <Experience />
              </div>

              {/* Right Column: Technical Skills + Outlined RESUME + Languages & Hobbies */}
              <div>
                <Skills />
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 960px) {
              .editorial-dual-grid {
                grid-template-columns: 1fr !important;
                gap: 4rem !important;
              }
            }
          `}</style>
        </section>

        {/* Section 4: Forest Green Selected Projects & Blueprint Modals */}
        <Projects />

        {/* Section 5: Competitions & Hackathons */}
        <Hackathons />

        {/* Section 6: Resume Showcase & Credentials */}
        <Resume />

        {/* Section 7: Interactive Contact Form & Channels */}
        <Contact />
      </main>

      {/* Section 8: Editorial Retro Footer */}
      <Footer />
    </div>
  );
};

export default Index;
