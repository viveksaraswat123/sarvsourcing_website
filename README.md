# SARV Sourcing Solutions — Frontend

**Powering Connections. Delivering Solutions.**

Production-ready React frontend for the SARV Sourcing Solutions B2B sourcing platform.

---

## Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Framework    | React 18 + Vite                     |
| Styling      | Tailwind CSS + custom CSS variables |
| Animation    | Framer Motion                       |
| Routing      | React Router DOM v6                 |
| HTTP         | Axios (ready for API integration)   |
| Fonts        | Poppins + Inter (Google Fonts)      |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Development server runs at `http://localhost:3000`

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Fixed top nav, scroll-aware, mobile menu
│   │   └── Footer.jsx          # Full footer with links, newsletter
│   ├── sections/
│   │   ├── Hero.jsx            # Home hero section
│   │   └── BrandTicker.jsx     # Auto-scrolling brand marquee
│   └── ui/
│       ├── index.jsx           # Shared: GoldLine, SectionLabel, Buttons, Forms, FadeUp
│       ├── SarvLogo.jsx        # SVG brand mark + wordmark
│       ├── ProductCard.jsx     # Product listing card
│       ├── InquiryModal.jsx    # Quote/inquiry popup
│       └── WhatsAppButton.jsx  # Floating WhatsApp CTA
├── pages/
│   ├── HomePage.jsx            # Full home page
│   ├── ProductsPage.jsx        # Catalog with search + filters
│   ├── ProductDetailPage.jsx   # Single product view
│   ├── AboutPage.jsx           # Company story, timeline, values
│   ├── ContactPage.jsx         # Contact form + info
│   ├── QuotePage.jsx           # RFQ submission form
│   └── AdminPage.jsx           # Admin dashboard (protected)
├── data/
│   └── index.js                # Products, categories, testimonials data
├── App.jsx                     # Router + layout wrappers
├── main.jsx                    # React entry point
└── index.css                   # Global styles + Tailwind
```

---

## Pages

| Route             | Description                              |
|-------------------|------------------------------------------|
| `/`               | Home — hero, categories, products, stats |
| `/products`       | Full catalog with search + category filter |
| `/products/:id`   | Product detail with specs table          |
| `/about`          | Company story, values, timeline          |
| `/contact`        | Contact form + office details            |
| `/quote`          | RFQ submission form                      |
| `/admin`          | Admin dashboard (add auth gate)          |

---

## Brand Colors

```css
--gold-primary:  #C9A84C   /* Main gold */
--gold-light:    #E2C46A   /* Light gold, gradients */
--gold-dark:     #9A7A08   /* Dark gold, text */
--gold-pale:     #FAF4D8   /* Light gold backgrounds */
--charcoal:      #1A1A1A   /* Primary dark */
--dark-bg:       #0F0F0F   /* Hero / dark sections */
```

---

## Connecting to Backend (FastAPI)

The frontend is ready for API integration. Update the base URL in `src/utils/api.js`:

```js
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  headers: { 'Content-Type': 'application/json' },
})

export default api
```

Set `VITE_API_URL` in your `.env` file:
```
VITE_API_URL=https://api.sarvsourcing.com
```

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Add `vercel.json` for SPA routing:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Hostinger VPS / Nginx

```bash
# Build
npm run build

# Copy dist/ to web root
scp -r dist/* user@your-server:/var/www/sarvsourcing.com/

# Nginx config
server {
  listen 80;
  server_name sarvsourcing.com www.sarvsourcing.com;
  root /var/www/sarvsourcing.com;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  gzip on;
  gzip_types text/html text/css application/javascript;
}
```

---

## Environment Variables

Create `.env` in the project root:

```env
VITE_API_URL=https://api.sarvsourcing.com
VITE_WHATSAPP_NUMBER=918708591236
VITE_GA_ID=G-XXXXXXXXXX
```

---

## Adding Real Products

Replace the static data in `src/data/index.js` with API calls once the backend is ready. The `ProductsPage` and `ProductDetailPage` are already structured to accept fetched data.

---

## Admin Authentication

The `/admin` route is currently open. To protect it:

1. Add a login page (`/admin/login`)
2. Store JWT in `localStorage` or `httpOnly` cookie
3. Use a `<ProtectedRoute>` wrapper that checks auth state
4. Backend: FastAPI JWT endpoint

---

## SEO

- Meta tags set in `index.html`
- Add `react-helmet-async` for per-page meta tags
- Add `sitemap.xml` and `robots.txt` to `/public`
- Target keywords: electronic components supplier India, Molex connectors supplier, JST connectors India, specialty cable supplier

---

## Contact

**SARV Sourcing Solutions**  
E907, Stellar MI Citihomes, Sector Omicron 3, Greater Noida – 201310  
Phone: +91 87085 91236  
Email: sarvsourcing@gmail.com  
Web: sarvsourcing.com
