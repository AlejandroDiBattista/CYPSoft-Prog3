import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    email: String,
    password: String,
    ingreso: Date,
    token: String,
})

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;