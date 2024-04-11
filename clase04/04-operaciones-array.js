let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Recorrer un array con for(;;)
for (let i = 0; i < numeros.length; i++) {
    let x = numeros[i]
    console.log(x)
}

// Recorrer un array con for( in ) me da las "claves" del array => "0", "1", "2", "3", "4", "5", "6", "7", "8
for (let x in numeros) {
    console.log(x)
}

// Recorrer con for( of ) me da los "valores" del array => 1, 2, 3, 4, 5, 6, 7, 8, 9
for (let x of numeros) {
    console.log(x)
}

/// Algunos ejemplos clásicos de operaciones con arrays

// Sumar los elementos de un array
let suma = 0 
for (let x of numeros) {
    suma += x
}
console.log(suma)

// Multiplicar los elementos de un array
let producto = 1 
for (let x of numeros) {
    producto *= x
}
console.log(producto)

// Encontrar el menor de los elementos de un array
let minimo = Infinity
for (let x of numeros) {
    if (x < minimo) {
        minimo = x
    }
}
console.log(minimo)

// Contar los elementos de un array
let contador = 0
for (let x of numeros) {
    c++
}
console.log(c)
console.log(numeros.length)

// Copiar un array
let copia = []
for (let x of numeros) {
    copia.push(x)
}

// Una funcion que nos permita encontrar el minimo de un array
function minimo(lista) {
    let min = Infinity
    for (let x of lista) {
        if (x < min) {
            min = x
        }
    }
    return min
}

console.log("----")
console.log(minimo(numeros))
console.log(minimo([10, 20, 30, 40, 50, 60, 70, 80, 90]))
console.log(minimo([100,20, 2]))