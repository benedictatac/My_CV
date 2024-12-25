import React from 'react';
import styles from '../styles/hoverReveal.module.css';


interface HoverRevealProps {
  title:  React.ReactNode;
  content: React.ReactNode;
}
const HoverReveal: React.FC<HoverRevealProps> = ({title, content}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.revealText}>{title}</h2>
      <div className={styles.revealContent}>
        <p>
          {content}
        </p>
      </div>
    </div>
  );
};

export default HoverReveal;
