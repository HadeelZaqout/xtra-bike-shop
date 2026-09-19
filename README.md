# XTRA Bike Shop — React + Vite

A pixel-perfect React recreation of the XTRA Bike Shop WordPress theme, built for study purposes.

## Getting Started

**Requirements:** Node.js 18+ and npm (or pnpm/yarn)

```bash
# Install dependencies
npm install

# Start the dev server (opens at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/blog` | Blog |
| `/shop` | Shop |
| `/faq` | FAQ |
| `/contact` | Contact |

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Wouter (client-side routing)
- Bootstrap 5 + Bootstrap Icons
- AOS (scroll animations)
- Fontsource (Inter + Poppins)

## Notes

- All product images are loaded from the xtratheme.com CDN
- No backend required — this is a purely frontend/presentational project
- Cart and wishlist state is managed in React context (resets on page refresh)
