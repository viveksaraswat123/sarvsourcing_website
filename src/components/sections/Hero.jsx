import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BtnPrimary, BtnOutline } from '../ui/index.jsx'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0F0F0F' }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.03 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 180, background: 'linear-gradient(to top, #0F0F0F, transparent)' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-center gap-3 mb-6">
              <span style={{ display: 'block', width: 28, height: 1, background: '#C9A84C', flexShrink: 0 }} />
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C' }}>
                B2B Sourcing Platform · India
              </p>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(32px, 6vw, 64px)', lineHeight: 1.08, color: '#FFFFFF', marginBottom: 20 }}>
              Powering{' '}
              <span style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C46A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Connections.
              </span>
              <br />Delivering{' '}
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>Solutions.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.32 }}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(14px, 2vw, 17px)', fontWeight: 400, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: 520, marginBottom: 36 }}>
              India's trusted B2B sourcing partner for electronic components, industrial hardware, specialty cables, and IT equipment. Bulk pricing. Verified quality. Pan-India delivery.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className="flex flex-wrap gap-3">
              <Link to="/quote"><BtnPrimary>Request a Quote</BtnPrimary></Link>
              <Link to="/products"><BtnOutline>Browse Products</BtnOutline></Link>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-6 sm:gap-10 mt-10">
              {[{ num: '500+', lbl: 'Products' }, { num: '100+', lbl: 'Clients' }, { num: '6+', lbl: 'Years' }, { num: '50+', lbl: 'Brands' }].map((s, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 800, color: '#C9A84C', lineHeight: 1 }}>{s.num}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.lbl}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: category panel — desktop only */}
          <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="lg:col-span-5 hidden lg:block">
            <div style={{ border: '1px solid rgba(201,168,76,0.15)', background: 'rgba(255,255,255,0.025)', padding: 28 }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)', marginBottom: 20 }}>Product Categories</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Electronic Components', desc: 'Diodes · Resistors · Caps' },
                  { name: 'Specialty Cables', desc: 'Flexible · Tinned Copper' },
                  { name: 'LED Lighting', desc: 'Commercial Grade' },
                  { name: 'IT Hardware', desc: 'AIO · UPS · Laptops' },
                  { name: 'Connectors', desc: 'Molex · JST · CS' },
                  { name: 'Terminals', desc: 'Crimp · Press-fit' },
                ].map((cat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.07 }} whileHover={{ borderColor: 'rgba(201,168,76,0.5)' }}
                    style={{ padding: '14px 12px', border: '1px solid rgba(255,255,255,0.06)', cursor: 'pointer', transition: 'border-color 0.2s' }}
                    onClick={() => window.location.href = '/products'}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.85)', marginBottom: 4 }}>{cat.name}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{cat.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
