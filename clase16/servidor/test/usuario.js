import mongoose from 'mongoose';
import Usuario from '../modelos/usuario.js';
import { expect } from './chai.js';

describe('Prueba de la clase Usuario', () => {
    before(async () => {
        await mongoose.connect('mongodb://localhost:27017/test');

        await Usuario.deleteMany({});
        await Usuario.create({ correo: "admin@mail.com", contraseña: "0000" });
        await Usuario.create({ correo: "usuario@mail.com", contraseña: "1234" });
    });

    describe('Registro de usuarios', () => {
        it('Crear y buscar usuarios', async () => {
            // Crear usuarios iniciales

            // Revisa que esten creados los usuarios
            const u1 = await Usuario.buscarPorCorreo('admin@mail.com');
            expect(u1.correo).
                to.equal("admin@mail.com");

            const u2 = await Usuario.buscarPorCorreo("usuario@mail.com");
            expect(u2.correo)
                .to.equal("usuario@mail.com");
        });
    })

    describe("Login y Logout", () => {

        it('Logear y deslogear usuarios', async () => {
            const ale = await Usuario.ingresar('usuario@mail.com', '1234');
            expect(ale.esIngresado)
                .to.be.true;

            await ale.salir();
            expect(ale.esIngresado)
                .to.be.false;
        });

        it('El usuario no existe', async () => {
            expect(() => Usuario.ingresar("xxx@mail.com", '0000'))
                .to.fail(/El usuario no existe/);
        });

        it('Las credenciales son incorrectas', async () => {
            expect(() => Usuario.ingresar("admin@mail.com", '9999'))
                .to.fail(/Credenciales inválidas/);
        });
    });

    describe('Reinicio de contraseña', () => {

        it('Debe reinciar antes de cambiar la contraseña', async () => {
            const u = await Usuario.buscarPorCorreo("usuario@mail.com");
            expect(u.esReinicio)
                .to.be.false;

            expect(() => Usuario.cambiarContraseña(u.correo, "1234", "4321"))
                .to.fail(/Debe reiniciar antes de cambiar la contraseña/);
        })

        it('Con email invalido', async () => {
            expect(() => Usuario.reiniciarContraseña("xxx@mail.com"))
                .to.fail(Error, /El usuario no existe/);
        })

        it('Con token invalido', async () => {
            const u = await Usuario.reiniciarContraseña("usuario@mail.com");
            expect(u.esReinicio).
                to.be.true;

            expect(() => Usuario.cambiarContraseña(u.correo, "00000", "4321"))
                .to.fail(/El token no es válido/);
        })

        it('Con token valido', async () => {
            const u = await Usuario.reiniciarContraseña("usuario@mail.com");
            expect(u.esReinicio).
                to.be.true;
            
            const token = u.tokenReinicio;
            const u2 = await Usuario.cambiarContraseña(u.correo, token, "4321");
            expect(u2.esReinicio).
                to.be.false;
        })
    })

    after(async () => {
        // Cerrar la conexión a la base de datos
        await mongoose.connection.close();
    });
});
