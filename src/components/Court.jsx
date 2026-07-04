/* Stylized top-down Dribball court with two nets — used in the hero art. */
export default function Court({ className = '' }) {
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="Dribball court with two nets">
      <defs>
        <radialGradient id="courtGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#2A2416" />
          <stop offset="100%" stopColor="#141109" />
        </radialGradient>
      </defs>

      {/* court */}
      <rect x="24" y="24" width="352" height="352" rx="26" fill="url(#courtGlow)" stroke="#F5B301" strokeWidth="4" />
      {/* center line + circle */}
      <line x1="24" y1="200" x2="376" y2="200" stroke="#F5B301" strokeWidth="3" opacity="0.55" />
      <circle cx="200" cy="200" r="52" fill="none" stroke="#F5B301" strokeWidth="3" opacity="0.55" />
      <circle cx="200" cy="200" r="6" fill="#FF4D5E" />

      {/* top net + goal box */}
      <rect x="140" y="24" width="120" height="42" fill="none" stroke="#7B2FF7" strokeWidth="3" opacity="0.8" />
      <rect x="168" y="16" width="64" height="14" rx="3" fill="#7B2FF7" />
      <line x1="176" y1="16" x2="176" y2="30" stroke="#141109" strokeWidth="1.5" />
      <line x1="200" y1="16" x2="200" y2="30" stroke="#141109" strokeWidth="1.5" />
      <line x1="224" y1="16" x2="224" y2="30" stroke="#141109" strokeWidth="1.5" />

      {/* bottom net + goal box */}
      <rect x="140" y="334" width="120" height="42" fill="none" stroke="#17E0B0" strokeWidth="3" opacity="0.8" />
      <rect x="168" y="370" width="64" height="14" rx="3" fill="#17E0B0" />
      <line x1="176" y1="370" x2="176" y2="384" stroke="#141109" strokeWidth="1.5" />
      <line x1="200" y1="370" x2="200" y2="384" stroke="#141109" strokeWidth="1.5" />
      <line x1="224" y1="370" x2="224" y2="384" stroke="#141109" strokeWidth="1.5" />
    </svg>
  )
}
