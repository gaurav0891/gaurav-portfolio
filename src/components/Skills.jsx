import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section section-shell">
      <div className="section-heading"><p className="eyebrow">02 / capabilities</p><h2>Tools for turning ideas<br /><span>into useful things.</span></h2></div>
      <div className="skills-block">
        {Object.entries(portfolioData.skills).map(([category, items]) => (
          <div key={category} className="skill-group">
            <h3>{category}</h3><div className="skill-tags">{items.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}</div>
          </div>
        ))}
      </div>
    </section>
  );
}