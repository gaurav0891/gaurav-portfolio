export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-topline"><span>{project.number}</span><span className="project-arrow" aria-hidden="true">&#8599;</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tech.map((technology) => <span key={technology}>{technology}</span>)}
      </div>
      <div className="project-links">
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live demo <span aria-hidden="true">&#8599;</span></a>}
        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">&#8599;</span></a>
      </div>
    </article>
  );
}
