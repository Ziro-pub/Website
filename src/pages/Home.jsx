import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Linkedin } from 'lucide-react'
import WaitlistForm from '../components/WaitlistForm'
import GlowingLogo from '../components/GlowingLogo'

const services = [
  {
    id: 'consulting',
    title: 'Consulting',
    headline: 'Transform expertise into scalable intelligence',
    description: 'Custom AI systems, from predictive models to autonomous agents, built for your domain.',
    link: '/consulting',
    number: '01'
  },
  {
    id: 'education',
    title: 'Education',
    headline: 'Democratize learning',
    description: 'AI-powered adaptive learning that solves the 2 Sigma Problem at scale.',
    link: '/education',
    number: '02'
  },
  {
    id: 'finance',
    title: 'Finance',
    headline: 'Unlock transparent quantitative trading',
    description: `Open-architecture quantitative analysis, seamlessly deploy models.
No walled gardens, no black boxes.`,
    link: '/finance',
    number: '03'
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 60, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const teamSlides = [
  [
    {
      name: 'Eaman Okumori Javid',
      title: 'Chief Executive Officer',
      education: "MEng General Engineering, King's College London",
      experience: ['MUFG FS, Treasury and Payments Division'],
      linkedin: 'https://www.linkedin.com/in/eaman-okumori-javid'
    },
    {
      name: 'Zinelyes Amlik',
      title: 'Chief Technology Officer',
      education: 'MSc Computational Science and Engineering, Imperial College London',
      experience: ['AIP, AI Solutions'],
      linkedin: 'https://www.linkedin.com/in/zine-amlik'
    }
  ],
  [
    {
      name: 'Mohammed Aziz Ketata',
      title: 'Lead Developer',
      education: 'MSc Computational Science and Engineering, Imperial College London',
      experience: ['AIP, AI Solutions'],
      linkedin: 'https://www.linkedin.com/in/mohamedazizketata'
    },
    {
      name: 'Randall Liew',
      title: 'Head of Research',
      education: 'MSc Applied Biosciences & Biotechnology, Imperial College London',
      experience: ['Biochemical Society UK, Protein Crystallization & Oncology'],
      linkedin: 'https://www.linkedin.com/in/randall-liew'
    }
  ],
  [
    {
      name: 'Angela Wang',
      title: 'Head of Technical Operations',
      education: "BSc Mathematics and Statistics, King's College London",
      experience: ['Wuchan Zhongda Capital Management, Quant Division', 'Zhejin Trust, Investment Division'],
      linkedin: 'https://www.linkedin.com/in/angelwang-'
    },
    {
      name: 'Shon Golod',
      title: 'Head of Education',
      education: "MSc MedTech Innovation & Entrepreneurship, King's College London",
      experience: ['Anakatech, Legal Risk and Compliance'],
      linkedin: 'https://www.linkedin.com/in/shon-golod'
    }
  ]
]

const quotes = [
  {
    text: "We're building systems where AI is a true partner.",
    name: 'Eaman Okumori Javid',
    title: 'CEO'
  },
  {
    text: 'We build AI that truly comprehends data integrity.',
    name: 'Zinelyes Amlik',
    title: 'CTO'
  },
  {
    text: 'Profound research that excels industry.',
    name: 'Randall Liew',
    title: 'Head of Research'
  }
]

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [currentTeam, setCurrentTeam] = useState(0)

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)
    const teamInterval = setInterval(() => {
      setCurrentTeam((prev) => (prev + 1) % teamSlides.length)
    }, 6000)
    return () => {
      clearInterval(quoteInterval)
      clearInterval(teamInterval)
    }
  }, [])

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
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.p
              variants={fadeUp}
              className="label mb-8"
            >
              Intelligent Systems
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="heading-display mb-8"
            >
              <span className="text-silver-gradient">Extraordinary</span>
              <br />
              <span className="text-silver-400">results.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="body-large max-w-2xl mb-16"
            >
              We build AI-centric solutions that transform how industries operate, completely sector agnostic. 
            </motion.p>

            <motion.div variants={fadeUp} className="mix-blend-normal">
              <WaitlistForm />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="divider mb-20" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="label mb-16"
          >
            Philosophy
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
                AI should be a partner,
                <br />
                <span className="text-silver-500">not a sidebar.</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="body-large max-w-xl">
                The AI revolution promised to fix broken workflows. Instead, it gave us chatbots in sidebars. We spent years watching brilliant people fight their tools instead of doing their best work. Thats why we're building systems rooted in data fusion, unifying every stream of information, and transparent AI, where the 'why' behind every insight is visible. This isn't just a tool; it's a partner that thinks with you, not for you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="divider mb-20" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="label mb-16"
          >
            What We Build
          </motion.p>

          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="group block py-12 border-t border-silver-900 hover:border-silver-700 transition-all duration-500"
                >
                  <div className="grid md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-1">
                      <span className="text-silver-700 font-serif text-lg">{service.number}</span>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="heading-small text-silver-300 group-hover:text-silver-100 transition-colors duration-500">
                        {service.title}
                      </h3>
                    </div>
                    <div className="md:col-span-6">
                      <p className="body-default mb-3">{service.headline}</p>
                      <p className="body-small whitespace-pre-line">{service.description}</p>
                    </div>
                    <div className="md:col-span-2 flex justify-end items-center">
                      <ArrowRight
                        size={20}
                        className="text-silver-700 group-hover:text-silver-300 group-hover:translate-x-2 transition-all duration-500"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Background Logo */}
        <GlowingLogo
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px]"
          baseOpacity={0.02}
          glowIntensity={0.4}
          glowSize={350}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="relative h-[280px] md:h-[240px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-silver-300 font-normal italic leading-tight mb-12">
                  "{quotes[currentQuote].text}"
                </p>
                <footer>
                  <p className="text-silver-500 text-sm tracking-wide">{quotes[currentQuote].name}</p>
                  <p className="text-silver-700 text-xs tracking-wider uppercase mt-1">{quotes[currentQuote].title}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote ? 'bg-silver-400 w-6' : 'bg-silver-700 hover:bg-silver-600'
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pt-32 pb-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="divider mb-20" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="label mb-16"
          >
            The Team
          </motion.p>

          <div className="relative min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTeam}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-16 md:gap-24"
              >
                {teamSlides[currentTeam].map((member) => (
                  <div key={member.name}>
                    <h3 className="heading-small text-silver-200 mb-2">{member.name}</h3>
                    <p className="label mb-4">{member.title}</p>
                    <p className="text-silver-400 text-sm mb-3">{member.education}</p>
                    <div className="space-y-1">
                      {member.experience.map((exp, i) => (
                        <p key={i} className="text-silver-600 text-sm">{exp}</p>
                      ))}
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-silver-500 hover:text-silver-300 transition-colors duration-300"
                    >
                      <Linkedin size={16} />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {teamSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTeam(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTeam ? 'bg-silver-400 w-6' : 'bg-silver-700 hover:bg-silver-600'
                }`}
                aria-label={`Go to team slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
