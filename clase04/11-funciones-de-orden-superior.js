// Las funciones de orden superior son funciones que reciben como parámetro otra función
// o devuelven una función como resultado.

// En JavaScript, las funciones son de primera clase, lo que significa que pueden ser 
// tratadas como cualquier otra variable.
// Por lo tanto, las funciones pueden ser pasadas como argumentos a otras funciones y pueden 
// ser devueltas por otras funciones.Esto permite la creación de funciones de orden superior.

let numeros = [1, 2, 3]

// funcion generica para recorrer un array y aplicar una accion a cada elemento
function recorrer(lista, accion) {
    for (let n of lista) {
        accion(n)
    }
}

function saludar(n){
    console.log(`Hola ${n}`)
}

// Recorremos el array y aplicamos la funcion saludar a cada elemento
for (let n of numeros) {
    saludar(n)
}
// Hacemos lo mismo pero con la funcion recorrer
recorrer(numeros, saludar)

console.log("------------------")
for(let n of numeros){
    console.log(n)
}
recorrer(numeros, console.log)

console.log("------------------")
// Podemos crear la funcion en el momento
recorrer(numeros, function(n){
    console.log("Saludar: ", n)
})

// Podemos usar una funcion flecha
recorrer(numeros, n => console.log("Saludar: ", n))


// Funcion generica para transformar (mapear) una lista
function mapear(lista, accion){
    let resultado = []
    for(let n of lista){
        resultado.push(accion(n))
    }
    return resultado
}

// Genera una lista con los elementos del array multiplicados por 2
let doble = []
for (let n of numeros) {
    let x = n * 2
    doble.push(x)
}
console.log("Doble: ", doble)

// Hacemos lo mismo pero con la funcion mapear
doble = mapear(numeros, n => n * 2)
console.log(doble)

let triple = []
for(let n of numeros){
    triple.push(n * 3)
}
console.log(triple)

triple = mapear(numeros, n => n * 3)
console.log(triple)

let cuadrado = mapear(numeros, n => n * n)
console.log(cuadrado)

let cubos = mapear(numeros, n => n * n * n)
console.log(cubos)

// La funcion 'mas' es una funcion de orden superior que ya viene en los arrays
let nombres = numeros.map(n => `Juan ${n}`)
console.log(nombres)

let productos = [
    { nombre: "Arroz", precio: 50 },
    { nombre: "Fideos", precio: 40 },
    { nombre: "Pan", precio: 30 }
]

// Genera una lista con los precios de los productos
let precios = productos.map(p => p.precio)

// Genera una lista con los nombres de los productos
let nombresProductos = productos.map(p => p.nombre)

console.log(precios)
console.log(nombresProductos)

// Funcion generica para filtrar una lista (deja los elementos que cumplen una condicion)
function filtrar(lista, condicion){
    let resultado = []
    for(let n of lista){
        if(condicion(n)){
            resultado.push(n)
        }
    }
    return resultado
}

// Filtra los productos que cuestan mas de 35
let caros = filtrar(productos, p => p.precio > 35)
console.log(caros)

let par = n => n % 2 == 0
let impar = n => n % 2 != 0

let pares = filtrar(numeros, par)
console.log(pares)
let impares = filtrar(numeros, impar)

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// La funcion 'filter' es una funcion de orden superior que ya viene en los arrays
impares = numeros.filter(impar)

console.log(numeros.filter(par).map(n => n * 7))

// Ordena una lista de menor precio a mayor precio
productos.sort((a, b) => a.precio - b.precio)
console.log(productos)

