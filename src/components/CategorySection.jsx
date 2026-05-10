import { useState, useEffect, useRef } from "react";
import { menuData, categoryConfig } from "../data/menuData";
import MenuCard from "./MenuCard";

export default function CategorySection({ categoryKey, onVisible }) {
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
        <span style={{
          color: config.color,
          fontSize: "1.2rem",
          transition: "transform 0.3s",
          transform: open ? "rotate(0deg)" : "rotate(-90deg)",
          display: "inline-block",
        }}>▾</span>
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
