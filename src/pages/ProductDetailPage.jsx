import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import InquiryModal from '../components/ui/InquiryModal.jsx'
import {
  FadeUp,
  CategoryTag,
  AvailBadge,
  BtnPrimary,
  SectionLabel,
  GoldLine,
} from '../components/ui/index.jsx'
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
        onError={() => {
          if (extIdx + 1 < exts.length) {
            setExtIdx(i => i + 1)
          } else {
            setFailed(true)
          }
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.04)'
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
    )
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: '#F8F8F6',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 480 360"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="detgrid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(201,168,76,0.08)"
            strokeWidth="0.5"
          />
        </pattern>

        <rect width="100%" height="100%" fill="url(#detgrid)" />

        {[0, 1, 2, 3].map(i => (
          <g key={i}>
            <line
              x1={80 + i * 80}
              y1="40"
              x2={80 + i * 80}
              y2="320"
              stroke="rgba(201,168,76,0.15)"
              strokeWidth="1"
            />

            <circle
              cx={80 + i * 80}
              cy={120 + i * 40}
              r="6"
              fill="none"
              stroke="rgba(201,168,76,0.25)"
              strokeWidth="1.5"
            />
          </g>
        ))}

        <rect
          x="180"
          y="140"
          width="120"
          height="80"
          fill="none"
          stroke="rgba(201,168,76,0.35)"
          strokeWidth="2"
        />
      </svg>

      <div
        style={{
          position: 'absolute',
          bottom: 12,
          left: 12,
          fontFamily: "'Poppins', sans-serif",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.14em',
          color: '#C9A84C',
          textTransform: 'uppercase',
        }}
      >
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
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 18,
            color: '#A8A8A8',
          }}
        >
          Product not found.
        </p>

        <Link
          to="/products"
          style={{
            display: 'inline-block',
            marginTop: 16,
            color: '#C9A84C',
          }}
        >
          ← Back to Products
        </Link>
      </div>
    )
  }

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <div
        style={{
          background: '#FAFAFA',
          borderBottom: '1px solid #E8E8E8',
          paddingTop: 72,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3">
          <div
            className="flex flex-wrap gap-2 items-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: '#A8A8A8',
            }}
          >
            <Link
              to="/"
              style={{
                color: '#A8A8A8',
                textDecoration: 'none',
              }}
            >
              Home
            </Link>

            <span>/</span>

            <Link
              to="/products"
              style={{
                color: '#A8A8A8',
                textDecoration: 'none',
              }}
            >
              Products
            </Link>

            <span>/</span>

            <span
              style={{ color: '#1A1A1A' }}
              className="truncate"
            >
              {product.name}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          background:
            'linear-gradient(to bottom, #FFFFFF, #FAFAF8)',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-14">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mb-16">

            {/* Product Image */}
            <FadeUp>
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E8E8E8',
                  height: 'clamp(360px, 48vw, 560px)',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 16,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                }}
              >
                <DetailImage product={product} />
              </div>
            </FadeUp>

            {/* Product Info */}
            <FadeUp delay={0.1}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <div className="flex flex-wrap gap-2 items-center">
                  <CategoryTag>
                    {product.categoryLabel}
                  </CategoryTag>

                  <AvailBadge status={product.availability} />
                </div>

                <h1
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 'clamp(24px, 3.5vw, 34px)',
                    fontWeight: 800,
                    color: '#1A1A1A',
                    lineHeight: 1.2,
                    maxWidth: 620,
                  }}
                >
                  {product.name}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap gap-5">
                  {[
                    {
                      lbl: 'Brand',
                      val: product.brand,
                    },
                    {
                      lbl: 'Part Number',
                      val: product.partNo,
                    },
                    {
                      lbl: 'MOQ',
                      val: product.moq,
                      gold: true,
                    },
                  ].map((m, i) => (
                    <div key={i}>
                      <p
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: 9,
                          fontWeight: 600,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: '#A8A8A8',
                          marginBottom: 2,
                        }}
                      >
                        {m.lbl}
                      </p>

                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 14,
                          fontWeight: 600,
                          color: m.gold
                            ? '#C9A84C'
                            : '#1A1A1A',
                        }}
                      >
                        {m.val}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    width: 50,
                    height: 2,
                    background:
                      'linear-gradient(90deg, #C9A84C, #E2C46A)',
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    color: '#555555',
                    lineHeight: 1.9,
                  }}
                >
                  {product.description}
                </p>

                {/* Specs */}
                <div
                  style={{
                    border: '1px solid #E8E8E8',
                    borderRadius: 12,
                    overflow: 'hidden',
                    boxShadow:
                      '0 4px 14px rgba(0,0,0,0.04)',
                  }}
                >
                  <div
                    style={{
                      padding: '10px 14px',
                      background: '#FAFAFA',
                      borderBottom: '1px solid #E8E8E8',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: '#555555',
                      }}
                    >
                      Technical Specifications
                    </p>
                  </div>

                  {Object.entries(product.specs).map(
                    ([key, val], i, arr) => (
                      <div
                        key={key}
                        style={{
                          display: 'grid',
                          gridTemplateColumns:
                            '1fr 1fr',
                          borderBottom:
                            i < arr.length - 1
                              ? '1px solid #F0F0F0'
                              : 'none',
                        }}
                      >
                        <div
                          style={{
                            padding: '10px 14px',
                            background: '#FAFAFA',
                            fontFamily:
                              "'Poppins', sans-serif",
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#6B6B6B',
                            borderRight:
                              '1px solid #F0F0F0',
                          }}
                        >
                          {key}
                        </div>

                        <div
                          style={{
                            padding: '10px 14px',
                            fontFamily:
                              "'Inter', sans-serif",
                            fontSize: 12,
                            color: '#1A1A1A',
                          }}
                        >
                          {val}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mt-2">

                  <BtnPrimary
                    onClick={() => setModal(true)}
                    style={{
                      padding: '15px 24px',
                      fontSize: 13,
                    }}
                  >
                    Request Quote
                  </BtnPrimary>

                  <a
                    href={`https://wa.me/918708591236?text=${encodeURIComponent(
                      `Hi, I need a quote for: ${product.name} (Part: ${product.partNo})`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '15px 24px',
                      background: '#25D366',
                      color: '#FFFFFF',
                      fontFamily:
                        "'Poppins', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      textDecoration: 'none',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background:
                'linear-gradient(to right, transparent, #E8E8E8, transparent)',
              marginBottom: 60,
            }}
          />

          {/* Related Products */}
          {related.length > 0 && (
            <div>
              <SectionLabel>
                Related Products
              </SectionLabel>

              <GoldLine />

              <h2
                style={{
                  fontFamily:
                    "'Poppins', sans-serif",
                  fontSize:
                    'clamp(20px, 3vw, 28px)',
                  fontWeight: 700,
                  color: '#1A1A1A',
                  marginBottom: 24,
                }}
              >
                You May Also Need
              </h2>

              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                style={{ gap: 16 }}
              >
                {related.map(p => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onInquiry={prod => {
                      setSelProd(prod)
                      setModal(true)
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <InquiryModal
        open={modal}
        onClose={() => setModal(false)}
        product={product}
      />
    </>
  )
}