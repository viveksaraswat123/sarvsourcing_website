import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import InquiryModal from '../components/ui/InquiryModal.jsx'
import { FadeUp, CategoryTag, AvailBadge, BtnPrimary, SectionLabel, GoldLine } from '../components/ui/index.jsx'
import ProductCard from '../components/ui/ProductCard.jsx'
import { products } from '../data/index.js'

function DetailImage({ product }) {
  const exts = ['jpg', 'jpeg', 'png', 'webp']
  const [extIdx, setExtIdx] = React.useState(0)
  const [failed, setFailed] = React.useState(false)

  if (!failed) {
    return (
      <img
        src={`/products/product-${product.id}.${exts[extIdx]}`}
        alt={product.name}
        onError={() => { if (extIdx + 1 < exts.length) setExtIdx(i => i + 1); else setFailed(true) }}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    )
  }
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: '#F8F8F6' }}>
      <svg width="100%" height="100%" viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
        <pattern id="detgrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#detgrid)" />
        {[0,1,2,3].map(i => (
          <g key={i}>
            <line x1={80+i*80} y1="40" x2={80+i*80} y2="320" stroke="rgba(201,168,76,0.15)" strokeWidth="1" />
            <circle cx={80+i*80} cy={120+i*40} r="6" fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="1.5" />
          </g>
        ))}
        <rect x="180" y="140" width="120" height="80" fill="none" stroke="rgba(201,168,76,0.35)" strokeWidth="2" />
      </svg>
      <div style={{ position: 'absolute', bottom: 12, left: 12, fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', color: '#C9A84C', textTransform: 'uppercase' }}>
        {product.partNo}
      </div>
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const [modal, setModal] = useState(false)
  const [selProd, setSelProd] = useState(null)

  if (!product) {
    return (
      <div style={{ padding: '120px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: '#A8A8A8' }}>Product not found.</p>
        <Link to="/products" style={{ display: 'inline-block', marginTop: 16, color: '#C9A84C' }}>← Back to Products</Link>
      </div>
    )
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: '#FAFAFA', borderBottom: '1px solid #E8E8E8', paddingTop: 72 }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3">
          <div className="flex flex-wrap gap-2 items-center" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#A8A8A8' }}>
            <Link to="/" style={{ color: '#A8A8A8', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link to="/products" style={{ color: '#A8A8A8', textDecoration: 'none' }}>Products</Link>
            <span>/</span>
            <span style={{ color: '#1A1A1A' }} className="truncate">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main detail */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        {/* Stack on mobile, side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mb-16">

          {/* Image */}
          <FadeUp>
            <div style={{ background: '#F8F8F6', border: '1px solid #E8E8E8', height: 'clamp(260px, 40vw, 420px)', position: 'relative', overflow: 'hidden' }}>
              <DetailImage product={product} />
            </div>
          </FadeUp>

          {/* Info */}
          <FadeUp delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="flex flex-wrap gap-2 items-center">
                <CategoryTag>{product.categoryLabel}</CategoryTag>
                <AvailBadge status={product.availability} />
              </div>

              <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(20px, 3.5vw, 28px)', fontWeight: 800, color: '#1A1A1A', lineHeight: 1.2 }}>
                {product.name}
              </h1>

              {/* Meta row — wrap on mobile */}
              <div className="flex flex-wrap gap-5">
                {[
                  { lbl: 'Brand', val: product.brand },
                  { lbl: 'Part Number', val: product.partNo },
                  { lbl: 'MOQ', val: product.moq, gold: true },
                ].map((m, i) => (
                  <div key={i}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#A8A8A8', marginBottom: 2 }}>{m.lbl}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: m.gold ? '#C9A84C' : '#1A1A1A' }}>{m.val}</p>
                  </div>
                ))}
              </div>

              <div style={{ width: 40, height: 1.5, background: 'linear-gradient(90deg, #C9A84C, #E2C46A)' }} />

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#6B6B6B', lineHeight: 1.75 }}>{product.description}</p>

              {/* Specs table */}
              <div style={{ border: '1px solid #E8E8E8' }}>
                <div style={{ padding: '9px 14px', background: '#FAFAFA', borderBottom: '1px solid #E8E8E8' }}>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#555555' }}>Technical Specifications</p>
                </div>
                {Object.entries(product.specs).map(([key, val], i, arr) => (
                  <div key={key} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: i < arr.length - 1 ? '1px solid #F0F0F0' : 'none' }}>
                    <div style={{ padding: '8px 14px', background: '#FAFAFA', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, color: '#6B6B6B', borderRight: '1px solid #F0F0F0' }}>{key}</div>
                    <div style={{ padding: '8px 14px', fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#1A1A1A' }}>{val}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mt-2">
                <BtnPrimary onClick={() => setModal(true)}>Request Quote</BtnPrimary>
                <a href={`https://wa.me/918708591236?text=${encodeURIComponent(`Hi, I need a quote for: ${product.name} (Part: ${product.partNo})`)}`}
                  target="_blank" rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '13px 18px', background: '#25D366', color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  <svg viewBox="0 0 24 24" fill="white" width="15" height="15"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" /></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <SectionLabel>Related Products</SectionLabel>
            <GoldLine />
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 700, color: '#1A1A1A', marginBottom: 24 }}>You May Also Need</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 16 }}>
              {related.map(p => (
                <ProductCard key={p.id} product={p} onInquiry={prod => { setSelProd(prod); setModal(true) }} />
              ))}
            </div>
          </div>
        )}
      </div>

      <InquiryModal open={modal} onClose={() => setModal(false)} product={product} />
    </>
  )
}
