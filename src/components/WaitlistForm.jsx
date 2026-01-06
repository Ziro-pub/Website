import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxgloVT_8j0-d7xq2xTpu4XIkiBRzuIaRFaNZVIhUhB5I-KdFkYifDhHSpUZTyxRLIjCQ/exec'
    const formData = new FormData()
    formData.append('Email', email)

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'cors',
        body: formData
      })
      const data = await response.json()

      if (data.result === 'success') {
        setStatus('success')
        setMessage('Thank you. You have been added to the waitlist.')
        setEmail('')
      } else {
        throw new Error(data.error || 'An error occurred')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }

    setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 5000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-lg mx-auto"
    >
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@company.com"
          className="flex-grow px-6 py-4 bg-transparent border border-silver-600 focus:border-silver-300 focus:outline-none transition-all duration-300 text-silver-100 placeholder-silver-500 text-sm tracking-wide"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-8 py-4 bg-silver-100 text-background text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:bg-white disabled:opacity-50 flex items-center justify-center gap-2 group"
        >
          {status === 'loading' ? (
            'Submitting...'
          ) : (
            <>
              Join
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      {message && (
        <p className={`mt-6 text-center text-xs tracking-wide ${
          status === 'success' ? 'text-silver-300' : 'text-silver-400'
        }`}>
          {message}
        </p>
      )}
    </motion.div>
  )
}
