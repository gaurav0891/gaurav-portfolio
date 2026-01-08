import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="grid">
        {portfolioData.projects.map((proj) => (
          <div key={proj.title} className="card">
            <h3>{proj.title}</h3>
            <p className="tech-stack">{proj.tech}</p>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}