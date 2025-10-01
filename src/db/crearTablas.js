import conexion from "./conexion.js";
import { usuarios } from "./tablas/usuarios.js";
import { departamentos } from "./tablas/departamentos.js";
import { productos } from "./tablas/productos.js";
import { revision } from "./tablas/revision.js";

export function crearTablas() {
  conexion.serialize(() => {
    conexion.run(usuarios);

    conexion.run(departamentos);

    conexion.run(productos);

    conexion.run(revision);
  });
}
