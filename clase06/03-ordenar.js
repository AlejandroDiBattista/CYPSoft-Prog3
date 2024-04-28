let numeros = [10, 2, 3, 25, 4, 17, 32]

numeros.sort((a,b) => a - b)
console.log(numeros)

let productos = [
    {nombre: "Coca Cola", precio: 10},
    {nombre: "Pepsi",     precio: 12},
    {nombre: "Fanta",     precio:  8},
    {nombre: "Sprite",    precio:  9},
    {nombre: "Manaos",    precio:  7}
]

productos.sort((a,b) => a.precio - b.precio)
console.log(productos)

productos.sort((a,b) => a.nombre.localeCompare(b.nombre))
console.log(productos)