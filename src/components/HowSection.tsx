import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'THE AI SEES YOUR ENTIRE PROJECT',
    description:
      'The AI sees your entire project. No more re-explaining background information. The entire file-text, data, diagrams, code-is the living context. The AI understands your whole project, not just a highlighted paragraph.',
  },
  {
    number: '02',
    title: 'YOU DON\'T PROMPT. YOU EDIT. TOGETHER.',
    description:
      'You don\'t prompt. You edit. Together. As the AI streams its draft directly onto the canvas, you refine it in real-time. Delete a section & the AI pivots its approach. It\'s like pair programming, but for knowledge work.',
  },
  {
    number: '03',
    title: 'THE AI LEARNS YOUR STYLE',
    description:
      'The AI learns your style, tone, and judgment-and gets better over time. Did you simplify jargon? Strengthen a claim? Add a caveat? Over time, the AI becomes hyper-personalized to you & your team.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function HowSection() {
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
          <h2 id="how" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            How Ziro Works: AI That Remembers Everything & Learns From You
          </h2>
        </motion.div>

        <motion.div
          className="glass-card p-12 max-w-3xl mx-auto rounded-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step, index) => (
              <motion.div key={index} className="flex items-start gap-6" variants={itemVariants}>
                <motion.div
                  className="text-3xl font-extrabold text-accent flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {step.number}
                </motion.div>
                <div>
                  <h3 className="font-bold text-accent tracking-widest mb-2 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.p
          className="text-center mt-12 md:mt-16 text-xl md:text-2xl font-semibold text-accent glow-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Not a chatbot in a sidebar. A partner on your canvas.
        </motion.p>
      </div>
    </section>
  )
}
