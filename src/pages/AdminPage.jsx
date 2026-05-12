import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const mockInquiries = [
  { id: 'INQ-001', company: 'TechMfg Industries', product: 'Molex MX150 Connector', qty: '5,000 pcs', date: '12 May 2024', status: 'new' },
  { id: 'INQ-002', company: 'AutoDrive Components', product: 'JST XH Connectors',   qty: '10,000 pcs', date: '11 May 2024', status: 'in-progress' },
  { id: 'INQ-003', company: 'Sunrise Infrastructure', product: 'LED Bulbs 9W',      qty: '2,000 pcs', date: '10 May 2024', status: 'quoted' },
  { id: 'INQ-004', company: 'InfraIT Pvt Ltd',     product: 'HP AIO PC 22"',        qty: '20 units',  date: '9 May 2024',  status: 'new' },
  { id: 'INQ-005', company: 'Cable Corp India',    product: 'Tinned Copper Cable',  qty: '500m',      date: '8 May 2024',  status: 'converted' },
]

const statusConfig = {
  'new':         { label: 'New',         bg: '#EEF2FF', color: '#4338CA' },
  'in-progress': { label: 'In Progress', bg: '#FFFBEB', color: '#B45309' },
  'quoted':      { label: 'Quoted',      bg: '#F0FDF4', color: '#15803D' },
  'converted':   { label: 'Converted',   bg: '#FAF4D8', color: '#9A7A08' },
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'products',  label: 'Products' },
  { id: 'categories',label: 'Categories' },
  { id: 'inquiries', label: 'Inquiries' },
  { id: 'leads',     label: 'Leads' },
]

export default function AdminPage() {
  const [activeNav, setActiveNav] = useState('dashboard')
  const [inquiries, setInquiries] = useState(mockInquiries)

  const updateStatus = (id, status) => {
    setInquiries(inq => inq.map(i => i.id === id ? { ...i, status } : i))
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F5F5F5', paddingTop: 64 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: 'calc(100vh - 64px)' }}>
        {/* Sidebar */}
        <div style={{ background: '#111111', borderRight: '1px solid rgba(201,168,76,0.15)' }}>
          <div style={{ padding: '20px 0 8px' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.5)', padding: '0 20px', marginBottom: 8 }}>
              Administration
            </p>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                style={{
                  display: 'block', width: '100%', padding: '11px 20px',
                  border: 'none',
                  borderRight: activeNav === item.id ? '2px solid #C9A84C' : '2px solid transparent',
                  fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: activeNav === item.id ? 600 : 400,
                  color: activeNav === item.id ? '#C9A84C' : 'rgba(255,255,255,0.45)',
                  textAlign: 'left', cursor: 'pointer',
                  background: activeNav === item.id ? 'rgba(201,168,76,0.06)' : 'none',
                  transition: 'all 0.15s',
                  letterSpacing: '0.02em',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '12px 0' }} />
          <Link
            to="/"
            style={{ display: 'block', padding: '11px 20px', fontFamily: "'Poppins', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
          >
            ← Back to Website
          </Link>
        </div>

        {/* Main */}
        <div style={{ padding: '32px 36px' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
            <div>
              <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 800, color: '#1A1A1A', marginBottom: 2 }}>
                Dashboard
              </h1>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#A8A8A8' }}>
                SARV Sourcing Solutions · Admin Panel
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 34, height: 34, background: 'linear-gradient(135deg, #C9A84C, #E2C46A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, color: '#1A1A1A' }}>
                A
              </div>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: '#1A1A1A' }}>Admin</span>
            </div>
          </div>

          {/* Metric cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 28 }}>
            {[
              { num: '542', lbl: 'Total Products',    change: '+12 this month' },
              { num: '87',  lbl: 'Active Inquiries',  change: '+23 this week' },
              { num: '34',  lbl: 'New Leads Today',   change: '↑ 18% vs yesterday' },
              { num: '4.8', lbl: 'Avg. Client Rating', change: 'From 40+ reviews' },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{ background: '#FFFFFF', border: '1px solid #E8E8E8', padding: '18px 20px' }}
              >
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 28, fontWeight: 900, color: '#1A1A1A', lineHeight: 1 }}>{m.num}</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{m.lbl}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#C9A84C', marginTop: 6 }}>{m.change}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick actions */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
            {[
              { label: '+ Add Product',  primary: true },
              { label: 'Upload Images',  primary: false },
              { label: 'Export Report',  primary: false },
              { label: 'Manage Categories', primary: false },
            ].map((btn, i) => (
              <button key={i} style={{
                padding: '9px 18px',
                background: btn.primary ? 'linear-gradient(135deg, #C9A84C, #E2C46A)' : '#FFFFFF',
                color: btn.primary ? '#1A1A1A' : '#555555',
                border: btn.primary ? 'none' : '1px solid #E8E8E8',
                fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600,
                letterSpacing: '0.04em', cursor: 'pointer', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Inquiries table */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E8E8E8' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #E8E8E8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: '#1A1A1A' }}>
                Recent Inquiries
              </p>
              <button style={{ padding: '7px 14px', background: 'none', border: '1px solid #E8E8E8', fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, color: '#6B6B6B', cursor: 'pointer', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#E8E8E8'}
              >
                View All
              </button>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#FAFAFA' }}>
                    {['ID', 'Company', 'Product', 'Qty', 'Date', 'Status', 'Action'].map(h => (
                      <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontFamily: "'Poppins', sans-serif", fontSize: 10, fontWeight: 600, color: '#A8A8A8', textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap', borderBottom: '1px solid #F0F0F0' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((row, i) => {
                    const sc = statusConfig[row.status]
                    return (
                      <tr key={row.id} style={{ borderBottom: i < inquiries.length - 1 ? '1px solid #F8F8F8' : 'none' }}>
                        <td style={{ padding: '12px 16px', fontFamily: "'Inter', monospace", fontSize: 12, color: '#A8A8A8' }}>{row.id}</td>
                        <td style={{ padding: '12px 16px', fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: '#1A1A1A', whiteSpace: 'nowrap' }}>{row.company}</td>
                        <td style={{ padding: '12px 16px', fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#555555' }}>{row.product}</td>
                        <td style={{ padding: '12px 16px', fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, color: '#C9A84C', whiteSpace: 'nowrap' }}>{row.qty}</td>
                        <td style={{ padding: '12px 16px', fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#A8A8A8', whiteSpace: 'nowrap' }}>{row.date}</td>
                        <td style={{ padding: '12px 16px' }}>
                          <select
                            value={row.status}
                            onChange={e => updateStatus(row.id, e.target.value)}
                            style={{ padding: '4px 8px', background: sc.bg, color: sc.color, border: 'none', fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, cursor: 'pointer', outline: 'none' }}
                          >
                            <option value="new">New</option>
                            <option value="in-progress">In Progress</option>
                            <option value="quoted">Quoted</option>
                            <option value="converted">Converted</option>
                          </select>
                        </td>
                        <td style={{ padding: '12px 16px' }}>
                          <button style={{ padding: '5px 12px', background: 'linear-gradient(135deg, #C9A84C, #E2C46A)', color: '#1A1A1A', border: 'none', fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 700, cursor: 'pointer', letterSpacing: '0.04em' }}>
                            Respond
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
