// GET /contactos        | Listar  > Trae todos contactos
// POST /contactos       | Agregar > Agrega un contacto
// PUT /contactos/:id    | Cambiar > Cambiar un contacto
// DELETE /contactos/:id | Borra   > Borrar un contacto

const base = "http://localhost:3000"

async function llamar(ruta, metodo = "GET", datos = {}) {
  let opciones = {
    method: metodo,
    headers: { 'Content-Type': 'application/json' }
  }

  if(metodo !== "GET") {
    opciones.body = JSON.stringify(datos)
  }

  let respuesta = await fetch(`${base}${ruta}`, opciones)
  return await respuesta.json()
}

async function listar() {
    return await llamar("/contactos")
}

async function agregar(contacto) {
    await llamar("/contactos", "POST", contacto)
}

async function cambiar(id, contacto) {
    await llamar(`/contactos/${id}`, "PUT", contacto)
}

async function borrar(id) {
    await llamar(`/contactos/${id}`, "DELETE")
}

export default { listar, agregar, cambiar, borrar }
