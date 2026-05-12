import { useState } from 'react'
import { FadeUp, SectionLabel, GoldLine, BtnPrimary, FormInput, FormTextarea, FormSelect } from '../components/ui/index.jsx'
import { categories } from '../data/index.js'

export default function QuotePage() {
  const [form, setForm] = useState({
    company: '', contact: '', phone: '', email: '',
    category: '', product: '', qty: '', delivery: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const catOptions = [
    { value: '', label: '— Select Category —' },
    ...categories.map(c => ({ value: c.id, label: c.name })),
    { value: 'custom', label: 'Custom / Other Requirement' },
  ]

  return (
    <>
      {/* Header */}
      <div style={{ background: '#0F0F0F', paddingTop: 112, paddingBottom: 64, paddingLeft: 24, paddingRight: 24, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto relative z-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <FadeUp>
            <SectionLabel>Request for Quotation</SectionLabel>
            <GoldLine />
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', color: '#FFFFFF', marginBottom: 12, lineHeight: 1.1 }}>
              Submit Your RFQ
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, maxWidth: 420 }}>
              Fill in your requirement details and receive competitive bulk quotes within 24 hours. No commitment required.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { step: '01', title: 'Submit Your Requirement', desc: 'Fill the RFQ form with product details and quantity.' },
                { step: '02', title: 'We Source & Quote',       desc: 'Our team prepares a competitive quote within 24 hours.' },
                { step: '03', title: 'Confirm & Dispatch',      desc: 'Approve the quote and we handle procurement and delivery.' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '14px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 900, color: 'rgba(201,168,76,0.25)', lineHeight: 1, minWidth: 36 }}>{s.step}</span>
                  <div>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 700, color: '#FFFFFF', marginBottom: 3 }}>{s.title}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <FadeUp>
          <div style={{ border: '1px solid #E8E8E8' }}>
            <div style={{ height: 3, background: 'linear-gradient(90deg, #C9A84C, #E2C46A)' }} />
            <div style={{ padding: '36px 40px 44px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ width: 56, height: 56, background: '#FAF4D8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <path d="M5 13l5 5 11-11" stroke="#9A7A08" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 800, color: '#1A1A1A', marginBottom: 10 }}>
                    RFQ Submitted Successfully
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B6B6B', marginBottom: 6, lineHeight: 1.6 }}>
                    Thank you, we have received your requirement.
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B6B6B', marginBottom: 28 }}>
                    Our sourcing team will contact you within <strong style={{ color: '#1A1A1A' }}>24 hours</strong> with a competitive quote.
                  </p>
                  <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button onClick={() => { setSubmitted(false); setForm({ company:'',contact:'',phone:'',email:'',category:'',product:'',qty:'',delivery:'',message:'' }) }}
                      style={{ padding: '11px 24px', background: 'none', border: '1px solid #E8E8E8', color: '#6B6B6B', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, cursor: 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      Submit Another RFQ
                    </button>
                    <a href="https://wa.me/918708591236" target="_blank" rel="noreferrer"
                      style={{ padding: '11px 24px', background: '#25D366', color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}>
                      Follow up on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 18 }}>
                      Company Information
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <FormInput label="Company Name" placeholder="Your company name" value={form.company} onChange={set('company')} required />
                      <FormInput label="Contact Person" placeholder="Full name" value={form.contact} onChange={set('contact')} required />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <FormInput label="Phone / WhatsApp" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set('phone')} required />
                    <FormInput label="Email Address" type="email" placeholder="your@email.com" value={form.email} onChange={set('email')} required />
                  </div>

                  <div style={{ height: 1, background: '#F0F0F0', margin: '4px 0' }} />

                  <div>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 18 }}>
                      Requirement Details
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <FormSelect label="Product Category" options={catOptions} value={form.category} onChange={set('category')} required />
                      <FormInput label="Product Name / Part Number" placeholder="e.g. Molex MX150, JST XH 2.5mm, LED Bulb 9W..." value={form.product} onChange={set('product')} required />
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <FormInput label="Required Quantity" placeholder="e.g. 500 pcs, 100m, 10 units" value={form.qty} onChange={set('qty')} required />
                        <FormInput label="Target Delivery Date" type="date" value={form.delivery} onChange={set('delivery')} />
                      </div>
                      <FormTextarea label="Detailed Requirement" placeholder="Include specifications, application, quality standards, certifications required, or any other relevant information..." value={form.message} onChange={set('message')} required rows={5} />
                    </div>
                  </div>

                  {/* File upload placeholder */}
                  <div>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#555555', marginBottom: 6 }}>
                      Attach BOM / Spec Sheet (Optional)
                    </p>
                    <div style={{ border: '1px dashed #D1D1D1', padding: '20px 0', textAlign: 'center', cursor: 'pointer', transition: 'border-color 0.2s, background 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.background = '#FAF4D8' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#D1D1D1'; e.currentTarget.style.background = 'transparent' }}
                    >
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#A8A8A8' }}>Click to upload or drag & drop</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#D1D1D1', marginTop: 4 }}>PDF, Excel, Word, Image · Max 10MB</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 12, marginTop: 4, alignItems: 'center' }}>
                    <BtnPrimary type="submit">Submit RFQ</BtnPrimary>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#A8A8A8', lineHeight: 1.5 }}>
                      By submitting, you agree to our terms. We will never share your data.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </FadeUp>
      </div>
    </>
  )
}
