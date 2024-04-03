// Desestruturación 

let punto = {x: 10, y: 20}

// let x = punto.x
// let y = punto.y

let {x, y} = punto // let {x: x, y: y} = punto
let {x: xx, y: yy} = punto

// let {x: xx, y: yy} = {x: 10, y: 20}

let p = {x, y} // => let p = {x: x, y: y}

let texto = `x:${x}, y:${y}`
texto
texto = `x:${xx}, y:${yy}`

let numeros = [1, 2, 3]

let [primero, segundo] = numeros // => let primero = a[0], segundo = a[1]
primero
segundo
let [a, b,,,e] = [1, 2, 3, 4, 5, 6, 7]
a
b
e

function nombreCompleto1(persona){
  return `${persona.apellido}, ${persona.nombre}`
}

function nombreCompleto2(persona){
  let apellido = persona.apellido, nombre = persona.nombre 
  return `${apellido}, ${nombre}`
}

function nombreCompleto3(persona){
  let {apellido, nombre} = persona
  return `${apellido}, ${nombre}`
}

function nombreCompleto({apellido, nombre}){
  return `${apellido}, ${nombre}`
}

let contacto = {
  nombre: "Juan", 
  apellido: "Perez", 
  telefono: 323232, edad: 20,
  direccion: { calle: "San Martin", numero: 123 }
}

nombreCompleto(contacto)

function mostrar({nombre, apellido, direccion: {calle}}){
  return `${nombre} ${apellido} vive en la calle ${calle}`
}

let c = mostrar(contacto)
c 