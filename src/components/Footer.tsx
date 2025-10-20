import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 border-t border-border-color">
      <div className="container mx-auto px-6 text-center text-text-secondary">
        <motion.p
          className="text-lg font-semibold text-text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Documents, but alive.
        </motion.p>

        <motion.div
          className="flex justify-center items-center space-x-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://www.linkedin.com/company/ziropub/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <span>|</span>
          <a
            href="mailto:info@ziro.pub"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
        </motion.div>

        <motion.p
          className="text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          © 2025 Ziro
        </motion.p>
      </div>
    </footer>
  )
}
