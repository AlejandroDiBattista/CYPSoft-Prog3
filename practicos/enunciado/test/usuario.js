import mongoose from "mongoose";
import Usuario from "../model/usuario.js";
import { expect } from "./chai.js";

describe('Usuario', () => {

    before(async () => {
        await mongoose.connect('mongodb://localhost:27017/test');

        await Usuario.deleteMany({});

        await Usuario.registrar('admin@mail.com', '0000');
        await Usuario.registrar('usuario@mail.com', '1234');
    })

    after(async () => {
        await mongoose.connection.close();
    })

    describe('Registrar', () => {

        it('Verificar registracion', async () => {
            let a = await Usuario.buscarPorEmail('admin@mail.com');
            expect(a.email).to.equal('admin@mail.com');

            let u = await Usuario.buscarPorEmail('usuario@mail.com');
            expect(u.email).to.equal('usuario@mail.com');
        })

        it('Debería registrar un usuario', async () => {
            let u = await Usuario.registrar('nuevo@mail.com', '1234');
            expect(u.email).to.equal('nuevo@mail.com')
        })

    })
    describe('Validaciones', () => {
        it('Verificar email', async () => {
            try {
                await Usuario.create({ email: '' });
            } catch (err) {
                expect(err.errors.email.message).to.match(/El email es requerido/);
            }

            try {
                await Usuario.create({ email: 'aaaa' });
            } catch (err) {
                expect(err.errors.email.message).to.match(/El email debe ser un formato valido/);
            }
        })

        it('Verificar email repetido', async () => {
            try {
                await Usuario.create({ email: 'usario@mail.com', password: '1234' })
            } catch (err) {
                expect(err.errors.email.message).to.match(/El email ya existe/);
            }
        })

        it('Verificar password', async () => {
            try {
                await Usuario.create({ password: '' });
            } catch (err) {
                expect(err.errors.password.message).to.match(/La contraseña es obligatoria/);
            }

            try {
                await Usuario.create({ password: '123' });
            } catch (err) {
                expect(err.errors.password.message).to.match(/La contraseña debe tener al menos 4 caracteres/);
            }
        })
    })

    describe('Ingresar / Egreso', () => {

        it('Debería ingresar un usuario', async () => {
            let u = await Usuario.buscarPorEmail('usuario@mail.com');

            // console.log("Deberia ingresar un usuaio", u);
            expect(u.estaIngresado).to.be.false;

            u = await Usuario.ingresar('usuario@mail.com', '1234');
            expect(u.estaIngresado).to.be.true;

            await u.salir();
            expect(u.estaIngresado).to.be.false;
        })

        it('Verificar credenciales', async () => {
            expect(() => Usuario.ingresar('usuario@mail.com', '9999')).to.be
                .fail(/Credenciales inválida/);
        })
    })

    describe('Buscar usuarios por email', async () => {

        it('Debería buscar un usuario por email', async () => {
            let u = await Usuario.buscarPorEmail('usuario@mail.com')
            expect(u.email).to.equal('usuario@mail.com')
        })

        it('Debería fallar si no existe el usuario', async () => {
            expect(() => Usuario.buscarPorEmail('xxx@mail.com')).to.be
                .fail(/el usuario no existe/);
        })
    })

    describe('Recuperar contraseña', () => {

        it('Recuperar contraseña', async () => {
            let u = await Usuario.recuperarContraseña('usuario@mail.com');
            expect(u.token).to.exist; 
        })

        it('Cambiar contraseña', async () => {
            let u = await Usuario.recuperarContraseña('usuario@mail.com');
            expect(u.token).to.be.exist;

            u = await Usuario.cambiarContraseña(u.token, '4321');
            expect(u.token).to.be.null;
        })

        it('Rechazo cambio sin recuperar', async () => {
            expect(() => Usuario.cambiarContraseña('xxxx', '4321')).to.be
                .fail(/Token inválido/);
        })

    })
})