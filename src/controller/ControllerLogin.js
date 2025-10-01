import ModelUsuarios from "../model/ModelUsuarios.js";
import { respuestaAlFront } from "../utils/respuestaAlFront.js";

export default class ControllerLogin {
  static async iniciarSesion(req, res) {
    try {
      const { correo, clave } = req.body;

      const login = await ModelUsuarios.login(correo);

      if (login.status === "error") {
        return respuestaAlFront(res, login.status, login.message, {}, 400);
      }

      if (login.clave !== clave) {
        return respuestaAlFront(
          res,
          "error",
          "Credenciales invalidas...",
          {},
          401
        );
      }

      return respuestaAlFront(res, "ok", "Iniciando sesion", {}, 200);
    } catch (error) {
      console.log("Error interno iniciar sesion: " + error);

      return respuestaAlFront(
        res,
        "error",
        "Error interno iniciar sesion",
        {},
        500
      );
    }
  }
}
