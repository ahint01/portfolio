import React from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: 'InternetRuinsThings',
      description: 'Streetwear Shop',
      link: 'https://internetruinsthings.net',
    },
    {
      id: 2,
      name: 'CapperConnect',
      description: 'Connecting you to the top handicappers',
      link: 'https://youtu.be/SPNaL2Fjh1k',
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Navbar />
        <h1 className={styles.logo}>A Hint Development</h1>
        <p className={styles.tagline}>Innovate with Software Solutions.</p>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.missionSection}>
          <h2>Our Mission</h2>
          <p>
            At A Hint Development, we transform your ideas into powerful, user-friendly web applications. We believe in clear communication, collaborative development, and exceeding expectations with every project.
          </p>
        </section>

        <hr />
        <section className={styles.projectsSection}>
          <h2>Our Work</h2>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <a 
                key={project.id}
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.projectCard}
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        <hr />
        <section className={styles.contactSection}>
          <h2>Ready to Start Your Project?</h2>
          <p>
            Whether you have a detailed plan or just an idea, we're here to help you bring it to life. Reach out today to discuss your web application development needs.
          </p>
          <a href="mailto:andrew@ahint.dev" className={styles.contactButton}>
            Contact Us Today
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} A Hint Development. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;