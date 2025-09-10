import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaGithub, FaTwitter, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
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
    },
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <h2 className="contact-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="contact-subtitle">
            Have a project in mind or want to discuss potential opportunities? I'm just a message away!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="contact-info-wrapper"
          >
            <motion.div variants={item} className="contact-info">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-subtitle">Let's talk about your project or just say hello!</p>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <a href="mailto:haider.2002.786@gmail.com" className="info-link">
                    haider.2002.786@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <a href="tel:+92 308 6613608" className="info-link">
                    +92 308 6613608
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>Kot Lakhpath, Lahore, Pakistan.</p>
                </div>
              </div>

              <div className="social-section">
                <h4>Follow Me</h4>
                <div className="social-links">
                
                  <a 
                    href="https://github.com/AliHaider3820" 
                    target="_blank" 
                    rel="noreferrer"
                    className="social-link github"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=100082825073808" 
                    className="social-link facebook"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.form 
            variants={item}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <h3 className="form-title">Send Me a Message</h3>
            <p className="form-subtitle">I'll get back to you as soon as possible!</p>
            
            <div className="form-grid">
              <div className={`form-group ${activeField === 'name' ? 'active' : ''}`}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setActiveField('name')}
                  onBlur={() => setActiveField(null)}
                  required
                  className="form-input"
                  placeholder=" "
                />
                <label htmlFor="name" className="form-label">Your Name</label>
                <div className="form-underline"></div>
              </div>
              
              <div className={`form-group ${activeField === 'email' ? 'active' : ''}`}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField(null)}
                  required
                  className="form-input"
                  placeholder=" "
                />
                <label htmlFor="email" className="form-label">Your Email</label>
                <div className="form-underline"></div>
              </div>
            </div>

            <div className={`form-group ${activeField === 'subject' ? 'active' : ''}`}>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setActiveField('subject')}
                onBlur={() => setActiveField(null)}
                required
                className="form-input"
                placeholder=" "
              />
              <label htmlFor="subject" className="form-label">Subject</label>
              <div className="form-underline"></div>
            </div>

            <div className={`form-group ${activeField === 'message' ? 'active' : ''} message-group`}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setActiveField('message')}
                onBlur={() => setActiveField(null)}
                rows="5"
                required
                className="form-input"
                placeholder=" "
              ></textarea>
              <label htmlFor="message" className="form-label">Your Message</label>
              <div className="form-underline"></div>
            </div>

            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.button
                  key="submit-button"
                  type="submit"
                  className="submit-button"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane className="button-icon" />
                  Send Message
                </motion.button>
              )}
              
              {status === 'sending' && (
                <motion.div 
                  key="sending"
                  className="status-message sending"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="spinner"></div>
                  Sending...
                </motion.div>
              )}
              
              {status === 'success' && (
                <motion.div 
                  key="success"
                  className="status-message success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <FaCheckCircle className="status-icon" />
                  Message sent successfully!
                </motion.div>
              )}
              
              {status === 'error' && (
                <motion.div 
                  key="error"
                  className="status-message error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <FaExclamationCircle className="status-icon" />
                  Oops! Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
