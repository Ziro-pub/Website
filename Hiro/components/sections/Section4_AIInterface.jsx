import React, { useRef, useEffect, useState } from 'react';
import styles from './Section4_AIInterface.module.css';

// --- Matrix Rain Canvas Logic ---
const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "CRISPR-Cas9 Smith et al. (2023) p < 0.001 ∫∞ dx E=mc² AI H₂O Σ".split(' ');
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00FF88';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className={styles.matrixCanvas}></canvas>;
};


// --- Main Section Component ---
const Section4_AIInterface = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = section;
        const xPos = (clientX / offsetWidth - 0.5) * 20; // rotation range
        const yPos = (clientY / offsetHeight - 0.5) * -20;
        section.style.setProperty('--rotateX', `${yPos}deg`);
        section.style.setProperty('--rotateY', `${xPos}deg`);
    };
    section.addEventListener('mousemove', handleMouseMove);
    return () => section.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className={styles.aiInterface}>
      <MatrixRain />
      <div className={styles.content}>
        <h2 className={styles.title}>AI SIGNALS</h2>
        <div className={styles.deviceMockup}>
            <div className={styles.deviceScreen}>
                {/* Content inside the screen would cycle here */}
                <p><strong>QUERY:</strong> Find papers on quantum computing 2023</p>
                <p className={styles.aiResponse}><strong>ZIRO AI:</strong> Found 1,247 papers. Summarizing top 3...</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Section4_AIInterface;