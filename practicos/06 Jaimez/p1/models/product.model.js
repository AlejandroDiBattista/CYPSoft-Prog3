const mongoose = require('mongoose')

const personaSchema = mongoose.Schema(
    {
        "nombre": {
            type: String,
            required: [true, "Es necesario un Nombre"]
        },
        "apellido": {
            type: String,
            required: [true, "Es necesario un Apellido"]
        },
        "telefono": {
            type: Number,
            requiered: [true, "Es necesario un Numero de Telefono"]
        },
    },
    {
        timestamps: true,
    }
);

const Persona = mongoose.model("Persona", personaSchema);

module.exports = Persona;