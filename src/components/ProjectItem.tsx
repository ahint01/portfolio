import React from 'react';
import styles from '../styles/ProjectItem.module.css';

interface ProjectItemProps {
  title: string;
  description: string;
  link?: string; // Optional link for the project
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, link }) => {
  return (
    <div className={styles.projectItem}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectTitleLink}>
          <h3 className={styles.projectTitle}>{title}</h3>
        </a>
      ) : (
        <h3 className={styles.projectTitle}>{title}</h3>
      )}
      <p className={styles.projectDescription}>{description}</p>
    </div>
  );
};

export default ProjectItem;