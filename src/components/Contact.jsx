import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Get In Touch</h2>
      <p className="bio">
        Open to software engineering roles and collaboration. Feel free to reach out directly.
      </p>
      <div className="contact-links" style={{ marginTop: '1.25rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a 
          href={`mailto:${portfolioData.email}`} 
          className="btn-link"
        >
          Email: {portfolioData.email}
        </a>
        <a 
          href="https://github.com/gaurav0891" 
          target="_blank" 
          rel="noreferrer"
          className="btn-link"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noreferrer" 
          className="btn-link"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}