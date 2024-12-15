import { venta, alquiler } from '/assets/js/data/propiedades.js'
// Función para mostrar propiedades en el contenedor especificado
export const mostrarPropiedades = (propiedades, containerId, limite = null) => {
  const container = document.getElementById(containerId)
  // Obtener las primeras tres propiedades
  const tresPropiedades = limite ? propiedades.slice(0, limite) : propiedades

// Iterar sobre las propiedades y crear las tarjetas
for (const propiedad of tresPropiedades) {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4'; // Clase para diseño Bootstrap en columnas

    const cardContent = `
      <div class="card h-100 shadow rounded border-2 p-3">
        <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.titulo}">
        <div class="card-body">
          <h5 class="card-title">${propiedad.titulo}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i>${propiedad.direccion}</p>
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} | <i class="fas fa-bath"></i> ${propiedad.banos}</p>
          <p><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>
          <i class="${propiedad.fumar ? 'fas fa-smoking text-success' : 'fas fa-smoking-ban text-danger'}"></i>
          <span class="${propiedad.fumar ? 'text-success' : 'text-danger'}">
          ${propiedad.fumar ? 'Permitido fumar' : 'No se permite fumar'} <br>
          <i class="${propiedad.mascotas ? 'fas fa-paw text-success' : 'fas fa-ban text-danger'}"></i>
          <span class="${propiedad.mascotas ? 'text-success' : 'text-danger'}">
          ${propiedad.mascotas ? 'Mascotas permitidas' : 'No se permiten mascotas'}
        </div>
      </div>
    `
    card.innerHTML = cardContent
    container.appendChild(card)
  }
}

