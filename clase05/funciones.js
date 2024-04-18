let figura = [
    { x:  1, y: 2},
    { x: 10, y: 0},
    { x: 15, y: 2},
    { x: 14, y: 5},
    { x:  5, y:10},
    { x:  1, y: 4},
]

let minimo = Infinity
for(let i=0; i < figura.length; i++){ //Recorro
    let punto = figura[i]; // Tomo el punto
    if(punto.x < minimo){
        minimo = punto.x
    }
}
console.log("El minimo es: ", minimo)

let precios = [100, 200, 300, 400, 500]
let total = 0
for(let i=0; i < precios.length; i++){
    let precio = precios[i]
    total = total + precio
}

let maximo = -Infinity
for(let i=0; i < figura.length; i++){
    let punto = figura[i]
    if(punto.x > maximo){
        maximo = punto.x
    }
}
console.log("El maximo es: ", maximo)

// Mostrar los puntos de la figura
for(let i=0; i < figura.length; i++){
    let punto = figura[i]
    console.log("Punto: ", punto)
}

let suma = 0
for(let i=0; i < precios.length; i++){
    let precio = precios[i]
    suma = suma + precio
}
suma = 0 
for(let producto of productos){
    suma = suma + producto.precio
}	
let promedio = suma / precios.length

for(let producto of productos){
    if(producto.precio > promedio){
        console.log("Producto: ", producto)
    }
}

for(let letra of "(1 + 2 * (3 + 4)")

let mayor = 0
let masCaro = null
for(let producto of productos){
    if(producto.precio > mayor){
        mayor = producto.precio
        masCaro = producto
    }
}
console.log("El mas caro es: ", masCaro)

// Mostrame el producto mas barato
let menor = Infinity
let masBarato = null
for(let producto of productos){
    if(producto.precio < menor){
        menor = producto.precio
        masBarato = producto
    }
}


for(let n=10; n <= 15;n++){ // Sumar numeros del 10 al 15 (incluido)
    suma = suma + n
}

// Sumar los pares del 20 al 40 (incluido)
suma = 0
for(let n=20; n <= 40; n = n + 2){
    suma = suma + n
}

console.log("El promedio es ", suma / precios.length)