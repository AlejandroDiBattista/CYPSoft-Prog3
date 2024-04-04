let numeros = [1, 2, 3, 5, 8, 11, 19]

// ¿ Qué hace ?
let suma = 0
for(let i = 0; i < numeros.length; i++){ // Recorrer 
  let numero = numeros[i]
  suma = suma + numero  // Acumulador (sumador)
}

// Lo mismo pero mas legible
suma = 0
for(let numero of numeros)  // Recorrer
  suma += numero            // Acumular

suma = sumar(numeros)      // <== abstracción | simplicar | entendible
console.log(`Las suma de ${numeros} es ${suma}`)
console.log(`Las suma de ${numeros} es ${sumar(numeros)}`)

let pares   = [2, 4, 6, 8, 10]
let impares = [1, 3, 5, 7,  9]

suma = 0 
for(let numero in pares)
  suma += numero

console.log(`Las suma de ${pares} es ${suma}`)

console.log(`La suma de ${pares} es ${sumar(pares)}`)
console.log(`La suma de ${impares} es ${sumar(impares)}`)

mostrar(pares, sumar(pares))
mostrar(impares, sumar(impares))

mostrarSuma(pares)
mostrarSuma(impares)
mostrarSuma(numeros)

///
function mostrar(lista, suma){
  console.log(`La suma de ${lista} es ${suma}`)
}

function mostrarSuma(lista){
  mostrar(lista, sumar(lista))
}

function sumar(lista){
  let suma = 0
  for(let numero of numeros)
    suma += numero
  return suma
}