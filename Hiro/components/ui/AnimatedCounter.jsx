import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = ({ endValue, label, suffix = '' }) => {
    const counterRef = useRef(null);

    useEffect(() => {
        const element = counterRef.current;
        const counter = { val: 0 };
        
        gsap.to(counter, {
            val: endValue,
            duration: 3,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                toggleActions: 'play none none none',
            },
            onUpdate: () => {
                element.textContent = Math.round(counter.val).toLocaleString() + suffix;
            },
        });
    }, [endValue, suffix]);

    return (
        <div>
            <span ref={counterRef} style={{ fontSize: '3rem', fontWeight: 700 }}>0</span>
            <p style={{ color: '#666' }}>{label}</p>
        </div>
    );
};

export default AnimatedCounter;