import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="portfolio-wrapper">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}