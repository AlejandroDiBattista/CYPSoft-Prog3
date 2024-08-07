import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const usuarioSchema = new mongoose.Schema({
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: [true, 'El correo debe ser único'],
        lowercase: true,
        trim: true,
    },
    contraseña: {
        type: String,
        required: true,
        minLength: [4, 'La contraseña debe tener al menos 4 caracteres'],
        maxLength: [8, 'La contraseña debe tener como máximo 8 caracteres']
    },
    ultimoInicioSesion: { type: Date, default: null },
    expiracionInicioSesion: Date,
    tokenReinicio: String,
    expiracionReinicio: Date,
}, {

    virtuals: {
        esIngresado: {
            get: function () {
                revisarExpiracion(this);
                return this.ultimoInicioSesion !== null;
            }
        },

        esReinicio: {
            get: function () {
                revisarExpiracion(this);
                return this.tokenReinicio !== null;
            }
        }
    },

    methods: {
        salir: async function () {
            this.ultimoInicioSesion = null;
            this.expiracionInicioSesion = null;
            await this.save();
        },
    },

    statics: {
        buscarPorCorreo: async function (correo) {
            return await this.findOne({ correo });
        },

        registrar: async function (correo, contraseña) {
            const usuario = new this({ correo, contraseña });
            return await usuario.save();
        },

        ingresar: async function (correo, contraseña) {
            const usuario = await this.findOne({ correo });

            verificar(usuario, 'El usuario no existe');
            verificar(await bcrypt.compare(contraseña, usuario.contraseña), 'Credenciales inválidas');

            usuario.ultimoInicioSesion = new Date();
            usuario.expiracionInicioSesion = Date.now() + 10 /* minutos */ * 60 /* segundos */ * 1000 /* miliseg */
            usuario.tokenReinicio = null;
            return await usuario.save();
        },

        reiniciarContraseña: async function (correo) {
            const usuario = await this.findOne({ correo });
            verificar(usuario, 'El usuario no existe');

            usuario.tokenReinicio = generarToken();
            usuario.expiracionReinicio = Date.now() + 15 /* minutos */ * 60 /* segundos */ * 1000 /* milisegundos */;
            return await usuario.save();
        },

        cambiarContraseña: async function (correo, token, contraseña) {
            const usuario = await this.buscarPorCorreo(correo);
            verificar(usuario, 'El usuario no existe');
            verificar(usuario.esReinicio, 'Debe reiniciar antes de cambiar la contraseña');
            verificar(usuario.tokenReinicio == token, 'El token no es válido');

            usuario.tokenReinicio = null;
            usuario.expiracionReinicio = null;
            usuario.contraseña = contraseña;

            return await usuario.save();
        }
    }, 

    // pre: {
    //     save: async function (doc, next) {
    //         console.log("Pre save > ", doc);
    //         if (this.isModified('contraseña')) {
    //             this.contraseña = await hashContraseña(this.contraseña);
    //         }
    //         next();
    //     }
    // }
})

usuarioSchema.pre('save', async function (next) {
    console.log("Pre save > ", this);
    if (this.isModified('contraseña')) {
        this.contraseña = await hashContraseña(this.contraseña);
    }
    next();
});
// Funciones auxiliares

function verificar(condicion, mensaje) {
    // console.log("Condicion: ", !!condicion, "Mensaje: ", mensaje);
    if (!!!condicion) throw new Error(mensaje);
}

async function hashContraseña(contraseña) {
    return await bcrypt.hash(contraseña, 10);
}

function generarToken() {
    return Math.random().toString(36).slice(2)
}

function revisarExpiracion(usuario) {
    // Revisa si la sesión expiró
    // console.log("Revision de expiracion > ", usuario);
    if (usuario?.ultimoInicioSesion) {
        if (usuario.expiracionInicioSesion < Date.now()) {
            // Cierra la sesion si expiró
            usuario.ultimoInicioSesion = null;
            usuario.expiracionInicioSesion = null;
        } else {
            // Extender la sesión
            usuario.expiracionInicioSesion = Date.now() + 10 /* minutos */ * 60 /* segundos */ * 1000 /* milisegundos */;
        }
    }

    // Revisa si el token de reinicio expiró
    if (usuario?.tokenReinicio && usuario?.expiracionReinicio < Date.now()) {
        // Elimina el token si expiró
        usuario.tokenReinicio = null;
        usuario.expiracionReinicio = null;
    }
}

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;