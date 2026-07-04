import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Court from '../components/Court.jsx'
import BallMark from '../components/BallMark.jsx'
import { scoring } from '../data/rules.js'

const features = [
  { icon: '🥅', title: 'Two Nets', text: 'One goal at each end. Attack theirs, defend yours — the field flows both ways, fast.' },
  { icon: '🟡', title: 'The Foam Ball', text: 'A custom bouncy foam ball, mustard-yellow from day one. Light enough to throw, lively enough to bounce.' },
  { icon: '👟', title: 'Two Ways to Dribble', text: 'Control it with your feet like soccer, or bounce it with your hand like basketball. Just don’t switch mid-flow on your own.' },
  { icon: '💥', title: 'Full Contact', text: 'Bump, shield and battle for possession. Just no grabbing and no holding — win the ball, not the wrestling match.' },
]

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__grid" />
        <div className="container hero__inner">
          <div>
            <span className="eyebrow">A brand-new sport</span>
            <h1 className="hero__title">
              <span className="fill">DRIB</span><span className="fill-coral">BALL</span>
            </h1>
            <p className="lead hero__lead">
              Soccer met basketball, they threw a bouncy foam ball between two nets,
              and made it full contact. Eight on eight, feet and hands, all game.
            </p>
            <div className="hero__cta">
              <Link to="/how-to-play" className="btn">Learn to Play</Link>
              <Link to="/rules" className="btn btn--ghost">Read the Rules</Link>
            </div>
            <div className="hero__stats">
              <span className="pill">8 v 8</span>
              <span className="pill">7 Field + 1 Goalie</span>
              <span className="pill">Kick = 2 · Throw = 1</span>
            </div>
          </div>

          <div className="hero__art">
            <Court className="hero__court" />
            <div className="hero__ball"><BallMark size={140} spin /></div>
          </div>
        </div>
      </section>

      {/* ---------------- MARQUEE ---------------- */}
      <div className="strip" aria-hidden="true">
        <div className="strip__track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="strip__item" key={i}>
              <span>Dribble with your feet</span>
              <span>Bounce with your hand</span>
              <span>Two nets</span>
              <span>Full contact</span>
              <span>Kick it in for two</span>
              <span>Throw it in for one</span>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- WHAT IS DRIBBALL ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">The gist</span>
            <h2 className="h-lg">One ball. Two skill sets.<br /><span className="text-mustard">Zero standing still.</span></h2>
            <p className="lead">
              Dribball takes the two most-played ball sports on the planet and fuses them into
              one relentless, physical game. Here’s what makes it tick.
            </p>
          </Reveal>

          <div className="features">
            {features.map((f, i) => (
              <Reveal className="card feature" key={f.title} delay={i * 80}>
                <span className="feature__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="feature__icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SCORING ---------------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="sec-head sec-head--center">
            <span className="eyebrow">How you win</span>
            <h2 className="h-lg">Two ways to score</h2>
            <p className="lead">The harder skill pays more. Kick it in for the full reward, or throw it in when you need a quick one.</p>
          </Reveal>
          <div className="score-grid">
            {scoring.map((s) => (
              <Reveal className={`score score--${s.color}`} key={s.name}>
                <div className="score__pts">{s.points}<small>{s.points === 1 ? 'POINT' : 'POINTS'}</small></div>
                <h3>{s.name}</h3>
                <p>{s.how}</p>
                <p className="score__detail">{s.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SIGNATURE RULE ---------------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split">
            <Reveal>
              <span className="eyebrow">The rule everyone asks about</span>
              <h2 className="h-lg" style={{ marginTop: 14 }}>The dribble <span className="text-coral">handcuff</span></h2>
              <p className="lead" style={{ marginTop: 16 }}>
                You can soccer-dribble whenever you like. You can basketball-dribble whenever you like.
                The one thing you <strong style={{ color: 'var(--cream)' }}>can’t</strong> do is scoop the ball
                up off your own feet to start bouncing it.
              </p>
              <p style={{ color: 'var(--text-dim)' }}>
                Want to go from feet to hands? The ball has to come to you some other way —
                a bounce, a loose ball, or a pass. It keeps the game honest and the transitions earned.
              </p>
              <Link to="/rules" className="btn btn--violet" style={{ marginTop: 20 }}>See all the rules</Link>
            </Reveal>

            <Reveal className="split__media" delay={120}>
              <div style={{ padding: '10%' }}>
                <Court />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <span className="eyebrow" style={{ color: '#fff' }}>Grab a ball</span>
            <h2 className="h-lg">Ready to run it?</h2>
            <p className="lead">Round up sixteen people, mark two nets, and get after it. The full how-to is one click away.</p>
            <div className="cta-band__btns">
              <Link to="/how-to-play" className="btn">How to Play</Link>
              <Link to="/rules" className="btn btn--ghost" style={{ borderColor: '#fff', color: '#fff' }}>The Rulebook</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
