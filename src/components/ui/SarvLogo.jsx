// SarvLogo — SVG recreation of the SARV Sourcing Solutions brand mark
// Gold metallic S-in-circle mark + SARV wordmark

export default function SarvLogo({ variant = 'dark', size = 'md' }) {
  const sizes = {
    sm: { mark: 32, textSize: 14, subSize: 9 },
    md: { mark: 42, textSize: 17, subSize: 10 },
    lg: { mark: 56, textSize: 22, subSize: 12 },
    xl: { mark: 80, textSize: 30, subSize: 16 },
  }
  const s = sizes[size] || sizes.md
  const textColor = variant === 'light' ? '#FFFFFF' : '#1A1A1A'
  const subColor  = variant === 'light' ? 'rgba(255,255,255,0.55)' : '#6B6B6B'
  const gold = '#C9A84C'
  const goldLight = '#E2C46A'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: s.mark * 0.28 }}>
      {/* Mark: S inside broken circle */}
      <svg width={s.mark} height={s.mark} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gold} />
            <stop offset="100%" stopColor={goldLight} />
          </linearGradient>
        </defs>
        {/* Outer ring — broken circle: top-right gap */}
        <path
          d="M40 6 A34 34 0 1 1 6 40"
          stroke="url(#goldGrad)" strokeWidth="5" strokeLinecap="round" fill="none"
        />
        {/* Inner ring — smaller, lighter */}
        <path
          d="M40 16 A24 24 0 1 0 64 40"
          stroke="#D4D4D4" strokeWidth="3.5" strokeLinecap="round" fill="none"
        />
        {/* S letterform */}
        <path
          d="M49 27c-1.8-2.8-5-4.5-9-4.5-5.5 0-9.5 3.2-9.5 7.8 0 4 2.8 6.2 8 8l2.5 0.8c3.5 1.1 5 2.5 5 4.5 0 2.8-2.5 4.8-6.5 4.8-3.5 0-6.2-1.5-7.8-4.2"
          stroke="url(#goldGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
      </svg>

      {/* Wordmark */}
      <div style={{ lineHeight: 1 }}>
        <div style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: s.textSize,
          color: gold,
          letterSpacing: '0.12em',
          lineHeight: 1,
          marginBottom: 2,
        }}>
          SARV
        </div>
        <div style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          fontSize: s.subSize,
          color: subColor,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          lineHeight: 1,
        }}>
          Sourcing Solutions
        </div>
      </div>
    </div>
  )
}
