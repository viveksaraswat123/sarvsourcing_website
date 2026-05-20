import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import WhatsAppButton from './components/ui/WhatsAppButton.jsx'

import HomePage          from './pages/HomePage.jsx'
import ProductsPage      from './pages/ProductsPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import AboutPage         from './pages/AboutPage.jsx'
import ContactPage       from './pages/ContactPage.jsx'
import QuotePage         from './pages/QuotePage.jsx'
import AdminPage         from './pages/AdminPage.jsx'

// Page transition wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

// Layout wraps all pages except admin
function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <MainLayout>
            <PageWrapper><HomePage /></PageWrapper>
          </MainLayout>
        } />
        <Route path="/products" element={
          <MainLayout>
            <PageWrapper><ProductsPage /></PageWrapper>
          </MainLayout>
        } />
        <Route path="/products/:id" element={
          <MainLayout>
            <PageWrapper><ProductDetailPage /></PageWrapper>
          </MainLayout>
        } />
        <Route path="/about" element={
          <MainLayout>
            <PageWrapper><AboutPage /></PageWrapper>
          </MainLayout>
        } />
        <Route path="/contact" element={
          <MainLayout>
            <PageWrapper><ContactPage /></PageWrapper>
          </MainLayout>
        } />
        <Route path="/quote" element={
          <MainLayout>
            <PageWrapper><QuotePage /></PageWrapper>
          </MainLayout>
        } />
        {/* Admin - no footer/whatsapp */}
        <Route path="/admin" element={
          <>
            <Navbar />
            <PageWrapper><AdminPage /></PageWrapper>
          </>
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
