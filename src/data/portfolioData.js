export const portfolioData = {
  name: 'Gaurav Sharma',
  role: 'Full-Stack Web Developer',
  roleDetail: 'MERN | Java | C++',
  location: 'Jaipur, India',
  email: 'gauravsharma27.work@gmail.com',
  phone: '+91 98751 35417',
  github: 'https://github.com/gaurav0891',
  linkedin: 'https://www.linkedin.com',
  about: 'I build thoughtful, reliable web products with a strong foundation in Java, C++, and the MERN stack. Currently studying BCA at JECRC University and turning ideas into useful, human-centered software.',
  skills: {
    'Languages & Core': ['Java', 'C++', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'DSA', 'OOP'],
    'Frameworks & Libraries': ['React.js', 'Node.js', 'Express.js', 'Bootstrap'],
    Databases: ['MongoDB', 'Mongoose', 'CRUD Operations', 'Database Design'],
    'Real-Time & Auth': ['Socket.io', 'JWT', 'bcrypt', 'Role-Based Access Control'],
    Tools: ['Git', 'GitHub', 'Postman', 'MongoDB Atlas']
  },
  projects: [
    { number: '01', title: 'Real-Time Collaborative Document Editor', tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'], description: 'Built a real-time collaborative document editor with Socket.io live sync and JWT-secured, MongoDB-backed persistent sessions.', github: 'https://github.com/gaurav0891/Simple-DocEditor', demo: null },
    { number: '02', title: 'E-Commerce Web App', tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'], description: 'Built a full-stack e-commerce app with JWT/bcrypt authentication, RESTful product/cart/order APIs, and React Context-based state management.', github: 'https://github.com/gaurav0891', demo: null },
    { number: '03', title: 'Job Application Tracker', tech: ['React.js', 'JavaScript', 'CSS', 'LocalStorage'], description: 'Built a React-based job application tracker with CRUD operations, status filtering, and persistent localStorage-backed data.', github: 'https://github.com/gaurav0891', demo: null }
  ],
  education: [{ degree: 'Bachelor of Computer Applications (BCA)', institution: 'JECRC University, Jaipur', specialization: 'MERN Stack', cgpa: '8.79', period: '2024 - 2027' }],
  certifications: ['freeCodeCamp JavaScript Developer', 'AWS Educate Introduction to Generative AI'],
  achievements: ['Tata Quiz / Tata Imagination Challenge 2025', 'Active DSA practice on LeetCode']
};
