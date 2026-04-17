import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Ricrea __dirname in ambiente ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carica le variabili d'ambiente dal file .env
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Funzione che valida e restituisce le variabili d'ambiente
const getConfig = () => {
  const config = {
    HOST: process.env.APP_HOST || "localhost",
    PORT: process.env.APP_PORT || "3000",
    DB_URL: process.env.MONGODB_URI || "mongodb://localhost:27017/f1",
    FRONTEND_APP: process.env.FRONTEND_APP || "http://localhost:5173",
  };

  // Validazione
  if (!config.DB_URL) {
    throw new Error("DB_URL non è definita nelle variabili d'ambiente.");
  }

  if (!config.HOST) {
    throw new Error("HOST non è definita nelle variabili d'ambiente.");
  }

  return config;
};

// Esporta la configurazione
export const config = getConfig();
