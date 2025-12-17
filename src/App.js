import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Set page title
    document.title = "Mohammed Zuhaib Damudi";
    
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Anomaly Detection in Brain MRI",
      description: "Novel sampling approach using Denoising Diffusion Probabilistic Models for brain tumor detection with 200x faster inference and 66% improvement in segmentation metrics.",
      tech: ["PyTorch", "Computer Vision", "Generative AI"],
      date: "Jan 2023 - Jul 2023",
      link: "https://doi.org/10.1155/ijbi/2352602",
      highlight: "Published Research"
    },
    {
      title: "AI-Powered Code Converter",
      description: "Patent-pending tool powered by GPT-4o that automates up to 80% of manual programming efforts, significantly improving developer productivity at Shell.",
      tech: ["GPT-4o", "AI", "Automation"],
      date: "2023 - 2025",
      highlight: "Patent Filed"
    },
    {
      title: "TypeRacer Data Analysis",
      description: "Automated web scraping and analysis system for extracting historical TypeRacer data with 10+ visualization plots tracking typing speed progress over time.",
      tech: ["Selenium", "Python", "Data Analysis"],
      date: "Oct 2022 - Nov 2022",
      link: "https://github.com/zuhaibdamudi"
    },
    {
      title: "Habitual - Habit Tracker",
      description: "Interactive Flutter application with 100+ downloads on Google Play Store, featuring comprehensive statistics and persistent local storage.",
      tech: ["Flutter", "SQLite", "Mobile Dev"],
      date: "Jan 2022 - Mar 2022",
      link: "https://github.com/zuhaibdamudi"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="portfolio">
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
          overflow-x: hidden;
        }

        .portfolio {
          position: relative;
          min-height: 100vh;
        }

        /* Cursor Effect */
        .portfolio::before {
          content: '';
          position: fixed;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(13, 148, 136, 0.05) 0%, transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: opacity 0.3s;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 2rem 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(to bottom, var(--bg-primary) 0%, transparent 100%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        nav.scrolled {
          padding: 1.5rem 4rem;
          background: rgba(250, 248, 243, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.03);
        }

        .logo {
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--accent);
          cursor: pointer;
          transition: all 0.3s;
          flex: 0 0 auto;
        }

        .logo:hover {
          letter-spacing: 0.15em;
        }

        .nav-center {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-social-links {
          display: flex;
          gap: 1rem;
        }

        .nav-social-links a {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--border);
          border-radius: 50%;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s;
          background: white;
        }

        .nav-social-links a:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .nav-social-links a svg {
          width: 22px;
          height: 22px;
        }

        .nav-links {
          display: flex;
          gap: 3rem;
          list-style: none;
        }

        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          position: relative;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--accent);
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 4rem;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(135deg, transparent 0%, rgba(13, 148, 136, 0.05) 100%);
          pointer-events: none;
        }

        .hero-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 6rem;
          align-items: center;
          animation: fadeInFast 0.3s ease-out;
        }

        @keyframes fadeInFast {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .hero-text h1 {
          font-size: 3rem;
          font-weight: 300;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .hero-text h1 span {
          display: block;
          color: var(--accent);
          font-weight: 600;
          font-size: 2.2rem;
        }

        .hero-text p {
          font-size: 1.3rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          line-height: 1.8;
        }

        .hero-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .hero-links a {
          padding: 1rem 2.5rem;
          border: 2px solid var(--accent);
          color: var(--accent);
          text-decoration: none;
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 50px;
          background: white;
        }

        .hero-links a:hover {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
        }

        .hero-links a.primary {
          background: var(--accent);
          color: white;
        }

        .hero-links a.primary:hover {
          background: var(--accent-dark);
          border-color: var(--accent-dark);
        }

        .hero-image {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-wrapper {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
          border: 2px solid var(--accent);
          border-radius: 24px;
          background: white;
          width: 100%;
          max-width: 450px;
        }

        .image-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--accent) 0%, transparent 60%);
          opacity: 0.45;
          mix-blend-mode: multiply;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(10%) brightness(1.05);
          transition: filter 0.5s;
        }

        .image-wrapper:hover .profile-image {
          filter: grayscale(0%) brightness(1);
        }

        /* Timeline Section */
        .timeline-section {
          padding: 4rem 4rem;
          background: white;
          border-top: 2px solid var(--border);
        }

        .timeline-container {
          max-width: 900px;
          margin: 0 auto;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .timeline-scroll-wrapper {
          min-width: 700px;
        }

        .timeline-title {
          font-size: 3rem;
          font-weight: 300;
          margin-bottom: 3rem;
          text-align: center;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        .timeline-title span {
          color: var(--accent);
        }

        .timeline-column-headers {
          display: grid;
          grid-template-columns: 100px repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 1rem;
          padding-left: 0;
        }

        .timeline-column-header {
          text-align: center;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--accent);
          letter-spacing: 0.05em;
        }

        .timeline-column-header.empty {
          visibility: hidden;
        }

        .timeline {
          position: relative;
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 2rem;
          min-height: 800px;
        }

        .timeline-years {
          position: relative;
          border-right: 2px solid var(--border);
          padding-right: 1rem;
          display: flex;
          flex-direction: column;
        }

        .timeline-year {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
          text-align: right;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          border-top: 1px solid rgba(0, 0, 0, 0.15);
        }

        .timeline-year:first-child {
          border-top: none;
        }

        /* Variable spacing based on activity */
        .timeline-year.year-2019 { flex: 0.5; }
        .timeline-year.year-2020 { flex: 0.5; }
        .timeline-year.year-2021 { flex: 0.5; }
        .timeline-year.year-2022 { flex: 3; }  /* Even bigger for taller boxes */
        .timeline-year.year-2023 { flex: 2.2; }  /* Bigger to fit Research */
        .timeline-year.year-2024 { flex: 1.0; }  /* Smaller */
        .timeline-year.year-2025 { flex: 1.7; }  /* Bigger */
        .timeline-year.year-2026 { flex: 1; }
        .timeline-year.year-2027 { flex: 0.5; }
        .timeline-year.year-end { 
          flex: 0.05; 
          border-top: 2px solid rgba(0, 0, 0, 0.15);
          height: 0;
          padding: 0;
        }

        .timeline-tracks-wrapper {
          position: relative;
        }

        .timeline-tracks {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .present-indicator {
          position: absolute;
          left: -2rem;
          right: 0;
          height: 2px;
          background: rgba(13, 148, 136, 0.3);
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .present-indicator::before {
          content: '';
          position: absolute;
          left: -2rem;
          width: 10px;
          height: 10px;
          background: rgba(13, 148, 136, 0.4);
          border-radius: 50%;
          border: 3px solid var(--bg-primary);
        }

        .present-label {
          position: absolute;
          left: -6rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: rgba(13, 148, 136, 0.6);
          font-weight: 500;
          white-space: nowrap;
        }

        .timeline-track {
          position: relative;
          min-height: 800px;
        }

        .timeline-entry {
          position: absolute;
          width: 100%;
          background: #e6f9f5;
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 1rem 0.75rem 0.9rem 0.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.15rem;
        }

        .timeline-entry.future {
          background: transparent;
          border: 2.5px dashed var(--accent);
          border-style: dashed;
          border-width: 2.5px;
        }

        .timeline-entry.current {
          background: #b2f5ea;
        }

        .timeline-entry-icon {
          font-size: 2rem;
          margin-bottom: 0.1rem;
        }

        .timeline-entry-icon img {
          width: 40px;
          height: 40px;
          object-fit: contain;
          background: var(--bg-primary);
          padding: 6px;
          border-radius: 8px;
          border: 1.5px solid rgba(0, 0, 0, 0.1);
        }

        .timeline-entry-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .timeline-entry-duration {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--text-secondary);
          line-height: 1.2;
        }

        /* About Section */
        .about-section {
          padding: 8rem 4rem;
          background: white;
          border-top: 2px solid var(--border);
        }

        .section-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 300;
          margin-bottom: 3rem;
          letter-spacing: -0.02em;
          text-align: center;
        }

        .section-title span {
          color: var(--accent);
        }

        .about-grid {
        }

        .about-text {
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.9;
        }

        .about-text p {
          margin-bottom: 1.5rem;
        }

        .about-text strong {
          font-weight: 500;
        }

        /* Projects Section */
        .projects-section {
          padding: 8rem 4rem;
          background: var(--bg-secondary);
        }

        .projects-grid {
          display: grid;
          gap: 3rem;
          margin-top: 4rem;
        }

        .project-card {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          padding: 3rem;
          border: 2px solid var(--border);
          background: white;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 24px;
        }

        .project-card:hover {
          border-color: var(--accent);
          background: #f0fdf9;
        }

        .project-meta {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .project-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
        }

        .project-highlight {
          padding: 0.5rem 1rem;
          background: var(--accent-light);
          border: 2px solid var(--accent);
          color: var(--accent);
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          width: fit-content;
          border-radius: 20px;
          font-weight: 600;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .tech-tag {
          padding: 0.4rem 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-family: 'JetBrains Mono', monospace;
          transition: all 0.3s;
          border-radius: 16px;
        }

        .project-card:hover .tech-tag {
          border-color: var(--accent);
          color: var(--accent);
          background: white;
        }

        .project-info h3 {
          font-size: 2rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }

        .project-info p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent);
          text-decoration: none;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          transition: all 0.3s;
        }

        .project-link::after {
          content: '→';
          transition: transform 0.3s;
        }

        .project-link:hover::after {
          transform: translateX(4px);
        }

        /* Contact Section */
        .contact-section {
          padding: 8rem 4rem;
          background: var(--bg-secondary);
          border-top: 2px solid var(--border);
          text-align: center;
        }

        .contact-content h2 {
          font-size: 3.5rem;
          font-weight: 300;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }

        .contact-content p {
          font-size: 1.3rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-email {
          display: inline-block;
          font-size: 1.8rem;
          color: var(--accent);
          text-decoration: none;
          padding: 1.5rem 3rem;
          border: 2px solid var(--accent);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 50px;
          background: white;
          position: relative;
          margin: 0 1rem;
        }

        .contact-email:hover {
          background: var(--accent);
          color: white;
        }

        .contact-emails {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
          align-items: center;
        }

        /* Footer */
        footer {
          padding: 3rem 4rem;
          background: white;
          border-top: 2px solid var(--border);
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .footer-social-links {
          display: none;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .footer-social-links a {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--border);
          border-radius: 50%;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s;
          background: white;
        }

        .footer-social-links a:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .footer-social-links a svg {
          width: 20px;
          height: 20px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          nav {
            padding: 1.5rem 2rem;
          }

          nav.scrolled {
            padding: 1rem 2rem;
          }

          .nav-center {
            gap: 1rem;
          }

          .nav-social-links a {
            width: 44px;
            height: 44px;
          }

          .nav-social-links a svg {
            width: 20px;
            height: 20px;
          }

          .timeline {
            grid-template-columns: 80px 1fr;
            gap: 1.5rem;
            min-height: 700px;
          }

          .timeline-track {
            min-height: 700px;
          }

          .timeline-entry {
            padding: 0.7rem;
          }

          .timeline-entry-icon {
            font-size: 1.8rem;
          }

          .timeline-entry-icon img {
            width: 36px;
            height: 36px;
            padding: 5px;
            border-radius: 7px;
            border: 1.5px solid rgba(0, 0, 0, 0.1);
          }

          .timeline-entry-title {
            font-size: 0.85rem;
          }

          .timeline-entry-duration {
            font-size: 0.7rem;
          }

          .timeline-tracks {
            grid-template-columns: repeat(3, 1fr);
          }

          .hero {
            padding: 0 2rem;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .hero-text {
            order: 2;
          }

          .hero-image {
            order: 1;
          }

          .image-wrapper {
            max-width: 350px;
            margin: 0 auto;
          }

          .hero-links {
            justify-content: center;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-text h1 span {
            font-size: 2rem;
          }

          .project-card {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .projects-section,
          .about-section,
          .contact-section,
          .timeline-section {
            padding: 5rem 2rem;
          }
        }

        @media (max-width: 768px) {
          nav {
            flex-wrap: wrap;
            gap: 0.75rem;
            justify-content: center;
            padding: 1rem 1.5rem;
            background: rgba(250, 248, 243, 0.98);
            backdrop-filter: blur(20px);
          }

          nav.scrolled {
            padding: 0.75rem 1.5rem;
          }

          .logo {
            width: 100%;
            text-align: center;
            margin-bottom: 0.25rem;
          }

          .nav-center {
            position: relative;
            left: auto;
            transform: none;
            width: 100%;
            justify-content: center;
            gap: 0.75rem;
          }

          .nav-social-links {
            display: none;
          }

          .nav-links {
            width: 100%;
            justify-content: center;
            gap: 1.5rem;
          }

          .nav-links a {
            font-size: 0.85rem;
          }

          .hero {
            padding: 0 1.5rem;
            padding-top: 120px;
            min-height: auto;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-text {
            order: 2;
          }

          .hero-image {
            order: 1;
          }

          .image-wrapper {
            max-width: 280px;
            margin: 0 auto;
          }

          .hero-links {
            justify-content: center;
          }

          .timeline {
            grid-template-columns: 60px 1fr;
            gap: 1rem;
            min-height: 600px;
          }

          .timeline-track {
            min-height: 600px;
          }

          .timeline-year {
            font-size: 0.75rem;
          }

          .timeline-tracks {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
          }

          .timeline-entry {
            padding: 0.5rem;
          }

          .timeline-entry-icon {
            font-size: 1.3rem;
          }

          .timeline-entry-icon img {
            width: 28px;
            height: 28px;
            padding: 3px;
            border-radius: 5px;
            border: 1.5px solid rgba(0, 0, 0, 0.1);
          }

          .timeline-entry-title {
            font-size: 0.65rem;
          }

          .timeline-entry-duration {
            font-size: 0.55rem;
          }

          .timeline-section {
            padding: 3rem 1rem 4rem 1rem;
          }

          .timeline-column-headers {
            grid-template-columns: 60px repeat(3, 1fr);
            gap: 1rem;
          }

          .timeline-column-header {
            font-size: 0.75rem;
          }

          .timeline-scroll-wrapper {
            min-width: 600px;
          }

          .present-label {
            left: -4.5rem;
            font-size: 0.6rem;
          }

          .hero-text h1 {
            font-size: 1.75rem;
          }

          .hero-text h1 span {
            font-size: 1.5rem;
          }

          .hero-text p {
            font-size: 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .timeline-title {
            font-size: 2rem;
          }

          .contact-content h2 {
            font-size: 2rem;
          }

          .contact-email {
            font-size: 1rem;
            padding: 0.875rem 1.5rem;
          }

          .contact-emails {
            flex-direction: column;
            align-items: center;
          }

          .about-section,
          .projects-section,
          .contact-section {
            padding: 4rem 1.5rem;
          }

          .about-text {
            font-size: 1rem;
          }

          .project-card {
            padding: 1.5rem;
          }

          .footer-social-links {
            display: flex;
          }

          footer {
            padding: 2rem 1.5rem;
          }

          .timeline-container {
            position: relative;
          }

          .timeline-container::after {
            content: '← Scroll →';
            position: absolute;
            bottom: -2rem;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.75rem;
            color: var(--text-secondary);
            opacity: 0.6;
          }
        }

        @media (max-width: 480px) {
          .hero-text h1 {
            font-size: 1.5rem;
          }

          .hero-text h1 span {
            font-size: 1.25rem;
          }

          .hero-links a {
            padding: 0.75rem 1.5rem;
            font-size: 0.8rem;
          }

          .image-wrapper {
            max-width: 220px;
          }

          .section-title,
          .timeline-title {
            font-size: 1.75rem;
          }

          .timeline-scroll-wrapper {
            min-width: 550px;
          }

          .timeline {
            min-height: 550px;
          }

          .timeline-track {
            min-height: 550px;
          }

          .timeline-entry-title {
            font-size: 0.6rem;
          }

          .timeline-entry-duration {
            font-size: 0.5rem;
          }

          .timeline-entry-icon img {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className={scrollY > 100 ? 'scrolled' : ''}>
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          MZD
        </div>
        <div className="nav-center">
          <div className="nav-social-links">
            <a href="mailto:damudi.m@northeastern.edu" target="_blank" rel="noopener noreferrer" title="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="https://linkedin.com/in/zuhaibdamudi" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
            <a href="https://github.com/zuhaibdamudi" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
              </svg>
            </a>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <a 
              className={activeSection === 'about' ? 'active' : ''} 
              onClick={() => scrollToSection('about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              className={activeSection === 'projects' ? 'active' : ''} 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              className={activeSection === 'contact' ? 'active' : ''} 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Mohammed Zuhaib Damudi
              <span>Graduate Student in Computer Science</span>
            </h1>
            <p>
              Master's student in Computer Science at Northeastern University, with experience spanning software engineering, AI research, and data-centric systems. Focused on transforming raw information into meaningful, real-world impact.
            </p>
            <div className="hero-links">
              <a href={process.env.PUBLIC_URL + "/MohammedZuhaibDamudiResume.pdf"} target="_blank" rel="noopener noreferrer" className="primary">
                View Resume
              </a>
              <a href="https://github.com/zuhaibdamudi" target="_blank" rel="noopener noreferrer">
                View GitHub
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img 
                src={process.env.PUBLIC_URL + "/Photograph_Portrait.JPG"} 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-content">
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a graduate student at <strong>Northeastern University</strong>, pursuing a <strong>Master's in Computer Science</strong>. My background includes experience in software engineering, AI research, data science and data engineering across various personal, academic and industry projects.
              </p>
              <p>
                Previously, I spent <strong>two years at Shell</strong> as a Software QA Engineer, where I led performance optimization initiatives and contributed to an <strong>AI-powered code converter tool</strong>. During my undergraduate academic thesis on generative AI, I worked on <strong>brain tumor detection using denoising diffusion models</strong>, a project that was later published in the <em>International Journal of Biomedical Imaging</em>.
              </p>
              <p>
                I've also interned as a <strong>Data Engineer at Questt</strong>, an ed-tech startup, where I built <strong>automated ETL pipelines</strong> that enabled data analysts to query insights more efficiently. Outside of work and academics, I enjoy building products that stem from personal need, one such project is <strong>Habitual</strong>, a mobile habit-tracking app I developed and published on the Google Play Store.
              </p>
              <p>
                I'm passionate about working with data to create meaningful impact. I aspire to build systems that help people understand and leverage their data effectively, whether through data pipelines, machine learning models, or thoughtfully designed analytics platforms. I'm especially interested in solving real-world problems by transforming raw inputs into meaningful, actionable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="section-content">
          <h2 className="section-title">
            My <span>Projects</span>
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card"
              >
                <div className="project-meta">
                  <div className="project-date">{project.date}</div>
                  {project.highlight && (
                    <div className="project-highlight">{project.highlight}</div>
                  )}
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-container">
          <h2 className="timeline-title">My <span>Journey</span></h2>
          
          <div className="timeline-scroll-wrapper">
            {/* Column Headers */}
            <div className="timeline-column-headers">
              <div className="timeline-column-header empty"></div>
              <div className="timeline-column-header">Education</div>
              <div className="timeline-column-header">Experience</div>
              <div className="timeline-column-header">Projects</div>
            </div>
            
            <div className="timeline">
            <div className="timeline-years">
              <div className="timeline-year year-2019">2019</div>
              <div className="timeline-year year-2020">2020</div>
              <div className="timeline-year year-2021">2021</div>
              <div className="timeline-year year-2022">2022</div>
              <div className="timeline-year year-2023">2023</div>
              <div className="timeline-year year-2024">2024</div>
              <div className="timeline-year year-2025">2025</div>
              <div className="timeline-year year-2026">2026</div>
              <div className="timeline-year year-2027">2027</div>
              <div className="timeline-year year-end"></div>
            </div>
            
            <div className="timeline-tracks-wrapper">
              {/* Present Indicator - dynamically positioned */}
              <div className="present-indicator" style={{ top: `${(() => {
                const now = new Date();
                const currentYear = now.getFullYear();
                const currentMonth = now.getMonth(); // 0-11 (December = 11)
                
                // Year flex values - MUST match CSS exactly
                const yearFlexes = {
                  2019: 0.5, 2020: 0.5, 2021: 0.5, 2022: 3,
                  2023: 2.2, 2024: 1.0, 2025: 1.7, 2026: 1, 2027: 0.5
                };
                const totalFlex = 11.45; // Sum of all flex values (including 0.05 for end marker)
                
                // Calculate cumulative flex up to current position
                let flexSum = 0;
                
                // Add complete years before current year
                for (let year = 2019; year < currentYear; year++) {
                  flexSum += yearFlexes[year];
                }
                
                // Add progress through current year (December = 11, so 12/12 = 100%)
                const monthsIntoYear = currentMonth + 1; // Convert 0-11 to 1-12
                const currentYearProgress = monthsIntoYear / 12;
                flexSum += yearFlexes[currentYear] * currentYearProgress;
                
                // Convert to percentage of total timeline
                const percentage = (flexSum / totalFlex) * 100;
                
                return percentage;
              })()}%` }}>
                <span className="present-label">Present</span>
              </div>
              
              <div className="timeline-tracks">
                {/* Track 1: Education */}
                <div className="timeline-track">
                  {/* Manipal: Jul 2019 - Jul 2023 */}
                  <div className="timeline-entry" style={{ top: '0%', height: '48.9%' }}>
                    <div className="timeline-entry-icon">
                      <img src={process.env.PUBLIC_URL + "/mit-logo.png"} alt="MIT" />
                    </div>
                    <div className="timeline-entry-title">Bachelors in Computer Science and Engineering</div>
                    <div className="timeline-entry-duration">Jul '19 - Jul '23</div>
                  </div>
                  {/* Northeastern: Sep 2025 - Aug 2027 */}
                  <div className="timeline-entry current" style={{ top: '75.5%', height: '22%' }}>
                    <div className="timeline-entry-icon">
                      <img src={process.env.PUBLIC_URL + "/northeastern-logo.png"} alt="Northeastern" />
                    </div>
                    <div className="timeline-entry-title">Masters in Computer Science</div>
                    <div className="timeline-entry-duration">Sep '25 - Aug '27</div>
                  </div>
                </div>

                {/* Track 2: Experience */}
                <div className="timeline-track">
                  {/* Questt: May 2022 - Jul 2022 */}
                  <div className="timeline-entry" style={{ top: '23%', height: '3%', minHeight: '125px' }}>
                    <div className="timeline-entry-icon">
                      <img src={process.env.PUBLIC_URL + "/questt-logo.png"} alt="Questt" />
                    </div>
                    <div className="timeline-entry-title">Data Engineer Intern @ Questt</div>
                    <div className="timeline-entry-duration">May - Jul '22</div>
                  </div>
                  {/* Shell: Aug 2023 - Aug 2025 */}
                  <div className="timeline-entry" style={{ top: '48.9%', height: '26.6%' }}>
                    <div className="timeline-entry-icon">
                      <img src={process.env.PUBLIC_URL + "/shell-logo.png"} alt="Shell" />
                    </div>
                    <div className="timeline-entry-title">Software QA Engineer @ Shell</div>
                    <div className="timeline-entry-duration">Aug '23 - Aug '25</div>
                  </div>
                </div>

                {/* Track 3: Projects */}
                <div className="timeline-track">
                  {/* Habitual: Jan 2022 - Mar 2022 */}
                  <div className="timeline-entry" style={{ top: '13%', height: '6%', minHeight: '105px' }}>
                    <div className="timeline-entry-icon">
                      <img src={process.env.PUBLIC_URL + "/habitual-logo.png"} alt="Habitual" />
                    </div>
                    <div className="timeline-entry-title">Habitual Mobile Application</div>
                    <div className="timeline-entry-duration">Jan - Mar '22</div>
                  </div>
                  {/* Research: Jan 2023 - Jul 2023 */}
                  <div className="timeline-entry" style={{ top: '37%', height: '11.9%', minHeight: '120px' }}>
                    <div className="timeline-entry-icon">
                      <img src={process.env.PUBLIC_URL + "/brain-logo.png"} alt="Brain Research" />
                    </div>
                    <div className="timeline-entry-title">Brain Tumor Detection using Diffusion Models</div>
                    <div className="timeline-entry-duration">Jan - Jul '23</div>
                  </div>
                  {/* Seeking Internship: All of 2026 */}
                  <div className="timeline-entry future" style={{ top: '85%', height: '10%', minHeight: '105px' }}>
                    <div className="timeline-entry-icon">🔍</div>
                    <div className="timeline-entry-title">Seeking co-ops</div>
                    <div className="timeline-entry-duration">April '26 onwards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <h2>Let's Work Together</h2>
          <p>
            I'm currently open to opportunities in software engineering, AI research, 
            and performance engineering. Feel free to reach out!
          </p>
          <div className="contact-emails">
            <a href="mailto:damudi.m@northeastern.edu" className="contact-email">
              damudi.m@northeastern.edu
            </a>
            <a href="mailto:zuhaibdamudi@live.com" className="contact-email">
              zuhaibdamudi@live.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-social-links">
          <a href="mailto:damudi.m@northeastern.edu" target="_blank" rel="noopener noreferrer" title="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          <a href="https://linkedin.com/in/zuhaibdamudi" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
          <a href="https://github.com/zuhaibdamudi" target="_blank" rel="noopener noreferrer" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
            </svg>
          </a>
        </div>
        <p>© 2025 Mohammed Zuhaib Damudi.</p>
      </footer>

      {/* Cursor Effect */}
      <div 
        className="cursor-effect" 
        style={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
