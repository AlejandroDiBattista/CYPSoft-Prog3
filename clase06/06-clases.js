let CrearPersona = function(nombre, apellido, edad) {
    return  {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        
        nombreCompleto: function(){
            return `${this.nombre} ${this.apellido}`
        },

        esMayorDeEdad: function(){
            return this.edad >= 18
        },

        cumplirAños: function(){
            this.edad++
        },

        toString(){
            return `${this.nombre} ${this.apellido} (${this.edad})`
        }
}}

let juan = CrearPersona("Juan", "Perez", 22)
let ana  = CrearPersona("Ana", "Gonzalez", 15)    

console.log(juan.nombre)
console.log(juan.nombreCompleto())
console.log(juan.esMayorDeEdad())

class Persona {
    #nombre = ""
    #apellido = ""

    constructor(nombre, apellido, edad){
        this.#nombre = nombre
        this.#apellido = apellido.toUpperCase()
        this.edad = edad
    }
    get nombre(){
        return this.#nombre
    }
    get apellido(){
        return this.#apellido
    }
    set apellido(apellido){
        this.#apellido = apellido.toUpperCase()
    }
    get iniciales(){
        return this.#nombre[0] + this.#apellido[0]
    }
    nombreCompleto(){
        return `${this.#nombre} ${this.#apellido}`
    }
    esMayorDeEdad(){
        return this.edad >= 18
    }
    cumplirAños(){
        this.edad++
    }
    toString(){
        return `${this.#nombre} ${this.#apellido} (${this.edad})`
    }
}

let j = new Persona("Juan", "Perez", 22)

console.log(j.nombre)
console.log(j.nombreCompleto())
console.log(j.iniciales)
j.apellido = "diaz"

console.log(j.nombreCompleto())