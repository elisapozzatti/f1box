function TableLineUp({ drivers }) {
  const columns = [
    { label: "Immagine", field: "immagine" },
    { label: "Nome", field: "nome" },
    { label: "Cognome", field: "cognome" },
    { label: "Data di nascita", field: "data_nascita" },
    { label: "Scuderia", field: "scuderia" },
    { label: "Pole Positions", field: "pole_positions" },
    { label: "Podi", field: "podi" },
    { label: "Vittorie", field: "vittorie" },
    { label: "Debutto in f1", field: "debutto" },
    { label: "Titoli mondiale", field: "titoli" },
    { label: "Ultima stagione in f1", field: "ultima_stagione" },
  ];

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {drivers.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>
                  {col.field === "immagine" ? (
                    <img src={row[col.field]} width="80" />
                  ) : (
                    row[col.field]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableLineUp;
