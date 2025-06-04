import React from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  // Replace with your actual project data
  /*const projects = [
    {
      id: 1,
      name: 'Project Alpha',
      description: 'Developed a responsive e-commerce platform with secure payment integration.',
      imageUrl: '/images/project-alpha.jpg', // Add your project image paths
      link: 'https://www.projectalpha.com', // Optional: link to live project or case study
    },
    {
      id: 2,
      name: 'Project Beta',
      description: 'Built a custom CRM system to streamline client management and lead tracking.',
      imageUrl: '/images/project-beta.jpg',
      link: 'https://www.projectbeta.com',
    },
    {
      id: 3,
      name: 'Project Gamma',
      description: 'Created an interactive data visualization tool for real-time analytics.',
      imageUrl: '/images/project-gamma.jpg',
      link: 'https://www.projectgamma.com',
    },
  ];*/

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Navbar />
        <h1 className={styles.logo}>A Hint Development</h1>
        <p className={styles.tagline}>Your Vision, Our Code. Innovate with Software Solutions.</p>
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
          <h2>Our Work - Coming Soon</h2>
         {/*} <div className={styles.projectGrid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <img src={project.imageUrl} alt={project.name} className={styles.projectImage} />
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div> */}
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