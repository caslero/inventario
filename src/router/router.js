import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import ControllerLogin from "../controller/ControllerLogin.js";
import ControllerUsuario from "../controller/ControllerUsuario.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const rutas = Router();

rutas.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/index.html"));
});

rutas.get("/crear-usuario", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../views/usuarios.html"));
});

rutas.post("/api/login", ControllerLogin.iniciarSesion);
rutas.post("/api/usuarios/crear-usuario", ControllerUsuario.crearUsuario);
