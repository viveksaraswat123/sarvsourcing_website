import { FadeUp, SectionLabel, GoldLine, BtnPrimary } from '../components/ui/index.jsx'
import { Link } from 'react-router-dom'
import { industries } from '../data/index.js'

const timeline = [
  { year: '2018', title: 'Founded in Greater Noida', desc: 'Started as a niche connector and terminal supplier serving local electronics manufacturers.' },
  { year: '2019', title: 'Specialty Cables Division', desc: 'Expanded catalog to include flexible cables, tinned copper wires, and industrial wiring solutions.' },
  { year: '2021', title: 'IT Hardware Launch', desc: 'Launched dedicated IT hardware sourcing, serving SMEs and enterprises across NCR.' },
  { year: '2022', title: 'LED Lighting Portfolio', desc: 'Added commercial LED lighting products from certified global brands for bulk supply.' },
  { year: '2023', title: '100+ Client Milestone', desc: 'Crossed 100 verified B2B clients. Expanded pan-India delivery partnerships.' },
  { year: '2024', title: 'Digital Platform', desc: 'Launched sarvsourcing.com — enabling online catalog browsing and RFQ submission.' },
]

const values = [
  { title: 'Quality First',     desc: 'Every product in our catalog meets strict quality standards. We work only with certified manufacturers and authorized distributors.' },
  { title: 'Transparent Pricing', desc: 'No hidden charges. Competitive bulk pricing based on direct manufacturer relationships built over six years.' },
  { title: 'Reliable Delivery', desc: 'Our logistics partnerships ensure timely fulfillment across India. We track every order to your door.' },
  { title: 'Expert Support',    desc: 'Our technical team helps you find the right product for your specification — not just the nearest SKU.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ background: '#0F0F0F', paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto relative z-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <FadeUp>
            <SectionLabel>About SARV</SectionLabel>
            <GoldLine wide />
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(36px, 5vw, 54px)', color: '#FFFFFF', lineHeight: 1.1, marginBottom: 20 }}>
              Simplifying Industrial<br />
              <span style={{ background: 'linear-gradient(135deg, #C9A84C, #E2C46A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Sourcing Since 2018
              </span>
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 480 }}>
              SARV Sourcing Solutions bridges the gap between global manufacturers and
              Indian industries — eliminating procurement complexity through a single trusted source.
            </p>
            <div style={{ marginTop: 36, display: 'flex', gap: 12 }}>
              <Link to="/quote"><BtnPrimary>Request a Quote</BtnPrimary></Link>
              <Link to="/contact">
                <button style={{ padding: '13px 28px', background: 'transparent', color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#C9A84C'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </FadeUp>

          {/* Stats grid */}
          <FadeUp delay={0.15}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(201,168,76,0.15)' }}>
              {[
                { num: '500+',  lbl: 'Products in Catalog' },
                { num: '100+',  lbl: 'Verified B2B Clients' },
                { num: '50+',   lbl: 'Global Brands' },
                { num: '6+',    lbl: 'Years of Expertise' },
              ].map((s, i) => (
                <div key={i} style={{ background: '#111111', padding: '32px 28px', textAlign: 'center' }}>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 40, fontWeight: 900, color: '#C9A84C', lineHeight: 1 }}>{s.num}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.lbl}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Mission & Vision */}
      <section style={{ padding: '96px 24px', background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 72 }}>
            <FadeUp>
              <div style={{ borderLeft: '3px solid #C9A84C', paddingLeft: 28 }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>Mission</p>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 700, color: '#1A1A1A', marginBottom: 14, lineHeight: 1.3 }}>
                  One Source. Complete Solutions.
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B6B6B', lineHeight: 1.8 }}>
                  To be India's most reliable B2B sourcing partner by connecting businesses with
                  high-quality electronic, industrial, and IT hardware products — with speed, transparency, and expertise.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div style={{ borderLeft: '3px solid #E8E8E8', paddingLeft: 28 }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12 }}>Vision</p>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 700, color: '#1A1A1A', marginBottom: 14, lineHeight: 1.3 }}>
                  The Future of Industrial Procurement
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B6B6B', lineHeight: 1.8 }}>
                  To build the most trusted digital sourcing platform for Indian industries —
                  leveraging technology and deep supplier relationships to reduce procurement time and cost.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Values */}
          <FadeUp>
            <SectionLabel>Core Values</SectionLabel>
            <GoldLine />
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1A1A1A', marginBottom: 40 }}>
              What We Stand For
            </h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
            {values.map((v, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div style={{ padding: '28px 24px', border: '1px solid #E8E8E8', background: '#FFFFFF', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.05)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8E8E8'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{ width: 28, height: 2, background: 'linear-gradient(90deg, #C9A84C, #E2C46A)', marginBottom: 18 }} />
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, color: '#1A1A1A', marginBottom: 10 }}>{v.title}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B6B6B', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '96px 24px', background: '#FAFAFA', borderTop: '1px solid #E8E8E8' }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionLabel>Our Journey</SectionLabel>
            <GoldLine />
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1A1A1A', marginBottom: 56 }}>
              Built on Six Years of Trust
            </h2>
          </FadeUp>

          <div style={{ position: 'relative', maxWidth: 680 }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: 64, top: 0, bottom: 0, width: 1, background: '#E8E8E8' }} />

            {timeline.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 28, marginBottom: 36, alignItems: 'flex-start', position: 'relative' }}>
                  {/* Year */}
                  <div style={{ textAlign: 'right', paddingRight: 20 }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 700, color: '#C9A84C' }}>{item.year}</span>
                  </div>
                  {/* Dot */}
                  <div style={{ position: 'absolute', left: 60, top: 5, width: 9, height: 9, background: '#C9A84C', borderRadius: '50%', border: '2px solid #FAFAFA' }} />
                  {/* Content */}
                  <div style={{ paddingLeft: 14 }}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, color: '#1A1A1A', marginBottom: 6 }}>{item.title}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B6B6B', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ padding: '80px 24px', background: '#0F0F0F' }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionLabel>Industries</SectionLabel>
            <GoldLine />
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#FFFFFF', marginBottom: 40 }}>
              Sectors We Serve
            </h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.05)' }}>
            {industries.map((ind, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div style={{ padding: '22px 20px', background: '#111111', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#161616'}
                  onMouseLeave={e => e.currentTarget.style.background = '#111111'}
                >
                  <div style={{ width: 20, height: 1.5, background: '#C9A84C', marginBottom: 10 }} />
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
