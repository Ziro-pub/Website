import { useEffect, useState, useRef, MutableRefObject } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  AlertTriangle,
  HelpCircle,
  Package,
  Wrench,
  Briefcase,
  Cpu,
  Map,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type Lenis from 'lenis'

interface NavigationProps {
  lenisRef: MutableRefObject<Lenis | null>
}

const navLinks = [
  { id: 'problem', label: 'Problem', icon: AlertTriangle },
  { id: 'why', label: 'Why', icon: HelpCircle },
  { id: 'what', label: 'What', icon: Package },
  { id: 'how', label: 'How', icon: Wrench },
  { id: 'use-cases', label: 'Use Cases', icon: Briefcase },
  { id: 'tech', label: 'Tech', icon: Cpu },
  { id: 'roadmap', label: 'Roadmap', icon: Map },
]

export default function Navigation({ lenisRef }: NavigationProps) {
  const [visible, setVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)
  const [lampStyle, setLampStyle] = useState({ width: 0, transform: 'translateX(0)' })
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.3
      const scrollY = window.scrollY

      setVisible(scrollY > window.innerHeight * 0.5)

      const sections = navLinks.map((link) => document.getElementById(link.id))
      let latestActive = ''

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= triggerPoint) {
            latestActive = section.id
          }
        }
      })

      setActiveSection(latestActive)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isDesktop || !activeSection || !navRef.current) return

    const activeLink = navRef.current.querySelector(`[data-section="${activeSection}"]`)
    if (activeLink && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()
      setLampStyle({
        width: linkRect.width,
        transform: `translateX(${linkRect.left - navRect.left}px)`,
      })
    }
  }, [activeSection, isDesktop])

  const scrollToSection = (id: string) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(`#${id}`, { offset: -160 })
    }
  }

  return (
    <>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {!isDesktop && visible && (
          <>
            <motion.a
              href="#join"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-5 left-6 z-50 md:hidden"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('join')
              }}
            >
              <img src="/ziro-fill.png" alt="Ziro" className="h-9" />
            </motion.a>

            <motion.a
              href="#join"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-5 right-6 z-50 md:hidden px-4 py-2 bg-accent text-background rounded-full font-semibold text-sm hover:bg-accent-hover transition-all hover:scale-105"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('join')
              }}
            >
              Join
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <AnimatePresence>
        {isDesktop && (
          <>
            {/* Logo */}
            <motion.a
              href="#hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: visible ? 1 : 0 }}
              className="hidden md:block fixed top-5 left-6 z-50"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('hero')
              }}
            >
              <img src="/ziro-fill.png" alt="Ziro" className="h-12" />
            </motion.a>

            {/* Navigation Bar */}
            <motion.nav
              ref={navRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
              className="hidden md:flex fixed top-6 right-6 z-50"
            >
              <div className="relative flex items-center gap-2 glass-card p-1 rounded-full shadow-lg">
                {/* Lamp indicator */}
                <motion.div
                  className="absolute inset-y-1 bg-accent/10 rounded-full pointer-events-none"
                  style={lampStyle}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-accent rounded-full glow-accent" />
                </motion.div>

                {/* Navigation links */}
                <div className="flex items-center gap-2 relative z-10">
                  {navLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <button
                        key={link.id}
                        data-section={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className={cn(
                          'relative px-4 py-2 rounded-full text-sm font-semibold transition-colors',
                          activeSection === link.id
                            ? 'text-accent'
                            : 'text-text-secondary hover:text-accent'
                        )}
                      >
                        <span className="hidden xl:inline">{link.label}</span>
                        <Icon className="xl:hidden w-4 h-4" />
                      </button>
                    )
                  })}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => scrollToSection('join')}
                  className="px-4 py-2 bg-accent text-background rounded-full font-semibold text-sm hover:bg-accent-hover transition-all hover:scale-105"
                >
                  Join
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
