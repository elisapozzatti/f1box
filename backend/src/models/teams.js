import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: String,
  entry_year: Number,
  exit_year: Number,
  first_victory: String,
  last_victory: String,
  gp_played: Number,
  total_points: Number,
  victories: Number,
  podiums: Number,
  pole_positions: Number,
  fastest_laps: Number,
  constructors_championships: Number,
  drivers_championships: Number,
  current_teamprincipal: String,
  most_successful_driver: String,
});

export default mongoose.model("Team", teamSchema);
