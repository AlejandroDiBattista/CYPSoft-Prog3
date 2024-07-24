// URL base del servidor donde se encuentran los endpoints de la API
const base = 'http://localhost:3001';

// Función genérica para realizar llamadas a la API
async function llamar(ruta, metodo='GET', datos={}) {
    const url = `${base}${ruta}`;
    const opciones = {
        method: metodo,
        headers: { 'Content-Type': 'application/json' }
    };

    // Agrega el cuerpo de la solicitud si el método no es GET
    if (metodo !== 'GET') {
        opciones.body = JSON.stringify(datos);
    }

    // Realiza la solicitud fetch a la URL con las opciones especificadas
    const respuesta = await fetch(url, opciones);
    return await respuesta.json(); // Devuelve la respuesta parseada como JSON
}

// Función para listar todos los contactos
async function listar() {
    return await llamar('/contactos');
}

// Función para crear un nuevo contacto
async function crear(datos) {
    await llamar('/contactos', 'POST', datos);
}

// Función para eliminar un contacto por su ID
async function eliminar(id) {
    await llamar(`/contactos/${id}`, 'DELETE');
}

// Función para modificar un contacto existente por su ID
async function modificar(id, datos) {
    await llamar(`/contactos/${id}`, 'PUT', datos); // Verifica que la solicitud PUT esté correcta
}


export default { listar, crear, eliminar, modificar };
