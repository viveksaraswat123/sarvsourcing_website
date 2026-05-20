export default function SarvLogo({
  variant = 'dark',
  size = 'md',
}) {
  const sizes = {
    sm: {
      logo: 34,
      textSize: 14,
      subSize: 8,
    },

    md: {
      logo: 46,
      textSize: 18,
      subSize: 10,
    },

    lg: {
      logo: 60,
      textSize: 24,
      subSize: 12,
    },

    xl: {
      logo: 82,
      textSize: 32,
      subSize: 15,
    },
  }

  const s = sizes[size] || sizes.md

  const gold = '#C9A84C'

  const subColor =
    variant === 'dark'
      ? 'rgba(255,255,255,0.62)'
      : '#666666'

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        userSelect: 'none',
      }}
    >
      {/* Logo Image */}
      <img
        src="/logo1.png"
        alt="SARV Logo"
        style={{
          width: s.logo,
          height: s.logo,
          objectFit: 'contain',
          flexShrink: 0,

          filter:
            variant === 'dark'
              ? 'drop-shadow(0 2px 8px rgba(201,168,76,0.18))'
              : 'none',
        }}
      />

      {/* Text */}
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