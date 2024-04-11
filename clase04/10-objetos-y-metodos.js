
// Forma tradicional de definir un objeto
//   Un objeto es un paquete que agrupa datos y funciones que operan sobre esos datos
function Persona(nombre, apellido, edad) {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        
        nombreCompleto: function () {
            return `${this.nombre} ${this.apellido.toUpperCase()}`
        },

        cumplirAño: function () {
            this.edad++
        },

        toString: function () {
            return `${this.nombre} ${this.apellido} (${this.edad})`
        }
    }
}

let a = new Persona("Juan", "Perez", 30)
let b = new Persona("Ana", "Gomez", 25)

console.log(a.toString())
a.cumplirAño()
a.cumplirAño()
a.cumplirAño()
a.cumplirAño()
a.cumplirAño()
console.log(a.toString())

console.log(b.toString())
b.cumplirAño()
console.log(b.toString())

// En JavaScript todo es un objeto

// Un string es un objeto
let n = "hola mundo"
console.log(n.toUpperCase())
console.log("rojo,verde,azul".split(","))

// Un array es un objeto
let numeros = [1, 2, 3, 4, 5]
console.log(numeros.length)
console.log(numeros.join("-"))
console.log(numeros.reverse())
console.log(numeros.sort())

// Un objeto Date es un objeto
let d = new Date()
console.log(d.getFullYear())
console.log(d.getMonth())
console.log(d.toString())
console.log(d.toISOString().split("T"))

