import { motion } from 'framer-motion'

const team = [
  {
    name: 'Eaman Okumori Javid',
    role: 'CEO',
    bio: 'MEng General Engineering, King\'s College London. Built quantitative finance models, regulatory frameworks, capital raising infrastructure. Domain expert in broken workflows.',
  },
  {
    name: 'Zinelyes Amlik',
    role: 'CTO',
    bio: 'MSc Computational Science & Engineering, Imperial College London. Developed RL systems, production ML pipelines, full-stack platforms in every domain. Brings the vision to life.',
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

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            We\'re Not Theorizing. We\'re Building.
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 text-center rounded-xl transition-all duration-300 hover:scale-105 hover:border-accent group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <h3 className="font-bold text-lg group-hover:text-accent transition-colors">
                {member.name}
              </h3>
              <p className="text-accent text-sm mb-4">{member.role}</p>
              <p className="text-text-secondary leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
