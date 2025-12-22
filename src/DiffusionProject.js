import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DiffusionProject() {
  const navigate = useNavigate();

  // Scroll to top and set page title when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Brain Tumor Detection | Zuhaib's Portfolio";
    
    // Restore original title when leaving
    return () => {
      document.title = "Zuhaib's Portfolio";
    };
  }, []);

  const doiLink = "https://doi.org/10.1155/ijbi/2352602";
  const pdfPath = process.env.PUBLIC_URL + '/diffusion_models/DiffusionModels_IJBI.pdf';
  const imagePath = process.env.PUBLIC_URL + '/diffusion_models/';

  const keyResults = [
    { metric: "200x", description: "Faster inference speed compared to iterative sampling" },
    { metric: "66%", description: "Improvement in IoU (Intersection over Union)" },
    { metric: "35%", description: "Improvement in precision metrics" },
    { metric: "80%", description: "Accuracy in detecting anomaly presence and location" },
  ];

  const figures = [
    {
      src: imagePath + 'Diffusion_Fig1.png',
      caption: 'Single-step sampling procedure'
    },
    {
      src: imagePath + 'Diffusion_Fig2.png',
      caption: 'Postprocessing operations'
    },
    {
      src: imagePath + 'Diffusion_Fig3.png',
      caption: 'End-to-end sampling anomaly detection and segmentation procedure. Diffused images have been noised up to 300 timesteps, wherein λ = 300. Esq is the mean squared error between the original and reconstructed images, calculated using Esq = (x₀ − x̂₀)². Eseg is the final predicted anomaly mask. The final column is simply the actual and predicted masks overlapped on top of each other for visualization purposes.'
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
          height: env(safe-area-inset-top, 0px);
          background: white;
          z-index: 9999;
          pointer-events: none;
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
          margin-bottom: 1rem;
        }

        .project-authors strong {
          color: var(--text-primary);
          font-weight: 500;
        }

        .project-journal {
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

        .doi-button {
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

        .doi-button:hover {
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
          margin-bottom: 3rem;
        }

        .result-card {
          background: white;
          border: 2px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
        }

        .result-metric {
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }

        .result-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .methodology-section {
          background: white;
          border: 2px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem;
          margin-bottom: 3rem;
        }

        .methodology-text {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .methodology-text p {
          margin-bottom: 1.25rem;
        }

        .methodology-text p:last-child {
          margin-bottom: 0;
        }

        .methodology-text strong {
          color: var(--text-primary);
          font-weight: 500;
        }

        .figures-section {
          margin-bottom: 3rem;
        }

        .figures-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .figure-card {
          background: white;
          border: 2px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }

        .figure-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .figure-caption {
          padding: 1.25rem 1.5rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          border-top: 1px solid var(--border);
          background: var(--bg-secondary);
        }

        .pdf-section {
          margin-bottom: 3rem;
        }

        .pdf-container {
          background: white;
          border: 2px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }

        .pdf-embed {
          width: 100%;
          height: 800px;
          border: none;
        }

        .pdf-fallback {
          padding: 3rem;
          text-align: center;
        }

        .pdf-fallback p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .pdf-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--accent);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-size: 0.9rem;
          transition: all 0.3s;
        }

        .pdf-download-btn:hover {
          background: var(--accent-dark);
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
            font-size: 1.5rem;
          }

          .content-section {
            padding: 3rem 2rem;
          }

          .results-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pdf-embed {
            height: 600px;
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

          .methodology-section {
            padding: 1.5rem;
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

          .pdf-embed {
            height: 500px;
          }

          .project-footer {
            padding: 2rem 1.5rem;
          }

          .back-button {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .doi-button {
            padding: 0.85rem 1.5rem;
            font-size: 0.85rem;
          }

          .figure-caption {
            padding: 1rem;
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

          .pdf-embed {
            height: 400px;
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
        <div className="project-badge">Published Research</div>
        <h1>Single-Step Sampling Approach for Unsupervised Anomaly Detection of Brain MRI Using Denoising Diffusion Models</h1>
        <p className="project-authors">
          <strong>Mohammed Z. Damudi</strong> and Anita S. Kini
        </p>
        <p className="project-journal">
          International Journal of Biomedical Imaging, Volume 2024, Article ID 2352602
        </p>
        <div className="project-tech-tags">
          <span className="tech-tag">PyTorch</span>
          <span className="tech-tag">OpenCV</span>
          <span className="tech-tag">Computer Vision</span>
          <span className="tech-tag">Generative AI</span>
          <span className="tech-tag">Diffusion Models</span>
          <span className="tech-tag">Medical Imaging</span>
        </div>
        <div className="project-date">Jan 2023 - Jul 2023</div>
        <a href={doiLink} target="_blank" rel="noopener noreferrer" className="doi-button">
          View Published Paper
        </a>
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

        {/* Methodology */}
        <h2 className="section-title">Research <span>Methodology</span></h2>
        <div className="methodology-section">
          <div className="methodology-text">
            <p>
              This research addresses a critical limitation of denoising diffusion probabilistic models (DDPMs), which is their slow sampling speed, and has historically prevented their use in time-sensitive medical imaging scenarios. The proposed <strong>single-step sampling (SSS)</strong> approach enables reconstruction of healthy brain images from anomalous ones in a single forward pass through the neural network.
            </p>
            <p>
              The model was trained on <strong>7,500 healthy brain MRI slices</strong> from the NFBS (Neurofeedback Skull-Stripped) repository using a modified <strong>UNet architecture</strong> with attention blocks at multiple resolutions. Instead of the traditional Gaussian noise, we employed <strong>simplex noise</strong> which better preserves structural information and allows for more effective anomaly repair.
            </p>
            <p>
              During inference, rather than iteratively denoising an image through hundreds of timesteps, our approach removes all noise in a single step using <strong>partial diffusion</strong>. This maintains image structure while allowing the model to "repair" anomalous regions by reconstructing them as healthy tissue. The pixel-level difference between original and reconstructed images reveals the anomaly location.
            </p>
          </div>
        </div>

        {/* Figures from Paper */}
        <h2 className="section-title">Paper <span>Figures</span></h2>
        <div className="figures-section">
          <div className="figures-grid">
            {figures.map((figure, index) => (
              <div key={index} className="figure-card">
                <img 
                  src={figure.src} 
                  alt={figure.caption}
                  className="figure-image"
                />
                <div className="figure-caption">{figure.caption}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded PDF */}
        <h2 className="section-title">Full <span>Paper</span></h2>
        <div className="pdf-section">
          <div className="pdf-container">
            <iframe 
              className="pdf-embed"
              src={pdfPath}
              title="Research Paper PDF"
            />
            <noscript>
              <div className="pdf-fallback">
                <p>Unable to display PDF. Please download to view.</p>
                <a href={pdfPath} download className="pdf-download-btn">
                  Download PDF
                </a>
              </div>
            </noscript>
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
