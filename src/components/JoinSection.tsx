import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function JoinSection() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage('Please enter a valid email address.')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    setIsSubmitting(true)
    setMessage('Thank you for joining! Welcome to the family')

    const scriptURL =
      'https://script.google.com/macros/s/AKfycbxgloVT_8j0-d7xq2xTpu4XIkiBRzuIaRFaNZVIhUhB5I-KdFkYifDhHSpUZTyxRLIjCQ/exec'

    const formData = new FormData()
    formData.append('Email', email)
    formData.append('Timestamp', new Date().toISOString())

    try {
      if (navigator.sendBeacon) {
        const blob = new Blob([new URLSearchParams(formData as any).toString()], {
          type: 'application/x-www-form-urlencoded',
        })
        navigator.sendBeacon(scriptURL, blob)
      } else {
        await fetch(scriptURL, {
          method: 'POST',
          mode: 'cors',
          body: formData,
          keepalive: true,
        })
      }
    } catch (error) {
      console.log('Submission:', error)
    }

    setEmail('')

    setTimeout(() => {
      setIsSubmitting(false)
      setMessage('')
    }, 3000)
  }

  return (
    <section id="join" className="py-16 md:py-24">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            The Age of Static Documents Is Ending
          </h2>
          <p className="text-text-secondary mb-8 text-lg">
            Design partner program opens Q1 2026. Be first in line.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@company.com"
              required
              className="flex-grow px-4 py-3 rounded-md glass-card border-border-color focus:ring-2 focus:ring-accent focus:outline-none transition-all text-text-primary placeholder-text-secondary"
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-accent text-background rounded-md font-semibold hover:bg-accent-hover transition-all disabled:opacity-50 glow-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Added ✓' : 'Join Waitlist'}
            </motion.button>
          </motion.form>

          {message && (
            <motion.p
              className="text-accent font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {message}
            </motion.p>
          )}

          <motion.p
            className="text-text-secondary mt-8 text-sm max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We're building this whether you join or not. But it'll be better if you help shape
            it.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
