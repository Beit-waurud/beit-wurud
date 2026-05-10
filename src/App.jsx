import { useState } from "react";
import { menuData } from "./data/menuData";
import Navbar from "./components/Navbar";
import FloatingPetals from "./components/FloatingPetals";
import HeroCups from "./components/HeroCups";
import QuickNav from "./components/QuickNav";
import CategorySection from "./components/CategorySection";

export default function App() {
  const [tab, setTab] = useState("cafe");
  const [activeSection, setActiveSection] = useState("hot");

  return (
    <div style={{ minHeight: "100vh", background: "#fdf6f0" }}>
      <FloatingPetals />

      <Navbar tab={tab} setTab={setTab} />

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
            {/* ── Hero ── */}
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

            {/* ── Quick Nav ── */}
            <QuickNav active={activeSection} />

            {/* ── Menu Sections ── */}
            {Object.keys(menuData).map(key => (
              <CategorySection
                key={key}
                categoryKey={key}
                onVisible={setActiveSection}
              />
            ))}

            {/* ── Footer ── */}
            <div style={{
              textAlign: "center",
              padding: "32px 0 0",
              borderTop: "1px solid rgba(193,123,90,0.2)",
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1rem",
                color: "#a07060",
                fontStyle: "italic",
              }}>
                All prices in USD · Subject to change
              </p>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.78rem",
                color: "#b09080",
                marginTop: "6px",
                letterSpacing: "0.1em",
              }}>
                @beit.wurud
              </p>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
