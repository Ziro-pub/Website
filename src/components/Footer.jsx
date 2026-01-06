import { Link } from 'react-router-dom'
import WaitlistForm from './WaitlistForm'
import GlowingLogo from './GlowingLogo'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/consulting', label: 'Consulting' },
  { path: '/education', label: 'Education' },
  { path: '/finance', label: 'Finance' },
  { path: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Mailing List Section */}
        <div className="divider mb-20" />
        <div className="relative overflow-hidden">
          {/* Background Logo - contained within this section */}
          <GlowingLogo
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[350px]"
            baseOpacity={0.04}
            glowIntensity={0.5}
            glowSize={250}
          />
          <div className="max-w-2xl mx-auto text-center py-10 relative z-10">
            <p className="label mb-6">Stay Informed</p>
            <h3 className="heading-medium text-silver-200 mb-6">
              Join our mailing list
            </h3>
            <p className="body-default mb-10">
              Be the first to know when we launch new features and products.
            </p>
            <WaitlistForm />
          </div>
        </div>
        <div className="divider mt-10 mb-16" />

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Logo */}
          <Link to="/">
            <img src="/ziro-fill.png" alt="Ziro" className="h-5 md:h-6 opacity-80 hover:opacity-100 transition-opacity" />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs tracking-[0.15em] uppercase text-silver-600 hover:text-silver-300 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <a
            href="mailto:info@ziro.pub"
            className="text-xs tracking-[0.15em] uppercase text-silver-600 hover:text-silver-300 transition-all duration-300"
          >
            info@ziro.pub
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-16">
          <p className="text-silver-700 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Ziro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
