import "./Lineup.css";
import { useEffect, useState } from "react";
import { fetchAllOrCurrentDrivers, fetchNameTeams } from "./helper/chiamataApi";
import CardsLineUp from "./CardsLineUp";
import menus from "../assets/menus.png";
import { Link } from "react-router-dom";

function Lineup() {
  const [open, setOpen] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [checked, setChecked] = useState(false);
  const [checkedAll, setCheckedAll] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) setCheckedAll(false);
  };

  const handleChangeAll = (event) => {
    setCheckedAll(event.target.checked);
    if (event.target.checked) setChecked(false);
  };

  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedWorlds, setselectedWorlds] = useState("");
  const [selectedWins, setselectedWins] = useState("");

  useEffect(() => {
    let url = checked
      ? "https://f1box-backend.onrender.com/api/drivers/now"
      : "https://f1box-backend.onrender.com/api/drivers";

    if (checkedAll) {
      url = "https://f1box-backend.onrender.com/api/drivers";
    }

    if (selectedTeam) {
      url = `https://f1box-backend.onrender.com/api/teams/teamdrivers?team=${encodeURIComponent(
        selectedTeam,
      )}`;
    } else if (selectedWorlds) {
      url = `https://f1box-backend.onrender.com/api/drivers/worldtitles?world_titles=${encodeURIComponent(
        selectedWorlds,
      )}`;
    } else if (selectedWins) {
      url = `https://f1box-backend.onrender.com/api/drivers/wins?career_wins=${encodeURIComponent(
        selectedWins,
      )}`;
    }

    fetchAllOrCurrentDrivers(url).then(setDrivers);
  }, [checked, checkedAll, selectedTeam, selectedWorlds, selectedWins]);

  useEffect(() => {
    fetchNameTeams("https://f1box-backend.onrender.com/api/teams/name").then(
      setTeams,
    );
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
          <h3 className="f1">PILOTI</h3>

          <button className="menu" onClick={() => setOpen(!open)}>
            <img src={menus} className="iconMenu" />
          </button>

          {open && (
            <ul className="menuTendina">
              <Link to="/">
                <li className="voci">Home</li>
              </Link>
              <Link to="/Calendar">
                <li className="voci">Calendario</li>
              </Link>
              <Link to="/Circuitsmap">
                <li className="voci">Mappa</li>
              </Link>
            </ul>
          )}
        </div>

        {/* FILTRI */}
        <div className="filter-container">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={checkedAll}
              onChange={handleChangeAll}
            />
            Tutti i piloti
          </label>

          <label className="checkbox">
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Attualmente in F1
          </label>

          <p className="wc-title">Campionati del mondo</p>
          <select
            className="world-champions"
            value={selectedWorlds}
            onChange={(e) => {
              setselectedWorlds(e.target.value);
              setSelectedTeam("");
              setselectedWins("");
            }}
          >
            <option value="0">0</option>
            <option value="1">Più di 1</option>
            <option value="3">Più di 3</option>
            <option value="5">Più di 5</option>
            <option value="max">Il numero più alto</option>
          </select>

          <p className="wc-title">Vittorie</p>
          <select
            className="world-champions"
            value={selectedWins}
            onChange={(e) => {
              setselectedWins(e.target.value);
              setSelectedTeam("");
              setselectedWorlds("");
            }}
          >
            <option value="1">1</option>
            <option value="10">Più di 10</option>
            <option value="50">Più di 50</option>
            <option value="max">Il numero più alto</option>
          </select>

          <p className="wc-title">Scuderie</p>
          <select
            className="world-champions"
            value={selectedTeam}
            onChange={(e) => {
              setSelectedTeam(e.target.value);
              setselectedWorlds("");
              setselectedWins("");
            }}
          >
            <option value="">Tutte le scuderie</option>
            {teams.map((team, index) => (
              <option key={index} value={team.name}>
                {team.name}
              </option>
            ))}
          </select>
        </div>

        <CardsLineUp drivers={drivers} />
      </div>
    </div>
  );
}

export default Lineup;
