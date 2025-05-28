import React from 'react';
import '../styles/Home.module.css'; // Create this CSS Module

const Home: React.FC = () => {
  return (
    <div className="coming-soon-container">
      <header className="coming-soon-header">
        {/* Replace with your logo image or text */}
        <h1 className="logo">A Hint Development</h1> 
      </header>
      <main className="coming-soon-content">
        <h2>Innovate with Software Solutions</h2>
        <h3>Your Vision, Our Code.</h3>
        <p>
          We're a new web app development business specializing in crafting custom, high-performance web applications that bring your ideas to life. From sleek user interfaces to robust backend systems, we build solutions that innovate.
        </p>
        <p className="launch-message">
          Our full portfolio, services, and project details are coming soon! Get ready for a new standard in digital innovation.
        </p>
        <div className="contact-section">
          <h4>Interested in a custom web app? Let's talk!</h4>
          <a href="mailto:andrew@ahint.dev" className="contact-button">
            Contact Us Today
          </a>
        </div>
      </main>
      <footer className="coming-soon-footer">
        <p>&copy; {new Date().getFullYear()} A Hint Development. All rights reserved.</p>
        {/* Optional: Add social media icons here */}
        {/* <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div> */}
      </footer>
    </div>
  );
};

export default Home;