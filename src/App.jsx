import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import HowToPlay from './pages/HowToPlay.jsx'
import Rules from './pages/Rules.jsx'
import Ball from './pages/Ball.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
import './styles/components.css'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/the-ball" element={<Ball />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
