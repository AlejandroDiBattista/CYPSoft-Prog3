import mongoose from 'mongoose';

const personaSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: {
        type: Number,
        min: [0, 'La edad no puede ser negativa'],
        max: [65, 'La edad no puede ser mayor a 65']
    }
});

// Atributo virtual (no se almacena en la base de datos)
personaSchema.virtual('nombreCompleto')
    .get(function () {
        return `${this.nombre} ${this.apellido}`;
    })
    .set(function (nombreCompleto) {
        const [nombre, apellido] = nombreCompleto.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    });

// Métodos de instancia (methods)
personaSchema.methods.saludar = function () {
    console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
}

// Métodos de clase o estático (statics)
personaSchema.statics.profesor = function () {
    return new this({ nombre: 'Alejandro', apellido: 'Di Battista', edad: 56 });
}

// Métodos de consulta (queries)
personaSchema.query.buscarPorNombre = function (nombre) {
    return this.where({ nombre });
}

personaSchema.query.mayoresDe = function (edad) {
    return this.where('edad').gte(edad);
}

const Persona = mongoose.model('Persona', personaSchema);
let p = new Persona({ nombre: 'Pedro', apellido: 'Gomez', edad: 20 });
let j = new Persona({ nombre: 'Juan', apellido: 'Perez', edad: 30 });
let m = new Persona({ nombre: 'Maria', apellido: 'Gomez', edad: 25 });

