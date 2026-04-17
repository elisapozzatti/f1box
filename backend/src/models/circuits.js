import mongoose from "mongoose";

const circuitSchema = new mongoose.Schema({
  name: String,
  country: String,
  years_active: String,
  length_km: Number,
  turns: Number,
  active: Boolean,
  coords: Array,
});

export default mongoose.model("Circuit", circuitSchema);
