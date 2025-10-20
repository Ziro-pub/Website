import { motion } from 'framer-motion'

const phases = [
  {
    phase: 'Phase 1',
    timeline: 'Now → Month 3',
    items: [
      'Document-as-context-window architecture',
      'Integrated version control system',
      'Real-time AI streaming to canvas',
      'Full workspace: Write, Visualize, Code, Draw, Edit',
      'Visible agentic workflow UI',
    ],
  },
  {
    phase: 'Phase 2',
    timeline: 'Month 3-6',
    items: [
      'Delta capture & RL training pipeline',
      'Enterprise audit & compliance features',
    ],
  },
  {
    phase: 'Phase 3',
    timeline: 'Month 7-18',
    items: [
      'Custom agent marketplace',
      'API ecosystem',
      'Category leadership',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function RoadmapSection() {
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
          <h2 id="roadmap" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            The Roadmap
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:border-accent group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <h3 className="font-bold text-lg mb-4 text-accent">
                {phase.phase}{' '}
                <span className="text-text-secondary font-normal text-sm">
                  ({phase.timeline})
                </span>
              </h3>
              <ul className="space-y-2 text-text-secondary">
                {phase.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-2 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-xl md:text-2xl font-semibold text-accent glow-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We're in Phase 1, Month 2. Join the journey.
        </motion.p>
      </div>
    </section>
  )
}
