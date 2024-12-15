import { venta, alquiler } from './data/propiedades.js'

const mostrarPropiedades = (propiedades, containerId) => {
    const container = document.getElementById(containerId)

    for (const propiedad of propiedades) {
        const card = document.createElement('div')
        card.classList.add('col')

        const smokeStatus = statusSmoke(propiedad)
        const petsStatus = statusPets(propiedad)

        const cardContent = `
            <div class="card h-100 shadow rounded border-2 bg-dark text-light text-center p-3">
                <img src="${propiedad.src}" class="card-img-top img-fluid rounded mx-auto" alt="${propiedad.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.titulo}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i>${propiedad.direccion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} | <i class="fas fa-bath"></i> ${propiedad.banos}</p>
                    <p><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>
                    ${smokeStatus}
                    ${petsStatus}
                </div>
            </div>
        `
        card.innerHTML = cardContent
        container.appendChild(card)

    }
}

function statusSmoke(propiedad){
    return propiedad.fumar == true ?
    `<p class = 'text-success'><i class='fas fa-smoking'></i>Permitido fumar</p>`:`
    <p class ='text-danger'><i class='fas fa-smoking-ban'></i>No se permite fumar</p>
`;}

function statusPets(propiedad){
    return propiedad.mascotas == true ?
    `<p class = 'text-success'><i class='fas fa-paw'></i>Permitido mascotas</p>`:`
    <p class ='text-danger'><i class='fas fa-ban'></i>No se permiten mascotas</p>
`;}

mostrarPropiedades(venta, 'ventaContainer')
mostrarPropiedades(alquiler, 'alquilerContainer')

//<i class="fas ${propiedad.fumar 'fas fa-smoking' : 'fas fa-smoking-ban'
//} "></i>
//${ propiedad.fumar ? 'Permitido fumar' : 'No se permite fumar' }
//<i class="fas ${propiedad.mascotas 'fas fa-paw' : 'fas fa-ban'}"></i>
//${ propiedad.mascotas ? 'Mascotas permitida' : 'No se permiten mascotas' }
//</div >
//</div >