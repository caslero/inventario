import { respuestaAlFront } from "../utils/respuestaAlFront.js";
import ModelUsuarios from "../model/ModelUsuarios.js";

export default class ControllerUsuario {
  static async crearUsuario(req, res) {
    try {
      const { nombre, correo, clave } = req.body;

      console.log(nombre, correo, clave);

      const nuevoUsuario = await ModelUsuarios.nuevoUsuario(
        nombre,
        correo,
        clave
      );

      if (nuevoUsuario.status === "error") {
        return respuestaAlFront(
          res,
          "error",
          nuevoUsuario.message,
          nuevoUsuario.code
        );
      }

      return respuestaAlFront(res, "ok", "Usuario creado exitosamente", 201);
    } catch (error) {
      console.log("Error interno crear usuario: ", error);
      return respuestaAlFront(res, "error", "Error interno crear usuario", 500);
    }
  }
}
