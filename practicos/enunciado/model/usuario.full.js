import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "El email es requerido"],
        unique: [true, "El email ya existe"],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "El email debe ser un formato valido"],
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"],
        minlength: [4, "La contraseña debe tener al menos 4 caracteres"]
    }, 
    ingreso: {
        type: Date,
        default: null,
    },
    token: String,
})

usuarioSchema.statics.registrar = async function (email, password) {
    validar(email, 'Email es requerido');
    validar(password, 'Password es requerido');

    let u = await this.buscarPorEmail(email);
    validar(!u, 'El email ya existe');

    return await this.create({ email, password });
}

usuarioSchema.statics.ingresar = async function (email, password) {
    const usuario = await this.buscarPorEmail(email);
    validar(usuario, 'El usuario no existe');
    validar(usuario.password === password, 'Credenciales inválida');

    usuario.ingreso = Date.now();
    return usuario.save()
}

usuarioSchema.statics.buscarPorEmail = async function (email) {
    validar(email, 'Email es requerido');
    return await this.findOne({ email });
}

usuarioSchema.statics.recuperarContraseña = async function (email) {
    const usuario = await this.buscarPorEmail(email);
    validar(usuario, 'El usuario no existe');

    usuario.ingreso = null;
    usuario.token = generarToken();
    return usuario.save();
}

usuarioSchema.statics.cambiarContraseña = async function (token, password) {
    validar(token, 'Token es requerido');
    validar(password, 'Password es requerido');

    const usuario = await this.findOne({ token });
    validar(usuario, 'Token inválido');

    usuario.password = password;
    usuario.ingreso = null;
    usuario.token = null;
    
    return usuario.save();
}

usuarioSchema.methods.salir = function () {
    this.ingreso = null;
    this.token = null;
    return this.save();
}

usuarioSchema.virtual("estaIngresado").get(function () {
    return this.ingreso !== null;
})

// Funciones auxiliares

function validar(condicion, mensaje) {
    if (!condicion) throw new Error(mensaje);
}

function generarToken() {
    return Math.random().toString(36).slice(2);
}


const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;