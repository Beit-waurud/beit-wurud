# بيت ورود — Beit Wurud Website

A beautiful React café website for Beit Wurud (بيت ورود).

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start
```

The site will open at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

This creates an optimized `build/` folder ready to deploy.

---

## 📁 Project Structure

```
src/
├── App.jsx                  ← Main app
├── index.js                 ← Entry point
├── index.css                ← Global styles & keyframe animations
├── data/
│   └── menuData.js          ← ✏️  Edit prices & items here
└── components/
    ├── Navbar.jsx            ← Top navigation bar
    ├── Navbar.css            ← Navbar styles
    ├── FloatingPetals.jsx    ← Animated petal background
    ├── HeroCups.jsx          ← Animated SVG cups hero
    ├── CupIllustration.jsx   ← Single SVG cup component
    ├── QuickNav.jsx          ← Category scroll nav bar
    ├── CategorySection.jsx   ← Collapsible menu section
    └── MenuCard.jsx          ← Individual menu item card
```

---

## ✏️ How to Edit

### Update Prices / Items
Open `src/data/menuData.js` and edit any item:

```js
{ id: 1, name: "Espresso", price: 3.3, description: "Your description here" },
```

### Add Your Logo
1. Place your logo image in the `public/` folder (e.g. `public/logo.png`)
2. Open `src/components/Navbar.jsx`
3. Find the comment `── LOGO ──` and replace the `<span>` with:
```jsx
<img src="/logo.png" alt="بيت ورود" style={{width:'100%',height:'100%',objectFit:'cover'}} />
```

### Change Colors
Each category color is defined in `src/data/menuData.js`:

```js
export const categoryConfig = {
  hot:       { label: "Hot",       icon: "☕", color: "#c17b5a" },
  cold:      { label: "Cold",      icon: "🧊", color: "#6baed6" },
  ...
};
```

---

## 🌸 Flower Shop
The "Flower Shop" button in the navbar links to:
`https://beit-wurud.menugic.com/`

To change this link, edit `src/components/Navbar.jsx` → `handleFlowerClick`.

---

## 🚢 Deployment

You can deploy the `build/` folder to:
- **Netlify** — drag & drop the build folder
- **Vercel** — connect your GitHub repo
- **GitHub Pages** — use the `gh-pages` package
