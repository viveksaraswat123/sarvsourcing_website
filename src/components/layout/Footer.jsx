import { Link } from 'react-router-dom'
import SarvLogo from '../ui/SarvLogo'

const footerLinks = {
  Products: [
    { label: 'Electronic Components', path: '/products?cat=electronic-components' },
    { label: 'Specialty Cables',       path: '/products?cat=cables'                },
    { label: 'LED Lighting',           path: '/products?cat=lighting'              },
    { label: 'IT Hardware',            path: '/products?cat=it-hardware'           },
    { label: 'Connectors',             path: '/products?cat=connectors'            },
    { label: 'Terminals & Switches',   path: '/products?cat=terminals'             },
  ],
  Company: [
    { label: 'About Us',           path: '/about'   },
    { label: 'Contact',            path: '/contact' },
    { label: 'Request a Quote',    path: '/quote'   },
    { label: 'Admin Panel',        path: '/admin'   },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#111111' }}>
      {/* Gold top line */}
      <div style={{ height: 2, background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Link to="/"><SarvLogo variant="light" size="md" /></Link>
            <p className="mt-5 text-sm leading-7" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Inter', sans-serif" }}>
              India's trusted B2B sourcing platform for electronic components,
              industrial hardware, IT equipment, and specialty cables. Serving
              manufacturers and enterprises across India since 2018.
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Inter', sans-serif" }}>
                E907, Stellar MI Citihomes, Sector Omicron 3,<br />
                Greater Noida – 201310, Uttar Pradesh
              </p>
              <p className="text-sm font-medium" style={{ color: '#C9A84C', fontFamily: "'Poppins', sans-serif" }}>
                +91 87085 91236
              </p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Inter', sans-serif" }}>
                sarvsourcing@gmail.com
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="md:col-span-2">
              <p className="text-xs font-semibold mb-5" style={{
                color: '#C9A84C',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontFamily: "'Poppins', sans-serif",
              }}>
                {group}
              </p>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Inter', sans-serif" }}
                      onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold mb-5" style={{
              color: '#C9A84C',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontFamily: "'Poppins', sans-serif",
            }}>
              Stay Updated
            </p>
            <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Inter', sans-serif" }}>
              Get the latest product updates and industry news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 text-sm bg-white/5 border border-white/10 text-white placeholder-white/25 outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <button
                className="px-5 py-3 text-sm font-semibold transition-opacity"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C46A)', color: '#1A1A1A', fontFamily: "'Poppins', sans-serif" }}
              >
                Subscribe
              </button>
            </div>
            <div className="mt-8">
              <p className="text-xs font-semibold mb-4" style={{
                color: '#C9A84C',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontFamily: "'Poppins', sans-serif",
              }}>
                Connect
              </p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/918708591236"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-medium border transition-colors duration-200"
                  style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontFamily: "'Poppins', sans-serif" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:sarvsourcing@gmail.com"
                  className="px-4 py-2 text-xs font-medium border transition-colors duration-200"
                  style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontFamily: "'Poppins', sans-serif" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                >
                  Email
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-medium border transition-colors duration-200"
                  style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontFamily: "'Poppins', sans-serif" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t flex flex-col md:flex-row justify-between items-center gap-3 pt-6" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: "'Inter', sans-serif" }}>
            © 2024 SARV Sourcing Solutions. All rights reserved. sarvsourcing.com
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'Inter', sans-serif" }}>
            GST Registered · ISO Compliant · Verified B2B Supplier
          </p>
        </div>
      </div>
    </footer>
  )
}
