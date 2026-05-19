export default function SarvLogo({ variant = 'dark', size = 'md' }) {
  const sizes = {
    sm: { mark: 34, textSize: 14, subSize: 8 },
    md: { mark: 46, textSize: 18, subSize: 10 },
    lg: { mark: 60, textSize: 24, subSize: 12 },
    xl: { mark: 82, textSize: 32, subSize: 15 },
  }

  const s = sizes[size] || sizes.md

  const textColor =
    variant === 'dark' ? '#FFFFFF' : '#111111'

  const subColor =
    variant === 'dark'
      ? 'rgba(255,255,255,0.62)'
      : '#666666'

  const gold = '#C9A84C'
  const goldLight = '#E5C76B'

  const gradientId = `goldGrad-${size}-${variant}`

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        userSelect: 'none',
      }}
    >
      {/* Logo Mark */}
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          flexShrink: 0,
        }}
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={goldLight} />
            <stop offset="100%" stopColor={gold} />
          </linearGradient>
        </defs>

        {/* Outer Ring */}
        <path
          d="M40 6 A34 34 0 1 1 6 40"
          stroke={`url(#${gradientId})`}
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Inner Ring */}
        <path
          d="M40 16 A24 24 0 1 0 64 40"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* S Shape */}
        <path
          d="M49 27
             c-1.8-2.8-5-4.5-9-4.5
             c-5.5 0-9.5 3.2-9.5 7.8
             c0 4 2.8 6.2 8 8
             l2.5 0.8
             c3.5 1.1 5 2.5 5 4.5
             c0 2.8-2.5 4.8-6.5 4.8
             c-3.5 0-6.2-1.5-7.8-4.2"
          stroke={`url(#${gradientId})`}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Wordmark */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          lineHeight: 1,
        }}
      >
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: s.textSize,
            color: gold,
            letterSpacing: '0.14em',
            lineHeight: 1,
          }}
        >
          SARV
        </div>

        <div
          style={{
            marginTop: 4,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            fontSize: s.subSize,
            color: subColor,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
          }}
        >
          SOURCING SOLUTIONS
        </div>
      </div>
    </div>
  )
}