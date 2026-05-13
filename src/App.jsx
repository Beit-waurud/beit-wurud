import { useState, useEffect, useRef } from "react";

// ─── MENU DATA ────────────────────────────────────────────────────────────────
const menuData = {
  hot: [
    { id: 1,  name: "Espresso",         price: 3.3, description: "Rich, concentrated shot of pure coffee" },
    { id: 2,  name: "Double Espresso",  price: 4.4, description: "Double the intensity, double the pleasure" },
    { id: 3,  name: "Cappuccino",       price: 5.0, description: "Espresso with velvety steamed milk foam" },
    { id: 4,  name: "Latte",            price: 5.0, description: "Smooth espresso with creamy steamed milk" },
    { id: 5,  name: "Flat White",       price: 4.4, description: "Velvety micro-foam over bold espresso" },
    { id: 6,  name: "Cortado",          price: 4.4, description: "Equal parts espresso and warm milk" },
    { id: 7,  name: "Spanish Latte",    price: 5.5, description: "Espresso with condensed milk and steamed milk" },
    { id: 8,  name: "Raff",             price: 6.0, description: "Our signature cream-whipped espresso blend" },
    { id: 9,  name: "Halawa Latte",     price: 5.5, description: "Espresso with tahini halawa cream" },
    { id: 10, name: "Beit Wurud Latte", price: 5.5, description: "Our special house latte blend" },
    { id: 11, name: "Flavored Latte",   price: 5.5, description: "Latte with your choice of house syrups" },
    { id: 12, name: "V60",              price: 5.5, description: "Precision pour-over, bright and clean" },
    { id: 13, name: "French Press",     price: 5.5, description: "Full-bodied, bold immersion brew" },
    { id: 14, name: "Americano",        price: 4.0, description: "Espresso diluted with hot water" },
  ],
  cold: [
    { id: 15, name: "Cold Brew",           price: 5.0, description: "12-hour steeped, smooth and low-acid" },
    { id: 16, name: "Matcha",              price: 4.4, description: "Japanese ceremonial grade matcha latte" },
    { id: 17, name: "Iced Beit Wurud",     price: 5.5, description: "Our signature drink served iced" },
    { id: 18, name: "Iced Latte",          price: 5.0, description: "Espresso over ice with cold milk" },
    { id: 19, name: "Spanish Home Made",   price: 5.5, description: "House-made Spanish latte on ice" },
    { id: 20, name: "Mazagran",            price: 5.0, description: "Iced espresso with lemon and mint" },
    { id: 21, name: "Flavored Iced Latte", price: 5.5, description: "Iced latte with seasonal flavors" },
    { id: 22, name: "Banoffee Caramel",    price: 5.5, description: "Banana, toffee and caramel iced drink" },
    { id: 23, name: "Iced Shaken Mocca",   price: 5.5, description: "Shaken chocolate espresso on ice" },
    { id: 24, name: "Crème Brûlée",        price: 5.5, description: "Caramelized custard inspired iced latte" },
  ],
  frappe: [
    { id: 25, name: "White Mocca Frappe",    price: 5.5, description: "White chocolate blended frappe" },
    { id: 26, name: "Spanish Frappe",        price: 5.5, description: "Blended Spanish latte with condensed milk" },
    { id: 27, name: "Banoffee Frappe",       price: 5.5, description: "Banana toffee cream blended frappe" },
    { id: 28, name: "Beit Wurud Frappe",     price: 5.5, description: "Our signature blend, frozen" },
    { id: 29, name: "Salted Caramel Frappe", price: 5.5, description: "Sweet and salty caramel blended" },
    { id: 30, name: "Caramel Frappe",        price: 5.5, description: "Classic caramel blended frappe" },
  ],
  smoothies: [
    { id: 31, name: "Mango Smoothie",      price: 5.5, description: "Fresh mango blended with yogurt" },
    { id: 32, name: "Strawberry Smoothie", price: 5.5, description: "Ripe strawberries, fresh and vibrant" },
    { id: 33, name: "Passion Smoothie",    price: 5.5, description: "Tropical passion fruit blend" },
    { id: 34, name: "Apple Smoothie",      price: 5.5, description: "Crisp apple with a hint of ginger" },
    { id: 35, name: "Peach Smoothie",      price: 5.5, description: "Velvety peach blended perfectly" },
  ],
  icedTea: [
    { id: 36, name: "Mango Rose Ice Tea", price: 4.0, description: "Floral rose tea with mango notes" },
  ],
  pastries: [
    { id: 37, name: "Croissant Chocolate", price: 3.5,  description: "Buttery croissant filled with rich dark chocolate", comingSoon: false },
    { id: 38, name: "Croissant Cheese",    price: 3.5,  description: "Flaky croissant with creamy melted cheese filling", comingSoon: false },
    { id: 39, name: "Cinnamon Rolls",      price: 5.0,  description: "Soft spiral rolls with cinnamon sugar and cream glaze", comingSoon: false },
    { id: 40, name: "Profiteroles",        price: 4.0,  description: "Light choux pastry puffs with cream filling", comingSoon: false },
    { id: 41, name: "Cheese Cake",         price: 5.0,  description: "Velvety New York-style cheesecake on a buttery base", comingSoon: false },
    { id: 42, name: "Brownies",            price: 4.0,  description: "Dense, fudgy chocolate brownie squares", comingSoon: false },
    { id: 43, name: "Cookies",             price: 4.0,  description: "Freshly baked cookies with seasonal flavors", comingSoon: false },
    { id: 44, name: "Fondant",             price: 5.0,  description: "Warm chocolate fondant with a molten center", comingSoon: false },
    { id: 45, name: "Carrot Cake",         price: 4.0,  description: "Spiced carrot cake with cream cheese frosting", comingSoon: false },
    { id: 46, name: "Éclair",              price: 4.0,  description: "Classic French éclair with pastry cream and glaze", comingSoon: false },
    { id: 47, name: "Lemon Cake",          price: 2.0,  description: "Zesty lemon sponge — per slice", comingSoon: false, note: "2$ / 1 piece" },
    { id: 48, name: "Marble Cake",         price: 2.0,  description: "Swirled vanilla and chocolate classic — per slice", comingSoon: false, note: "2$ / 1 piece" },
    { id: 49, name: "Mini Cake",           price: 15.0, description: "Custom mini cake crafted to order", comingSoon: false, note: "Pre-order only" },
  ],
  sandwiches: [
    { id: 50, name: "Halloumi Pesto",           price: 5.0, description: "Grilled halloumi with house-made basil pesto", comingSoon: false },
    { id: 51, name: "Turkey and Cheese",         price: 5.0, description: "Sliced turkey with melted cheese on toasted bread", comingSoon: false },
    { id: 52, name: "Chicken Junkless",          price: 6.0, description: "Tender seasoned chicken with fresh greens", comingSoon: false },
    { id: 53, name: "Chicken Caesar Salad",      price: 7.0, description: "Classic Caesar with grilled chicken, romaine and parmesan", comingSoon: false },
    { id: 54, name: "Smokey Cheese Pasta with Chicken", price: 8.0, description: "Creamy smokey cheese pasta tossed with grilled chicken", comingSoon: false },
  ],
};

const categoryConfig = {
  hot:        { label: "Hot",              icon: "☕", color: "#c17b5a" },
  cold:       { label: "Cold",             icon: "🧊", color: "#6baed6" },
  frappe:     { label: "Frappe",           icon: "🥤", color: "#9e6eb5" },
  smoothies:  { label: "Smoothies",        icon: "🌿", color: "#74b87a" },
  icedTea:    { label: "Iced Tea",         icon: "🌹", color: "#d4748b" },
  pastries:   { label: "Pastries & Cakes", icon: "🥐", color: "#b08850" },
  sandwiches: { label: "Sandwiches",       icon: "🥪", color: "#7a9e6e" },
};

// ─── CUP SVG ILLUSTRATION ─────────────────────────────────────────────────────
function CupIllustration({ color = "#c17b5a", steam = true, size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {steam && (
        <>
          <path d="M28 18 Q30 12 28 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="d" values="M28 18 Q30 12 28 6;M28 18 Q26 12 28 6;M28 18 Q30 12 28 6" dur="2s" repeatCount="indefinite"/>
          </path>
          <path d="M36 16 Q38 10 36 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.3s" repeatCount="indefinite"/>
            <animate attributeName="d" values="M36 16 Q38 10 36 4;M36 16 Q34 10 36 4;M36 16 Q38 10 36 4" dur="2.3s" repeatCount="indefinite"/>
          </path>
          <path d="M44 18 Q46 12 44 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.85;0.5" dur="1.8s" repeatCount="indefinite"/>
            <animate attributeName="d" values="M44 18 Q46 12 44 6;M44 18 Q42 12 44 6;M44 18 Q46 12 44 6" dur="1.8s" repeatCount="indefinite"/>
          </path>
        </>
      )}
      {/* Cup body */}
      <path d="M20 24 L23 64 Q23 68 27 68 L53 68 Q57 68 57 64 L60 24 Z" fill="white" stroke={color} strokeWidth="2"/>
      {/* Cup fill */}
      <path d="M22 32 L24.5 62 Q24.5 66 27 66 L53 66 Q55.5 66 55.5 62 L58 32 Z" fill={color} opacity="0.15"/>
      {/* Rim */}
      <rect x="18" y="22" width="44" height="5" rx="2.5" fill={color} opacity="0.8"/>
      {/* Handle */}
      <path d="M57 36 Q72 36 72 46 Q72 56 57 56" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Logo text on cup */}
      <text x="40" y="52" textAnchor="middle" fontSize="6" fill={color} fontFamily="serif" opacity="0.8">بيت ورود</text>
      {/* Flower on cup */}
      <circle cx="40" cy="40" r="5" fill={color} opacity="0.2"/>
      <text x="40" y="43" textAnchor="middle" fontSize="7" fill={color}>✿</text>
    </svg>
  );
}

// ─── FLOATING PETALS ──────────────────────────────────────────────────────────
function FloatingPetals() {
  const petals = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animDuration: `${6 + Math.random() * 8}s`,
    animDelay: `${Math.random() * 5}s`,
    size: `${10 + Math.random() * 16}px`,
    opacity: 0.3 + Math.random() * 0.4,
  }));

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {petals.map(p => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: p.left,
            top: "-20px",
            fontSize: p.size,
            opacity: p.opacity,
            animation: `petalFall ${p.animDuration} ${p.animDelay} infinite linear`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
}

// ─── MENU ITEM CARD ───────────────────────────────────────────────────────────
function MenuCard({ item, color, delay }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const isComingSoon = item.comingSoon;

  return (
    <div
      ref={ref}
      style={{
        background: isComingSoon ? "rgba(245,240,235,0.6)" : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(8px)",
        border: `1px solid ${isComingSoon ? "#ccc5bb" : color + "30"}`,
        borderRadius: "16px",
        padding: "18px 20px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        transition: `all 0.5s ease ${delay}ms`,
        opacity: visible ? (isComingSoon ? 0.75 : 1) : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        cursor: "default",
        boxShadow: `0 2px 16px ${color}10`,
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        if (!isComingSoon) {
          e.currentTarget.style.transform = "translateY(-3px) scale(1.01)";
          e.currentTarget.style.boxShadow = `0 8px 28px ${color}25`;
          e.currentTarget.style.borderColor = `${color}60`;
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = `0 2px 16px ${color}10`;
        e.currentTarget.style.borderColor = isComingSoon ? "#ccc5bb" : `${color}30`;
      }}
    >
      {isComingSoon && (
        <div style={{
          position: "absolute",
          top: "10px",
          right: "12px",
          background: "linear-gradient(135deg, #c17b5a, #d4748b)",
          color: "white",
          fontSize: "0.6rem",
          fontFamily: "'Lato', sans-serif",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "3px 8px",
          borderRadius: "100px",
        }}>
          Coming Soon
        </div>
      )}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px", paddingRight: isComingSoon ? "80px" : "0" }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.05rem", color: isComingSoon ? "#9a8a7a" : "#2a1a0e" }}>
            {item.name}
          </span>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: isComingSoon ? "#b0a090" : color,
            marginLeft: "12px",
            whiteSpace: "nowrap",
          }}>
            {isComingSoon ? "—" : item.note ? `$${item.price.toFixed(0)}` : `$${item.price.toFixed(1)}`}
          </span>
        </div>
        <p style={{ margin: 0, fontSize: "0.82rem", color: "#7a6a5a", fontFamily: "'Lato', sans-serif", lineHeight: 1.4 }}>
          {item.description}
        </p>
        {item.note && !isComingSoon && (
          <span style={{
            display: "inline-block",
            marginTop: "6px",
            fontSize: "0.7rem",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "white",
            background: color,
            padding: "2px 8px",
            borderRadius: "100px",
            opacity: 0.85,
          }}>
            {item.note}
          </span>
        )}
      </div>
    </div>
  );
}

// ─── QUICK NAV ────────────────────────────────────────────────────────────────
function QuickNav({ active }) {
  const scrollTo = (key) => {
    const el = document.getElementById(`section-${key}`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 160;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div style={{
      position: "sticky",
      top: "90px",
      zIndex: 50,
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      justifyContent: "center",
      margin: "0 0 36px",
      padding: "14px 16px",
      background: "rgba(253,246,240,0.95)",
      backdropFilter: "blur(12px)",
      borderRadius: "16px",
      border: "1px solid rgba(193,123,90,0.18)",
      boxShadow: "0 4px 24px rgba(193,123,90,0.12)",
    }}>
      <p style={{
        width: "100%",
        textAlign: "center",
        fontFamily: "'Lato', sans-serif",
        fontSize: "0.68rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#b09080",
        marginBottom: "4px",
      }}>Browse Menu</p>
      {Object.entries(categoryConfig).map(([key, cfg], i) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => scrollTo(key)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "9px 18px",
              borderRadius: "100px",
              border: `1.5px solid ${isActive ? cfg.color : cfg.color + "40"}`,
              background: isActive ? cfg.color : "rgba(255,255,255,0.8)",
              color: isActive ? "white" : cfg.color,
              cursor: "pointer",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              letterSpacing: "0.03em",
              transition: "all 0.25s ease",
              boxShadow: isActive ? `0 4px 14px ${cfg.color}40` : "none",
            }}
            onMouseEnter={e => {
              if (!isActive) {
                e.currentTarget.style.background = cfg.color + "15";
                e.currentTarget.style.borderColor = cfg.color;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 4px 14px ${cfg.color}25`;
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                e.currentTarget.style.background = "rgba(255,255,255,0.8)";
                e.currentTarget.style.borderColor = cfg.color + "40";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }
            }}
          >
            <span style={{ fontSize: "1rem" }}>{cfg.icon}</span>
            {cfg.label}
          </button>
        );
      })}
    </div>
  );
}

// ─── CATEGORY SECTION ─────────────────────────────────────────────────────────
function CategorySection({ categoryKey, onVisible }) {
  const config = categoryConfig[categoryKey];
  const items = menuData[categoryKey];
  const [open, setOpen] = useState(true);
  const headerRef = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible?.(categoryKey); },
      { threshold: 0.3 }
    );
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, [categoryKey, onVisible]);

  return (
    <div id={`section-${categoryKey}`} style={{ marginBottom: "40px", scrollMarginTop: "120px" }}>
      <button
        ref={headerRef}
        onClick={() => setOpen(o => !o)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "20px",
          padding: "0",
          width: "100%",
        }}
      >
        <span style={{ fontSize: "1.6rem" }}>{config.icon}</span>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.8rem",
          fontWeight: 700,
          color: config.color,
          margin: 0,
          letterSpacing: "0.05em",
        }}>
          {config.label}
        </h2>
        <div style={{ flex: 1, height: "1px", background: `${config.color}40`, marginLeft: "8px" }} />
        <span style={{ color: config.color, fontSize: "1.2rem", transition: "transform 0.3s", transform: open ? "rotate(0)" : "rotate(-90deg)" }}>▾</span>
      </button>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "12px",
        maxHeight: open ? "9999px" : "0",
        overflow: "hidden",
        transition: "max-height 0.5s ease",
      }}>
        {items.map((item, i) => (
          <MenuCard key={item.id} item={item} color={config.color} delay={i * 50} />
        ))}
      </div>
    </div>
  );
}

// ─── HERO CUP ROW ─────────────────────────────────────────────────────────────
function HeroCups() {
  const cups = [
    { color: "#c17b5a", steam: true, size: 70, delay: 0 },
    { color: "#d4748b", steam: true, size: 90, delay: 150 },
    { color: "#6baed6", steam: false, size: 70, delay: 300 },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "8px", margin: "24px 0 8px" }}>
      {cups.map((c, i) => (
        <div key={i} style={{ animation: `floatCup 3s ease-in-out ${c.delay}ms infinite alternate` }}>
          <CupIllustration color={c.color} steam={c.steam} size={c.size} />
        </div>
      ))}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function BeitWurud() {
  const [tab, setTab] = useState("cafe");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hot");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleFlowerClick = () => {
    window.open(
      "https://beit-wurud.menugic.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
      "_blank"
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #fdf6f0; }

        @keyframes petalFall {
          0%   { transform: translateY(-20px) rotate(0deg) translateX(0); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.8; }
          100% { transform: translateY(110vh) rotate(720deg) translateX(40px); opacity: 0; }
        }

        @keyframes floatCup {
          from { transform: translateY(0px); }
          to   { transform: translateY(-12px); }
        }

        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }

        @keyframes rotatePetal {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .tab-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px 28px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.05rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          border-radius: 100px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .tab-btn::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%; right: 50%;
          height: 2px;
          background: currentColor;
          transition: all 0.3s ease;
        }
        .tab-btn:hover::after,
        .tab-btn.active::after {
          left: 10%; right: 10%;
        }
      `}</style>

      <FloatingPetals />

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(253,246,240,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(193,123,90,0.12)" : "none",
        transition: "all 0.4s ease",
        padding: "0 24px",
        animation: "fadeSlideDown 0.6s ease",
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          {/* Brand */}
          <div style={{
            padding: "16px 0 10px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            {/* Logo placeholder — replace with your image */}
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f5c6d4, #d4748b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              boxShadow: "0 2px 12px rgba(212,116,139,0.3)",
              overflow: "hidden",
              position: "relative",
            }}>
              {/* To add logo: replace inner div with <img src="YOUR_LOGO.png" style={{width:'100%',height:'100%',objectFit:'cover'}}/> */}
              <span style={{ animation: "rotatePetal 8s linear infinite" }}>✿</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#c17b5a",
                lineHeight: 1,
                letterSpacing: "0.04em",
              }}>
                بيت ورود
              </div>
              <div style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.62rem",
                color: "#a07060",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}>
                Beit Wurud
              </div>
            </div>
          </div>

          {/* Tab buttons */}
          <div style={{
            display: "flex",
            gap: "4px",
            background: "rgba(193,123,90,0.08)",
            borderRadius: "100px",
            padding: "4px",
            marginBottom: "8px",
          }}>
            <button
              className={`tab-btn${tab === "cafe" ? " active" : ""}`}
              onClick={() => setTab("cafe")}
              style={{
                color: tab === "cafe" ? "white" : "#c17b5a",
                background: tab === "cafe" ? "linear-gradient(135deg, #c17b5a, #d4748b)" : "transparent",
                boxShadow: tab === "cafe" ? "0 2px 12px rgba(193,123,90,0.35)" : "none",
              }}
            >
              ☕ Café Menu
            </button>
            <button
              className={`tab-btn${tab === "flowers" ? " active" : ""}`}
              onClick={handleFlowerClick}
              style={{
                color: "#d4748b",
                background: "transparent",
              }}
            >
              🌸 Flower Shop ↗
            </button>
          </div>
        </div>
      </nav>

      {/* ── MAIN ── */}
      <main style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 20px 60px",
        position: "relative",
        zIndex: 1,
        animation: "fadeSlideUp 0.8s ease 0.2s both",
      }}>
        {tab === "cafe" && (
          <>
            {/* Hero */}
            <div style={{ textAlign: "center", padding: "32px 0 40px" }}>
              <HeroCups />
              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 700,
                color: "#2a1a0e",
                lineHeight: 1.1,
                marginBottom: "12px",
              }}>
                A place of<br />
                <span style={{
                  background: "linear-gradient(135deg, #c17b5a, #d4748b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  blooms & brews
                </span>
              </h1>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                color: "#9a7a6a",
                fontSize: "0.95rem",
                letterSpacing: "0.05em",
                maxWidth: "340px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}>
                Handcrafted drinks made with care,<br />served in a garden of roses.
              </p>

              {/* Decorative divider */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center", margin: "28px 0 0" }}>
                <div style={{ width: "60px", height: "1px", background: "linear-gradient(to right, transparent, #c17b5a)" }} />
                <span style={{ color: "#d4748b", fontSize: "18px" }}>✿</span>
                <div style={{ width: "60px", height: "1px", background: "linear-gradient(to left, transparent, #d4748b)" }} />
              </div>
            </div>

            {/* Quick category nav */}
            <QuickNav active={activeSection} />

            {/* Menu categories */}
            {Object.keys(menuData).map(key => (
              <CategorySection key={key} categoryKey={key} onVisible={setActiveSection} />
            ))}

            {/* Footer */}
            <div style={{
              marginTop: "60px",
              borderTop: "1px solid rgba(193,123,90,0.2)",
              paddingTop: "40px",
              paddingBottom: "40px",
              textAlign: "center",
            }}>
              {/* Brand */}
              <div style={{ marginBottom: "8px" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 700, color: "#c17b5a" }}>بيت ورود</span>
              </div>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#b09080", marginBottom: "28px" }}>
                Beit Wurud · Café & Flower Shop
              </p>

              {/* Links row */}
              <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "28px" }}>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/beit.wurud?igsh=bWhlcjlybnN5NmZh"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "11px 22px",
                    borderRadius: "100px",
                    background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    letterSpacing: "0.08em",
                    boxShadow: "0 4px 18px rgba(220,39,67,0.3)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(220,39,67,0.4)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 18px rgba(220,39,67,0.3)"; }}
                >
                  {/* Instagram SVG icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  @beit.wurud
                </a>

                {/* Location */}
                <a
                  href="https://www.google.com/maps/place/33%C2%B053'45.7%22N+35%C2%B028'41.6%22E/@33.896023,35.478222,17z"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "11px 22px",
                    borderRadius: "100px",
                    background: "linear-gradient(135deg, #c17b5a, #d4748b)",
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    letterSpacing: "0.08em",
                    boxShadow: "0 4px 18px rgba(193,123,90,0.3)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(193,123,90,0.4)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 18px rgba(193,123,90,0.3)"; }}
                >
                  {/* Pin SVG icon */}
                  <svg width="14" height="16" viewBox="0 0 14 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 7 4.5a2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                  Find Us on Map
                </a>
              </div>

              {/* Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center", marginBottom: "16px" }}>
                <div style={{ width: "40px", height: "1px", background: "rgba(193,123,90,0.3)" }} />
                <span style={{ color: "#d4748b", fontSize: "14px" }}>✿</span>
                <div style={{ width: "40px", height: "1px", background: "rgba(193,123,90,0.3)" }} />
              </div>

              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "#a07060", fontStyle: "italic", marginBottom: "6px" }}>
                All prices in USD · Subject to change
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.68rem", color: "#c0a090", letterSpacing: "0.1em" }}>
                © 2025 بيت ورود · Made with 🌸
              </p>
            </div>
          </>
        )}
      </main>
    </>
  );
}
