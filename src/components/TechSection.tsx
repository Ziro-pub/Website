import { motion } from 'framer-motion'

export default function TechSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="tech" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Why Now?
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-card text-center space-y-6 p-12 rounded-3xl">
            <motion.p
              className="text-lg md:text-xl text-text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We've spent years watching brilliant people fight their tools instead of spending
              all their energy doing their best work. Analysts rebuilding reports, consultants
              hunting down charts, researchers unable to reproduce their own analyses…
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              The AI revolution promised to fix this. Instead, it gave us chatbots in sidebars
              — tools that generate content but don't understand context, don't learn from
              edits, & don't create audit trails.
            </motion.p>
          </div>

          <motion.p
            className="text-center mt-12 md:mt-16 text-xl md:text-2xl font-semibold text-accent glow-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            We're building the workspace we wish we had: <br />
            Where everything stays connected <br />
            Where AI is a true partner
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
