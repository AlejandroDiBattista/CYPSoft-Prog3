let esImpar = x => x % 2 != 0
let esPar   = x => x % 2 == 0

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let condicion

let impares = []
condicion = esImpar     // Filtra los impares.
for(let x of numeros){
    if(condicion(x)){
        impares.push(x)
    }
}
console.log(impares)

let pares = []
condicion = esPar
for(let x of numeros){  // Filtra los pares.
    if(condicion(x)){
        pares.push(x)
    }
}

// Creamos una función más general que permita filtrar cualquier condición.
function filtrar(lista, condicion){
    let salida = []
    for(let x of lista){
        if(condicion(x)){
            salida.push(x)
        }
    }
    return salida
}

pares = filtrar(numeros, esPar)
impares = filtrar(numeros, esImpar)

let triples = filtrar(numeros, x => x % 3 == 0)
let mayoresA5 = filtrar(numeros, x => x > 5)
let aux = filtrar(numeros, x => x * x == 4)

// Creamos una lista con una cantidad determinada de elementos.
function crearLista(cantidad){
    let lista = []
    for(let i = 0; i < cantidad; i++){
        lista.push(i)
    }
    return lista
}

let lista10 = crearLista(10)
let lista20 = crearLista(20)