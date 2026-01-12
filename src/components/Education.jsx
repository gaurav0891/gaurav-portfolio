import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section section-shell education-layout">
      <div className="section-heading"><p className="eyebrow">04 / the foundation</p><h2>Learning by<br /><span>doing.</span></h2></div><div>
      {portfolioData.education.map((edu) => (
        <div key={edu.institution} className="edu-card">
          <p className="edu-period">{edu.period}</p><h3>{edu.degree}</h3><p>{edu.institution}</p><p className="edu-detail">{edu.specialization} <span>·</span> CGPA: {edu.cgpa}</p>
        </div>
      ))}
      <ul className="cert-list"><li className="cert-label">Certifications</li>
        {portfolioData.certifications.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      </div>
    </section>
  );
}