import React from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    
    <div className={styles['coming-soon-container']}>
      <header className={styles['coming-soon-header']}>
        <Navbar />
        <h1 className={styles.logo}>A Hint Development</h1> 
      </header>
      <main className={styles['coming-soon-content']}>
        <h2 className={styles.h2}>Innovate with Software Solutions</h2>
        <h3>Your Vision, Our Code.</h3>
        <p className="launch-message">
          Our full portfolio and services are coming soon! Get ready for a new standard in digital innovation.
        </p>
        <div className={styles['contact-section']}>
          <h4>Interested in a custom web app? Let's talk!</h4>
          <a href="mailto:andrew@ahint.dev" className="contact-button">
            Contact Us Today
          </a>
        </div>
      </main>
      <footer className={styles['coming-soon-footer']}>
        <p>&copy; {new Date().getFullYear()} A Hint Development. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;