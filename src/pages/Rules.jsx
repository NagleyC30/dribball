import Reveal from '../components/Reveal.jsx'
import { sections, scoring } from '../data/rules.js'

export default function Rules() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <span className="eyebrow">The rulebook</span>
          <h1 className="h-xl">Rules</h1>
          <p className="lead">
            Everything that governs a game of Dribball. The core rules are locked in below —
            the full official list is on its way and will land right here.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container rules-layout">
          {/* TOC */}
          <aside className="rules-toc" aria-label="Rules sections">
            <h4>Jump to</h4>
            {sections.map((s) => (
              <a href={`#${s.id}`} key={s.id}>{s.title}</a>
            ))}
          </aside>

          {/* Sections */}
          <div>
            {sections.map((s) => (
              <section
                className={`rule-section ${s.pending ? 'rule-section--pending' : ''}`}
                id={s.id}
                key={s.id}
              >
                <Reveal>
                  <div className="rule-section__head">
                    <span className="eyebrow">{s.kicker}</span>
                  </div>
                  <h2 className="h-md" style={{ marginBottom: 18 }}>{s.title}</h2>

                  {/* Inline scoring visual inside the scoring section */}
                  {s.id === 'scoring' && (
                    <div className="score-grid" style={{ marginBottom: 22 }}>
                      {scoring.map((sc) => (
                        <div className={`score score--${sc.color}`} key={sc.name}>
                          <div className="score__pts">{sc.points}<small>{sc.points === 1 ? 'POINT' : 'POINTS'}</small></div>
                          <h3>{sc.name}</h3>
                          <p>{sc.how}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <ol className="rule-list">
                    {s.rules.map((r, i) => (
                      <li className="rule-item" key={i}>
                        <span className="rule-item__n">{s.pending ? '…' : i + 1}</span>
                        <p>{r}</p>
                      </li>
                    ))}
                  </ol>

                  {s.pending && (
                    <p className="pending-note" style={{ marginTop: 16 }}>
                      ⏳ Full official rules coming soon.
                    </p>
                  )}
                </Reveal>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
