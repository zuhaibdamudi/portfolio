import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LiftLogProject() {
  const navigate = useNavigate();

  // Scroll to top and set page title when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "LiftLog | Zuhaib's Portfolio";
    
    // Restore original title when leaving
    return () => {
      document.title = "Zuhaib's Portfolio";
    };
  }, []);

  const githubLink = "https://github.com/siddharth270/Fitness_DBMS";
  const imagePath = process.env.PUBLIC_URL + '/liftlog/';

  const screenshots = [
    { src: imagePath + '1_HomePage.png', caption: 'Home Page - Landing page with login options for Members and Trainers' },
    { src: imagePath + '2_Member_Homepage.png', caption: 'Member Homepage - Dashboard overview for gym members' },
    { src: imagePath + '3_Member_Workouts.png', caption: 'Member Workouts - View and track workout history' },
    { src: imagePath + '4_Member_AddExercise.png', caption: 'Add Exercise - Log new exercises to workout sessions' },
    { src: imagePath + '5_Member_Appointments.png', caption: 'Member Appointments - View scheduled trainer sessions' },
    { src: imagePath + '6_Member_BookAppointment.png', caption: 'Book Appointment - Schedule sessions with trainers' },
    { src: imagePath + '7_Member_WorkoutPlans.png', caption: 'Workout Plans - View assigned training programs' },
    { src: imagePath + '8_Member_ViewPlan.png', caption: 'View Plan Details - Detailed workout plan breakdown' },
    { src: imagePath + '9_Trainer_HomePage.png', caption: 'Trainer Homepage - Dashboard for fitness trainers' },
    { src: imagePath + '10_Trainer_Appointments.png', caption: 'Trainer Appointments - Manage client sessions' },
    { src: imagePath + '11_Trainer_Clients.png', caption: 'Trainer Clients - View and manage assigned clients' },
    { src: imagePath + '12_Trainer_WorkoutPlans.png', caption: 'Trainer Workout Plans - Create and manage training programs' },
    { src: imagePath + '13_Trainer_CreatePlan.png', caption: 'Create Plan - Design personalized workout plans for clients' },
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
        <div className="project-badge">Database Design</div>
        <h1>LiftLog: Gym Management System</h1>
        <p className="project-subtitle">
          A comprehensive relational database system to manage gym operations, member workouts, and trainer-client interactions
        </p>
        <div className="project-tech-tags">
          <span className="tech-tag">MySQL</span>
          <span className="tech-tag">Python</span>
          <span className="tech-tag">Django</span>
          <span className="tech-tag">HTML/CSS</span>
          <span className="tech-tag">JavaScript</span>
        </div>
        <div className="project-date">Oct 2025 - Dec 2025</div>
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
              <strong>LiftLog</strong> is a full-stack gym management application built to streamline fitness center operations. The system provides separate interfaces for gym members and trainers, enabling efficient workout tracking, appointment scheduling, and personalized training program management.
            </p>
            <p>
              The backend is powered by <strong>MySQL</strong> with over <strong>50 stored procedures</strong> handling complex operations such as workout logging, progress monitoring, appointment management, and automated membership tracking. The frontend is built using <strong>Django</strong> with a clean, responsive interface.
            </p>
            <div className="features-grid">
              <div className="feature-card">
                <h4>Member Features</h4>
                <ul>
                  <li>Log and track daily workouts</li>
                  <li>Add exercises with sets, reps, and weights</li>
                  <li>View workout history and progress</li>
                  <li>Book appointments with trainers</li>
                  <li>Access personalized workout plans</li>
                  <li>Manage membership details</li>
                </ul>
              </div>
              <div className="feature-card">
                <h4>Trainer Features</h4>
                <ul>
                  <li>View and manage client roster</li>
                  <li>Schedule and track appointments</li>
                  <li>Create customized workout plans</li>
                  <li>Monitor client progress</li>
                  <li>Assign exercises to training programs</li>
                  <li>Manage availability and sessions</li>
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
