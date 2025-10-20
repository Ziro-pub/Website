import { useRef } from 'react'
import { motion } from 'framer-motion'

const alternatives = [
  {
    name: 'Microsoft Office / Google Docs',
    issue: 'Static files. AI writes text in a sidebar. Your document and the AI live in different worlds.',
  },
  {
    name: 'Notion / Coda',
    issue: 'Databases pretending to be documents. AI can\'t see your whole project-just the block you\'re editing.',
  },
  {
    name: 'ChatGPT Wrappers',
    issue: 'Generate, Copy, Paste, Discard. No memory. No context. No learning from your edits.',
  },
  {
    name: 'BI Tools (Tableau, Looker)',
    issue: 'Analysis here. Documents there. Copy-paste like it\'s 1995.',
  },
]

export default function WhySection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={containerRef} className="relative py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="sticky top-24 text-center max-w-3xl mx-auto mb-12 md:mb-16 pb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="why" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            The Architecture Problem No One Else is Solving
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12 mb-24">
          {alternatives.map((alt, index) => {
            const cardRef = useRef<HTMLDivElement>(null)

            return (
              <motion.div
                key={index}
                ref={cardRef}
                className="glass-card p-12 rounded-[40px] sticky"
                style={{
                  top: `calc(6rem + ${index * 2}rem)`,
                }}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-lg">
                  <strong className="text-text-primary font-semibold">{alt.name}: </strong>
                  <span className="text-text-secondary">{alt.issue}</span>
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          className="text-center text-xl md:text-2xl font-semibold text-accent glow-accent pt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          None of them make the document itself the context window. <br />
          Ziro does.
        </motion.p>
      </div>
    </section>
  )
}
