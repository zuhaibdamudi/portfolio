import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmoTechProject() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Voice Journal Sentiment Analyzer | Zuhaib's Portfolio";
    
    return () => {
      document.title = "Zuhaib's Portfolio";
    };
  }, []);

  const keyResults = [
    { metric: "90.6%", description: "Test accuracy on IEMOCAP benchmark" },
    { metric: "5", description: "Emotion classes: angry, sad, happy, neutral, excited" },
    { metric: "84%→91%", description: "Improvement over original EmoTech paper" },
    { metric: "Real-time", description: "Inference via Gradio web application" },
  ];

  const architectureFeatures = [
    {
      title: "Audio Block",
      description: "Processes MFCC features through parallel BiLSTM and 2D CNN pathways to capture temporal dependencies and local spectral patterns"
    },
    {
      title: "Text Block", 
      description: "Processes tokenized text through embedding layer with parallel BiLSTM and 1D CNN for sequential and local word pattern capture"
    },
    {
      title: "Attention Fusion",
      description: "Dynamically weighs audio and text modalities based on their relative informativeness for each input"
    },
    {
      title: "Whisper Integration",
      description: "OpenAI's Whisper model provides automatic speech-to-text transcription for real-world audio input"
    }
  ];

  const imagePath = process.env.PUBLIC_URL + '/emotech/';

  const screenshots = [
    {
      src: imagePath + 'Emotech_SS2.png',
      caption: 'Voice entry recording interface with real-time emotion analysis results, transcription, and confidence scores'
    },
    {
      src: imagePath + 'Emotech_SS1.png',
      caption: 'Mood history visualization showing emotion journey over time and distribution breakdown'
    },
    {
      src: imagePath + 'Emotech_Confusion Matrix.png',
      caption: 'Confusion matrix showing model performance across all five emotion classes'
    }
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
          font-size: 1.75rem;
          font-weight: 300;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          color: var(--text-primary);
        }

        .project-authors {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .project-authors strong {
          color: var(--text-primary);
          font-weight: 500;
        }

        .project-course {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-style: italic;
          margin-bottom: 2rem;
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
          margin-bottom: 2rem;
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
          max-width: 1000px;
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

        .results-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .result-card {
          background: white;
          border: 2px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
        }

        .result-metric {
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--accent);
          margin-bottom: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
        }

        .result-description {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .overview-section {
          background: white;
          border: 2px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem;
          margin-bottom: 4rem;
        }

        .overview-text {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .overview-text p {
          margin-bottom: 1.25rem;
        }

        .overview-text p:last-child {
          margin-bottom: 0;
        }

        .overview-text strong {
          color: var(--text-primary);
          font-weight: 500;
        }

        .architecture-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .architecture-card {
          background: white;
          border: 2px solid var(--border);
          border-radius: 12px;
          padding: 1.75rem;
        }

        .architecture-card h3 {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }

        .architecture-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
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
          background: var(--bg-secondary);
        }

        .project-footer {
          background: white;
          border-top: 2px solid var(--border);
          padding: 3rem 4rem;
          text-align: center;
        }

        .project-footer p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .project-header {
            padding: 1rem 2rem;
            padding-top: calc(1rem + env(safe-area-inset-top, 0px));
          }

          .project-hero {
            padding: 2.5rem 2rem 2rem;
          }

          .project-hero h1 {
            font-size: 1.5rem;
          }

          .content-section {
            padding: 3rem 2rem;
          }

          .results-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .architecture-grid {
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

          .hero-icon {
            font-size: 3rem;
          }

          .project-hero h1 {
            font-size: 1.25rem;
          }

          .project-authors {
            font-size: 0.95rem;
          }

          .content-section {
            padding: 2rem 1.5rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .overview-section {
            padding: 1.5rem;
          }

          .screenshot-caption {
            padding: 1rem;
            font-size: 0.85rem;
          }

          .results-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .result-card {
            padding: 1.25rem;
          }

          .result-metric {
            font-size: 2rem;
          }

          .result-description {
            font-size: 0.8rem;
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
          .results-grid {
            grid-template-columns: 1fr 1fr;
          }

          .result-metric {
            font-size: 1.75rem;
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
        <div className="project-badge">Artificial Intelligence</div>
        <h1>Multimodal Voice Journal Sentiment Analyzer</h1>
        <p className="project-course">
          Foundations of Artificial Intelligence (CS 5100) · Northeastern University
        </p>
        <div className="project-tech-tags">
          <span className="tech-tag">PyTorch</span>
          <span className="tech-tag">Librosa</span>
          <span className="tech-tag">OpenAI Whisper</span>
          <span className="tech-tag">Gradio</span>
          <span className="tech-tag">BiLSTM</span>
          <span className="tech-tag">CNN</span>
          <span className="tech-tag">Attention Mechanism</span>
          <span className="tech-tag">SQLite</span>
        </div>
        <div className="project-date">Feb 2026 - Apr 2026</div>
      </section>

      {/* Content Sections */}
      <div className="content-section">
        {/* Key Results */}
        <h2 className="section-title">Key <span>Results</span></h2>
        <div className="results-grid">
          {keyResults.map((result, index) => (
            <div key={index} className="result-card">
              <div className="result-metric">{result.metric}</div>
              <div className="result-description">{result.description}</div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <h2 className="section-title">Project <span>Overview</span></h2>
        <div className="overview-section">
          <div className="overview-text">
            <p>
              Human emotion is complex and multimodal by nature. When a person speaks, their emotional state is expressed 
              simultaneously through multiple channels: the <strong>acoustic properties</strong> of their voice (pitch, tone, rhythm, energy) 
              and the <strong>semantic content</strong> of the words they choose. Traditional approaches analyze these channels in isolation, 
              missing the full picture. A person saying "I'm fine" in a flat, strained voice communicates something very different 
              from someone saying the same words with warmth and ease.
            </p>
            <p>
              Building on the <strong>EmoTech architecture</strong>, our Multimodal Voice Journal Sentiment Analyzer addresses this by 
              combining both audio and text modalities. Users record spoken journal entries and receive real-time emotion analysis. 
              The system extends EmoTech in three key ways: <strong>Whisper integration</strong> for automatic speech transcription, 
              <strong>attention-based fusion</strong> that dynamically weighs modalities, and <strong>longitudinal mood tracking</strong> 
              that visualizes emotional trends over time.
            </p>
            <p>
              Our final system achieves <strong>90.60% accuracy</strong> on the IEMOCAP benchmark, exceeding EmoTech's reported 84%, 
              demonstrating that the attention mechanism's ability to dynamically weigh audio and text signals produces 
              significantly better results than treating them equally.
            </p>
          </div>
        </div>

        {/* Architecture */}
        <h2 className="section-title">Model <span>Architecture</span></h2>
        <div className="architecture-grid">
          {architectureFeatures.map((feature, index) => (
            <div key={index} className="architecture-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
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
        <p>© 2026 Mohammed Zuhaib Damudi</p>
      </footer>
    </div>
  );
}
