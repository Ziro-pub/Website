import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import styles from './Section1_Opening.module.css';
import ZiroLogo from '../ui/ZiroLogo'; // Your logo file

// A self-contained class for managing each particle's state and behavior.
class Particle {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }

    update() {
        if (this.x > this.canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > this.canvas.height || this.y < 0) this.speedY *= -1;
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }
}

const Section1_Opening = () => {
    const sectionRef = useRef(null);
    const canvasRef = useRef(null);
    const logoRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    // Effect for the initial loading screen
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    // Effect for the logo animation and mouse-proximity glow
    useEffect(() => {
        if (!isLoading && logoRef.current) {
            gsap.fromTo(logoRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 2, ease: 'power4.out' }
            );

            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                if (!logoRef.current) return;
                const { x, y, width, height } = logoRef.current.getBoundingClientRect();
                const centerX = x + width / 2;
                const centerY = y + height / 2;
                const distance = Math.sqrt(Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2));
                const maxDistance = 500;
                const intensity = Math.max(0, 1 - distance / maxDistance);
                logoRef.current.style.setProperty('--glow-intensity', intensity);
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [isLoading]);

    // Effect for handling the particle canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let particlesArray = [];
        const numberOfParticles = 200;
        
        function init() {
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle(canvas, ctx));
            }
        }
        init();

        let animationFrameId;
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(p => { p.update(); p.draw(); });
            connect();
            animationFrameId = requestAnimationFrame(animate);
        }
        animate();

        function connect() {
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) + ((particlesArray[a].y - particlesArray[b].y) ** 2);
                    if (distance < 25000) { // Increased connection distance
                        const opacityValue = 1 - (distance / 250000); // Brighter lines
                        ctx.strokeStyle = `rgba(121, 40, 202, ${opacityValue})`;
                        ctx.lineWidth = 1.5; // Thicker lines
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }
        
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const scrollToNext = () => {
        const nextSection = sectionRef.current.nextElementSibling;
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero-opening" ref={sectionRef} className={styles.heroOpening}>
            {isLoading && <div className={styles.loadingOverlay}>ZIRO</div>}
            
            <canvas ref={canvasRef} className={styles.particleCanvas}></canvas>
           
            <div ref={logoRef} className={styles.ziroLogo}>
                <ZiroLogo />
            </div>

            <div className={styles.scrollIndicator} onClick={scrollToNext}>
                <div className={styles.arrow}></div>
            </div>
        </section>
  );
};


export default Section1_Opening;