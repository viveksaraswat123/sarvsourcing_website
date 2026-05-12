import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Gold horizontal divider line
export function GoldLine({ wide = false }) {
  return (
    <span
      style={{
        display: 'block',
        width: wide ? 64 : 40,
        height: 2,
        background: 'linear-gradient(90deg, #C9A84C, #E2C46A)',
        margin: '14px 0',
      }}
    />
  )
}

// Section label ("Products" / "About Us" etc.)
export function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily: "'Poppins', sans-serif",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#C9A84C',
    }}>
      {children}
    </p>
  )
}

// Animated reveal on scroll
export function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Primary gold button
export function BtnPrimary({ children, onClick, href, className = '', type = 'button' }) {
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '13px 28px',
    background: 'linear-gradient(135deg, #C9A84C, #E2C46A)',
    color: '#1A1A1A',
    fontFamily: "'Poppins', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  }
  if (href) return <a href={href} style={style} className={className}>{children}</a>
  return <button type={type} onClick={onClick} style={style} className={className}>{children}</button>
}

// Secondary outlined button
export function BtnOutline({ children, onClick, href, dark = false, className = '' }) {
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '12px 28px',
    background: 'transparent',
    color: dark ? '#1A1A1A' : '#FFFFFF',
    fontFamily: "'Poppins', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    border: `1px solid ${dark ? '#C9A84C' : 'rgba(255,255,255,0.3)'}`,
    cursor: 'pointer',
    transition: 'all 0.2s',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  }
  if (href) return <a href={href} style={style} className={className}>{children}</a>
  return <button onClick={onClick} style={style} className={className}>{children}</button>
}

// Product availability badge
export function AvailBadge({ status }) {
  const inStock = status === 'In Stock'
  return (
    <span style={{
      display: 'inline-block',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '3px 9px',
      color: inStock ? '#166534' : '#92400E',
      background: inStock ? '#F0FDF4' : '#FFFBEB',
      fontFamily: "'Poppins', sans-serif",
    }}>
      {status}
    </span>
  )
}

// Category pill/tag
export function CategoryTag({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '3px 10px',
      color: '#9A7A08',
      background: '#FAF4D8',
      fontFamily: "'Poppins', sans-serif",
    }}>
      {children}
    </span>
  )
}

// Form input
export function FormInput({ label, type = 'text', placeholder, value, onChange, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label style={{
        fontFamily: "'Poppins', sans-serif",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#555555',
      }}>
        {label}{required && <span style={{ color: '#C9A84C', marginLeft: 2 }}>*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          width: '100%',
          padding: '11px 14px',
          fontSize: 14,
          fontFamily: "'Inter', sans-serif",
          color: '#1A1A1A',
          background: '#FFFFFF',
          border: '1px solid #E8E8E8',
          outline: 'none',
          transition: 'border-color 0.2s',
        }}
        onFocus={e => e.target.style.borderColor = '#C9A84C'}
        onBlur={e => e.target.style.borderColor = '#E8E8E8'}
      />
    </div>
  )
}

export function FormSelect({ label, options, value, onChange, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label style={{
        fontFamily: "'Poppins', sans-serif",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#555555',
      }}>
        {label}{required && <span style={{ color: '#C9A84C', marginLeft: 2 }}>*</span>}
      </label>
      <select
        value={value}
        onChange={onChange}
        required={required}
        style={{
          width: '100%',
          padding: '11px 14px',
          fontSize: 14,
          fontFamily: "'Inter', sans-serif",
          color: '#1A1A1A',
          background: '#FFFFFF',
          border: '1px solid #E8E8E8',
          outline: 'none',
          transition: 'border-color 0.2s',
          cursor: 'pointer',
          appearance: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%236B6B6B' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 14px center',
        }}
        onFocus={e => e.target.style.borderColor = '#C9A84C'}
        onBlur={e => e.target.style.borderColor = '#E8E8E8'}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  )
}

export function FormTextarea({ label, placeholder, value, onChange, required, rows = 4 }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label style={{
        fontFamily: "'Poppins', sans-serif",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#555555',
      }}>
        {label}{required && <span style={{ color: '#C9A84C', marginLeft: 2 }}>*</span>}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        style={{
          width: '100%',
          padding: '11px 14px',
          fontSize: 14,
          fontFamily: "'Inter', sans-serif",
          color: '#1A1A1A',
          background: '#FFFFFF',
          border: '1px solid #E8E8E8',
          outline: 'none',
          resize: 'vertical',
          transition: 'border-color 0.2s',
        }}
        onFocus={e => e.target.style.borderColor = '#C9A84C'}
        onBlur={e => e.target.style.borderColor = '#E8E8E8'}
      />
    </div>
  )
}
