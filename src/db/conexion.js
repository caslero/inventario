import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import { crearTablas } from "./crearTablas.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, "../../src/db/inventario.sqlite");

const conexion = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.log("Error al conectar a la base de datos:", err.message);
  } else {
    crearTablas()
    console.log("Conectado a la base de datos SQLite.");
  }
});

export default conexion;
