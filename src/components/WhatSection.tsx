import { motion } from 'framer-motion'
import { FileText, BarChart2, Code, GitFork, Image } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Write',
    description:
      'Create professionally formatted documents & reports — with AI that drafts, you refine, and the system learns your style. No disposable chat outputs, only publication-ready deliverables.',
    span: 'md:col-span-1 lg:col-span-1',
  },
  {
    icon: BarChart2,
    title: 'Visualize & Spreadsheet',
    description:
      'Work directly with tabular data & create interactive charts. When the data changes, visualizations update automatically. The data is the document.',
    span: 'md:col-span-1 lg:col-span-1',
  },
  {
    icon: Code,
    title: 'Code',
    description:
      'Write and execute code snippets within your documents for analysis or technical documentation.',
    span: 'md:col-span-2 lg:col-span-1',
  },
  {
    icon: GitFork,
    title: 'Draw & Diagram',
    description:
      'Build flowcharts, mind maps, and system architectures on a collaborative canvas.',
    span: 'md:col-span-1 lg:col-span-2',
  },
  {
    icon: Image,
    title: 'Edit Images',
    description:
      'Perform edits and manipulations on images directly within the project workspace.',
    span: 'md:col-span-1 lg:col-span-1',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function WhatSection() {
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
          <h2 id="what" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            A Unified Workspace Where Everything Connects
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className={`glass-card p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:border-accent group ${feature.span}`}
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 mr-3 text-accent group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p
          className="text-center mt-12 md:mt-16 text-xl md:text-2xl font-semibold text-accent glow-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Five capabilities. One AI partner. One living document.
        </motion.p>
      </div>
    </section>
  )
}
