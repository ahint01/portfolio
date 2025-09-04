import React from 'react';
import styles from '../styles/Sections.module.css'
import ProjectItem from '../components/ProjectItem';

interface SectionProps {
  title: string;
  items: { title: string; description: string; link?: string}[];
}

const Section: React.FC<SectionProps> = ({ title, items }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.itemsContainer}>
        {items.map((item, index) => (
          <ProjectItem key={index} title={item.title} description={item.description} link={item.link} />
        ))}
      </div>
    </section>
  );
};

export default Section;