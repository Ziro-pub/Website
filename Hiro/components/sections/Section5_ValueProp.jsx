import React from 'react';
import AnimatedCounter from '../ui/AnimatedCounter';
import styles from './Section5_ValueProp.module.css';

// Placeholder for icons
const Icon = ({ name }) => <div className={styles.iconPlaceholder}>{name}</div>;

const Section5_ValueProp = () => {
  return (
    <section className={styles.valueProp}>
      <div className={styles.heroStatement}>
        <h1>Streamlining the Narrative</h1>
        <p>From scattered data to a cohesive, publication-ready manuscript. ZIRO is the single source of truth for modern academic research, built for clarity and impact.</p>
      </div>

      <div className={styles.featureGrid}>
        <div className={styles.featureCard}>
          <Icon name="Workspace" />
          <h3>Unified Workspace</h3>
          <p>One platform for writing, coding, and visualizing. End the chaos of context-switching.</p>
        </div>
        <div className={styles.featureCard}>
          <Icon name="Citations" />
          <h3>Intelligent Citations</h3>
          <p>Automated formatting and a vast reference library. Spend time on research, not on punctuation.</p>
        </div>
        <div className={styles.featureCard}>
          <Icon name="Collaborate" />
          <h3>Real-time Collaboration</h3>
          <p>Work seamlessly with your team, no matter where they are. Live cursors, comments, and version history.</p>
        </div>
        <div className={styles.featureCard}>
          <Icon name="Publish" />
          <h3>Publication Ready</h3>
          <p>Export to any major journal format with a single click. Go from draft to submission in minutes.</p>
        </div>
      </div>

      <div className={styles.statsBanner}>
          <AnimatedCounter endValue={500} suffix="+" label="Universities Onboard" />
          <AnimatedCounter endValue={2000000} suffix="+" label="Papers Published" />
          <AnimatedCounter endValue={50000} suffix="+" label="Active Researchers" />
      </div>

      <div className={styles.ctaSection}>
        <h2>Ready to Redefine Your Research Workflow?</h2>
        <div className={styles.ctaButtons}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>Start Free Trial</button>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>Book a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default Section5_ValueProp;