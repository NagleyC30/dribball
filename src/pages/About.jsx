import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const values = [
  { title: 'Two sports, one game', text: 'We took the footwork of soccer and the handling of basketball and refused to pick just one.' },
  { title: 'Skill over size', text: 'It’s full contact, but grabbing and holding are out. You earn the ball with positioning and control.' },
  { title: 'Rewards the hard play', text: 'A kicked goal is worth double a thrown one. The tougher skill always pays more.' },
  { title: 'Made to be played', text: 'A foam ball and two nets is all it takes. Backyard, gym, park — Dribball travels.' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <span className="eyebrow">The story</span>
          <h1 className="h-xl">About Dribball</h1>
          <p className="lead">
            Dribball is an original sport — invented, named, and refined by us —
            built around one simple question: what if you didn’t have to choose between feet and hands?
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="split">
            <Reveal className="about-lead">
              <span className="eyebrow">Where it came from</span>
              <h2 className="h-lg" style={{ margin: '14px 0 20px' }}>It started with a<br /><span className="text-mustard">mustard-yellow ball</span></h2>
              <p>
                Dribball began with a <strong>bouncy foam ball</strong> — the mustard-yellow one that
                still gives the game its colors. Once we realized it was light enough to throw and
                springy enough to bounce like a basketball, one question followed:
                why not use your feet <em>and</em> your hands?
              </p>
              <p>
                So we set up two nets, split into teams, and started figuring out what worked.
                The dribble handcuff, the two-tier scoring, the full-contact-but-no-grabbing line —
                every rule earned its place on the court.
              </p>
              <Link to="/rules" className="btn btn--violet" style={{ marginTop: 12 }}>Read the rules</Link>
            </Reveal>

            <Reveal delay={120}>
              <div className="timeline">
                <div className="tl">
                  <span className="tl__tag">Step 1</span>
                  <div>
                    <h3>The ball</h3>
                    <p>A bouncy mustard-yellow foam ball you could kick, throw and bounce — the spark for the whole game.</p>
                  </div>
                </div>
                <div className="tl">
                  <span className="tl__tag">Step 2</span>
                  <div>
                    <h3>Two nets, two teams</h3>
                    <p>Eight a side — seven field players and a goalie — attacking one net and defending the other.</p>
                  </div>
                </div>
                <div className="tl">
                  <span className="tl__tag">Step 3</span>
                  <div>
                    <h3>The rules that stuck</h3>
                    <p>Two ways to dribble, two ways to score, and full contact without the grabbing. Dribball.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="sec-head sec-head--center">
            <span className="eyebrow">What we care about</span>
            <h2 className="h-lg">What Dribball stands for</h2>
          </Reveal>
          <div className="values">
            {values.map((v, i) => (
              <Reveal className="card value" key={v.title} delay={i * 70}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <span className="eyebrow" style={{ color: '#fff' }}>Your move</span>
            <h2 className="h-lg">Learn it. Play it.</h2>
            <p className="lead">The how-to gets you on the court in minutes. The rulebook has the rest.</p>
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
