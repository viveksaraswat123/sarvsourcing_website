export default function SarvLogo({
  variant = 'dark',
  size = 'md',
}) {
  const sizes = {
    sm: {
      logo: 30,
      textSize: 13,
      subSize: 7,
    },

    md: {
      logo: 40,
      textSize: 17,
      subSize: 9,
    },

    lg: {
      logo: 52,
      textSize: 22,
      subSize: 11,
    },

    xl: {
      logo: 74,
      textSize: 30,
      subSize: 14,
    },
  }

  const s = sizes[size] || sizes.md

  const gold = '#C9A84C'

  const subColor =
    variant === 'dark'
      ? 'rgba(255,255,255,0.78)'
      : '#666666'

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        userSelect: 'none',
      }}
    >
      {/* Logo */}
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
              ? 'drop-shadow(0 2px 10px rgba(201,168,76,0.22))'
              : 'none',
        }}
      />

      {/* Text */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          transform: 'translateY(-1px)',
        }}
      >
        {/* Main Brand */}
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: s.textSize,
            color: gold,
            letterSpacing: '0.08em',
            lineHeight: 1,
          }}
        >
          SARV
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: 3,

            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,

            fontSize: s.subSize,

            color: subColor,

            letterSpacing: '0.10em',

            textTransform: 'uppercase',

            lineHeight: 1.1,

            whiteSpace: 'nowrap',
          }}
        >
          SOURCING SOLUTIONS
        </div>
      </div>
    </div>
  )
}