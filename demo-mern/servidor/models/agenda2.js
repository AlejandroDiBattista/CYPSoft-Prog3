import mongodb from 'mongoose'

const esquema = new mongodb.Schema({
    nombre: String,
    apellido: String,
    telefono: String
});

const Contacto = mongodb.model('Contacto', esquema);

export default Contacto;

