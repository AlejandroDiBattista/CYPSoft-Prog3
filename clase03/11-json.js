// JSON ==> JavaScript Object Notation
// Serializacion de objetos para el intercambio de archivo

let agenda = [
  {nombre: "Jose", edad: 20},
  {nombre: "Juan", telefono: 343434},
  {nombre: "Maria", telefono: 454545, edad: 20},
]

agenda[1]

agenda[1].telefono
agenda[2]["telefono"] = 787878
agenda

// JSON ==> clave entre comilla, sin comas flotantes
agenda = [
  {"nombre": "Juan", "telefono": 343434},
  {"nombre": "Maria", "telefono": 454545, "edad": 20},
  {"nombre": "Jose", "edad": 20}
]

let productos =[
  {
    codigo: "779191919192",
    descripcion: "Coca Cola",
    compras: [
      {fecha: "1/2/2024", cantidad: 2, precio: 200},
      {fecha: "5/2/2024", cantidad: 7, precio: 232},
      {fecha: "9/2/2024", cantidad: 4, precio: 190},
    ]
  },
  {
    codigo: "779191919212",
    descripcion: "Pepsi Cola",
    compras: [
      {fecha: "3/2/2024", cantidad: 4, precio: 100},
      {fecha: "4/2/2024", cantidad: 1, precio: 120},
      {fecha: "6/2/2024", cantidad: 2, precio: 190},
    ]
  }
]
productos.length
productos[1].descripcion
productos[1].compras[2].fecha
productos[1].compras[2].cantidad = 1000

productos
console.log(JSON.stringify(persona,null,3))


let texto = '{"x": 10, "y": 20}'
texto 

typeof texto
let json = JSON.parse(texto)
json 
typeof json


let copia = JSON.parse(JSON.stringify(json))
copia
copia.x=100

copia
json
