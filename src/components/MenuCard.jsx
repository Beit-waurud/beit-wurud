import { useState, useEffect, useRef } from "react";

export default function MenuCard({ item, color, delay }) {
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

  return (
    <div
      ref={ref}
      style={{
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(8px)",
        border: `1px solid ${color}30`,
        borderRadius: "16px",
        padding: "18px 20px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        transition: `all 0.5s ease ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        cursor: "default",
        boxShadow: `0 2px 16px ${color}10`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-3px) scale(1.01)";
        e.currentTarget.style.boxShadow = `0 8px 28px ${color}25`;
        e.currentTarget.style.borderColor = `${color}60`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = `0 2px 16px ${color}10`;
        e.currentTarget.style.borderColor = `${color}30`;
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.05rem", color: "#2a1a0e" }}>
            {item.name}
          </span>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color,
            marginLeft: "12px",
            whiteSpace: "nowrap",
          }}>
            ${item.price.toFixed(1)}
          </span>
        </div>
        <p style={{ margin: 0, fontSize: "0.82rem", color: "#7a6a5a", fontFamily: "'Lato', sans-serif", lineHeight: 1.4 }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}
