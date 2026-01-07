import { portfolioData } from './data';
import './App.css';

export default function App() {
  return (
    <main className="container">
      <header className="hero">
        <h1>{portfolioData.name}</h1>
        <p className="subtitle">{portfolioData.role}</p>
        <p>{portfolioData.contact.location} • {portfolioData.contact.email}</p>
      </header>

      <section className="section">
        <h2>Technical Skills</h2>
        <div className="badge-grid">
          {portfolioData.skills.map((skill) => (
            <span key={skill} className="badge">{skill}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {portfolioData.projects.map((proj) => (
            <article key={proj.title} className="card">
              <h3>{proj.title}</h3>
              <p className="tech">{proj.tech}</p>
              <p>{proj.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}