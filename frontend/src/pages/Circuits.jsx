import "./Circuits.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Circuits() {
  const [circuits, setCircuits] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/circuits`)
      .then((res) => res.json())
      .then(setCircuits)
      .catch(console.error);
  }, []);

  return (
    <div className="layout">
      {/* SIDEBAR */}
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
          <Link to="/circuits" className="voce active">
            Circuiti
          </Link>
        </nav>

        <footer>
          <p>©2026 F1 Box</p>
        </footer>
      </aside>

      {/* CONTENUTO */}
      <div className="content">
        <div className="title">
          <h3 className="f1">CIRCUITI</h3>
        </div>

        <div className="circuit-list">
          {circuits.map((circuit, index) => (
            <div key={index} className="circuit-card">
              <h2 className="circuit-name">{circuit.name}</h2>

              <div className="circuit-data">
                <p>
                  <strong>Paese:</strong> {circuit.country}
                </p>
                <p>
                  <strong>Anni attivi:</strong> {circuit.years_active}
                </p>
                <p>
                  <strong>Lunghezza:</strong> {circuit.length_km} km
                </p>
                <p>
                  <strong>Curve:</strong> {circuit.turns}
                </p>
                <p>
                  <strong>Attivo:</strong> {circuit.active ? "Sì" : "No"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Circuits;
