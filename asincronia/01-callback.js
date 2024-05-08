// Esta función muestra un texto y la hora en que se ejecuta
const log = texto => console.log(texto.padEnd(30), new Date().toLocaleTimeString());

// Definimos dos funciones que simulan tareas
let  tarea1 = () => log("2. Ejecutando Tarea 1")
let  tarea2 = () => log("3. Ejecutando Tarea 2")

console.clear()
console.log(">> Ejecución de tareas sincrónicas <<\n")
log("1. Inicio (sincrónico)")
tarea1() 
tarea2()
log("4. Fin")

//> Ejecución de tareas sincrónicas
//1. Inicio                      11:56:46
//2. Ejecutando Tarea 1          11:56:46
//3. Ejecutando Tarea 2          11:56:46
//4. Fin                         11:56:46

// Callbacks
console.log("\n>> Ejecución de tareas asíncronas <<\n")
log("1. Inicio (asíncrono) ")
setTimeout(tarea1, 2000)
setTimeout(tarea2, 1000)
log("4. Fin")

//> Ejecución de tareas asíncronas
//1. Inicio                      11:56:46
//4. Fin                         11:56:46
//3. Ejecutando Tarea 2          11:56:47
//2. Ejecutando Tarea 1          11:56:48

console.log("\n>> Ejecución de tareas asíncronas repetidas <<\n")
log("1. Inicio (asíncrono periódicas)")
setInterval(tarea1, 1000)
log("3. Fin")

//> Ejecución de tareas asíncronas repetidas
//1. Inicio                      11:56:46
//3. Fin                         11:56:46
//2. Ejecutando Tarea 1          11:56:47
//2. Ejecutando Tarea 1          11:56:48
//2. Ejecutando Tarea 1          11:56:49
//2. Ejecutando Tarea 1          11:56:50
// Continúa hasta presionar CTRL + C