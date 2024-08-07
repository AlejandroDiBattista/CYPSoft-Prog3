
const Agenda = [];

class Persona {
    #nombre;
    #apellido;
    #edad;

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    async save() {
        Agenda.push(this);
        return this;
    }

    get nombreCompleto () {
        return `${this.#apellido}, ${this.#nombre}`;
    }

    set nombreCompleto(nombreCompleto) {
        const [apellido, nombre] = nombreCompleto.split(', ');
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar() { // Método de instancia
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }

    toString() {
        return `${this.nombre} ${this.apellido} (${this.edad})`;
    }

    static profesor() { // Método de clase o estático (no se puede acceder a this, no depende de una instancia)
        return new Persona('Alejandro', 'Di Battista', 56);
    }

    static buscarPorNombre(nombre) {
        return Agenda.filter(p => p.nombre === nombre);
    }

    static mayoresDe(edad) {
        return Agenda.filter(p => p.edad > edad);
    }
}

function assert(condicion, mensaje) {
    if (!condicion) {
        throw new Error(mensaje);
    }
}

// let p = {nombre: 'Pedro', apellido: 'Gomez', edad: 20};
let p = new Persona('Pedro', 'Gomez', 20);
p.saludar();
let j = new Persona('Juan', 'Perez', 30);
let m = new Persona('Maria', 'Gomez', 25);
let j1 = new Persona('Juan', 'Gomez', 35);

console.log('Agenda:', Agenda);
Persona.buscarPorNombre('Juan').forEach(p => p.saludar());
