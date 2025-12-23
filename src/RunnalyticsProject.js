import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RunnalyticsProject() {
  const navigate = useNavigate();

  // Scroll to top and set page title when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Runnalytics | Zuhaib's Portfolio";
    
    // Restore original title when leaving
    return () => {
      document.title = "Zuhaib's Portfolio";
    };
  }, []);

  const githubLink = "https://github.com/zuhaibdamudi/strava-analysis";
  const imagePath = process.env.PUBLIC_URL + '/runnalytics/';

  const screenshots = [
    { src: imagePath + '1_HomePage.png', caption: 'Home Page - Upload Strava export data to begin analysis' },
    { src: imagePath + '2_SummaryDashboar.png', caption: 'Summary Dashboard - Overview of running statistics and key metrics' },
    { src: imagePath + '3_Trends.png', caption: 'Trends - Visualize running performance trends over time' },
    { src: imagePath + '4_Analytics.png', caption: 'Analytics - Deep dive into workout patterns and correlations' },
    { src: imagePath + '5_Records.png', caption: 'Records - Personal bests and achievement tracking' },
    { src: imagePath + '6_Predictions.png', caption: 'Predictions - ML-based race time and performance predictions' },
    { src: imagePath + '7_ML_Insights.png', caption: 'ML Insights - Machine learning analysis of workout classification' },
    { src: imagePath + '8_Map.png', caption: 'Map - Geographic visualization of running routes' },
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

        .app-logo {
          width: 150px;
          height: 150px;
          border-radius: 28px;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          display: block;
          margin-left: auto;
          margin-right: auto;
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .feature-card {
          background: rgba(13, 148, 136, 0.04);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .feature-card h4 {
          font-size: 1rem;
          font-weight: 500;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }

        .feature-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-card li {
          font-size: 0.9rem;
          color: var(--text-secondary);
          padding: 0.35rem 0;
          padding-left: 1.25rem;
          position: relative;
        }

        .feature-card li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent);
        }

        .screenshots-section {
          margin-bottom: 3rem;
        }

        .screenshots-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .screenshot-card {
          background: white;
          border: 2px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }

        .screenshot-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .screenshot-caption {
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

          .features-grid {
            grid-template-columns: 1fr;
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

          .app-logo {
            width: 120px;
            height: 120px;
            border-radius: 24px;
            margin-bottom: 1.25rem;
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

          .screenshots-grid {
            gap: 1.5rem;
          }

          .screenshot-caption {
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

          .feature-card {
            padding: 1.25rem;
          }

          .feature-card h4 {
            font-size: 0.95rem;
          }

          .feature-card li {
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
        <img 
          src={process.env.PUBLIC_URL + '/runnalytics-logo.png'} 
          alt="Runnalytics Logo" 
          className="app-logo"
        />
        <div className="project-badge">Data Analysis & Visualization</div>
        <h1>Runnalytics: Strava Running Analytics Dashboard</h1>
        <p className="project-subtitle">
          An end-to-end data pipeline to analyze exported Strava data with ML-based insights and interactive visualizations
        </p>
        <div className="project-tech-tags">
          <span className="tech-tag">Python</span>
          <span className="tech-tag">Flask</span>
          <span className="tech-tag">JavaScript</span>
          <span className="tech-tag">NumPy</span>
          <span className="tech-tag">Pandas</span>
          <span className="tech-tag">scikit-learn</span>
        </div>
        <div className="project-date">Dec 2025 - Jan 2026</div>
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
              <strong>Runnalytics</strong> is a comprehensive running analytics platform that transforms raw Strava export data into actionable insights. The application provides runners with detailed analysis of their training patterns, performance trends, and personalized predictions to help optimize their training.
            </p>
            <p>
              The backend processes exported Strava data through a <strong>Python-based pipeline</strong> using <strong>Pandas</strong> and <strong>NumPy</strong> for data manipulation, while <strong>scikit-learn</strong> powers the machine learning models for workout classification and race predictions. The frontend delivers an interactive dashboard experience built with <strong>Flask</strong> and <strong>JavaScript</strong>.
            </p>
            <div className="features-grid">
              <div className="feature-card">
                <h4>Analytics Features</h4>
                <ul>
                  <li>Summary dashboard with key running metrics</li>
                  <li>Performance trends over time</li>
                  <li>Heart rate and elevation correlation analysis</li>
                  <li>Personal records and achievement tracking</li>
                  <li>Geographic route visualization on maps</li>
                </ul>
              </div>
              <div className="feature-card">
                <h4>ML-Powered Insights</h4>
                <ul>
                  <li>Automatic workout type classification</li>
                  <li>Race time predictions based on training</li>
                  <li>Training load analysis</li>
                  <li>Performance improvement tracking</li>
                  <li>Customized training recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Application Screenshots */}
        <h2 className="section-title">Application <span>Screenshots</span></h2>
        <div className="screenshots-section">
          <div className="screenshots-grid">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="screenshot-card">
                <img 
                  src={screenshot.src} 
                  alt={screenshot.caption}
                  className="screenshot-image"
                />
                <div className="screenshot-caption">{screenshot.caption}</div>
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
