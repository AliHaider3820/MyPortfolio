import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaDatabase, FaArrowRight } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: <FaCode className="text-3xl mb-4" />, description: 'Building responsive and interactive user interfaces with React, HTML5, CSS3, and modern JavaScript.' },
    { name: 'Backend Development', icon: <FaServer className="text-3xl mb-4" />, description: 'Creating robust server-side applications using Node.js, Express, and various databases.' },
    { name: 'Mobile Development', icon: <FaMobile className="text-3xl mb-4" />, description: 'Developing cross-platform mobile applications with React Native and Flutter.' },
    { name: 'Database Management', icon: <FaDatabase className="text-3xl mb-4" />, description: 'Designing and managing databases including MongoDB, MySQL, and Firebase.' },
  ];

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
    <section id="about" className="about dark:bg-gray-900">
      {/* Decorative background elements */}
      <div className="about-decoration">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className="about-container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I'm a passionate Full Stack Developer with expertise in building modern web applications. 
            With a strong foundation in both frontend and backend technologies, I create efficient, 
            scalable, and user-friendly digital experiences.
          </motion.p>
        </div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={item}
              className="about-intro"
            >
              <h3 className="text-2xl font-bold mb-6">Who am I?</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                I'm Ali Haider, a self-taught developer with a passion for creating beautiful and functional web applications. 
                My journey in web development started with a curiosity about how websites work, and it has grown into a full-fledged career.
              </p>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have experience working with various 
                other technologies and frameworks. I'm always eager to learn new technologies and improve my skills.
              </p>
            </motion.div>
            
            <motion.div 
              className="skills-section"
              variants={item}
            >
              <h3 className="text-2xl font-bold mb-6">My Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="skill-card"
                    variants={item}
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  >
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{skill.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="mt-10"
              variants={item}
            >
              <a
                href="#contact"
                className="cta-button"
              >
                Get In Touch
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="about-image-wrapper">
              <img 
                src="/path-to-your-image.jpg" 
                alt="About Me" 
                className="about-image"
              />
              <div className="about-image-overlay"></div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
