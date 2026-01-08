import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="section">
      <h2>Technical Skills</h2>
      <div className="skills-block">
        {Object.entries(portfolioData.skills).map(([category, items]) => (
          <div key={category} className="skill-group">
            <span className="skill-cat-title">{category.toUpperCase()}: </span>
            {items.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}