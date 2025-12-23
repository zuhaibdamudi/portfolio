import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TypeRacerProject() {
  const navigate = useNavigate();

  // Scroll to top and set page title when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "TypeRacer Analysis | Zuhaib's Portfolio";
    
    // Restore original title when leaving
    return () => {
      document.title = "Zuhaib's Portfolio";
    };
  }, []);

  const githubLink = "https://github.com/zuhaibdamudi/typeracer-csv";
  const imagePath = process.env.PUBLIC_URL + '/typeracer/';

  const visualizations = [
    { src: imagePath + '1_WPM_Progress_2019_to_2023.png', caption: 'WPM Progress (2019-2023) - Overall typing speed progression over 4 years' },
    { src: imagePath + '2_WPM_Yearly_Progress.png', caption: 'WPM Yearly Progress - Year-over-year comparison of typing speed improvements' },
    { src: imagePath + '3_No_of_Races.png', caption: 'Number of Races - Distribution of races completed over time' },
    { src: imagePath + '4_Win_Percentage.png', caption: 'Win Percentage - Race win rate analysis and trends' },
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

        .safe-area-cover {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: constant(safe-area-inset-top);
          height: env(safe-area-inset-top, 0px);
          background: white;
          z-index: 10001;
          pointer-events: none;
        }

        .project-header {
          padding: 1rem 4rem;
          padding-top: constant(safe-area-inset-top);
          padding-top: calc(1rem + env(safe-area-inset-top, 0px));
          background: white;
          border-bottom: 2px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 1000;
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
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          color: var(--text-primary);
        }

        .project-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .project-tech-tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
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
          margin-bottom: 1.5rem;
        }

        .github-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2.5rem;
          background: var(--accent);
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 50px;
          border: 2px solid var(--accent);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .github-button:hover {
          background: var(--accent-dark);
          border-color: var(--accent-dark);
        }

        .content-section {
          padding: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 1.75rem;
          font-weight: 300;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .section-title span {
          color: var(--accent);
        }

        .description-section {
          background: white;
          border: 2px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem;
          margin-bottom: 3rem;
        }

        .description-text {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .description-text p {
          margin-bottom: 1.25rem;
        }

        .description-text p:last-child {
          margin-bottom: 0;
        }

        .description-text strong {
          color: var(--text-primary);
          font-weight: 500;
        }

        .visualizations-section {
          margin-bottom: 3rem;
        }

        .visualizations-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .visualization-card {
          background: white;
          border: 2px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }

        .visualization-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .visualization-caption {
          padding: 1.25rem 1.5rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          border-top: 1px solid var(--border);
          background: rgba(13, 148, 136, 0.04);
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

          .content-section {
            padding: 3rem 2rem;
          }
        }

        @media (max-width: 768px) {
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

          .project-hero h1 {
            font-size: 1.5rem;
          }

          .project-subtitle {
            font-size: 0.95rem;
          }

          .content-section {
            padding: 2rem 1.5rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .description-section {
            padding: 1.5rem;
          }

          .visualizations-grid {
            gap: 1.5rem;
          }

          .visualization-caption {
            padding: 1rem;
            font-size: 0.85rem;
          }

          .project-footer {
            padding: 2rem 1.5rem;
          }

          .back-button {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .github-button {
            padding: 0.85rem 1.5rem;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .project-hero h1 {
            font-size: 1.25rem;
          }

          .tech-tag {
            font-size: 0.75rem;
            padding: 0.3rem 0.8rem;
          }
        }
      `}</style>

      {/* Safe Area Cover for iOS */}
      <div className="safe-area-cover"></div>

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
        <div className="project-badge">Published Project</div>
        <h1>TypeRacer Data Analysis</h1>
        <p className="project-subtitle">
          Automated web scraping and analysis system for extracting historical TypeRacer data with visualization plots tracking typing speed progress
        </p>
        <div className="project-tech-tags">
          <span className="tech-tag">Python</span>
          <span className="tech-tag">Selenium</span>
          <span className="tech-tag">Pandas</span>
          <span className="tech-tag">Matplotlib</span>
          <span className="tech-tag">Data Analysis</span>
        </div>
        <div className="project-date">Oct 2022 - Nov 2022</div>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-button">
          View on GitHub
        </a>
      </section>

      {/* Content Sections */}
      <div className="content-section">
        {/* Project Description */}
        <h2 className="section-title">Project <span>Description</span></h2>
        <div className="description-section">
          <div className="description-text">
            <p>
              <strong>TypeRacer Data Analysis</strong> is an automated data pipeline that extracts, processes, and visualizes historical typing race data from TypeRacer.com. The project provides insights into typing speed progression, race statistics, and performance trends over multiple years of competitive typing.
            </p>
            <p>
              The system uses <strong>Selenium</strong> for automated web scraping to extract race history data, which is then processed using <strong>Pandas</strong> for data manipulation and cleaning. The analysis generates over <strong>10 visualization plots</strong> using <strong>Matplotlib</strong>, tracking metrics such as words per minute (WPM) progression, race frequency, and win percentages over time.
            </p>
            <p>
              This tool is particularly useful for TypeRacer enthusiasts who want to analyze their long-term typing improvement, identify patterns in their performance, and track their competitive statistics across thousands of races.
            </p>
          </div>
        </div>

        {/* Analysis Visualizations */}
        <h2 className="section-title">Analysis <span>Visualizations</span></h2>
        <div className="visualizations-section">
          <div className="visualizations-grid">
            {visualizations.map((viz, index) => (
              <div key={index} className="visualization-card">
                <img 
                  src={viz.src} 
                  alt={viz.caption}
                  className="visualization-image"
                />
                <div className="visualization-caption">{viz.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="project-footer">
        <p>© 2025 Mohammed Zuhaib Damudi</p>
      </footer>
    </div>
  );
}
