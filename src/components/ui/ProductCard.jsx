import { useState } from 'react'
import { motion } from 'framer-motion'
import { CategoryTag, AvailBadge } from './index.jsx'
import { Link } from 'react-router-dom'

// Placeholder when no product image exists
function PlaceholderVisual({ category }) {
  const patterns = {
    connectors: { bg: '#F5F5F0', lines: 4 },
    cables: { bg: '#F5F0F5', lines: 3 },
    lighting: { bg: '#FAFAF0', lines: 2 },
    'it-hardware': { bg: '#F0F5F5', lines: 5 },
    terminals: { bg: '#F5F0F0', lines: 3 },
    switches: { bg: '#F0F0F5', lines: 4 },
    'electronic-components': {
      bg: '#F5F5F5',
      lines: 6,
    },
  }

  const p =
    patterns[category] || {
      bg: '#F5F5F5',
      lines: 4,
    }

  return (
    <div
      style={{
        background: p.bg,
        height: 320,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 280 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: p.lines }).map((_, i) => (
          <g key={i}>
            <line
              x1={40 + i * 38}
              y1="20"
              x2={40 + i * 38}
              y2="180"
              stroke="rgba(201,168,76,0.12)"
              strokeWidth="1"
            />

            <circle
              cx={40 + i * 38}
              cy={40 + (i % 3) * 40}
              r="4"
              fill="none"
              stroke="rgba(201,168,76,0.2)"
              strokeWidth="1.5"
            />
          </g>
        ))}
      </svg>

      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(201,168,76,0.12)',
          padding: '4px 12px',
          fontFamily: "'Poppins', sans-serif",
          fontSize: 9,
          fontWeight: 600,
          color: '#C9A84C',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          borderRadius: 999,
        }}
      >
        No photo yet
      </div>
    </div>
  )
}

// Product Image
function ProductImage({ product }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <PlaceholderVisual category={product.category} />
  }

  const imageSrc =
    product.image ||
    `/products/product-${product.id}.jpg`

  return (
    <div
      style={{
        height: 320,
        overflow: 'hidden',
        background: '#FAFAFA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid #F0F0F0',
      }}
    >
      <img
        src={imageSrc}
        alt={product.name}
        onError={() => {
          setFailed(true)
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)'
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
          padding: 24,
          background: '#FAFAFA',
          transition: 'transform 0.4s ease',
        }}
      />
    </div>
  )
}
export default function ProductCard({
  product,
  onInquiry,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      style={{
        background: '#FFFFFF',
        border: '1px solid #ECECEC',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: 18,
        transition:
          'all 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor =
          'rgba(201,168,76,0.35)'

        e.currentTarget.style.boxShadow =
          '0 16px 40px rgba(0,0,0,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor =
          '#ECECEC'

        e.currentTarget.style.boxShadow =
          'none'
      }}
    >
      {/* Image */}
      <Link
        to={`/products/${product.id}`}
        style={{
          display: 'block',
          overflow: 'hidden',
        }}
      >
        <ProductImage product={product} />
      </Link>

      {/* Content */}
      <div
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          flex: 1,
        }}
      >
        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap">
          <CategoryTag>
            {product.categoryLabel}
          </CategoryTag>

          <AvailBadge
            status={product.availability}
          />
        </div>

        {/* Title */}
        <Link
          to={`/products/${product.id}`}
          style={{ textDecoration: 'none' }}
        >
          <p
            style={{
              fontFamily:
                "'Poppins', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              color: '#1A1A1A',
              lineHeight: 1.5,
              transition: 'color 0.2s',
              minHeight: 48,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color =
                '#C9A84C'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color =
                '#1A1A1A'
            }}
          >
            {product.name}
          </p>
        </Link>

        {/* Product Meta */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <p
            style={{
              fontFamily:
                "'Inter', sans-serif",
              fontSize: 12,
              color: '#6B6B6B',
            }}
          >
            Brand:{' '}
            <span
              style={{
                fontWeight: 600,
                color: '#2D2D2D',
              }}
            >
              {product.brand}
            </span>
          </p>

          <p
            style={{
              fontFamily:
                "'Inter', sans-serif",
              fontSize: 12,
              color: '#6B6B6B',
            }}
          >
            Part No:{' '}
            <span
              style={{
                fontWeight: 600,
                color: '#2D2D2D',
              }}
            >
              {product.partNo}
            </span>
          </p>

          <p
            style={{
              fontFamily:
                "'Inter', sans-serif",
              fontSize: 12,
              color: '#6B6B6B',
            }}
          >
            MOQ:{' '}
            <span
              style={{
                fontWeight: 700,
                color: '#C9A84C',
              }}
            >
              {product.moq}
            </span>
          </p>
        </div>

        <div style={{ flex: 1 }} />

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            gap: 10,
            marginTop: 6,
          }}
        >
          <button
            onClick={() => onInquiry(product)}
            style={{
              flex: 1,
              padding: '11px 0',
              background:
                'linear-gradient(135deg, #C9A84C, #E2C46A)',
              color: '#1A1A1A',
              fontFamily:
                "'Poppins', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              transition:
                'opacity 0.2s ease',
              borderRadius: 10,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity =
                '0.9'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity =
                '1'
            }}
          >
            Get Quote
          </button>

          <Link
            to={`/products/${product.id}`}
            style={{
              padding: '11px 18px',
              background: '#FFFFFF',
              color: '#6B6B6B',
              fontFamily:
                "'Poppins', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: '1px solid #E8E8E8',
              cursor: 'pointer',
              transition:
                'all 0.2s ease',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              borderRadius: 10,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor =
                '#C9A84C'

              e.currentTarget.style.color =
                '#C9A84C'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor =
                '#E8E8E8'

              e.currentTarget.style.color =
                '#6B6B6B'
            }}
          >
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  )
}