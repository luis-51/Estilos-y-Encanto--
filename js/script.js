// Seleccionar todos los botones de compra
const botonesCompra = document.querySelectorAll(".btn-comprar");

let total = 0;                // acumulador del total
let carrito = [];             // array para guardar los productos

botonesCompra.forEach(boton => {
  boton.addEventListener("click", () => {
    const nombre = boton.getAttribute("data-nombre");
    const precio = parseFloat(boton.getAttribute("data-precio"));

    // Guardar en el carrito
    carrito.push({ nombre, precio });

    // Sumar al total
    total += precio;

    // Crear detalle del carrito en texto
    let detalle = "🛒 Detalle de tu compra:\n\n";
    carrito.forEach((item, index) => {
      detalle += `${index + 1}. ${item.nombre} - S/${item.precio}\n`;
    });

    detalle += `\n💵 Total acumulado: S/${total}`;

    // Mostrar alerta con el detalle
    alert(detalle);
  });
});
