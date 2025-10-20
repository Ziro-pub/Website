import { motion } from 'framer-motion'

const useCases = [
  {
    title: 'Investment Analysts',
    description:
      'Your models need audit trails. Ziro tracks every AI suggestion and every human decision, creating a complete record of how your analysis was built.',
  },
  {
    title: 'Legal & Compliance Teams',
    description:
      'When your work faces regulatory scrutiny, you need provenance. See the AI\'s plan, review its sources, track every change like Git for documents.',
  },
  {
    title: 'Research Teams',
    description:
      'Your papers require reproducibility. Ziro doesn\'t just store the output-it stores the data sources, AI suggestions, and human decisions that created it.',
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

export default function UseCasesSection() {
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
          <h2 id="use-cases" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            When "Trust Me" Isn't Good Enough
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:border-accent group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                {useCase.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">{useCase.description}</p>
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
          A system of record for auditable human-AI collaboration.
        </motion.p>
      </div>
    </section>
  )
}
