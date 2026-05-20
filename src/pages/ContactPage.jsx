import { useState } from 'react'
import { FadeUp, SectionLabel, GoldLine, BtnPrimary, FormInput, FormTextarea } from '../components/ui/index.jsx'

const contactInfo = [
  { label: 'Office Address', lines: ['E907, Stellar MI Citihomes,', 'Sector Omicron 3,', 'Greater Noida – 201310, UP'] },
  { label: 'Phone / WhatsApp', lines: ['+91 87085 91236'], link: 'tel:+918708591236' },
  { label: 'Email', lines: ['sarvsourcing@gmail.com'], link: 'mailto:sarvsourcing@gmail.com' },
  { label: 'Business Hours', lines: ['Monday – Saturday', '9:00 AM – 6:30 PM IST'] },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }))

  return (
    <>
      {/* Header */}
      <div className="px-5 sm:px-8 pt-28 pb-14" style={{ background: '#0F0F0F' }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionLabel>Get in Touch</SectionLabel>
            <GoldLine />
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 5vw, 52px)', color: '#FFFFFF', marginBottom: 8, lineHeight: 1.1 }}>Contact Us</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px, 2vw, 15px)', color: 'rgba(255,255,255,0.4)', maxWidth: 440, lineHeight: 1.7 }}>
              Our team responds within 4 business hours. For urgent requirements, connect via WhatsApp.
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* Stack on mobile, 2-col on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact form - wider */}
          <div className="lg:col-span-2">
            <FadeUp>
              <div style={{ border: '1px solid #E8E8E8' }}>
                <div style={{ height: 3, background: 'linear-gradient(90deg, #C9A84C, #E2C46A)' }} />
                <div className="p-6 sm:p-9">
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 6 }}>Send a Message</p>
                  <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 700, color: '#1A1A1A', marginBottom: 24 }}>How Can We Help You?</h2>

                  {sent ? (
                    <div style={{ textAlign: 'center', padding: '40px 0' }}>
                      <div style={{ width: 52, height: 52, background: '#FAF4D8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#9A7A08" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: '#1A1A1A', marginBottom: 6 }}>Message Sent</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B6B6B', marginBottom: 20 }}>We will get back to you within 4 business hours.</p>
                      <button onClick={() => setSent(false)} style={{ padding: '10px 24px', background: 'none', border: '1px solid #C9A84C', color: '#9A7A08', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, cursor: 'pointer', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        Send Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormInput label="Full Name" placeholder="Your full name" value={form.name} onChange={set('name')} required />
                        <FormInput label="Company Name" placeholder="Your company" value={form.company} onChange={set('company')} required />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormInput label="Phone / WhatsApp" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set('phone')} required />
                        <FormInput label="Email Address" type="email" placeholder="your@email.com" value={form.email} onChange={set('email')} />
                      </div>
                      <FormInput label="Subject" placeholder="Product inquiry, bulk order..." value={form.subject} onChange={set('subject')} />
                      <FormTextarea label="Your Message" placeholder="Describe your requirement in detail..." value={form.message} onChange={set('message')} required rows={5} />
                      <div style={{ marginTop: 4 }}><BtnPrimary type="submit">Send Message</BtnPrimary></div>
                    </form>
                  )}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Contact info sidebar */}
          <FadeUp delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {contactInfo.map((info, i) => (
                <div key={i} style={{ padding: '18px 20px', background: i === 0 ? '#0F0F0F' : '#FAFAFA', border: '1px solid ' + (i === 0 ? 'rgba(201,168,76,0.2)' : '#E8E8E8') }}>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 7 }}>{info.label}</p>
                  {info.lines.map((line, j) => (
                    <p key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: j === 0 ? 600 : 400, color: i === 0 ? 'rgba(255,255,255,0.8)' : '#1A1A1A', lineHeight: 1.6 }}>
                      {info.link && j === 0 ? <a href={info.link} style={{ color: i === 0 ? '#C9A84C' : '#1A1A1A', textDecoration: 'none' }}>{line}</a> : line}
                    </p>
                  ))}
                </div>
              ))}

              {/* Map */}
              <div style={{ background: '#1A1A2E', border: '1px solid rgba(201,168,76,0.2)', padding: '28px 20px', textAlign: 'center' }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 6 }}>Location</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600, color: '#FFFFFF', marginBottom: 3 }}>Greater Noida, UP</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 14 }}>Sector Omicron 3</p>
                <a href="https://maps.google.com?q=Sector+Omicron+3+Greater+Noida" target="_blank" rel="noreferrer"
                  style={{ display: 'inline-block', padding: '8px 18px', background: 'transparent', border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C', fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  Open in Maps
                </a>
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/918708591236" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '15px 20px', background: '#25D366', color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}>
                <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </>
  )
}
