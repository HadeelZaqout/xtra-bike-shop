<div align="center">

# XTRA Bike Shop
### React E-Commerce Frontend

*A pixel-perfect React recreation of the XTRA Bike Shop WordPress theme — built for study purposes during my internship.*

![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

</div>

---

## 📋 About

This project is a **pixel-perfect recreation** of the XTRA Bike Shop WordPress theme, rebuilt from scratch in React — not a clone of the code, a clone of the *design*, done to practice matching a real, polished UI exactly using modern frontend tooling.

Built during my internship at **Webura**, a software services company (Jun–Aug 2026).

## 🧩 Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/shop` | Shop |
| `/blog` | Blog |
| `/faq` | FAQ |
| `/contact` | Contact |

## 🏗️ What's Inside

- **Client-side routing** with Wouter across 6 pages
- **Cart & wishlist state** managed with React Context + `useReducer` (not just `useState` — proper action-based state updates)
- **Scroll animations** with AOS
- Custom preloader, floating action buttons, and offcanvas cart/menu — all rebuilt from the original theme's interaction patterns

## ⚙️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Routing | Wouter |
| Styling | Bootstrap 5 + Bootstrap Icons |
| Animation | AOS |

## 🚀 Running Locally

```bash
git clone https://github.com/HadeelZaqout/xtra-bike-shop.git
cd xtra-bike-shop
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Notes

- Product images are loaded from the original theme's CDN for visual accuracy
- Purely frontend — no backend, cart/wishlist state resets on refresh
- Built to practice matching a real production UI exactly, not as an original design

---

<div align="center">

Built by [Hadeel Zaqout](https://github.com/HadeelZaqout) during the Webura internship

</div>
