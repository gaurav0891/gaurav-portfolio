import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="section section-shell contact-section">
      <p className="eyebrow">05 / let&apos;s talk</p><h2>Have a project<br /><span>in mind?</span></h2><p className="bio">Open to software engineering roles and collaboration. Feel free to reach out directly.</p>
      <div className="contact-links">
        <a href={`mailto:${portfolioData.email}`} className="button button-primary">{portfolioData.email} <span aria-hidden="true">-&gt;</span></a>
        <a href={`tel:${portfolioData.phone.replaceAll(' ', '')}`} className="social-link">{portfolioData.phone}</a>
        <a href={portfolioData.github} target="_blank" rel="noreferrer" className="social-link">GitHub <span aria-hidden="true">&#8599;</span></a>
        <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="social-link">LinkedIn <span aria-hidden="true">&#8599;</span></a>
      </div>
    </section>
  );
}