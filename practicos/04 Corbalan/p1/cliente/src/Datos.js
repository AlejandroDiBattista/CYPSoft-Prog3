

const camino = "http://localhost:3000";
async function llamar(ruta, metodo="GET", datos={}){

    let opciones = {
        method: metodo,
        headers: {'Content-Type' : 'application/json'}
    }

    if (metodo!== 'GET') {
        opciones.body= JSON.stringify(datos);
        
    }
    let respuesta = await fetch(`${camino}${ruta}`, opciones)
    return await respuesta.json()
}

async function listar(){
    return await llamar('/contactos')
}

async function Agregar(contacto){
    await llamar('/contactos', 'POST', contacto)
}
async function actualizar(contacto){
    await llamar(`/contactos/${contacto._id}`, 'PUT', contacto)
}
async function Borrar(id){
    await llamar(`/contactos/${id}`, 'DELETE')
}

export default {listar, Agregar, actualizar, Borrar}

