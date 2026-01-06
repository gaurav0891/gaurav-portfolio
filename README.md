# 🌐 Developer Portfolio

A responsive, high-performance developer portfolio built with **React.js**, **Tailwind CSS**, and **Vite** to showcase full-stack web applications, technical skill sets, and software engineering experience.

---

## 🚀 Live Demo
* **Live Website:** [your-portfolio.vercel.app](https://your-portfolio.vercel.app)
* **Deployment Platform:** Vercel / Netlify

---

## 🛠️ Tech Stack

* **Core:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **State Management:** React Context API
* **Deployment:** Vercel

---

## 🏛️ Architecture

portfolio/
├── public/
│ ├── favicon.ico
│ └── resume.pdf      # Downloadable resume file
├── src/
│ ├── assets/
│ │ ├── images/      # Project screenshots & profile picture
│ │ └── icons/      # SVG icons (GitHub, LinkedIn, Email)
│ ├── components/
│ │ ├── Navbar.jsx      # Sticky navigation with smooth scroll links
│ │ ├── Hero.jsx      # Intro banner, headline, CTA buttons
│ │ ├── About.jsx      # Bio and academic background
│ │ ├── Skills.jsx      # Categorized technical skill tags
│ │ ├── Projects.jsx      # Grid container for project cards
│ │ ├── ProjectCard.jsx      # Reusable card component (preview, tech, links)
│ │ ├── Education.jsx      # Degree details, certifications, and achievements
│ │ ├── Contact.jsx      # Contact form or mailto trigger with socials
│ │ └── Footer.jsx      # Copyright and bottom links
│ ├── data/
│ │ └── portfolioData.js      # Single source of truth for text, links, and projects
│ ├── styles/
│ │ ├── index.css      # Global resets, CSS variables (colors, fonts)
│ │ └── App.css      # Layout containers and section spacing
│ ├── App.jsx      # Main page assembly
│ └── main.jsx      # React DOM entry point
├── .gitignore
├── index.html
├── package.json
└── vite.config.js 
---