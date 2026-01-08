import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-wrapper">
      <Hero />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
}