// src/components/Header/Header.tsx
import React from 'react';
import styles from '../styles/Header.module.css';

interface HeaderProps {
  // You could pass props for name, title, email, social links
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.profileInfo}>
        <img src="/path/to/your/profile-pic.jpeg" alt="A Hint" className={styles.profilePic} />
        <div className={styles.textInfo}>
          <h1 className={styles.name}>Andrew Hinton</h1>
          <p className={styles.title}>Full Stack Engineer & Business Owner</p>
          <p className={styles.hireMe}>Looking to hire me? Email me @ <a href="mailto:andrewhinton0@outlook.com">andrewhinton0@outlook.com</a></p>
        </div>
      </div>
      <div className={styles.socialLinks}>
        {/* GitHub Link - Placeholder image simulating GitHub logo */}
        <a href="https://github.com/ahint01" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <img src="https://placehold.co/24x24/181717/FFFFFF?text=GH" alt="GitHub Logo" className={styles.socialIcon} />
        </a>
        {/* LinkedIn Link - Placeholder image simulating LinkedIn logo */}
        <a href="https://www.linkedin.com/in/andrew-hinton-6a7671197/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <img src="https://placehold.co/24x24/0A66C2/FFFFFF?text=IN" alt="LinkedIn Logo" className={styles.socialIcon} />
        </a>
      </div>
    </header>
  );
};

export default Header;
