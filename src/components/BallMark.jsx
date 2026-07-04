/* The Dribball ball mark — a bouncy foam ball with a seam
   that nods to both a soccer panel and a basketball line. */
export default function BallMark({ size = 40, spin = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Dribball ball"
      className={spin ? 'ballmark ballmark--spin' : 'ballmark'}
    >
      <circle cx="32" cy="32" r="26" fill="var(--mustard)" stroke="var(--ink)" strokeWidth="4" />
      {/* soccer-ish pentagon */}
      <path d="M32 14 L41 21 L37 32 L27 32 L23 21 Z" fill="var(--ink)" />
      {/* basketball-ish arcs */}
      <path d="M8 32 H56" stroke="var(--ink)" strokeWidth="3" fill="none" opacity="0.85" />
      <path d="M14 16 Q32 30 14 48" stroke="var(--ink)" strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M50 16 Q32 30 50 48" stroke="var(--ink)" strokeWidth="3" fill="none" opacity="0.5" />
    </svg>
  )
}
