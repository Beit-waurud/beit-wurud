export default function CupIllustration({ color = "#c17b5a", steam = true, size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {steam && (
        <>
          <path d="M28 18 Q30 12 28 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
            <animate attributeName="d" values="M28 18 Q30 12 28 6;M28 18 Q26 12 28 6;M28 18 Q30 12 28 6" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M36 16 Q38 10 36 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.3s" repeatCount="indefinite" />
            <animate attributeName="d" values="M36 16 Q38 10 36 4;M36 16 Q34 10 36 4;M36 16 Q38 10 36 4" dur="2.3s" repeatCount="indefinite" />
          </path>
          <path d="M44 18 Q46 12 44 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.85;0.5" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="d" values="M44 18 Q46 12 44 6;M44 18 Q42 12 44 6;M44 18 Q46 12 44 6" dur="1.8s" repeatCount="indefinite" />
          </path>
        </>
      )}
      <path d="M20 24 L23 64 Q23 68 27 68 L53 68 Q57 68 57 64 L60 24 Z" fill="white" stroke={color} strokeWidth="2" />
      <path d="M22 32 L24.5 62 Q24.5 66 27 66 L53 66 Q55.5 66 55.5 62 L58 32 Z" fill={color} opacity="0.15" />
      <rect x="18" y="22" width="44" height="5" rx="2.5" fill={color} opacity="0.8" />
      <path d="M57 36 Q72 36 72 46 Q72 56 57 56" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      <text x="40" y="52" textAnchor="middle" fontSize="6" fill={color} fontFamily="serif" opacity="0.8">بيت ورود</text>
      <circle cx="40" cy="40" r="5" fill={color} opacity="0.2" />
      <text x="40" y="43" textAnchor="middle" fontSize="7" fill={color}>✿</text>
    </svg>
  );
}
