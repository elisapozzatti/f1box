import "./Team.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Team() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/teams")
      .then((res) => res.json())
      .then(setTeams)
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
          <Link to="/team" className="voce active">
            Team
          </Link>
          <Link to="/circuits" className="voce">
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
          <h3 className="f1">TEAM</h3>
        </div>

        <div className="team-list">
          {teams.map((team, index) => (
            <div key={index} className="team-card">
              <h2 className="team-name">{team.name}</h2>

              <div className="team-data">
                <p>
                  <strong>Team Principal:</strong> {team.current_teamprincipal}
                </p>
                <p>
                  <strong>Debutto:</strong> {team.entry_year}
                </p>
                <p>
                  <strong>GP disputati:</strong> {team.gp_played}
                </p>
                <p>
                  <strong>Vittorie:</strong> {team.victories}
                </p>
                <p>
                  <strong>Podi:</strong> {team.podiums}
                </p>
                <p>
                  <strong>Pole:</strong> {team.pole_positions}
                </p>
                <p>
                  <strong>Titoli costruttori:</strong>{" "}
                  {team.constructors_championships}
                </p>
                <p>
                  <strong>Titoli piloti:</strong> {team.drivers_championships}
                </p>
                <p>
                  <strong>Pilota più vincente:</strong>{" "}
                  {team.most_successful_driver}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
