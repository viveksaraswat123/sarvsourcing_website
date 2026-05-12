import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductCard from '../components/ui/ProductCard.jsx'
import InquiryModal from '../components/ui/InquiryModal.jsx'
import { FadeUp, SectionLabel, GoldLine } from '../components/ui/index.jsx'
import { categories, products } from '../data/index.js'

const ITEMS_PER_PAGE = 9

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search,   setSearch]   = useState('')
  const [page,     setPage]     = useState(1)
  const [modal,    setModal]    = useState(false)
  const [selProd,  setSelProd]  = useState(null)

  const activeCat = searchParams.get('cat') || 'all'

  const filtered = useMemo(() => {
    let list = products
    if (activeCat !== 'all') list = list.filter(p => p.category === activeCat)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.partNo.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
      )
    }
    return list
  }, [activeCat, search])

  const totalPages  = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const paginated   = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const setCat = id => { setSearchParams(id === 'all' ? {} : { cat: id }); setPage(1) }
  const openInquiry = prod => { setSelProd(prod); setModal(true) }

  return (
    <>
      {/* Page header */}
      <div style={{ background: '#0F0F0F', paddingTop: 96, paddingBottom: 56, paddingLeft: 24, paddingRight: 24 }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionLabel>Our Catalog</SectionLabel>
            <GoldLine />
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', color: '#FFFFFF', marginBottom: 8, lineHeight: 1.1 }}>
              Product Catalog
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.4)' }}>
              {products.length} verified products across {categories.length} categories
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 32, maxWidth: 560 }}>
          <input
            type="text"
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1) }}
            placeholder="Search by product name, brand, or part number..."
            style={{
              flex: 1, padding: '13px 18px',
              fontSize: 14, fontFamily: "'Inter', sans-serif",
              color: '#1A1A1A',
              border: '1px solid #E8E8E8',
              borderRight: 'none',
              outline: 'none',
              background: '#FFFFFF',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => e.target.style.borderColor = '#C9A84C'}
            onBlur={e => e.target.style.borderColor = '#E8E8E8'}
          />
          <button style={{
            padding: '13px 22px',
            background: 'linear-gradient(135deg, #C9A84C, #E2C46A)',
            color: '#1A1A1A', fontFamily: "'Poppins', sans-serif",
            fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', border: 'none', cursor: 'pointer',
          }}>
            Search
          </button>
        </div>

        {/* Category filter tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
          {[{ id: 'all', name: 'All Products', count: products.length }, ...categories].map(cat => {
            const isActive = activeCat === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setCat(cat.id)}
                style={{
                  padding: '8px 18px',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 12, fontWeight: 600,
                  letterSpacing: '0.06em',
                  border: isActive ? '1px solid #C9A84C' : '1px solid #E8E8E8',
                  background: isActive ? 'linear-gradient(135deg, #C9A84C, #E2C46A)' : '#FFFFFF',
                  color: isActive ? '#1A1A1A' : '#6B6B6B',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#9A7A08' } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = '#E8E8E8'; e.currentTarget.style.color = '#6B6B6B' } }}
              >
                {cat.name} <span style={{ opacity: 0.6, marginLeft: 4 }}>({cat.count || filtered.length})</span>
              </button>
            )
          })}
        </div>

        {/* Results meta */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#A8A8A8' }}>
            Showing <span style={{ color: '#1A1A1A', fontWeight: 600 }}>{paginated.length}</span> of{' '}
            <span style={{ color: '#1A1A1A', fontWeight: 600 }}>{filtered.length}</span> products
          </p>
        </div>

        {/* Product grid */}
        {paginated.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20, marginBottom: 48 }}>
            {paginated.map((prod, i) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <ProductCard product={prod} onInquiry={openInquiry} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: '#A8A8A8' }}>No products found matching your search.</p>
            <button onClick={() => { setSearch(''); setCat('all') }} style={{ marginTop: 16, padding: '10px 24px', background: '#C9A84C', color: '#1A1A1A', border: 'none', cursor: 'pointer', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700 }}>
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginBottom: 20 }}>
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
              style={{ padding: '8px 14px', border: '1px solid #E8E8E8', background: '#FFFFFF', cursor: page === 1 ? 'not-allowed' : 'pointer', color: page === 1 ? '#D1D1D1' : '#6B6B6B', fontFamily: "'Poppins', sans-serif", fontSize: 12 }}>
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button key={n} onClick={() => setPage(n)}
                style={{ padding: '8px 14px', border: n === page ? '1px solid #C9A84C' : '1px solid #E8E8E8', background: n === page ? 'linear-gradient(135deg, #C9A84C, #E2C46A)' : '#FFFFFF', color: n === page ? '#1A1A1A' : '#6B6B6B', cursor: 'pointer', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: n === page ? 700 : 400 }}>
                {n}
              </button>
            ))}
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
              style={{ padding: '8px 14px', border: '1px solid #E8E8E8', background: '#FFFFFF', cursor: page === totalPages ? 'not-allowed' : 'pointer', color: page === totalPages ? '#D1D1D1' : '#6B6B6B', fontFamily: "'Poppins', sans-serif", fontSize: 12 }}>
              Next
            </button>
          </div>
        )}

        {/* Custom requirement CTA */}
        <div style={{ border: '1px solid rgba(201,168,76,0.3)', background: '#FAF4D8', padding: '28px 32px', marginTop: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, color: '#1A1A1A', marginBottom: 4 }}>
              Can't find what you need?
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#7A5F06' }}>
              Submit a custom requirement. We source products not listed in our catalog within 48 hours.
            </p>
          </div>
          <Link to="/quote" style={{ textDecoration: 'none' }}>
            <button style={{ padding: '12px 24px', background: 'linear-gradient(135deg, #C9A84C, #E2C46A)', color: '#1A1A1A', border: 'none', cursor: 'pointer', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              Submit Custom RFQ
            </button>
          </Link>
        </div>
      </div>

      <InquiryModal open={modal} onClose={() => setModal(false)} product={selProd} />
    </>
  )
}
