// Formas abreviadas

let numeros = [1, 2, 30, 40]

// Acumulador
let suma = 0
for(let x of numeros){ // Sumar elementos
  suma = suma + x
}
suma 
// Sumatoria
for(let x of numeros){ // Sumar elementos < 10
  if(x < 10) 
    suma = suma + x
}
suma 

let contar = 0
for(let x of numeros){ // Contar elementos
  contar = contar + 1
}

contar = 0
for(let x of numeros){  // Contar elementos < 10
  if(x < 10)
    contar = contar + 1
}

let factorial = 1 
for(let x in [1, 2, 3, 4, 5]){  // Productoria
  factorial = factorial * x
}

suma = suma + 10
suma += 10

contador = contador + 1
contador += 1 
contador++

factorial = factorial * 4
factorial *= 4

// // n = n OP x 
// // n OP= x

let dobles = []
for(let x in numeros){ // Mapear
  let d = x * 2
  dobles.push(d)
}
dobles

let sumatoria = 0 
for(let x in numeros)  // Reducir
  sumatoria = sumatoria + x

let pares = []
for(let x of numeros){  // Filtrar
  if(x % 2 == 0) // par
    pares.push(x)
}
pares

suma = 0
for(let x in numeros){
  if(x % 2 == 0){
    let d = x * 2
    suma += d
  }
}
suma 

let r = numeros.filter(x => x % 2==0).map(x => x*2).reduce((s,x) => s+x, 0)
r
const esPar = x => x % 2 == 0
const doble = x => x * 2
const sumar = (s,x) => s+x;

r = numeros.filter(esPar).map(doble).reduce(suma);
