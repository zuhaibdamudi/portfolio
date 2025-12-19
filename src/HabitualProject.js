import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HabitualProject() {
  const navigate = useNavigate();

  // Scroll to top and set page title when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Habitual | Zuhaib's Portfolio";
    
    // Restore original title when leaving
    return () => {
      document.title = "Zuhaib's Portfolio";
    };
  }, []);

  const screenshots = [
    { src: '/habitual/FinalScreenshot1.jpeg', alt: 'Habitual Screenshot 1' },
    { src: '/habitual/FinalScreenshot2.jpeg', alt: 'Habitual Screenshot 2' },
    { src: '/habitual/FinalScreenshot3.jpeg', alt: 'Habitual Screenshot 3' },
    { src: '/habitual/FinalScreenshot4.jpeg', alt: 'Habitual Screenshot 4' },
    { src: '/habitual/FinalScreenshot5.jpeg', alt: 'Habitual Screenshot 5' },
    { src: '/habitual/FinalScreenshot6.jpeg', alt: 'Habitual Screenshot 6' },
  ];

  return (
    <div className="project-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --bg-primary: #faf8f3;
          --bg-secondary: #f5f1e8;
          --text-primary: #2a2a2a;
          --text-secondary: #666666;
          --accent: #0d9488;
          --accent-dark: #0f766e;
          --accent-light: #ccfbf1;
          --border: rgba(13, 148, 136, 0.15);
        }

        body {
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Poppins', sans-serif;
          line-height: 1.7;
        }

        .project-page {
          min-height: 100vh;
          background: var(--bg-primary);
        }

        .project-header {
          padding: 1rem 4rem;
          padding-top: calc(1rem + env(safe-area-inset-top, 0px));
          background: white;
          border-bottom: 2px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          background: transparent;
          border: 2px solid var(--border);
          border-radius: 50px;
          color: var(--text-secondary);
          font-family: 'Poppins', sans-serif;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .back-button:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .back-button::before {
          content: '←';
          font-size: 1.1rem;
        }

        .header-logo {
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--accent);
          cursor: pointer;
        }

        .project-hero {
          padding: 3rem 4rem 2.5rem;
          text-align: center;
          background: white;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .app-logo {
          width: 150px;
          height: 150px;
          border-radius: 28px;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          display: block;
        }

        .project-badge {
          display: inline-block;
          padding: 0.4rem 0.9rem;
          background: var(--accent-light);
          border: 2px solid var(--accent);
          color: var(--accent);
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 20px;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }

        .project-hero h1 {
          font-size: 2rem;
          font-weight: 300;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .project-hero h1 span {
          color: var(--accent);
        }

        .project-hero p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto 2rem;
          line-height: 1.8;
        }

        .project-tech-tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }

        .tech-tag {
          padding: 0.4rem 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-family: 'JetBrains Mono', monospace;
          border-radius: 16px;
        }

        .project-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .screenshots-section {
          padding: 4rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .screenshots-title {
          font-size: 2rem;
          font-weight: 300;
          text-align: center;
          margin-bottom: 3rem;
          letter-spacing: -0.02em;
        }

        .screenshots-title span {
          color: var(--accent);
        }

        .screenshots-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .screenshot-card {
          background: white;
          border: 2px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }

        .screenshot-card img {
          width: 100%;
          height: auto;
          display: block;
        }

        .project-footer {
          padding: 3rem 4rem;
          background: white;
          border-top: 2px solid var(--border);
          text-align: center;
        }

        .project-footer p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .screenshots-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .project-header {
            padding: 0.85rem 2rem;
            padding-top: calc(0.85rem + env(safe-area-inset-top, 0px));
          }

          .project-hero {
            padding: 2.5rem 2rem 2rem;
          }

          .project-hero h1 {
            font-size: 1.75rem;
          }

          .screenshots-section {
            padding: 3rem 2rem;
          }
        }

        @media (max-width: 768px) {
          .screenshots-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .project-header {
            padding: 0.75rem 1.5rem;
            padding-top: calc(0.75rem + env(safe-area-inset-top, 0px));
          }

          .header-logo {
            display: none;
          }

          .project-hero {
            padding: 2rem 1.5rem;
          }

          .app-logo {
            width: 120px;
            height: 120px;
            border-radius: 24px;
            margin-bottom: 1.25rem;
          }

          .project-hero h1 {
            font-size: 1.5rem;
          }

          .project-hero p {
            font-size: 1rem;
          }

          .screenshots-section {
            padding: 2rem 1.5rem;
          }

          .screenshots-title {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }

          .screenshot-card {
            border-radius: 12px;
          }

          .project-footer {
            padding: 2rem 1.5rem;
          }

          .back-button {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .screenshots-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }

          .project-hero h1 {
            font-size: 1.25rem;
          }

          .tech-tag {
            font-size: 0.75rem;
            padding: 0.3rem 0.8rem;
          }
        }
      `}</style>

      {/* Header */}
      <header className="project-header">
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Portfolio
        </button>
        <div className="header-logo" onClick={() => navigate('/')}>
          MZD
        </div>
      </header>

      {/* Project Hero */}
      <section className="project-hero">
        <img 
          src={process.env.PUBLIC_URL + '/habitual-logo.png'} 
          alt="Habitual App Logo" 
          className="app-logo"
        />
        <div className="project-badge">Published Application</div>
        <h1>Habitual: <span>Android Habit Tracker</span></h1>
        <p>
          An interactive Flutter application designed to help users build and maintain positive habits. 
          Features comprehensive statistics, streak tracking, and persistent local storage for seamless habit management.
        </p>
        <div className="project-tech-tags">
          <span className="tech-tag">Flutter</span>
          <span className="tech-tag">Dart</span>
          <span className="tech-tag">SQLite</span>
          <span className="tech-tag">Android Development</span>
        </div>
        <div className="project-date">Jan 2022 - Mar 2022</div>
      </section>

      {/* Screenshots Section */}
      <section className="screenshots-section">
        <h2 className="screenshots-title">App <span>Screenshots</span></h2>
        <div className="screenshots-grid">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="screenshot-card">
              <img 
                src={process.env.PUBLIC_URL + screenshot.src} 
                alt={screenshot.alt}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="project-footer">
        <p>© 2025 Mohammed Zuhaib Damudi</p>
      </footer>
    </div>
  );
}
