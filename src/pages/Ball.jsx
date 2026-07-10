import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import BallMark from '../components/BallMark.jsx'

const highlights = [
  { label: 'Diameter', value: '180–200mm', sub: '~7–8 inches' },
  { label: 'Weight', value: '220–260g', sub: 'Light, but kickable' },
  { label: 'Color', value: 'Mustard', sub: '≈ Pantone 124 C' },
  { label: 'Feel', value: 'Soft', sub: 'Full-contact safe' },
]

const spec = [
  ['Type', 'Molded foam ball, self-skinning surface'],
  ['Primary material', 'High-rebound polyurethane (PU) foam'],
  ['Diameter', '180–200 mm (~7.1–7.9 in)'],
  ['Weight', '220–260 g'],
  ['Rebound', 'Lively enough to hand-dribble — target ≥ 60% off a 1.8 m drop'],
  ['Surface', 'Smooth, matte self-skin — grippable, doesn’t sting'],
  ['Color', 'Mustard yellow, solid through-color (≈ Pantone 124 C)'],
  ['Water resistance', 'Closed-cell, non-absorbent for outdoor play'],
]

const builds = [
  {
    icon: '🟡',
    name: 'Coated PU Foam',
    soft: 'Softest',
    bounce: 'Medium',
    text: 'Solid, self-skinning polyurethane — the classic bouncy foam ball. Safest for full contact; may dribble a touch dead.',
  },
  {
    icon: '⚡',
    name: 'High-Rebound PU',
    soft: 'Soft',
    bounce: 'Med–High',
    text: 'Same molding process, foam tuned for extra liveliness. Our leading candidate for balancing a soft feel with a real dribble.',
  },
  {
    icon: '🏀',
    name: 'Foam-Skinned Bladder',
    soft: 'Soft-ish',
    bounce: 'High',
    text: 'An inflatable core wrapped in a padded foam cover. Bounces best of all and stays soft — but it’s technically an inflatable.',
  },
]

export default function Ball() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <span className="eyebrow">The equipment</span>
          <h1 className="h-xl">The Ball</h1>
          <p className="lead">
            One custom ball makes Dribball possible — the bouncy, mustard-yellow foam ball
            you kick like soccer and bounce like basketball. Here’s what makes it tick.
          </p>
        </div>
      </section>

      {/* Design tension */}
      <section className="section" style={{ paddingTop: 28 }}>
        <div className="container">
          <div className="split">
            <Reveal>
              <span className="eyebrow">Why it’s custom</span>
              <h2 className="h-lg" style={{ margin: '14px 0 18px' }}>One ball,<br /><span className="text-mustard">two jobs</span></h2>
              <p className="lead" style={{ marginBottom: 16 }}>
                The Dribball has to do two things that fight each other: be <strong style={{ color: 'var(--cream)' }}>soft
                enough</strong> to take off the body in full contact, and <strong style={{ color: 'var(--cream)' }}>bouncy
                enough</strong> to hand-dribble like a basketball.
              </p>
              <p style={{ color: 'var(--text-dim)' }}>
                No off-the-shelf ball nails both, so we’re building our own — a high-rebound
                foam that stays kind to hands and bodies but still lives off the floor. The spec
                below is our working target; we’re dialing it in through play-testing.
              </p>
              <div className="hero__stats" style={{ marginTop: 26 }}>
                <span className="pill">Kick it</span>
                <span className="pill">Bounce it</span>
                <span className="pill">Throw it</span>
                <span className="pill">Take a hit</span>
              </div>
            </Reveal>

            <Reveal className="split__media" delay={120}>
              <div style={{ display: 'grid', placeItems: 'center', padding: '14%' }}>
                <BallMark size={220} spin />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Spec highlights */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="sec-head sec-head--center">
            <span className="eyebrow">At a glance</span>
            <h2 className="h-lg">Spec highlights</h2>
            <p className="lead">Working targets, being finalized through play-testing.</p>
          </Reveal>
          <div className="facts">
            {highlights.map((h) => (
              <Reveal className="fact" key={h.label}>
                <div className="fact__val">{h.value}</div>
                <div className="fact__label">{h.label}</div>
                <div className="fact__sub">{h.sub}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full spec table */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">The full spec</span>
            <h2 className="h-lg">Draft ball spec</h2>
          </Reveal>
          <Reveal className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="spec-table">
                <tbody>
                  {spec.map(([k, v]) => (
                    <tr key={k}>
                      <th scope="row">{k}</th>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Construction options */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">How we might build it</span>
            <h2 className="h-lg">Three ways to make it</h2>
            <p className="lead">Softness and bounce pull against each other — these are the constructions we’re weighing.</p>
          </Reveal>
          <div className="features">
            {builds.map((b, i) => (
              <Reveal className="card feature" key={b.name} delay={i * 80}>
                <span className="feature__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="feature__icon">{b.icon}</div>
                <h3>{b.name}</h3>
                <p style={{ marginBottom: 16 }}>{b.text}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <span className="pill">Soft: {b.soft}</span>
                  <span className="pill">Bounce: {b.bounce}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <span className="eyebrow" style={{ color: '#fff' }}>Coming soon</span>
            <h2 className="h-lg">The official Dribball</h2>
            <p className="lead">We’re play-testing prototypes now to lock the final spec. Want the rules while you wait?</p>
            <div className="cta-band__btns">
              <Link to="/rules" className="btn">Read the Rules</Link>
              <Link to="/how-to-play" className="btn btn--ghost" style={{ borderColor: '#fff', color: '#fff' }}>How to Play</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
