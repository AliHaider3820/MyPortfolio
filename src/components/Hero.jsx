import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

// Importing hero image from assets
import heroImage from '../assets/AliHaider.jpeg';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/AliHaider3820', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
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
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-overlay">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
        </div>
      </div>
      
      <div className="hero-container">
        {/* Enhanced Profile Image */}
        <motion.div 
          className="profile-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.4,
            type: 'spring',
            stiffness: 100,
            damping: 10
          }}
        >
          <div className="profile-image-wrapper">
            <img 
              src={heroImage} 
              alt="Ali Haider" 
              className="profile-image"
            />
            <div className="profile-image-border"></div>
            <div className="profile-image-shine"></div>
          </div>
          <div className="profile-image-decoration"></div>
        </motion.div>
        
        <div className="hero-content">
          <motion.div
            className="hero-text"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item}>
              <span className="hero-badge">
                Welcome to my portfolio
              </span>
            </motion.div>
            
            <motion.h1 className="hero-title" variants={item}>
              Hi, I'm <span className="hero-highlight">Ali Haider</span>
            </motion.h1>
            
            <motion.div className="hero-subtitle" variants={item}>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1500,
                  'Web Designer',
                  1500,
                  'UI/UX Enthusiast',
                  1500,
                  'Problem Solver',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            
            <motion.p className="hero-description" variants={item}>
              I build exceptional digital experiences with modern web technologies. 
              Focused on creating clean, efficient, and user-friendly applications.
            </motion.p>
            
            <motion.div className="hero-cta" variants={item}>
              <a href="#contact" className="hero-button hero-button-primary">
                Contact Me
              </a>
              <a href="#projects" className="hero-button hero-button-secondary">
                View My Work
              </a>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
