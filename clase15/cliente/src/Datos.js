// GET /contactos
// POST /contactos
// DELETE /contactos/:id
const base = 'http://localhost:3000'

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

export default { listar, crear, eliminar }