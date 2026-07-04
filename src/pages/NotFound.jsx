import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section container nf">
      <div>
        <h1 className="h-xl">Out of Bounds</h1>
        <p className="lead" style={{ margin: '10px auto 26px' }}>
          That page rolled off the court. Let’s get you back in the game.
        </p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </section>
  )
}
