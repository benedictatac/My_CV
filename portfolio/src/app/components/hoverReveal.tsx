import React from 'react';
import styles from '../styles/hoverReveal.module.css';

const HoverReveal: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.revealText}>Highschool</h2>
      <div className={styles.revealContent}>
        <p>
          I went to XYZ Highschool, a school focused on academic excellence and
          extracurricular activities. It was a great experience!
        </p>
      </div>
    </div>
  );
};

export default HoverReveal;
