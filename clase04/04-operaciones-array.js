let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Recorrer un array con for(;;)
for (let i = 0; i < numeros.length; i++) {
    let x = numeros[i]
    console.log(x)
}

for (let x in numeros) {
    console.log(x)
}

// Sumar los elementos de un array
let s = 0 
for (let x of numeros) {
    s += x
}
console.log(s)

// Multiplicar los elementos de un array
let m = 1 
for (let x of numeros) {
    m *= x
}
console.log(m)

// Encontrar el menor de los elementos de un array
let min = Infinity
for (let x of numeros) {
    if (x < min) {
        min = x
    }
}
console.log(min)

// Contar los elementos de un array
let c = 0
for (let x of numeros) {
    c++
}
console.log(c)
console.log(numeros.length)

let copia = []
for (let x of numeros) {
    copia.push(x)
}

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