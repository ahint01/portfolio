// src/components/Header/Header.tsx
import React from 'react';
import styles from '../styles/Header.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import andrewPic from '../images/andrew.jpeg' 

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.profileInfo}>
        <img src={andrewPic} alt="Andrew Hinton" className={styles.profilePic} />
        <div className={styles.textInfo}>
          <h1 className={styles.name}>Andrew Hinton</h1>
          <p className={styles.title}>Full Stack Engineer</p>
          <p className={styles.hireMe}>Looking to hire me? <a href="mailto:andrewhinton0@outlook.com">Email me</a></p>
        </div>
      </div>
      <div className={styles.socialLinks}>
        <a href="https://github.com/ahint01" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <FaGithub className={styles.socialIcon} size={24} color= "white" />
        </a>
        <a href="https://www.linkedin.com/in/andrew-hinton-6a7671197/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <FaLinkedin className={styles.socialIcon} size={24} color="blue" />
        </a>
      </div>
    </header>
  );
};

export default Header;