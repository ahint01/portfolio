// Navbar.tsx
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          {/* For root */}
          <a href="/#" className={styles.navLink}>Home</a> 
        </li>
        <li className={styles.navItem}>
          {/* For portfolio */}
          <a href="/#/portfolio" className={styles.navLink}>Portfolio</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;