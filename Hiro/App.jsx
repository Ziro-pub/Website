import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Global Components & Hooks
import useSmoothScroll from './hooks/useSmoothScroll';
import CustomCursor from './components/ui/CustomCursor';

// Sections
import Section1_Opening from './components/sections/Section1_Opening';
import Section2_ProductIntro from './components/sections/Section2_ProductIntro';
import Section3_CellularEditing from './components/sections/Section3_CellularEditing';
import Section4_AIInterface from './components/sections/Section4_AIInterface';
import Section5_ValueProp from './components/sections/Section5_ValueProp';

function App() {
  // Activate smooth scrolling for the whole app
  useSmoothScroll();

  return (
    // DndProvider is needed for Section 3's demo
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        {/* The custom cursor will be rendered on top of everything */}
        {/* <CustomCursor /> Uncomment if you implemented it */}
        
        <main>
          <Section1_Opening />
          <Section2_ProductIntro />
          <Section3_CellularEditing />
          <Section4_AIInterface />
          <Section5_ValueProp />
        </main>
      </div>
    </DndProvider>
  );
}

export default App;