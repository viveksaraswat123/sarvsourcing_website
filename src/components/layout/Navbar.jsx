import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SarvLogo from '../ui/SarvLogo'

const navItems = [
  { label: 'Home',     path: '/'         },
  { label: 'Products', path: '/products' },
  { label: 'About',    path: '/about'    },
  { label: 'Contact',  path: '/contact'  },
]

export default function Navbar({ onQuoteOpen }) {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const isLight = location.pathname === '/' && !scrolled

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(26,26,26,0.97)' : 'transparent',
          borderBottomColor: scrolled ? 'rgba(201,168,76,0.18)' : 'transparent',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <SarvLogo variant="light" size="md" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-gold-400'
                    : 'text-white/70 hover:text-white'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/quote"
              className="text-sm font-semibold px-6 py-2.5 transition-all duration-200"
              style={{
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '0.06em',
                background: 'linear-gradient(135deg, #C9A84C, #E2C46A)',
                color: '#1A1A1A',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 border-b border-gold-500/20"
            style={{ background: 'rgba(26,26,26,0.98)', backdropFilter: 'blur(12px)' }}
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === item.path ? 'text-gold-400' : 'text-white/70'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/quote"
                className="mt-4 text-center text-sm font-semibold px-6 py-3"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C46A)', color: '#1A1A1A', letterSpacing: '0.06em' }}
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
