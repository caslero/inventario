const nuevoUsuario = document.getElementById("crearUsuario");

nuevoUsuario.addEventListener("submit", crearUsuario);

async function crearUsuario(e) {
  e.preventDefault();

  const nombre = e.target.nombre.value;
  const correo = e.target.correo.value;
  const clave = e.target.clave.value;

  const respuesta = await fetch("/api/usuarios/crear-usuario", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: nombre, correo: correo, clave: clave }),
  });

  const datos = await respuesta.json();

  if (datos.status === "ok") {
    alert("Usuario creado exitosamente");
    window.location.href = "/";
  } else {
    alert("Error al crear el usuario: " + datos.message);
  }
}
