import { useMemo } from "react";

export default function FloatingPetals() {
  const petals = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animDuration: `${6 + Math.random() * 8}s`,
      animDelay: `${Math.random() * 5}s`,
      size: `${10 + Math.random() * 16}px`,
      opacity: 0.3 + Math.random() * 0.4,
    })), []);

  return (
    <div style={{
      position: "fixed", top: 0, left: 0,
      width: "100%", height: "100%",
      pointerEvents: "none", zIndex: 0, overflow: "hidden",
    }}>
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
