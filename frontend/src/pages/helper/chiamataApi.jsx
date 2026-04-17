export const fetchAllOrCurrentDrivers = async (url) => {
  try {
    const res = await fetch(url);
    const drivers = await res.json();

    return drivers.map((driver) => ({
      immagine: driver.image,
      nome: driver.first_name,
      cognome: driver.last_name,
      data_nascita: new Date(driver.birth_date).toLocaleDateString("it-IT"),
      scuderia: driver.team,
      pole_positions: driver.career_poles,
      podi: driver.career_podiums,
      vittorie: driver.career_wins,
      debutto: driver.debut_f1,
      titoli: driver.world_titles,
      ultima_stagione: driver.last_season,
    }));
  } catch (error) {
    console.error("Errore nel caricamento dei piloti:", error);
    return [];
  }
};

export const fetchNameTeams = async (url) => {
  try {
    const res = await fetch(url);
    const teams = await res.json();

    return teams.map((team) => ({
      name: team.name,
    }));
  } catch (error) {
    console.error("Errore nel caricamento delle scuderie:", error);
    return [];
  }
};
