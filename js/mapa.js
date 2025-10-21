// Crear el mapa centrado en una ubicación (ejemplo: Lima, Perú)
var map = L.map('map').setView([-12.0464, -77.0428], 13);

// Cargar los tiles (mapas base) de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Agregar un marcador
var marker = L.marker([-12.0464, -77.0428]).addTo(map);

// Texto al hacer clic en el marcador
marker.bindPopup("<b>Estilo y Encanto</b><br>jiron 2 de mayo.").openPopup();
