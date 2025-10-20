import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'

export default function BackgroundEffects() {
  const [init, setInit] = useState(false)
  const mouseGlowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseGlowRef.current) {
        mouseGlowRef.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`
        mouseGlowRef.current.style.opacity = '0.6'
      }
    }

    const handleMouseLeave = () => {
      if (mouseGlowRef.current) {
        mouseGlowRef.current.style.opacity = '0'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-[#1d1b2e]" />

      {/* Particles */}
      {init && (
        <Particles
          id="particles-bg"
          className="absolute inset-0"
          options={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: true,
                  width: 800,
                  height: 800,
                },
              },
              color: {
                value: ['#b09cff', '#ff8fc7', '#8fb3ff', '#6b7280'],
              },
              shape: {
                type: 'circle',
              },
              opacity: {
                value: { min: 0.1, max: 0.8 },
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false,
                },
              },
              size: {
                value: { min: 1, max: 3.5 },
              },
              move: {
                enable: true,
                speed: 0.4,
                direction: 'none',
                random: true,
                straight: false,
                outModes: 'out',
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: {
                  enable: true,
                  delay: 0.5,
                },
              },
              modes: {
                repulse: {
                  distance: 80,
                  duration: 0.4,
                },
              },
            },
          }}
        />
      )}

      {/* Sparkle effect with animated glows */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-radial from-accent via-accent-secondary to-transparent"
            style={{
              width: '300px',
              height: '300px',
              filter: 'blur(60px)',
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Mouse glow effect */}
      <div
        ref={mouseGlowRef}
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(255, 143, 199, 0.4) 0%, rgba(255, 143, 199, 0) 70%)',
          filter: 'blur(50px)',
          opacity: 0,
        }}
      />
    </div>
  )
}
