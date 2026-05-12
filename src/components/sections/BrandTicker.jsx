import { brands } from '../../data/index.js'

export default function BrandTicker() {
  const doubled = [...brands, ...brands]

  return (
    <section style={{ background: '#FAFAFA', borderTop: '1px solid #EBEBEB', borderBottom: '1px solid #EBEBEB', padding: '28px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', paddingLeft: 24, marginBottom: 12 }}>
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#A8A8A8',
          marginBottom: 18,
        }}>
          Brands We Source From
        </p>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div
          className="ticker-track"
          style={{ display: 'flex', gap: 0, width: 'max-content' }}
        >
          {doubled.map((brand, i) => (
            <div
              key={i}
              style={{
                padding: '10px 36px',
                borderRight: '1px solid #E8E8E8',
                fontFamily: "'Poppins', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: '#A8A8A8',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
              onMouseLeave={e => e.currentTarget.style.color = '#A8A8A8'}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
