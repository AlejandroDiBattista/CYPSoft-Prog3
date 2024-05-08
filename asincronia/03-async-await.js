const log = texto => console.log(texto.padEnd(30), new Date().toLocaleTimeString());

const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function obtenerDatos( alTerminar ){
    let resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let json = await resp.json() 
    alTerminar(json)
}

log("0. Antes de esperar")
await esperar(5000)
log("0. Después de esperar")

console.log(">> Async/Await")
log("1. Antes de obtener datos")
log("1. Antes de obtener datos")
await obtenerDatos(d => log("2. Datos obtenidos: " + JSON.stringify(d)))
log("3. Después de obtener datos")


async function traerDatos(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await resp.json()
    log("2. Datos obtenidos: " + JSON.stringify(json))
    return json
}

log("1. Antes de traer datos")
traerDatos()    // continua sin esperar
log("3. Después de traer datos")

//> 1. Antes de esperar             02:21:37
//> 3. Despues de traer datos       02:21:37
//> 2, Datos obtenidos: { ... }     02:21:47
