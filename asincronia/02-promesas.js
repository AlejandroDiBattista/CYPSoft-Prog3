const ajustar = (t, s) => t.length > s ? t.substring(0, s - 3) + "..." : t.padEnd(s);
const log = texto => console.log(ajustar(texto, 50), new Date().toLocaleTimeString())

const url = "https://jsonplaceholder.typicode.com/posts/1"

// Callback para convertir a JSON
const convertirJSON = response => {
    log("2. Datos obtenidos")
    return response.json()  // Devuelve una promesa
}

// Callback para mostrar el JSON
const mostrarJSON = json => {
    log("3. Datos: " + JSON.stringify(json))
}

console.clear()
log("1. Antes del fetch")
fetch(url)
    .then(convertirJSON)    
    .then(mostrarJSON)
    .catch(error => console.error("Error: ", error))

log("4. Después del fetch")

//> 1. Antes del fetch                                 02:21:37
//> 4. Después del fetch                               02:21:37
//> 2. Datos obtenidos                                 02:21:37
//> 3. Datos: {"userId":1,"id":1,"title":"sunt aut ... 02:21:37

let tareaLenta = new Promise((resolve, reject) => {
    // --- Ejectamos el código lento aquí ---
    const resultado = true // true para simular que la tarea fue exitosa
    if(resultado) {
        resolve("La tarea fue exitosa")
    } else {
        reject("La tarea falló")
    }
})

log("1. Antes de la tarea lenta")
tareaLenta
    .then(resultado => log("2. " + resultado))
    .catch(error => log("2. " + error))
log("3. Después de la tarea lenta")

//> 1. Antes de la tarea lenta                         02:21:37
//> 3. Después de la tarea lenta                       02:21:37
//> 2. La tarea fue exitosa                            02:21:47

// Ejemplo de promesa con try catch
const otraTarea = new Promise((resolve, reject) => {
    try {
        // --- Ejectamos el código lento aquí ---
        resolve("Tarea exitosa")
    } catch (error) {
        reject(error)
    }
})