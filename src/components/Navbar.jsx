export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#about" className="nav-logo"><span>G</span>S</a>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}