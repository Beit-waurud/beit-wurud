import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar({ tab, setTab }) {
  const [scrolled, setScrolled] = useState(false);

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
    <nav
      className="navbar"
      style={{
        background: scrolled ? "rgba(253,246,240,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(193,123,90,0.12)" : "none",
      }}
    >
      <div className="navbar-inner">
        {/* Brand */}
        <div className="brand">
          {/*
            ── LOGO ──────────────────────────────────────────────────────────
            To use your own logo image, replace the <span> below with:
              <img src="/logo.png" alt="بيت ورود" style={{width:'100%',height:'100%',objectFit:'cover'}} />
            and place your logo file in the /public folder as logo.png
            ──────────────────────────────────────────────────────────────────
          */}
          <div className="logo-circle">
            <span className="logo-icon">✿</span>
          </div>
          <div className="brand-text">
            <div className="brand-arabic">بيت ورود</div>
            <div className="brand-english">Beit Wurud</div>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="tab-switcher">
          <button
            className={`tab-btn${tab === "cafe" ? " active" : ""}`}
            onClick={() => setTab("cafe")}
          >
            ☕ Café Menu
          </button>
          <button
            className="tab-btn flower-btn"
            onClick={handleFlowerClick}
          >
            🌸 Flower Shop ↗
          </button>
        </div>
      </div>
    </nav>
  );
}
