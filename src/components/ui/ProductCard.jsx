import { useState } from 'react'
import { motion } from 'framer-motion'
import { CategoryTag, AvailBadge } from './index.jsx'
import { Link } from 'react-router-dom'

// Geometric fallback shown when no photo is found
function PlaceholderVisual({ category }) {
  const patterns = {
    connectors:             { bg: '#F5F5F0', lines: 4 },
    cables:                 { bg: '#F5F0F5', lines: 3 },
    lighting:               { bg: '#FAFAF0', lines: 2 },
    'it-hardware':          { bg: '#F0F5F5', lines: 5 },
    terminals:              { bg: '#F5F0F0', lines: 3 },
    switches:               { bg: '#F0F0F5', lines: 4 },
    'electronic-components':{ bg: '#F5F5F5', lines: 6 },
  }
  const p = patterns[category] || { bg: '#F5F5F5', lines: 4 }

  return (
    <div style={{
      background: p.bg,
      height: 200,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: p.lines }).map((_, i) => (
          <g key={i}>
            <line x1={40 + i * 38} y1="20" x2={40 + i * 38} y2="180"
              stroke="rgba(201,168,76,0.12)" strokeWidth="1" />
            <circle cx={40 + i * 38} cy={40 + (i % 3) * 40} r="4"
              fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="1.5" />
          </g>
        ))}
        {Array.from({ length: 3 }).map((_, i) => (
          <line key={i} x1="20" y1={50 + i * 40} x2="260" y2={50 + i * 40}
            stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
        ))}
        <rect x="110" y="80" width="60" height="40"
          fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="1.5" />
        <line x1="140" y1="68" x2="140" y2="80" stroke="rgba(201,168,76,0.25)" strokeWidth="1.5" />
        <line x1="140" y1="120" x2="140" y2="132" stroke="rgba(201,168,76,0.25)" strokeWidth="1.5" />
      </svg>
      <div style={{
        position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
        background: 'rgba(201,168,76,0.12)', padding: '3px 10px',
        fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 600,
        color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap',
      }}>
        No photo yet
      </div>
    </div>
  )
}

// Tries product-{id}.jpg → .jpeg → .png → .webp
// Falls back to geometric placeholder if none found
function ProductImage({ product }) {
  const extensions = ['jpg', 'jpeg', 'png', 'webp']
  const [extIndex, setExtIndex] = useState(0)
  const [failed, setFailed] = useState(false)

  if (failed) return <PlaceholderVisual category={product.category} />

  return (
    <img
      src={`/products/product-${product.id}.${extensions[extIndex]}`}
      alt={product.name}
      onError={() => {
        if (extIndex + 1 < extensions.length) {
          setExtIndex(i => i + 1)
        } else {
          setFailed(true)
        }
      }}
      style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
    />
  )
}

export default function ProductCard({ product, onInquiry }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      style={{
        background: '#FFFFFF', border: '1px solid #E8E8E8',
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
        transition: 'border-color 0.25s, box-shadow 0.25s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.07)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8E8E8'; e.currentTarget.style.boxShadow = 'none' }}
    >
      <Link to={`/products/${product.id}`} style={{ display: 'block', overflow: 'hidden' }}>
        <ProductImage product={product} />
      </Link>

      <div style={{ padding: '18px 18px 22px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        <div className="flex items-center gap-2">
          <CategoryTag>{product.categoryLabel}</CategoryTag>
          <AvailBadge status={product.availability} />
        </div>

        <Link to={`/products/${product.id}`}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600, color: '#1A1A1A', lineHeight: 1.4, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
            onMouseLeave={e => e.currentTarget.style.color = '#1A1A1A'}>
            {product.name}
          </p>
        </Link>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#6B6B6B' }}>
            Brand: <span style={{ fontWeight: 500, color: '#3D3D3D' }}>{product.brand}</span>
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#6B6B6B' }}>
            Part No: <span style={{ fontWeight: 500, color: '#3D3D3D' }}>{product.partNo}</span>
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#6B6B6B' }}>
            MOQ: <span style={{ fontWeight: 600, color: '#1A1A1A' }}>{product.moq}</span>
          </p>
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
          <button
            onClick={() => onInquiry(product)}
            style={{ flex: 1, padding: '9px 0', background: 'linear-gradient(135deg, #C9A84C, #E2C46A)', color: '#1A1A1A', fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Get Quote
          </button>
          <Link
            to={`/products/${product.id}`}
            style={{ padding: '9px 16px', background: 'transparent', color: '#6B6B6B', fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid #E8E8E8', cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8E8E8'; e.currentTarget.style.color = '#6B6B6B' }}
          >
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
