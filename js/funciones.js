document.addEventListener('DOMContentLoaded', () => {
  // Selecciona las tarjetas de servicio
  const cards = document.querySelectorAll('.services-icon-wap');

  console.log('Tarjetas de servicio encontradas:', cards.length);

  // Nombres exactos de cada tarjeta (en orden en el HTML)
  const nombresServicios = [
    "Servicio de entrega",
    "Envío",
    "Promoción",
    "Servicio 24 horas"
  ];

  cards.forEach((card, index) => {
    card.style.cursor = 'pointer';
    card.setAttribute('tabindex', '0');

    const accionar = () => {
      const nombreServicio = nombresServicios[index] || "Servicio";

      if (window.Swal) {
        Swal.fire({
          title: nombreServicio,
          text: `Has seleccionado: ${nombreServicio}`,
          icon: 'success', // ✅ Esto pone el check verde
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#198754'
        });
      } else {
        alert(`✅ Has seleccionado: ${nombreServicio}`);
      }
    };

    card.addEventListener('click', accionar);
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        accionar();
      }
    });
  });
});
