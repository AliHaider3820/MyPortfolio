import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/AliHaider3820' } 
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
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
    <header className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="nav-container">
        <nav className="nav-content">
          <motion.a 
            href="#" 
            className="nav-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ali Haider
          </motion.a>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            <motion.ul 
              className="nav-links"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <a href={link.href} className="nav-link">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
              className="social-links"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary text-2xl"
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <FaGithub size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="mobile-menu-icon" /> : <FaBars className="mobile-menu-icon" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <>
          <div 
            className={`overlay ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(false)}
          />
          <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <ul className="mobile-links">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="mobile-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mobile-social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </>
      </div>
    </header>
  );
};

export default Navbar;
