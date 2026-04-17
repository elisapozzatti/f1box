import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  image: String,
  first_name: String,
  last_name: String,
  birth_date: Date,
  team: String,
  career_poles: Number,
  career_podiums: Number,
  career_wins: Number,
  debut_f1: Number,
  world_titles: Number,
  last_season: String,
});

export default mongoose.model("Driver", driverSchema);
