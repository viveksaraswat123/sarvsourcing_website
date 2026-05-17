import { FadeUp, SectionLabel, GoldLine, BtnPrimary } from '../components/ui/index.jsx'
import { Link } from 'react-router-dom'
import { industries } from '../data/index.js'

const timeline = [
  { year: '2018', title: 'Founded in Greater Noida', desc: 'Started as a niche connector and terminal supplier serving local electronics manufacturers.' },
  { year: '2019', title: 'Specialty Cables Division', desc: 'Expanded catalog to include flexible cables, tinned copper wires, and industrial wiring.' },
  { year: '2021', title: 'IT Hardware Launch', desc: 'Launched dedicated IT hardware sourcing, serving SMEs and enterprises across NCR.' },
  { year: '2022', title: 'LED Lighting Portfolio', desc: 'Added commercial LED lighting products from certified global brands for bulk supply.' },
  { year: '2023', title: '100+ Client Milestone', desc: 'Crossed 100 verified B2B clients. Expanded pan-India delivery partnerships.' },
  { year: '2024', title: 'Digital Platform', desc: 'Launched sarvsourcing.com — enabling online catalog browsing and RFQ submission.' },
]

const values = [
  { title: 'Quality First', desc: 'Every product in our catalog meets strict quality standards. We work only with certified manufacturers and authorized distributors.' },
  { title: 'Transparent Pricing', desc: 'No hidden charges. Competitive bulk pricing based on direct manufacturer relationships built over six years.' },
  { title: 'Reliable Delivery', desc: 'Our logistics partnerships ensure timely fulfillment across India. We track every order to your door.' },
  { title: 'Expert Support', desc: 'Our technical team helps you find the right product for your specification — not just the nearest SKU.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="px-5 sm:px-8 pt-28 pb-16 sm:pb-20" style={{ background: '#0F0F0F', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Stack on mobile, side-by-side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeUp>
              <SectionLabel>About SARV</SectionLabel>
              <GoldLine wide />
              <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(30px, 5vw, 54px)', color: '#FFFFFF', lineHeight: 1.1, marginBottom: 18 }}>
                Simplifying Industrial<br />
                <span style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C46A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Sourcing Since 2018
                </span>
              </h1>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(14px, 2vw, 16px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 480 }}>
                SARV Sourcing Solutions bridges the gap between global manufacturers and Indian industries — eliminating procurement complexity through a single trusted source.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/quote"><BtnPrimary>Request a Quote</BtnPrimary></Link>
                <Link to="/contact">
                  <button style={{ padding: '13px 24px', background: 'transparent', color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#C9A84C'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}>
                    Contact Us
                  </button>
                </Link>
              </div>
            </FadeUp>

            {/* Stats grid */}
            <FadeUp delay={0.15}>
              <div className="grid grid-cols-2" style={{ gap: 1, background: 'rgba(201,168,76,0.15)' }}>
                {[
                  { num: '500+', lbl: 'Products in Catalog' },
                  { num: '100+', lbl: 'Verified B2B Clients' },
                  { num: '50+', lbl: 'Global Brands' },
                  { num: '6+', lbl: 'Years of Expertise' },
                ].map((s, i) => (
                  <div key={i} style={{ background: '#111111', padding: 'clamp(20px, 4vw, 32px) clamp(16px, 3vw, 28px)', textAlign: 'center' }}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 900, color: '#C9A84C', lineHeight: 1 }}>{s.num}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.lbl}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 px-5 sm:px-8" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <FadeUp>
              <div style={{ borderLeft: '3px solid #C9A84C', paddingLeft: 24 }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>Mission</p>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 700, color: '#1A1A1A', marginBottom: 12, lineHeight: 1.3 }}>One Source. Complete Solutions.</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B6B6B', lineHeight: 1.8 }}>
                  To be India's most reliable B2B sourcing partner by connecting businesses with high-quality electronic, industrial, and IT hardware products — with speed, transparency, and expertise.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div style={{ borderLeft: '3px solid #E8E8E8', paddingLeft: 24 }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 10 }}>Vision</p>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 700, color: '#1A1A1A', marginBottom: 12, lineHeight: 1.3 }}>The Future of Industrial Procurement</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B6B6B', lineHeight: 1.8 }}>
                  To build the most trusted digital sourcing platform for Indian industries — leveraging technology and deep supplier relationships to reduce procurement time and cost.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Values */}
          <FadeUp>
            <SectionLabel>Core Values</SectionLabel>
            <GoldLine />
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 800, color: '#1A1A1A', marginBottom: 36 }}>What We Stand For</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
            {values.map((v, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div style={{ padding: '24px 20px', border: '1px solid #E8E8E8', background: '#FFFFFF', height: '100%', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.05)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8E8E8'; e.currentTarget.style.boxShadow = 'none' }}>
                  <div style={{ width: 28, height: 2, background: 'linear-gradient(90deg, #C9A84C, #E2C46A)', marginBottom: 16 }} />
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 }}>{v.title}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B6B6B', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 px-5 sm:px-8" style={{ background: '#FAFAFA', borderTop: '1px solid #E8E8E8' }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionLabel>Our Journey</SectionLabel>
            <GoldLine />
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 800, color: '#1A1A1A', marginBottom: 48 }}>
              Built on Six Years of Trust
            </h2>
          </FadeUp>
          <div style={{ position: 'relative', maxWidth: 680 }}>
            <div style={{ position: 'absolute', left: 56, top: 0, bottom: 0, width: 1, background: '#E8E8E8' }} />
            {timeline.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 20, marginBottom: 32, position: 'relative' }}>
                  <div style={{ textAlign: 'right', paddingRight: 16, paddingTop: 2 }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, color: '#C9A84C' }}>{item.year}</span>
                  </div>
                  <div style={{ position: 'absolute', left: 52, top: 6, width: 9, height: 9, background: '#C9A84C', borderRadius: '50%', border: '2px solid #FAFAFA' }} />
                  <div style={{ paddingLeft: 12 }}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: '#1A1A1A', marginBottom: 5 }}>{item.title}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B6B6B', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-5 sm:px-8" style={{ background: '#0F0F0F' }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionLabel>Industries</SectionLabel>
            <GoldLine />
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 800, color: '#FFFFFF', marginBottom: 36 }}>Sectors We Serve</h2>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" style={{ gap: 1, background: 'rgba(255,255,255,0.05)' }}>
            {industries.map((ind, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div style={{ padding: '20px 16px', background: '#111111', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#161616'}
                  onMouseLeave={e => e.currentTarget.style.background = '#111111'}>
                  <div style={{ width: 20, height: 1.5, background: '#C9A84C', marginBottom: 8 }} />
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>{ind}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
