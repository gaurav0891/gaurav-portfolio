import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <header className="hero">
      <h1>{portfolioData.name}</h1>
      <p className="subtitle">{portfolioData.role}</p>
      <p className="contact-info">
        {portfolioData.location} • <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a> • {portfolioData.phone}
      </p>
      <p className="bio">{portfolioData.about}</p>
    </header>
  );
}