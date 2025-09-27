import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HolographicSphere from '../3d/HolographicSphere';
import styles from './Section2_ProductIntro.module.css';

gsap.registerPlugin(ScrollTrigger);

const Section2_ProductIntro = () => {
    const sectionRef = useRef(null);
    const headlineRef = useRef(null);
    const sublineRefs = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;
        const sublines = sublineRefs.current;

        gsap.fromTo(section,
            { backgroundColor: '#000000' },
            {
                backgroundColor: '#FFFFFF',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: true,
                }
            }
        );
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 50%',
                toggleActions: 'play none none none'
            }
        });

        tl.fromTo(headlineRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
        tl.fromTo(sublines, { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power3.out' }, '-=0.5');

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className={styles.productIntro}>
            <div className={styles.grid}>
                <div className={styles.leftColumn}>
                    <span className={styles.sectionNumber}>01</span>
                    <h2 ref={headlineRef} className={styles.headline}>Introducing ZIRO</h2>
                    <div className={styles.subheadline}>
                        {["Your all-in-one", "editor, researcher,", "zero other softwares"].map((text, i) => (
                             <p key={i} ref={el => sublineRefs.current[i] = el}>{text}</p>
                        ))}
                    </div>
                    {/* CTA button would go here */}
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.threeContainer}>
                        <HolographicSphere />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2_ProductIntro;