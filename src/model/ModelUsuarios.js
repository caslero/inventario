import conexion from "../db/conexion.js";
import { promisify } from "util";
import { generarRespuesta } from "../utils/generarRespuesta.js";

const dbRun = promisify(conexion.run).bind(conexion);
const dbGet = promisify(conexion.get).bind(conexion);

export default class ModelUsuarios {
  static async nuevoUsuario(nombre, correo, clave) {
    try {
      // Verificar si el correo ya existe
      const existente = await dbGet(
        "SELECT id FROM usuarios WHERE correo = ?",
        [correo]
      );

      if (existente) {
        return generarRespuesta(
          "error",
          "Error, usuario ya existe...",
          {},
          409
        );
      }

      // Insertar nuevo usuario
      await dbRun(
        "INSERT INTO usuarios (nombre, correo, clave) VALUES (?, ?, ?)",
        [nombre, correo, clave]
      );

      return generarRespuesta("ok", "Usuario creado exitosamente", {}, 201);
    } catch (err) {
      return generarRespuesta("error", err.message, {}, 400);
    }
  }

  static async login(correo) {
    try {
      const row = await dbGet("SELECT clave FROM usuarios WHERE correo = ?", [
        correo,
      ]);

      if (!row) {
        return generarRespuesta("error", "Usuario no existe...", {}, 404);
      }

      return generarRespuesta(
        "ok",
        "Usuario encontrado",
        { clave: row.clave },
        200
      );
    } catch (err) {
      return generarRespuesta("error", err.message, {}, 500);
    }
  }
}
