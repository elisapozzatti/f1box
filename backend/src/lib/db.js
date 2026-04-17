import { config } from "../config/config.js";
import mongoose from "mongoose";

export const dbClient = () => {
  try {
    mongoose.connect(config.DB_URL);
    console.log("Database connected");
  } catch (err) {
    console.error("Database connection error:", err);
  }
};
