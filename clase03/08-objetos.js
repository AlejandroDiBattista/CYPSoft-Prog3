// Objetos | Tipos compuestos heterogenos

let nombre = "Juan"
let apellido = "Perez"

function nombreCompleto(nombre, apellido){
  return `${apellido}, ${nombre}`
}

nombreCompleto("Luis", "Gomez")

// Los objetos son "paquetes" de datos (y funciones)
let persona = {"nombre": "Juan", "apellido": "Lopez"}
persona['nombre']
persona['apellido']
// Son pares de clave, valor;  
// clave: 'nombre', valor: "Juan"

persona['nombre'] = 'Maria'
persona

function nombreCompleto2(p){
  return `${p['apellido']}, ${p['nombre']}`
}

nombreCompleto2(persona)

let a = {nombre: 'Juan', apellido: 'Diaz'}
a.nombre 
a.nombre = 'Maria'
a
a['apellido'] = 'Smith'
a

a = {"telefono celular": 5232323}
a['telefono celular']
let b = 'telefono celular'
a[b] = 99999999
a

a = {telefonoCelular: 5232323}
a.telefonoCelular
a.telefonoCelular = 99999999
a

function nombreCompleto3(p){
  return `${p.apellido}, ${p.nombre}`
}

persona.edad = 30
persona['telefono'] = 43434343

for(let k in persona){
  console.log(`${k} = ${persona[k]}`)
}


Object.keys(persona)
Object.values(persona)

nombre = "Maria"
apellido = "Santillan"
let p1 = {nombre: nombre, apellido: apellido}
let p2 = {nombre, apellido, }

p1 
p2

persona = {
  nombre: "Juan", 
  apellido: "Lopez",
  direccion: {
    calle: "San Martin",
    numero: 1234
  },
  telefono: {
    area: 381,
    numero: 343456,
    operador: 'claro',
    celular: true,
  }
}

// Acceso

persona.nombre
persona.telefono
persona.domicilio.calle = 'Cordoba'
persona.telefono.celular = false 

persona
persona.domicilio

