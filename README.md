# 🏋️ FITNESS SPORTS CENTER — Promotional Website

A fully responsive, modern promotional website for **FITNESS SPORTS CENTER** built with **Next.js 16 App Router**, **React**, and **Tailwind CSS**.

---

## 🚀 Live Demo
👉 https://fitness-sport-center-sl.vercel.app/

## ✨ Features

- **Next.js 16** with App Router (`/app` directory)
- **Tailwind CSS** — utility-first styling with custom theme tokens
- **Fully responsive** — mobile-first design, tested from 320px upward
- **Smooth scroll animations** — Intersection Observer–powered reveal effects
- **Custom animated navbar** — scroll-aware, with mobile slide menu
- **Image gallery** — hover zoom effects
- **Contact form** — client-side validation + loading + success state


---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Hero, About, Gallery, Testimonials |
| `/services` | 6 service cards — Weight Training, Cardio, PT, Yoga, CrossFit, Group |
| `/pricing` | 3 pricing tiers — Basic, Standard, Premium + FAQ |
| `/contact` | Inquiry form with full validation & success message |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Clone or unzip the project
cd fitness-sport-center-web

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

---


## 📁 Project Structure

```
gym-website/
├── app/
│   ├── layout.js          # Root layout (Navbar + Footer wrapper)
│   ├── page.js            # Home page
│   ├── not-found.js       # Custom 404 page
│   ├── globals.css        # Global styles + Tailwind directives
│   ├── services/
│   │   └── page.js        # Services page
│   ├── pricing/
│   │   └── page.js        # Membership Plans page
│   └── contact/
│       └── page.js        # Contact page (client component)
├── components/
│   ├── Navbar.js          # Sticky responsive navbar
│   ├── Footer.js          # Footer with social links
├── public/                # Static assets (add images here)
├── postcss.config.mjs
├── assets
├── next.config.mjs
├── jsconfig.json
└── package.json
```





## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| `next` | 16.1.7 | Framework |
| `react` | 19 | UI library |
| `react-dom` | 19.2.3 | DOM renderer |
| `lucide-react` | 0.577.0 | Icon library |
| `tailwindcss` | 4 | CSS framework |