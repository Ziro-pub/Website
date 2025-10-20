import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroSection() {
  const [logoFaded, setLogoFaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const logoOpacity = useTransform(scrollY, [0, window.innerHeight * 0.6], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY
      const fadeOutDistance = window.innerHeight * 0.6

      if (scrollValue >= fadeOutDistance && !logoFaded) {
        setLogoFaded(true)
      } else if (scrollValue < fadeOutDistance && logoFaded) {
        setLogoFaded(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [logoFaded])

  return (
    <>
      {/* Full-screen logo hero */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-10 bg-background flex items-center justify-center"
        style={{ opacity: logoOpacity }}
      >
        <motion.img
          src="/ziro-logo.png"
          alt="Ziro Logo"
          className="w-3/4 max-w-4xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Main hero content */}
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex items-center justify-center text-center px-6 pt-24"
        style={{ marginTop: '100vh' }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text animate-gradient-shift">
                Your documents are Dead.
              </span>
              <br />
              <motion.span
                className="gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Bring them to Life.
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              The first unified workspace where AI works with you on your files, not in a
              sidebar.
            </motion.p>

            <motion.a
              href="#join"
              className="inline-block px-8 py-4 bg-accent text-background rounded-lg text-lg font-semibold hover:bg-accent-hover transition-all hover:scale-105 glow-accent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Waitlist
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
