import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero.jsx'
import BrandTicker from '../components/sections/BrandTicker.jsx'
import ProductCard from '../components/ui/ProductCard.jsx'
import InquiryModal from '../components/ui/InquiryModal.jsx'
import { FadeUp, SectionLabel, GoldLine, BtnPrimary, BtnOutline } from '../components/ui/index.jsx'
import { categories, products, testimonials, stats, industries } from '../data/index.js'

export default function HomePage() {
  const [modalOpen, setModalOpen]   = useState(false)
  const [activeProduct, setProduct] = useState(null)

  const openInquiry = prod => { setProduct(prod); setModalOpen(true) }
  const featuredProducts = products.filter(p => p.featured)

  return (
    <>
      <Hero />

      {/* Brand ticker */}
      <BrandTicker />

      {/* ── CATEGORIES ─────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionLabel>Categories</SectionLabel>
            <GoldLine />
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#1A1A1A', marginBottom: 8, marginTop: 0 }}>
              Browse by Category
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#6B6B6B', maxWidth: 500, lineHeight: 1.7, marginBottom: 52 }}>
              From electronic components to IT hardware - find everything your business needs.
            </p>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 1, background: '#E8E8E8', border: '1px solid #E8E8E8' }}>
            {categories.map((cat, i) => (
              <FadeUp key={cat.id} delay={i * 0.06}>
                <Link
                  to={`/products?cat=${cat.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <motion.div
                    whileHover={{ background: '#FAFAF5' }}
                    style={{
                      background: '#FFFFFF',
                      padding: '28px 24px',
                      cursor: 'pointer',
                      borderRight: '1px solid #E8E8E8',
                      transition: 'background 0.2s',
                      display: 'block',
                    }}
                  >
                    {/* Category identifier bar */}
                    <div style={{ width: 28, height: 2, background: 'linear-gradient(90deg, #C9A84C, #E2C46A)', marginBottom: 16 }} />
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: '#1A1A1A', marginBottom: 6, lineHeight: 1.3 }}>
                      {cat.name}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#A8A8A8', marginBottom: 14, lineHeight: 1.5 }}>
                      {cat.description}
                    </p>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, color: '#C9A84C', letterSpacing: '0.08em' }}>
                      {cat.count} products →
                    </p>
                  </motion.div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ───────────────────────────── */}
      <section style={{ padding: '96px 24px', background: '#FAFAFA' }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <SectionLabel>Featured Products</SectionLabel>
                <GoldLine />
                <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#1A1A1A', margin: 0 }}>
                  Popular This Month
                </h2>
              </div>
              <Link to="/products">
                <BtnOutline dark>View All Products</BtnOutline>
              </Link>
            </div>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 20 }}>
            {featuredProducts.map((prod, i) => (
              <FadeUp key={prod.id} delay={i * 0.08}>
                <ProductCard product={prod} onInquiry={openInquiry} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SARV ────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: '#0F0F0F' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <FadeUp>
              <SectionLabel>Why SARV</SectionLabel>
              <GoldLine />
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#FFFFFF', marginBottom: 16 }}>
                Your Sourcing Partner, Not Just a Supplier
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 440 }}>
                We go beyond transactions. SARV provides end-to-end procurement support — from specification matching to bulk fulfillment — so your business never stops.
              </p>
              <div style={{ marginTop: 36 }}>
                <Link to="/about"><BtnPrimary>Learn About Us</BtnPrimary></Link>
              </div>
            </FadeUp>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,0.04)' }}>
              {[
                { title: 'Verified Quality',    desc: 'All products sourced from certified manufacturers with full traceability.' },
                { title: 'Bulk Pricing',         desc: 'Direct manufacturer relationships give you best-in-class volume pricing.' },
                { title: 'Fast Fulfillment',     desc: 'Pan-India logistics network for quick turnaround on bulk orders.' },
                { title: 'Technical Expertise',  desc: 'Our specialists help you find the exact specification you need.' },
                { title: 'Custom Sourcing',      desc: 'Submit any requirement — we source what the market doesn\'t stock.' },
                { title: 'Single Vendor',        desc: 'One trusted source for all electronic, IT, and industrial needs.' },
              ].map((item, i) => (
                <FadeUp key={i} delay={i * 0.07}>
                  <div
                    style={{
                      padding: '24px 20px',
                      background: '#111111',
                      borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#161616'}
                    onMouseLeave={e => e.currentTarget.style.background = '#111111'}
                  >
                    <div style={{ width: 20, height: 1.5, background: 'linear-gradient(90deg, #C9A84C, #E2C46A)', marginBottom: 12 }} />
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 700, color: '#FFFFFF', marginBottom: 6 }}>
                      {item.title}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────── */}
      <section style={{ padding: '72px 24px', background: '#FAF4D8', borderTop: '2px solid #C9A84C' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderLeft: '1px solid rgba(201,168,76,0.25)' }}>
            {stats.map((s, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{
                  padding: '24px 32px',
                  borderRight: '1px solid rgba(201,168,76,0.25)',
                  textAlign: 'center',
                }}>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 44, fontWeight: 900, color: '#9A7A08', lineHeight: 1 }}>
                    {s.value}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#7A5F06', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6 }}>
                    {s.label}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <section style={{ padding: '96px 24px', background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionLabel>Client Testimonials</SectionLabel>
            <GoldLine />
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#1A1A1A', marginBottom: 48 }}>
              What Our Clients Say
            </h2>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {testimonials.map((t, i) => (
              <FadeUp key={t.id} delay={i * 0.1}>
                <div style={{
                  padding: '32px',
                  border: '1px solid #E8E8E8',
                  background: '#FFFFFF',
                  position: 'relative',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.05)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8E8E8'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  {/* Quote mark */}
                  <div style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 64,
                    color: '#FAF4D8',
                    lineHeight: 1,
                    position: 'absolute',
                    top: 16,
                    right: 24,
                    fontWeight: 900,
                  }}>
                    "
                  </div>

                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <div key={j} style={{ width: 10, height: 10, background: '#C9A84C', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
                    ))}
                  </div>

                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#555555', lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic' }}>
                    "{t.text}"
                  </p>

                  <div style={{ borderTop: '1px solid #F0F0F0', paddingTop: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div style={{
                      width: 38, height: 38,
                      background: 'linear-gradient(135deg, #C9A84C, #E2C46A)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13, fontWeight: 700,
                      color: '#1A1A1A',
                    }}>
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 700, color: '#1A1A1A' }}>{t.name}</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#A8A8A8' }}>{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ──────────────────────────────────── */}
      <section style={{ padding: '80px 24px', background: '#FAFAFA', borderTop: '1px solid #E8E8E8' }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionLabel>Industries Served</SectionLabel>
            <GoldLine />
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#1A1A1A', marginBottom: 40 }}>
              Trusted Across Sectors
            </h2>
          </FadeUp>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {industries.map((ind, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div style={{
                  padding: '10px 20px',
                  border: '1px solid #E8E8E8',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#555555',
                  letterSpacing: '0.06em',
                  transition: 'all 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#9A7A08'; e.currentTarget.style.background = '#FAF4D8' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8E8E8'; e.currentTarget.style.color = '#555555'; e.currentTarget.style.background = 'transparent' }}
                >
                  {ind}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────── */}
      <section style={{ padding: '80px 24px', background: '#1A1A1A', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-2xl mx-auto relative z-10">
          <FadeUp>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 16 }}>
              Get Started
            </p>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#FFFFFF', marginBottom: 16, lineHeight: 1.15 }}>
              Ready to Source Smarter?
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.45)', marginBottom: 40, lineHeight: 1.7 }}>
              Submit your bulk requirement and receive competitive quotes within 24 hours. No commitment required.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/quote"><BtnPrimary>Submit RFQ</BtnPrimary></Link>
              <Link to="/contact"><BtnOutline>Talk to Our Team</BtnOutline></Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <InquiryModal open={modalOpen} onClose={() => setModalOpen(false)} product={activeProduct} />
    </>
  )
}
