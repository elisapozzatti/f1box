import "./Homepage.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homepage">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3 className="logo">F1 BOX</h3>

        <nav>
          <Link to="/" className="voce">
            Home
          </Link>
          <Link to="/lineup" className="voce">
            Piloti
          </Link>
          <Link to="/team" className="voce">
            Team
          </Link>
          <Link to="/circuits" className="voce">
            Circuiti
          </Link>
        </nav>
        <footer>
          <a href="https://portfolio-mipresento.vercel.app/">
            <p
              style={{
                fontSize: "10px",
                marginBottom: "10px",
              }}
            >
              Torna al portfolio
            </p>
          </a>
          <p>©2026 F1 Box. All rights reserved.</p>
        </footer>
      </aside>

      {/* Main content */}
      <main className="main">
        <div>
          <img src="/ferrari.png" />
        </div>
      </main>
    </div>
  );
}
