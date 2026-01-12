import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section section-shell">
      <div className="section-heading projects-heading"><p className="eyebrow">03 / selected work</p><h2>Projects with a<br /><span>purpose.</span></h2><p>Some things I have designed and built recently.</p></div>
      <div className="projects-grid">
        {portfolioData.projects.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}
      </div>
    </section>
  );
}