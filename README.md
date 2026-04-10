# 🏫 Pralay Meas Primary School Website
## សាលាបឋមសិក្សាប្រឡាយមាស

A bilingual (English/Khmer) school website built with **React + Vite**.

---

## ✨ Features
- Full bilingual English & Khmer content
- Dark Navy + Gold color theme
- Page loading animation with school emblem
- Smooth page transitions with fade effects
- Sticky navbar with scroll shadow + mobile hamburger menu
- Hover effects on all cards (lift + glow)
- Staggered entrance animations on every section
- Responsive design for all screen sizes (mobile, tablet, desktop)
- 5 pages: Home, About, Team, News, Contact
- Contact form with success state
- News filtering by category
- Animated map pin on Contact page
- Custom gold scrollbar

---

## 📁 Project Structure

```
pralay-meas/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx / App.css
    ├── index.css            ← global styles & variables
    └── components/
        ├── Loader.jsx / .css
        ├── Navbar.jsx / .css
        ├── Home.jsx / .css
        ├── About.jsx / .css
        ├── Management.jsx / .css
        ├── News.jsx / .css
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Then open: http://localhost:5173

### 3. Build for production
```bash
npm run build
```

---

## 📝 Customizing Content

### Add real teacher/staff names:
Edit `src/components/Management.jsx`:
```js
const leadership = [
  { name: 'Mr. Dara Chea', nameKm: 'ដារា ជា', role: 'Principal', ... },
]
const teachers = [
  { name: 'Mrs. Sophea Keo', grade: 'Kindergarten', ... },
  ...
]
```

### Add real address & contact:
Edit `src/components/Contact.jsx`:
```js
const contactInfo = [
  { valEn: 'Street 123, Phnom Penh', valKm: 'ផ្លូវ ១២៣, ភ្នំពេញ' },
  ...
]
```

### Embed a real Google Map:
In `src/components/Contact.jsx`, replace the `.map-embed` div with:
```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%" height="220" style={{border:0}}
  allowFullScreen loading="lazy"
/>
```

### Add real news:
Edit the `allNews` array in `src/components/News.jsx`.

---

## 🌐 Deployment

### Deploy to Netlify (free):
1. Run `npm run build`
2. Drag the `dist/` folder to https://netlify.com/drop

### Deploy to Vercel:
```bash
npx vercel
```

---

## 🎨 Color Customization
Edit CSS variables in `src/index.css`:
```css
:root {
  --navy:       #0a1f3c;   /* main background */
  --gold:       #c9972a;   /* accent color */
  --gold-light: #e4b84a;   /* lighter gold */
}
```
