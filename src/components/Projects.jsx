import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Web AI Services',
    description: 'A modern web application for AI services directory built with React and Node.js. Features include service listings, search functionality, and responsive design.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/src/assets/directoryImage.webp',
    github: 'https://github.com/AliHaider3820/web-ai-version02',
    demo: 'https://web-ai-version02.vercel.app/',
  },
  {
    title: 'React Calculator',
    description: 'A fully functional calculator application built with React. Features include basic arithmetic operations, responsive design, and a clean user interface.',
    tags: ['React', 'JavaScript', 'CSS3'],
    image: '/src/assets/webCalculator.webp',
    github: 'https://github.com/AliHaider3820/calculator-react',
    demo: 'https://js-calculator-beige.vercel.app/',
  },
  {
    title: 'Todo App',
    description: 'A task management application that allows users to add, edit, delete, and mark tasks as complete. Built with vanilla JavaScript.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    image: '/src/assets/ToDo-app.png',
    github: 'https://github.com/AliHaider3820/Todo-App-JS',
    demo: 'https://todo-app-js-wheat.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Vite. Showcases projects, skills, and contact information in a modern, responsive design.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    image: '/src/assets/portfolio.png',
    github: 'https://github.com/AliHaider3820',
    demo: '#',
  },
];

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="projects" className="projects dark:bg-gray-900">
      <div className="projects-container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Here are some of my recent projects. Each project is built with a focus on clean code, 
            modern design, and great user experience.
          </motion.p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a 
              key={index}
              href={project.demo !== '#' ? project.demo : project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card block"
              variants={item}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View code on GitHub"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub />
                    </a>
                    {project.demo && project.demo !== '#' && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View live demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a 
            href="https://github.com/AliHaider3820" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-github"
          >
            <FaGithub className="mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="projects-bg-shape-1"></div>
      <div className="projects-bg-shape-2"></div>
    </section>
  );
};

export default Projects;