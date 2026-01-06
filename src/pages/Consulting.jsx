import { motion } from 'framer-motion'
import GlowingLogo from '../components/GlowingLogo'

const memoryLayers = [
  { title: 'Episodic Memory', description: 'Real-time capture of engagement data queries, analysis, and context ensuring full audit trails.' },
  { title: 'Semantic Memory', description: 'Consolidated firm "best practices" extracted from thousands of hours of work, continuously refined.' },
  { title: 'Procedural Memory', description: 'Executable playbooks. The "how-to" guides that standardize excellence across successive teams.' },
  { title: 'Ethotic Memory', description: 'High-level strategic frameworks and mental models that embody your firm\'s unique value proposition.' },
  { title: 'Meta Memory', description: 'Organizational self-awareness. The system knows which methods excel in specific domains.' },
  { title: 'Implicit Memory', description: 'The infrastructure, APIs, and orchestration frameworks, that powers your firm\'s intelligence.' }

]

const useCases = [
  { title: 'Strategy Consulting', description: 'Continuous competitor monitoring and parallel scenario modeling. Deliver partner-level strategic optionality in days, not months.' },
  { title: 'M&A and Private Equity', description: 'Parallel agent workstreams for financial, legal, and commercial diligence. Reach 90% confidence on Go/No-Go decisions in 2 weeks vs. 6 weeks.' },
  { title: 'Operations & Turnaround', description: 'Continuous process mining and bottleneck identification. Privacy-preserving benchmarking across your portfolio.' },
  { title: 'Boutique Firms', description: 'Solo practitioners leverage a virtual team of researchers and analysts. Compete with the Big 4 on analytical depth.' }
]

const stats = [
  { value: '70-80%', label: 'Reduction in delivery cost' },
  { value: '10-15x', label: 'Faster time-to-insight' },
  { value: '40-60%', label: 'Error reduction' }
]

export default function Consulting() {
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
          className="absolute left-[400px] md:left-[500px] lg:left-[600px] top-1/2 -translate-y-1/2 w-[600px] md:w-[800px] lg:w-[1000px]"
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
            Consulting
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display mb-8"
          >
            <span className="text-silver-400">Consulting's</span>
            <br />
            <span className="text-silver-gradient">New M.O.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="body-large max-w-3xl"
          >
            Transform your firm from billable hours to scalable intelligence products. Metamorphic Intelligence fundamentally changes the economics of business delivery.
          </motion.p>
        </div>
      </section>

      {/* Strategic Shift */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="divider mb-20" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="label mb-16"
          >
            Strategic Shift
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 gap-16 md:gap-24"
          >
            <div>
              <h2 className="heading-large text-silver-200">
                From Billable Hours
                <br />
                <span className="text-silver-500">to </span>
                <br />
                <span className="text-silver-gradient">Omni-directional</span>
                <br />
                <span className="text-silver-200">Scaling </span>

              </h2>
            </div>
            <div className="flex items-end">
              <div className="space-y-6">
                <p className="body-default">
                  Traditional business relies on a scarcity model, senior expertise is expensive, siloed, and constrained by physical availability. This creates a bottleneck where firm growth is linearly tied to hiring senior talent.
                </p>
                <p className="body-default">
                  We eliminate this bottleneck with a team of academic and industry experts. Through our proprietary systems, expert judgment is digitized and systematized, allowing our teams methodology to guide hundreds of simultaneous engagements. You focus on your clients and scaling your business, we handle the building and deployment. 
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Memory Architecture */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="divider mb-20" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label mb-6"
          >
            Architecture
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-medium text-silver-200 mb-16"
          >
            Six Layers of Competitive Intelligence
          </motion.h2>

          <div className="space-y-0">
            {memoryLayers.map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group py-8 border-t border-silver-900 hover:border-silver-700 transition-all duration-500"
              >
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-1">
                    <span className="text-silver-700 font-serif text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-silver-300 font-serif text-xl group-hover:text-silver-100 transition-colors">
                      {layer.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="description">{layer.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="divider mb-20" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label mb-16"
          >
            The Business Case
          </motion.p>

          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-5xl md:text-6xl text-silver-gradient mb-4">
                  {stat.value}
                </p>
                <p className="text-silver-600 text-sm tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="divider mb-20" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label mb-6"
          >
            Applications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-medium text-silver-200 mb-16"
          >
            Industry Use Cases
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {useCases.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-t border-silver-900 pt-8"
              >
                <h3 className="font-serif text-xl text-silver-300 mb-4">{item.title}</h3>
                <p className="description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
