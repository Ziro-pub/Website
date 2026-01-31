import { useState } from 'react'
import { motion } from 'framer-motion'
import GlowingLogo from '../components/GlowingLogo'
import { GOOGLE_SCRIPT_URL } from '../config/api'

const contactMethods = [
  {
    label: 'Email',
    value: 'info@ziro.pub',
    href: 'mailto:info@ziro.pub'
  },
  {
    label: 'LinkedIn',
    value: 'Ziro LTD',
    href: 'https://www.linkedin.com/company/ziropub/'
  },
  {
    label: 'Location',
    value: '4th floor, 34 - 36 Grays Inn Rd, London, WC1X 8HR, United Kingdom',
    href: null
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, sending, sent, error

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus('error')
      return
    }

    setStatus('sending')

    const submitData = new FormData()
    submitData.append('formType', 'contact')
    submitData.append('name', formData.name.trim())
    submitData.append('email', formData.email.trim())
    submitData.append('company', formData.company.trim())
    submitData.append('message', formData.message.trim())

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        body: submitData
      })

      const data = await response.json()

      if (data.result === 'success') {
        setStatus('sent')
        setFormData({ name: '', email: '', company: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error(data.error || 'Submission failed')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-12 pt-0 pb-32 relative overflow-hidden">
        {/* Background Logo */}
        <GlowingLogo
          className="absolute -right-20 md:-right-10 top-1/2 -translate-y-1/2 w-[600px] md:w-[800px] lg:w-[1000px]"
          baseOpacity={0.03}
          glowIntensity={0.5}
          glowSize={400}
        />

        <div className="max-w-6xl mx-auto w-full relative z-10 mix-blend-difference">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="label mb-8"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display mb-8"
          >
            <span className="text-silver-gradient">Let's Build</span>
            <br />
            <span className="text-silver-gradient">Together.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="body-large max-w-3xl"
          >
            Whether you're exploring AI transformation for your organization or have a specific project in mind, we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="divider mb-20" />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="label mb-6">Get in Touch</p>
              <h2 className="heading-medium text-silver-200 mb-12">
                Contact Information
              </h2>

              <div className="space-y-8">
                {contactMethods.map((method) => (
                  <div key={method.label}>
                    <p className="label mb-2">{method.label}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-silver-200 text-xl md:text-2xl font-serif hover:text-white transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-silver-200 text-xl md:text-2xl font-serif">
                        {method.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="label block mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-silver-600 py-4 text-silver-100 text-lg focus:border-silver-300 focus:outline-none transition-colors placeholder:text-silver-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label block mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-silver-600 py-4 text-silver-100 text-lg focus:border-silver-300 focus:outline-none transition-colors placeholder:text-silver-500"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="label block mb-3">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-silver-600 py-4 text-silver-100 text-lg focus:border-silver-300 focus:outline-none transition-colors placeholder:text-silver-500"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label block mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-silver-600 py-4 text-silver-100 text-lg focus:border-silver-300 focus:outline-none transition-colors resize-none placeholder:text-silver-500"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group relative w-full md:w-auto px-12 py-5 bg-transparent border border-silver-500 text-silver-200 text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:border-silver-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">
                    {status === 'idle' && 'Send Message'}
                    {status === 'sending' && 'Sending...'}
                    {status === 'sent' && 'Message Sent'}
                    {status === 'error' && 'Try Again'}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-silver-700"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.button>

                {status === 'sent' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-silver-300 text-sm"
                  >
                    Thank you for reaching out. We'll be in touch soon.
                  </motion.p>
                )}

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm"
                  >
                    Something went wrong. Please check your details and try again.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="divider mb-20" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="label mb-6">Commitment</p>
            <h2 className="heading-medium text-silver-200 mb-8">
              Every innovation begins with a conversation.
            </h2>
            <p className="body-default max-w-2xl mx-auto">
              We believe the best solutions emerge from genuine dialogue.
              Share your vision, and let's explore what's possible together.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
