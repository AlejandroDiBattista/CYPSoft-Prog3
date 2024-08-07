class Persona {
    #nombre = "Alejandro"
    #edad = 30
    constructor(nombre, edad) {
        this.#nombre = nombre
        this.edad = edad
    }

    get nombre() {
        return this.#nombre
    }

    get edad() {
        return this.#edad
    }

    set edad(edad) {
        if (edad > 0 && edad < 120) {
            this.#edad = edad
        }
    }

    static jesus() {
        return new Persona("Jesus", 33)
    }

    static jesus() {
        return Persona.jesus()
    }
}

function crearJesus() {
    return new Persona("Jesus", 33)
}

let jesus = crearJesus()
let j = Persona.jesus()

let j2 = Persona.jesus()