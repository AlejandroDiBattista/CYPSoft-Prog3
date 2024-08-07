import mongoose from 'mongoose';

const personaSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number
});

personaSchema.virtual('nombreCompleto')
    .get(function () {
        return this.nombre + ' ' + this.apellido;
    })
    .set(function (nombreCompleto) {
        const [nombre, apellido] = nombreCompleto.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    });

personaSchema.methods.saludar = function () {
    console.log('Hola, soy', this.nombreCompleto);
};

personaSchema.statics.buscarPorNombre = async function (nombre) {
    return await this.find({ nombre });
}

personaSchema.query.mayoresDe = function (edad) {
    return this.where('edad').gte(edad);
}

// personaSchema.

// const Persona = mongoose.model('Persona', personaSchema);

export default Persona;

class Persona {
    constructor({ nombre, apellido, edad }) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

let j = new Persona({ nombre: 'Juan', apellido: 'Perez', edad: 30 });

console.log("Edad de Juan:", j.edad);

j.edad = 31;
console.log("Edad de Juan:", j.edad);

j.edad += 1
console.log("Edad de Juan:", j.edad);

m = new Persona({ nombre: 'Maria', apellido: 'Gomez', edad: 25 });
m.edad += 1;
console.log("Edad de Maria:", m.edad);

let p = {}
p.nombre = "Pedro"
p.apellido = "Gomez"
p.edad = 20

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

let persona = new Persona("Pedro", "Gomez", 20);
