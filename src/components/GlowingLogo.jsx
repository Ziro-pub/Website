import { useState, useRef, useEffect } from 'react'

export default function GlowingLogo({
  className = '',
  baseOpacity = 0.03,
  glowSize = 600
}) {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const logoImageRef = useRef(null)
  const viewportMouseRef = useRef({ x: 0, y: 0 }) // Store viewport coordinates
  const [logoLoaded, setLogoLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Load logo image
  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      logoImageRef.current = img
      setLogoLoaded(true)
    }
    img.src = '/ziro_outline_white.svg'
  }, [])

  // Track container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  // Track mouse position globally and update on scroll
  useEffect(() => {
    const calculateRelativePos = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePos({
        x: viewportMouseRef.current.x - rect.left,
        y: viewportMouseRef.current.y - rect.top
      })
    }

    const handleMouseMove = (e) => {
      // Store viewport coordinates
      viewportMouseRef.current = { x: e.clientX, y: e.clientY }
      calculateRelativePos()
    }

    const handleScroll = () => {
      // Recalculate relative position using stored viewport coordinates
      requestAnimationFrame(calculateRelativePos)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Draw the glow effect on canvas
  useEffect(() => {
    const canvas = canvasRef.current
    const logo = logoImageRef.current
    if (!canvas || !logo || dimensions.width === 0) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const { width, height } = dimensions

    // Set canvas size accounting for device pixel ratio
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw radial gradient glow at mouse position
    const gradient = ctx.createRadialGradient(
      mousePos.x, mousePos.y, 0,
      mousePos.x, mousePos.y, glowSize
    )
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.5)')
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Use destination-in to mask with logo (only show glow where logo pixels exist)
    ctx.globalCompositeOperation = 'destination-in'
    ctx.drawImage(logo, 0, 0, width, height)
    ctx.globalCompositeOperation = 'source-over'
  }, [mousePos, dimensions, glowSize, logoLoaded])

  return (
    <div
      ref={containerRef}
      className={`select-none pointer-events-none ${className}`}
    >
      {/* Base logo - always visible at low opacity */}
      <img
        src="/ziro_outline_white.svg"
        alt=""
        style={{
          width: '100%',
          height: 'auto',
          opacity: baseOpacity,
          display: 'block'
        }}
        aria-hidden="true"
      />

      {/* Canvas for glow effect - always active, follows mouse globally */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  )
}
