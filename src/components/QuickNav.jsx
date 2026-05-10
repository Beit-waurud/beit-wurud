import { categoryConfig } from "../data/menuData";

export default function QuickNav({ active }) {
  const scrollTo = (key) => {
    const el = document.getElementById(`section-${key}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      justifyContent: "center",
      margin: "0 0 40px",
      padding: "20px 16px",
      background: "rgba(255,255,255,0.55)",
      backdropFilter: "blur(10px)",
      borderRadius: "20px",
      border: "1px solid rgba(193,123,90,0.12)",
      boxShadow: "0 4px 24px rgba(193,123,90,0.07)",
      animation: "fadeSlideUp 0.6s ease 0.4s both",
    }}>
      <p style={{
        width: "100%",
        textAlign: "center",
        fontFamily: "'Lato', sans-serif",
        fontSize: "0.7rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#b09080",
        marginBottom: "6px",
      }}>
        Browse Menu
      </p>
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
              animation: `fadeSlideUp 0.5s ease ${0.45 + i * 0.07}s both`,
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
