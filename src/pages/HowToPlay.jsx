import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { quickFacts } from '../data/rules.js'

const steps = [
  { title: 'Set up two nets', text: 'Place a net at each end of your play area — a gym, a field, a backyard. Each team defends one and attacks the other.' },
  { title: 'Split into two teams of eight', text: 'Seven field players plus one goalie per side. Sixteen players total when you’re running full teams.' },
  { title: 'Grab the foam ball', text: 'Dribball uses a custom bouncy foam ball — light enough to throw, springy enough to bounce like a basketball.' },
  { title: 'Move it with feet or hands', text: 'Soccer-dribble with your feet or basketball-dribble with your hand — whenever you want. You can also kick it to a teammate at any time.' },
  { title: 'Mind the handcuff', text: 'To get the ball into your hands, catch it out of the air off a teammate’s kick — you can grab any airborne ball you weren’t the last to touch. You can never pick it up off the ground; a ball on the ground must be kicked.' },
  { title: 'Score two ways', text: 'Kick the ball into the net for 2 points, or throw it in with your hands for 1. Most points wins.' },
  { title: 'Play it physical', text: 'Dribball is full contact — bump and shield for the ball. No grabbing, no holding. Win possession, not a wrestling match.' },
]

export default function HowToPlay() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <span className="eyebrow">The 2-minute version</span>
          <h1 className="h-xl">How to Play</h1>
          <p className="lead">
            Never seen Dribball before? Here’s everything you need to get a game going,
            start to finish. For every last detail, hit the <Link to="/rules" className="text-mustard">rulebook</Link>.
          </p>
        </div>
      </section>

      {/* quick facts */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="facts">
            {quickFacts.map((f) => (
              <Reveal className="fact" key={f.label}>
                <div className="fact__val">{f.value}</div>
                <div className="fact__label">{f.label}</div>
                <div className="fact__sub">{f.sub}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* steps */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Step by step</span>
            <h2 className="h-lg">Get a game going</h2>
          </Reveal>
          <div className="steps">
            {steps.map((s, i) => (
              <Reveal className="card step" key={s.title} delay={i * 50}>
                <div className="step__num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* do / don't */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="sec-head sec-head--center">
            <span className="eyebrow">Quick reference</span>
            <h2 className="h-lg">Do &amp; Don’t</h2>
          </Reveal>
          <div className="dodont">
            <Reveal className="dodont__col dodont__col--do">
              <h3>✅ You can</h3>
              <ul>
                <li>Soccer-dribble with your feet whenever you want.</li>
                <li>Catch an airborne ball you weren’t the last to touch.</li>
                <li>Kick the ball up to a teammate’s hands at any time.</li>
                <li>Make full-contact plays — bump and shield for the ball.</li>
                <li>Score by kicking it in (2) or throwing it in (1).</li>
              </ul>
            </Reveal>
            <Reveal className="dodont__col dodont__col--dont" delay={100}>
              <h3>🚫 You can’t</h3>
              <ul>
                <li>Pick the ball up off the ground with your hands — ever.</li>
                <li>Catch a ball you were the last to touch (no self-feeding).</li>
                <li>Grab or hold opponents.</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <span className="eyebrow" style={{ color: '#fff' }}>Go deeper</span>
            <h2 className="h-lg">Want the fine print?</h2>
            <p className="lead">The full rulebook lays out scoring, contact and the signature dribble rule in detail.</p>
            <div className="cta-band__btns">
              <Link to="/rules" className="btn">Read the Rules</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
