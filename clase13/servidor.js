
import Contactos from './contactos.js';

let nuevo = {
    nombre:   'Josefina Fernandez',
    email:    'jf@mai.com',
    telefone: '123456790'
}

await Contactos.crear(nuevo);
console.log("Contacto Nuevo", nuevo)

let juanes = await Contactos.leerDonde({ nombre: 'Juan' });

console.log("Contactos Juanes", juanes)

await Contactos.desconectar();