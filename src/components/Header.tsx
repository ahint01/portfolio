// src/components/Header/Header.tsx
import React from 'react';
import styles from '../styles/Header.module.css';
// Import the specific icons from react-icons/fa (Font Awesome)
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface HeaderProps {
  // You could pass props for name, title, email, social links
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.profileInfo}>
        {/* Make sure this path is correct for your profile picture */}
        <img src="/path/to/your/profile-pic.jpeg" alt="Andrew Hinton" className={styles.profilePic} />
        <div className={styles.textInfo}>
          <h1 className={styles.name}>Andrew Hinton</h1>
          <p className={styles.title}>Full Stack Engineer & Business Owner</p>
          <p className={styles.hireMe}>Looking to hire me? Email me @ <a href="mailto:andrewhinton0@outlook.com">andrewhinton0@outlook.com</a></p>
        </div>
      </div>
      <div className={styles.socialLinks}>
        {/* GitHub Link - Using the FaGithub icon from react-icons */}
        <a href="https://github.com/ahint01" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          {/* FaGithub component directly renders the SVG icon */}
          {/* You can pass props like 'size', 'color', and 'className' */}
          <FaGithub className={styles.socialIcon} size={24} />
        </a>
        {/* LinkedIn Link - Using the FaLinkedin icon from react-icons */}
        <a href="https://www.linkedin.com/in/andrew-hinton-6a7671197/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          {/* FaLinkedin component directly renders the SVG icon */}
          <FaLinkedin className={styles.socialIcon} size={24} />
        </a>
      </div>
    </header>
  );
};

export default Header;