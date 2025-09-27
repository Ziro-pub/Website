// src/components/ui/CustomCursor.jsx
import React, { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX, clientY } = e;
            cursorDotRef.current.style.left = `${clientX}px`;
            cursorDotRef.current.style.top = `${clientY}px`;
            cursorOutlineRef.current.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 500, fill: "forwards" });
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    // Add logic here to listen for hovers on interactive elements and add a 'grow' class.

    return (
        <>
            <div ref={cursorDotRef} className={styles.cursorDot}></div>
            <div ref={cursorOutlineRef} className={styles.cursorOutline}></div>
        </>
    );
};

export default CustomCursor;