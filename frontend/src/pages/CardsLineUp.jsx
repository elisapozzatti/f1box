function CardsLineUp({ drivers }) {
  return (
    <div className="driver-list">
      {drivers.map((driver, index) => (
        <div className="driver-card" key={index}>
          <div className="img">
            <img src={`/piloti/${driver.immagine}`} />
          </div>

          <h2 className="driver-name">
            {driver.nome} {driver.cognome}
          </h2>

          <h6 className="driver-name">{driver.data_nascita}</h6>

          {/* <h3 className="driver-name">{driver.scuderia}</h3> */}

          <div className="container-datas">
            <h5 className="infos">Pole positions: {driver.pole_positions}</h5>
            <h5 className="infos">Podi: {driver.podi}</h5>
            <h5 className="infos">Vittorie: {driver.vittorie}</h5>
            <h5 className="infos">Titoli mondiali: {driver.titoli}</h5>
            <h5 className="infos">Debutto in F1: {driver.debutto}</h5>
            <h5 className="infos">
              Ultima stagione in F1: {driver.ultima_stagione}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsLineUp;
