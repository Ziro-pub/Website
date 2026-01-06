import { motion } from 'framer-motion'
import GlowingLogo from '../components/GlowingLogo'

const capabilities = [
  {
    title: 'Visual Strategy Builder',
    description: 'Build sophisticated trading algorithms without writing boilerplate. Drag-and-drop for speed, or inject custom Python/JavaScript nodes for infinite flexibility. Live debugging lets you inspect logic flow in real-time.'
  },
  {
    title: 'Machine Learning & Reinforcement Learning',
    description: 'Deploy frameworks used by top quant firms—TensorFlow, PyTorch, Stable-Baselines3. Use RL agents to discover novel strategies with automated hyperparameter tuning via Optuna.'
  },
  {
    title: 'Institutional-Grade Backtesting',
    description: 'Event-driven engine simulates decades of market data in minutes, accounting for slippage, transaction costs, and order book depth. Test 10,000 strategy variations in a single weekend.'
  },
  {
    title: 'Open Microservices Architecture',
    description: 'Built on 13 independent, containerized microservices. Run only what you need. Deploy via Docker on your local machine, AWS, or private VPS. Full REST and WebSocket APIs.'
  },
  {
    title: 'Satellite Guided Inference',
    description: 'Harness alternative data streams from orbital imagery. Track retail foot traffic, shipping activity, and agricultural yields in real-time. Computer vision pipelines transform raw satellite feeds into actionable trading signals.'
  }
]

const comparison = [
  { feature: 'Strategy Creation', retail: 'Limited scripting', ziro: 'Full Python/JS + Visual Builder' },
  { feature: 'AI/ML', retail: 'Non-existent or black box', ziro: 'Full TensorFlow/PyTorch' },
  { feature: 'Data Access', retail: 'Proprietary, locked-in', ziro: 'Open APIs' },
  { feature: 'Infrastructure', retail: 'Shared, high latency', ziro: 'Private Docker, low latency' },
  { feature: 'Testing Cost', retail: 'High (live required)', ziro: 'Zero (backtesting)' }
]

const useCases = [
  { title: 'For the Data Scientist', description: 'Your analysis deserves institutional-grade infrastructure. Deploy explainable deep learning models with full auditability, no more black boxes. Focus on alpha generation while we handle the engineering complexity.' },
  { title: 'For the Developer', description: 'Build trading systems the way you build software. Clean abstractions, version control, CI/CD pipelines, and observability built in. Your engineering discipline finally applies to financial markets.' },
  { title: 'For the Discretionary Trader', description: 'Codify decades of pattern recognition into systematic strategies. Backtest against historical regimes, stress-test against black swan events, and execute with mathematical precision while preserving your intuition.' }
]

export default function Finance() {
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
            Finance
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display mb-8"
          >
            <span className="text-silver-400">Trade with</span>
            <br />
            <span className="text-silver-gradient">Quant Firm Power</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="body-large max-w-3xl"
          >
            The first open-architecture quantitative trading ecosystem. Institutional infrastructure, no walled gardens, no black boxes.
          </motion.p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="divider mb-20" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label mb-6"
          >
            Platform
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-medium text-silver-200 mb-16"
          >
            Core Capabilities
          </motion.h2>

          <div className="space-y-0">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group py-10 border-t border-silver-900 hover:border-silver-700 transition-all duration-500"
              >
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-1">
                    <span className="text-silver-700 font-serif text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-silver-300 font-serif text-xl group-hover:text-silver-100 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="description">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="divider mb-20" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label mb-6"
          >
            Comparison
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-medium text-silver-200 mb-16"
          >
            The Ziro Advantage
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-silver-800">
                  <th className="text-left py-6 pr-8 text-silver-400 text-xs tracking-[0.15em] uppercase font-medium">Feature</th>
                  <th className="text-left py-6 pr-8 text-silver-600 text-xs tracking-[0.15em] uppercase font-medium">Traditional Retail</th>
                  <th className="text-left py-6 text-silver-200 text-xs tracking-[0.15em] uppercase font-medium">Ziro Finance</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`hover:bg-white/[0.02] transition-colors ${index < comparison.length - 1 ? 'border-b border-silver-900' : ''}`}
                  >
                    <td className="py-5 pr-8 text-base text-silver-300">{row.feature}</td>
                    <td className="py-5 pr-8 text-base text-silver-500">{row.retail}</td>
                    <td className="py-5 text-base text-silver-200">{row.ziro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
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
            Built For You
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
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
