import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub,
  FaNpm, FaBootstrap, FaFigma
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiRedux, SiJest } from 'react-icons/si';
import './Skills.css';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="skill-icon" />, level: '90%', category: 'frontend' },
  { name: 'CSS3', icon: <FaCss3Alt className="skill-icon" />, level: '85%', category: 'frontend' },
  { name: 'JavaScript', icon: <FaJs className="skill-icon" />, level: '85%', category: 'frontend' },
  { name: 'TypeScript', icon: <SiTypescript className="skill-icon" />, level: '75%', category: 'frontend' },
  { name: 'React', icon: <FaReact className="skill-icon" />, level: '85%', category: 'frontend' },
  { name: 'Redux', icon: <SiRedux className="skill-icon" />, level: '75%', category: 'frontend' },
  { name: 'Tailwind', icon: <SiTailwindcss className="skill-icon" />, level: '80%', category: 'frontend' },
  { name: 'Bootstrap', icon: <FaBootstrap className="skill-icon" />, level: '85%', category: 'frontend' },
  { name: 'Git', icon: <FaGitAlt className="skill-icon" />, level: '85%', category: 'tools' },
  { name: 'GitHub', icon: <FaGithub className="skill-icon" />, level: '85%', category: 'tools' },
  { name: 'npm', icon: <FaNpm className="skill-icon" />, level: '80%', category: 'tools' },
  { name: 'Jest', icon: <SiJest className="skill-icon" />, level: '70%', category: 'tools' },
  { name: 'Figma', icon: <FaFigma className="skill-icon" />, level: '75%', category: 'design' },
];

const categories = [
  { id: 'frontend', name: 'Frontend' },
  { id: 'tools', name: 'Tools' },
  { id: 'design', name: 'Design' },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const filteredSkills = skills.filter(skill => skill.category === activeCategory);
  
  // Skill icon colors based on technology
  const skillColors = {
    'HTML5': 'text-orange-500',
    'CSS3': 'text-blue-500',
    'JavaScript': 'text-yellow-400',
    'TypeScript': 'text-blue-600',
    'React': 'text-cyan-400',
    'Redux': 'text-purple-500',
    'Tailwind': 'text-cyan-500',
    'Bootstrap': 'text-purple-600',
    'Git': 'text-orange-600',
    'GitHub': 'text-gray-300',
    'npm': 'text-red-500',
    'Jest': 'text-red-600',
    'Figma': 'text-purple-400'
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="skills dark:bg-gray-900">
      <div className="skills-background">
        <div className="skills-pattern"></div>
        <div className="skills-overlay"></div>
      </div>
      
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="skills-title">My Skills</h2>
          <p className="skills-subtitle">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="skills-filter">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`skills-filter-button ${
                  activeCategory === category.id ? 'active' : ''
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <motion.div 
            className="skills-grid"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className="skill-card group"
                variants={item}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="relative">
                  <div className={`skill-icon-container ${skillColors[skill.name]}`}>
                    {skill.icon}
                  </div>
                  <h3 className="skill-name">
                    {skill.name}
                  </h3>
                  <div className="skill-level">
                    <div 
                      className="skill-level-fill"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                  <span className="skill-percentage">
                    {skill.level}
                  </span>
                  
                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    hoveredSkill === index ? 'opacity-100' : ''
                  }`}></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
