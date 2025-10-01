const login = document.getElementById("login");

login.addEventListener("submit", iniciarSesion);

function iniciarSesion(e) {
  e.preventDefault();

  const correo = e.target.correo.value;
  const clave = e.target.clave.value;

  fetch("http://localhost:4000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ correo: correo, clave: clave }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        // Aquí puedes redirigir o mostrar mensaje de éxito
        alert(data.message);
        // Por ejemplo: window.location.href = '/dashboard';
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
      alert("Error de conexión con el servidor");
    });
}
