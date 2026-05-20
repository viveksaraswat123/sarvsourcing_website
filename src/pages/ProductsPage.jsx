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
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [modal, setModal] = useState(false)
  const [selProd, setSelProd] = useState(null)
  const activeCat = searchParams.get('cat') || 'all'

  const filtered = useMemo(() => {
    let list = products
    if (activeCat !== 'all') list = list.filter(p => p.category === activeCat)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.partNo.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q))
    }
    return list
  }, [activeCat, search])

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
  const setCat = id => { setSearchParams(id === 'all' ? {} : { cat: id }); setPage(1) }

  return (
    <>
      {/* Header */}
      <div className="px-5 sm:px-8 pt-28 pb-12" style={{ background: '#0F0F0F' }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionLabel>Our Catalog</SectionLabel>
            <GoldLine />
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 5vw, 52px)', color: '#FFFFFF', marginBottom: 6, lineHeight: 1.1 }}>Product Catalog</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>{products.length} verified products across {categories.length} categories</p>
          </FadeUp>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
        {/* Search */}
        <div className="flex mb-7" style={{ maxWidth: 560 }}>
          <input type="text" value={search} onChange={e => { setSearch(e.target.value); setPage(1) }}
            placeholder="Search by product, brand, or part number..."
            style={{ flex: 1, padding: '12px 16px', fontSize: 14, fontFamily: "'Inter', sans-serif", color: '#1A1A1A', border: '1px solid #E8E8E8', borderRight: 'none', outline: 'none', background: '#FFFFFF', minWidth: 0 }}
            onFocus={e => e.target.style.borderColor = '#C9A84C'}
            onBlur={e => e.target.style.borderColor = '#E8E8E8'} />
          <button style={{ padding: '12px 18px', background: 'linear-gradient(135deg, #C9A84C, #E2C46A)', color: '#1A1A1A', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
            Search
          </button>
        </div>

        {/* Category filter - scrollable on mobile */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
          {[{ id: 'all', name: 'All Products', count: products.length }, ...categories].map(cat => {
            const isActive = activeCat === cat.id
            return (
              <button key={cat.id} onClick={() => setCat(cat.id)}
                style={{ padding: '8px 16px', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.04em', border: isActive ? '1px solid #C9A84C' : '1px solid #E8E8E8', background: isActive ? 'linear-gradient(135deg, #C9A84C, #E2C46A)' : '#FFFFFF', color: isActive ? '#1A1A1A' : '#6B6B6B', cursor: 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap', flexShrink: 0 }}>
                {cat.name}
              </button>
            )
          })}
        </div>

        {/* Results count */}
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#A8A8A8', marginBottom: 20 }}>
          Showing <span style={{ color: '#1A1A1A', fontWeight: 600 }}>{paginated.length}</span> of <span style={{ color: '#1A1A1A', fontWeight: 600 }}>{filtered.length}</span> products
        </p>

        {/* Grid: 1 col → 2 col → 3 col */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 16, marginBottom: 40 }}>
            {paginated.map((prod, i) => (
              <motion.div key={prod.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.4 }}>
                <ProductCard product={prod} onInquiry={prod => { setSelProd(prod); setModal(true) }} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#A8A8A8', marginBottom: 14 }}>No products found.</p>
            <button onClick={() => { setSearch(''); setCat('all') }} style={{ padding: '10px 24px', background: '#C9A84C', color: '#1A1A1A', border: 'none', cursor: 'pointer', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700 }}>
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-wrap gap-2 justify-center mb-8">
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

        {/* Custom RFQ */}
        <div className="flex flex-wrap justify-between items-center gap-4 mt-8 p-6 sm:p-8" style={{ border: '1px solid rgba(201,168,76,0.3)', background: '#FAF4D8' }}>
          <div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, color: '#1A1A1A', marginBottom: 3 }}>Can't find what you need?</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#7A5F06' }}>We source products not in our catalog within 48 hours.</p>
          </div>
          <Link to="/quote" style={{ textDecoration: 'none' }}>
            <button style={{ padding: '12px 22px', background: 'linear-gradient(135deg, #C9A84C, #E2C46A)', color: '#1A1A1A', border: 'none', cursor: 'pointer', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              Submit Custom RFQ
            </button>
          </Link>
        </div>
      </div>

      <InquiryModal open={modal} onClose={() => setModal(false)} product={selProd} />
    </>
  )
}
