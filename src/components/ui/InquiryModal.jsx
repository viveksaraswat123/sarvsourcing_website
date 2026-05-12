import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FormInput, FormTextarea, BtnPrimary } from './index.jsx'

export default function InquiryModal({ open, onClose, product }) {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', qty: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { onClose(); setSent(false); setForm({ name:'',company:'',phone:'',email:'',qty:'',message:'' }) }, 2400)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={e => { if (e.target === e.currentTarget) onClose() }}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(0,0,0,0.65)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 20,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: '#FFFFFF',
              width: '100%',
              maxWidth: 520,
              maxHeight: '92vh',
              overflowY: 'auto',
              position: 'relative',
            }}
          >
            {/* Gold top line */}
            <div style={{ height: 3, background: 'linear-gradient(90deg, #C9A84C, #E2C46A)' }} />

            <div style={{ padding: '28px 32px 32px' }}>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                <div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 6 }}>
                    Quick Inquiry
                  </p>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 700, color: '#1A1A1A', lineHeight: 1.2 }}>
                    {product ? product.name : 'Product Inquiry'}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#A8A8A8', fontSize: 20, lineHeight: 1, marginLeft: 16 }}
                >
                  ×
                </button>
              </div>

              {/* Response time notice */}
              <div style={{
                background: '#FAF4D8',
                borderLeft: '3px solid #C9A84C',
                padding: '10px 14px',
                marginBottom: 22,
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: '#7A5F06',
              }}>
                We respond within 4 business hours. For urgent needs, WhatsApp us directly.
              </div>

              {sent ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ width: 48, height: 48, background: '#F0FDF4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M5 11l4 4 8-8" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: '#1A1A1A', marginBottom: 6 }}>Inquiry Sent</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#6B6B6B' }}>Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <FormInput label="Full Name" placeholder="Your name" value={form.name} onChange={set('name')} required />
                    <FormInput label="Company" placeholder="Company name" value={form.company} onChange={set('company')} required />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <FormInput label="Phone / WhatsApp" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set('phone')} required />
                    <FormInput label="Email" type="email" placeholder="your@email.com" value={form.email} onChange={set('email')} />
                  </div>
                  <FormInput label="Quantity Required" placeholder="e.g. 500 pcs, 100m, 10 units" value={form.qty} onChange={set('qty')} required />
                  <FormTextarea label="Additional Details" placeholder="Specifications, delivery timeline, or any other requirements..." value={form.message} onChange={set('message')} rows={3} />

                  <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                    <BtnPrimary type="submit" className="flex-1">Send Inquiry</BtnPrimary>
                    <a
                      href={`https://wa.me/918708591236?text=${encodeURIComponent(`Hi, I'm inquiring about: ${product?.name || 'a product'}`)} `}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                        padding: '13px 20px',
                        background: '#25D366',
                        color: '#FFFFFF',
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
