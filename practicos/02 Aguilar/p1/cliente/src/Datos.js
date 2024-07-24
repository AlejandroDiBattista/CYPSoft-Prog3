// cliente/src/Datos.js

const base = 'http://localhost:3001'
// const base = ''

async function llamar(ruta, metodo='GET', datos={}) {
    const url = `${base}${ruta}`
    const opciones = {
        method: metodo,
        headers: { 'Content-Type': 'application/json' }
    }
    if (metodo !== 'GET') {
        opciones.body = JSON.stringify(datos)
    }

    const respuesta = await fetch(url, opciones)
    return await respuesta.json()
}

async function listar() {
    return await llamar('/contactos')
}

async function crear(datos) {
    await llamar('/contactos', 'POST', datos)
}

async function eliminar(id) {
   await llamar(`/contactos/${id}`, 'DELETE')
}

async function modificar(id, datos) {
    await llamar(`/contactos/${id}`, 'PUT', datos) // Verificar que la solicitud PUT esté correcta
}

export default { listar, crear, eliminar, modificar }
