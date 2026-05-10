import CupIllustration from "./CupIllustration";

const cups = [
  { color: "#c17b5a", steam: true,  size: 70, delay: "0ms" },
  { color: "#d4748b", steam: true,  size: 90, delay: "150ms" },
  { color: "#6baed6", steam: false, size: 70, delay: "300ms" },
];

export default function HeroCups() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "8px", margin: "24px 0 8px" }}>
      {cups.map((c, i) => (
        <div key={i} style={{ animation: `floatCup 3s ease-in-out ${c.delay} infinite alternate` }}>
          <CupIllustration color={c.color} steam={c.steam} size={c.size} />
        </div>
      ))}
    </div>
  );
}
