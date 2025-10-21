function mostrarFechaHora() {

 const fechaHora = new Date();
 // Opciones de formato
 const opcionesFecha = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
 const opcionesHora = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
 const fecha = fechaHora.toLocaleDateString("es-ES", opcionesFecha);
 const hora = fechaHora.toLocaleTimeString("es-ES", opcionesHora);
 document.getElementById("fecha-hora").innerHTML = `${fecha} - ${hora}`;
}
// Mostrar al cargar
mostrarFechaHora();
// Actualizar cada segundo
setInterval(mostrarFechaHora, 1000);

function mostrarFechaHora() {
  const fechaHora = new Date();
  const opcionesFecha = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const opcionesHora = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const fecha = fechaHora.toLocaleDateString("es-ES", opcionesFecha);
  const hora = fechaHora.toLocaleTimeString("es-ES", opcionesHora);

  const elemento = document.getElementById("fecha-hora");
  elemento.innerHTML = `${fecha} - ${hora}`;
  elemento.style.color = "white";  // 👉 aquí pones el color
}


