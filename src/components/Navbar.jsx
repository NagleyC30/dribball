import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import BallMark from './BallMark.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/how-to-play', label: 'How to Play' },
  { to: '/rules', label: 'Rules' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label="Dribball home">
          <BallMark size={38} spin />
          <span className="nav__word">Dribball</span>
        </Link>

        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/how-to-play" className="btn nav__cta">Learn to Play</Link>
        </nav>
      </div>
    </header>
  )
}
