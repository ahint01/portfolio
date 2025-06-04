import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="/portfolio" className={styles.navLink}>Portfolio</a>
        </li>
        {/* Add more navigation items here as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;