import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import WhySection from './components/WhySection'
import WhatSection from './components/WhatSection'
import HowSection from './components/HowSection'
import UseCasesSection from './components/UseCasesSection'
import TechSection from './components/TechSection'
import RoadmapSection from './components/RoadmapSection'
import TeamSection from './components/TeamSection'
import JoinSection from './components/JoinSection'
import Footer from './components/Footer'
import BackgroundEffects from './components/BackgroundEffects'
import GradientBlur from './components/GradientBlur'

function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-background text-text-primary antialiased">
      <BackgroundEffects />
      <GradientBlur position="top" />

      <Navigation lenisRef={lenisRef} />

      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <WhySection />
        <WhatSection />
        <HowSection />
        <UseCasesSection />
        <TechSection />
        <RoadmapSection />
        <TeamSection />
        <JoinSection />
      </main>

      <Footer />

      <GradientBlur position="bottom" />
    </div>
  )
}

export default App
