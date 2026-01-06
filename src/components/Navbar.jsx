import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/consulting', label: 'Consulting' },
  { path: '/education', label: 'Education' },
  { path: '/finance', label: 'Finance' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 py-6 px-6 md:px-12 z-50 bg-background/80 backdrop-blur-md border-b border-transparent hover:border-silver-900 transition-colors">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/">
          <img src="/ziro-fill.png" alt="Ziro" className="h-6 md:h-7" />
        </Link>

        {/* Right: Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-silver-200'
                  : 'text-silver-600 hover:text-silver-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
              location.pathname === '/contact'
                ? 'text-silver-200'
                : 'text-silver-600 hover:text-silver-300'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-silver-400 p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden pt-8 pb-4">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-silver-200'
                    : 'text-silver-600 hover:text-silver-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="divider my-4" />
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                location.pathname === '/contact'
                  ? 'text-silver-200'
                  : 'text-silver-600 hover:text-silver-300'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
