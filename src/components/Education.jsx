import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="section">
      <h2>Education & Certifications</h2>
      {portfolioData.education.map((edu) => (
        <div key={edu.institution} className="edu-card">
          <h3>{edu.degree} — {edu.institution}</h3>
          <p>{edu.details} ({edu.period})</p>
        </div>
      ))}
      <ul className="cert-list">
        {portfolioData.certifications.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}