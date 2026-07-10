import { Link } from 'react-router-dom'
import BallMark from './BallMark.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <BallMark size={44} />
            <span>Dribball</span>
          </div>
          <p className="footer__tag">
            Soccer meets basketball. Two nets, one bouncy foam ball, full contact.
            An original sport, invented for the love of the game.
          </p>
        </div>

        <nav className="footer__col">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/how-to-play">How to Play</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/the-ball">The Ball</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="footer__col">
          <h4>The Quick Version</h4>
          <span>8 v 8 · 7 field + 1 goalie</span>
          <span>Kick it in = 2 · Throw it in = 1</span>
          <span>Full contact · no grabbing</span>
        </div>
      </div>

      <div className="container footer__base">
        <span>© {new Date().getFullYear()} Dribball. All rights reserved.</span>
        <span className="footer__made">Built for the backyard, the gym, and beyond.</span>
      </div>
    </footer>
  )
}
