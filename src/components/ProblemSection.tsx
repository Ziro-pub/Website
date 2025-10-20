import { motion } from 'framer-motion'

const problems = [
  {
    title: 'THE DATA CHANGED',
    description:
      'You spent 8 hours building that analysis. The client sends updated numbers just before the deadline. Your document is now worthless and you need to rebuild it from scratch, again.',
  },
  {
    title: 'WHICH VERSION?',
    description:
      'That chart lives in 3 decks, 2 reports, 5 email threads. One needs updating. Hunt them all down manually.',
  },
  {
    title: 'SIMPLE EDIT',
    description:
      '"Make the bars blue." "Can I see what a line-chart would look like?" Your doc is flattened. There is no edit. Only rebuild.',
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

export default function ProblemSection() {
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
          <h2 id="problem" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Problems costing you hours each week?
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:border-accent group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <h3 className="font-bold text-accent mb-3 tracking-widest text-sm group-hover:scale-105 transition-transform">
                {problem.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center mt-12 md:mt-16 text-xl md:text-2xl font-semibold text-accent glow-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          500 million people work this way every day. <br />
          There's a better way.
        </motion.p>
      </div>
    </section>
  )
}
