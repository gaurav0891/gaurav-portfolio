import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <header id="about" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">Available for opportunities <span className="status-dot" /></p>
        <h1>Building digital <span>experiences</span> with intent.</h1>
        <p className="hero-role">{portfolioData.role} <strong>{portfolioData.roleDetail}</strong></p>
        <p className="bio">{portfolioData.about}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Get in touch <span aria-hidden="true">-&gt;</span></a>
          <a className="button button-ghost" href={`${import.meta.env.BASE_URL}resume.pdf`} download="Gaurav_Sharma_Resume.pdf" target="_blank" rel="noopener noreferrer">Download resume <span aria-hidden="true">&#8595;</span></a>
        </div>
        <div className="hero-meta"><span>{portfolioData.location}</span><span>{portfolioData.email}</span></div>
      </div>
      <div className="hero-visual" aria-label="Gaurav Sharma, Full-Stack Web Developer">
        <div className="hero-grid" /><span className="hero-mark">GS</span><span className="hero-code">&lt;/&gt;</span><span className="hero-caption">01 / developer</span>
      </div>
    </header>
  );
}