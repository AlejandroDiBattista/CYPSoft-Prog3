let contacto = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
}

// Recibe un objeto persona y muestra sus datos
function mostrar1(persona) {
    console.log(`
    Nombre  : ${persona.nombre}, 
    Apellido: ${persona.apellido}, 
    Edad    : ${persona.edad}`)
}

// Guarda los datos del objeto persona en variables y las muestra
function mostrar2(persona) {
    let nombre = persona.nombre
    let apellido = persona.apellido
    let edad = persona.edad
    
    console.log(`
    Nombre  : ${nombre}, 
    Apellido: ${apellido}, 
    Edad    : ${edad}`)
}

// Desestructura el objeto persona y muestra sus datos
function mostrar3(persona) {
    let {nombre, apellido, edad} = persona 
    console.log(`
    Nombre  : ${nombre}, 
    Apellido: ${apellido}, 
    Edad    : ${edad}`)
}

// Desestructura el objeto persona en la llamada a la función
function mostrar({ nombre, apellido, edad = 30 }) {
    console.log(`
    Nombre  : ${nombre}, 
    Apellido: ${apellido}, 
    Edad    : ${edad}`)
}

mostrar(contacto)

// Genera un objeto persona con los datos recibidos
function generarPersona(a, n) {
    return {
        nombre: n,
        apellido: a,
        edad: 30,
    }
}

let persona = generarPersona("Gomez", "Maria")
// Desestructura el objeto persona en la llamada a la función
let { edad } = generarPersona("Gomez", "Maria")
