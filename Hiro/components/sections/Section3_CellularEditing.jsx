import React, { useState, useRef, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Section3_CellularEditing.module.css';

gsap.registerPlugin(ScrollTrigger);

// Define the type for our draggable items
const ItemTypes = {
  CELL: 'cell',
};

// --- Draggable Cell Component ---
const DraggableCell = ({ id, type, content, index, moveCell }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CELL,
    collect(monitor) {
      return { handlerId: monitor.getHandlerId() };
    },
    hover(item, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      moveCell(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CELL,
    item: () => ({ id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity }} data-handler-id={handlerId} className={`${styles.cell} ${styles[type]}`}>
      <strong>{type.toUpperCase()} Cell</strong>
      <p>{content}</p>
    </div>
  );
};

// --- Main Section Component ---
const Section3_CellularEditing = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  
  const [cells, setCells] = useState([
    { id: 1, type: 'text', content: 'The study began by analyzing...' },
    { id: 2, type: 'code', content: 'import pandas as pd\ndf = pd.read_csv(...)' },
    { id: 3, type: 'graph', content: '[Graph Visualization Placeholder]' },
  ]);

  const moveCell = (dragIndex, hoverIndex) => {
    const draggedCell = cells[dragIndex];
    const newCells = [...cells];
    newCells.splice(dragIndex, 1);
    newCells.splice(hoverIndex, 0, draggedCell);
    setCells(newCells);
  };

  useEffect(() => {
    // Scroll-triggered animations
    gsap.fromTo(titleRef.current, 
      { scale: 0.8, opacity: 0 },
      {
        scale: 1, opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'center center',
          scrub: 1,
        },
      }
    );
     gsap.fromTo(contentRef.current, 
      { y: 100, opacity: 0 },
      {
        y: 0, opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40%',
          toggleActions: 'play none none none'
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={styles.cellularEditing}>
      <h1 ref={titleRef} className={styles.backgroundText}>CELLULAR EDITING</h1>
      {/* A placeholder for the 3D Node Network Canvas */}
      <div className={styles.nodeNetworkCanvas}></div> 

      <div ref={contentRef} className={styles.contentOverlay}>
        <div className={styles.demoContainer}>
          <h3>Interactive Demo</h3>
          <p>Drag and drop to reorder the document cells.</p>
          <div className={styles.document}>
            {cells.map((cell, i) => (
              <DraggableCell
                key={cell.id}
                index={i}
                id={cell.id}
                type={cell.type}
                content={cell.content}
                moveCell={moveCell}
              />
            ))}
          </div>
        </div>
        <div className={styles.featureDescription}>
          <h2>Build Your Narrative, Block by Block.</h2>
          <p>ZIRO treats every piece of your research—text, code, data, visualizations—as a modular "cell." Rearrange, connect, and version them with unprecedented flexibility.</p>
        </div>
      </div>
    </section>
  );
};

export default Section3_CellularEditing;