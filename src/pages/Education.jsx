import { motion } from 'framer-motion'
import GlowingLogo from '../components/GlowingLogo'

const systemicBarriers = [
  {
    title: 'Identification Lag',
    stat: '2-6 month delay',
    description: 'Struggling students identified too late; educators act reactively instead of proactively.'
  },
  {
    title: 'Teacher Bandwidth',
    stat: '1:150 ratio',
    description: 'One-size-fits-all teaching leaves learners under-served in under-resourced regions.'
  },
  {
    title: 'Vertical Misalignment',
    stat: '86%',
    description: 'Educators say gaps in student data directly impact their ability to provide support.'
  },
  {
    title: 'Independent Learning',
    stat: '70%+',
    description: 'Students receive private tutoring, but schools have limited visibility into supplementary learning.'
  }
]

const capabilities = [
  { title: 'Personalized Learning Pathways', description: 'Difficulty adapts to each student\'s mastery level; struggling students get more support, advanced students get challenged.' },
  { title: 'Proactive AI Teacher', description: 'Delivers interactive lessons with built-in comprehension checks; AI initiates learning, not just answering questions when students get stuck.' },
  { title: '24/7 Socratic AI Companion', description: 'Guides discovery through progressive hints, developing genuine understanding rather than dependency.' },
  { title: 'Prerequisite-Aware Pathways', description: 'Knowledge maps connect 500+ concept relationships; students learn in the right order, teachers remain on track.' },
  { title: 'Stress Point Detection', description: 'Struggling students trigger automatic alerts 2-6 months earlier than traditional methods.' },
  { title: 'Explainable Recommendations', description: 'Every suggestion includes evidence. Teachers verify, override, or approve—they stay in control.' }
]

const dashboards = [
  {
    title: 'Student Dashboard',
    features: [
      'Mastery scores per topic updated after every question',
      'Visual knowledge map shows exactly what to study next and why',
      'XP, levels, 16 badge types and class leaderboards drive engagement'
    ]
  },
  {
    title: 'Teacher Dashboard',
    features: [
      'Topic heat-maps reveal class-wide gaps at a glance',
      'At-risk student alerts flag struggles before failure',
      'AI assistant drafts assignments, suggests grades, generates feedback'
    ]
  },
  {
    title: 'Admin Dashboard',
    features: [
      'School-wide KPIs: engagement rates, mastery trends, platform adoption',
      'Teacher performance tracking and intervention effectiveness',
      'Compliance-ready reporting and AI cost monitoring'
    ]
  },
  {
    title: 'Parent Dashboard',
    features: [
      'Subject-by-subject mastery with trend arrows',
      'Stress point alerts with actionable next steps',
      'Full transparency through to report card time'
    ]
  }
]

const outcomes = [
  { value: '+15-23%', label: 'Grade improvement', sublabel: 'within 6 months of usage' },
  { value: '+10-30%', label: 'Learning retention', sublabel: 'after 3 months' },
  { value: '5-6 hrs', label: 'Teacher time saved', sublabel: 'per week per teacher' },
  { value: '89%', label: 'At-risk accuracy', sublabel: 'identifying struggling students' }
]

export default function Education() {
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
            Education
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display mb-8"
          >
            <span className="text-silver-gradient">AI-Powered Learning</span>
            <br />
            <span className="text-silver-400">that educators trust.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="body-large max-w-3xl"
          >
            Students understand. Teachers trust. Administrators rely on. The only platform combining proactive AI, real-time analytics, and multi-stakeholder support.
          </motion.p>
        </div>
      </section>

      {/* The Problem */}
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
            The Problem
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
                <span className="text-silver-gradient">258 Million</span>
                <br />
                <span className="text-silver-500">students failing annually</span>
              </h2>
            </div>
            <div className="flex items-end">
              <div className="space-y-6">
                <p className="body-default">
                  The education system was designed for smaller classrooms, slower feedback loops, and uniform learning paths. 50-60% of students fall behind while teachers manage 150+ students each.
                </p>
                <p className="body-default">
                  This leads to $2.4 trillion in lost lifetime earnings from learning deficits. The result is not failure of intent, but failure of capacity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Systemic Barriers */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="divider mb-20" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label mb-6"
          >
            Systemic Issues
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-medium text-silver-200 mb-16"
          >
            Education's Barriers at Scale
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {systemicBarriers.map((barrier, index) => (
              <motion.div
                key={barrier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-t border-silver-900 pt-8"
              >
                <h3 className="font-serif text-xl text-silver-300 mb-2">{barrier.title}</h3>
                <p className="font-serif text-3xl text-silver-gradient mb-4">{barrier.stat}</p>
                <p className="description">{barrier.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
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
            Our Approach
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 gap-16 md:gap-24 mb-20"
          >
            <div>
              <h2 className="heading-large text-silver-200">
                We Don't Push Content;
                <br />
                <span className="text-silver-gradient">We Unlock Potential</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="body-default">
                ZiR0 is the only platform that combines proactive AI, real-time analytics, and multi-stakeholder support. One platform, four dashboards—students, teachers, parents, and admins each get tailored experiences while data flows seamlessly between them.
              </p>
            </div>
          </motion.div>

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

      {/* Dashboards */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="divider mb-20" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label mb-6"
          >
            Transparency
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-medium text-silver-200 mb-16"
          >
            Real-Time Analytics Across All Stakeholders
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {dashboards.map((dashboard, index) => (
              <motion.div
                key={dashboard.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-t border-silver-900 pt-8"
              >
                <h3 className="font-serif text-xl text-silver-300 mb-6">{dashboard.title}</h3>
                <ul className="space-y-3">
                  {dashboard.features.map((feature, i) => (
                    <li key={i} className="description flex items-start">
                      <span className="text-silver-600 mr-3">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Educators Trust */}
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
            Trust
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
                Why Educators
                <br />
                <span className="text-silver-gradient">Trust ZiR0</span>
              </h2>
            </div>
            <div className="flex items-end">
              <div className="space-y-6">
                <p className="body-default">
                  87% of teachers are skeptical of AI recommendations they can't verify. Black-box algorithms don't get adopted—they get ignored.
                </p>
                <p className="body-default">
                  Our approach: explainability by design. Knowledge maps with 500+ concepts mapped with prerequisite relationships. Curriculum alignment is provable, not claimed. Every recommendation includes evidence—teachers verify, override, or approve.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="divider mb-20" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label mb-6"
          >
            Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-medium text-silver-200 mb-16"
          >
            We Sell Outcomes, Not Features
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-4xl md:text-5xl text-silver-gradient mb-2">
                  {outcome.value}
                </p>
                <p className="text-silver-300 text-sm tracking-wide mb-1">{outcome.label}</p>
                <p className="text-silver-600 text-xs">{outcome.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
