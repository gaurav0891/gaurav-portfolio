import { portfolioData } from '../data/portfolioData';

export default function Hero() {
	return (
		<section id="about" className="hero section-shell">
			<div className="hero-copy">
				<p className="eyebrow">01 / hello, world <span className="status-dot" /> available for opportunities</p>
				<h1>Building digital tools that <span>move ideas forward.</span></h1>
				<p className="hero-role">{portfolioData.role} <strong>({portfolioData.roleDetail})</strong></p>
				<p className="bio">{portfolioData.about}</p>
				<div className="hero-actions">
					<a className="button button-primary" href={`${import.meta.env.BASE_URL}resume.pdf`} download="Gaurav_Sharma_Resume.pdf" target="_blank" rel="noopener noreferrer">Download resume <span aria-hidden="true">-&gt;</span></a>
					<a className="button button-ghost" href="#projects">View selected work <span aria-hidden="true">&#8599;</span></a>
				</div>
				<div className="hero-meta"><span>{portfolioData.location}</span><a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a></div>
			</div>
			<div className="hero-visual" aria-label="Developer profile visual">
				<div className="hero-grid" />
				<p className="hero-code">const craft = {'{'} precision: true {'}'}</p>
				<div className="hero-mark">GS<span>.</span></div>
				<p className="hero-caption">full-stack / curious / always learning</p>
			</div>
		</section>
	);
}
