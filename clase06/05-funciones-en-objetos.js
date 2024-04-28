Math.min(1,2,3,4,5,6,7,8,9,10)

// Usamos un objeto para agrupar funciones relacionadas
// Ejemplo de funciones matematicas (asi se implementa Math.min y Math.max)
const Matematica = {
    min: function(a,b){
        return a < b ? a : b
    },

    max: function(a,b){
        return a > b ? a : b
    },
}

console.log(Matematica.min(10, 20))
console.log(Matematica.max(10, 20))

// Otro ejemplo... asi se implementa el console.log y console.error
let consola = {
    log: function(mensaje){
        console.log(mensaje)
    },
    error: function(mensaje){
        console.error(mensaje)
    }
}

consola.log("Hola")
consola.error("Error")

// Ejemplo de un objeto con una funcion que devuelve el nombre completo
let persona = {
    nombre: "Juan",
    apellido: "Perez",

    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`
    }
}

persona.apellido = "Lopez"
console.log(persona.nombreCompleto())

// Ejemplo de una funcion que recibe una funcion como parametro y devuelve una lista filtrada
function filtrar(lista, condicion){
    let salida = []
    for(let i = 0; i < lista.length; i++){
        if(condicion(lista[i])){
            salida.push(lista[i])
        }
    }
    return salida
}

let numeros = [1,2,3,4,5,6,7,8,9,10]
let pares = filtrar(numeros , x => x % 2 === 0)

// Javascript tiene funciones de alto nivel que permiten hacer lo mismo
numeros.filter(x => x % 2 === 0)

// Ejemplo de una funcion que recibe una funcion como parametro y devuelve una lista transformada
function mapear(lista, transformacion){
    let salida = []
    for(let item of lista){
        salida.push(transformacion(item))
    }
    return salida
}

// Ejemplo de uso de la funcion mapear 
let dobles = mapear(numeros, x => x * 2)
let triples = mapear(numeros, x => x * 3)

// Javascript tiene funciones de alto nivel que permiten hacer lo mismo
dobles = numeros.map(x => x * 2)
triples = numeros.map(x => x * 3)

// Ejemplo de uso de filter y map juntos
let paresDobles = numeros.filter(x => x % 2 === 0).map(x => x * 2)

// Un caso mas elaborado con objetos

let productos = [
    {nombre: "Notebook", precio: 1000},
    {nombre: "Celular", precio: 900},
    {nombre: "Tablet", precio: 200},
    {nombre: "Smartwatch", precio: 200},
]

// Filtrar los productos caros, obtener solo los nombres y ordenarlos alfabeticamente
let caros = productos
    .filter(p => p.precio > 800)
    .map(p => p.nombre)
    .sort((a, b) => a.localeCompare(b))

console.log(caros)