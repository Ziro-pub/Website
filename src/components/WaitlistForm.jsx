import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X, Check } from 'lucide-react'
import { GOOGLE_SCRIPT_URL } from '../config/api'

const SUBSCRIPTION_OPTIONS = [
  { id: 'education', label: 'Education' },
  { id: 'consulting', label: 'Consulting' },
  { id: 'finance', label: 'Finance' },
  { id: 'all', label: 'All' }
]

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selections, setSelections] = useState([])

  // Lock body scroll and disable navbar when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
      // Add class to disable navbar interactions
      document.body.classList.add('modal-open')
    } else {
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
    }
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
    }
  }, [showModal])

  const handleJoinClick = (e) => {
    e.preventDefault()

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
      return
    }

    setShowModal(true)
  }

  const toggleSelection = (id) => {
    if (id === 'all') {
      // If selecting "All", clear others and only select "all"
      setSelections(['all'])
    } else {
      // Remove "all" if it was selected
      const newSelections = selections.filter(s => s !== 'all')

      if (newSelections.includes(id)) {
        setSelections(newSelections.filter(s => s !== id))
      } else {
        setSelections([...newSelections, id])
      }
    }
  }

  const handleSubmit = async () => {
    if (selections.length === 0) {
      return
    }

    setStatus('loading')
    setShowModal(false)

    const subscriptions = selections.includes('all')
      ? 'Education, Consulting, Finance'
      : selections.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ')

    const formData = new FormData()
    formData.append('formType', 'waitlist')
    formData.append('Email', email)
    formData.append('subscriptions', subscriptions)

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        body: formData
      })
      const data = await response.json()

      if (data.result === 'success') {
        setStatus('success')
        setMessage('Thank you. You have been added to the waitlist.')
        setEmail('')
        setSelections([])
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
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-lg mx-auto"
      >
        <form onSubmit={handleJoinClick} className="flex flex-col sm:flex-row gap-0">
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

      {/* Subscription Selection Modal - rendered via portal to body */}
      {createPortal(
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[10000] flex items-center justify-center px-4"
              onClick={() => setShowModal(false)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-background/80" />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative bg-background border border-silver-600 p-8 max-w-md w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-silver-500 hover:text-silver-200 transition-colors"
                >
                  <X size={20} />
                </button>

                <h3 className="text-silver-100 text-xl font-serif mb-2">
                  What interests you?
                </h3>
                <p className="text-silver-400 text-sm mb-6">
                  Select the topics you'd like to hear about.
                </p>

                <div className="space-y-3 mb-8">
                  {SUBSCRIPTION_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => toggleSelection(option.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 border transition-all duration-200 ${
                        selections.includes(option.id)
                          ? 'border-white bg-white text-background'
                          : 'border-silver-600 text-silver-400 hover:border-silver-400 hover:text-silver-200'
                      }`}
                    >
                      <span className="text-sm tracking-wide font-medium">{option.label}</span>
                      {selections.includes(option.id) && (
                        <Check size={16} className="text-background" />
                      )}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={selections.length === 0}
                  className="w-full px-8 py-4 bg-silver-100 text-background text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
