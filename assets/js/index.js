import { venta, alquiler } from '/assets/js/data/propiedades.js'
import { mostrarPropiedades } from '/assets/js/script.js'

// Mostrar las propiedades de venta y alquiler
mostrarPropiedades(venta, 'ventaContainer', 3)
mostrarPropiedades(alquiler, 'alquilerContainer', 3)
