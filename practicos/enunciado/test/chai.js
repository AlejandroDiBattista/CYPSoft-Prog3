// chai-extensions.js
import * as chai from 'chai';
import mongoose from 'mongoose';

const expect = chai.expect;

function extendChai() {
    chai.use(function (_chai, utils) {
        utils.addMethod(chai.Assertion.prototype, 'fail', function (error, mensaje) {
            const funcion = this._obj;

           
            const ejecutar = async () => {
                try {
                    await funcion();
                    throw new Error('Esperaba un error pero no ocurrió');
                } catch (err) {
                    if (error instanceof Error) {
                        expect(err).to.satisfy((e) => e instanceof error);
                    } else {  // Solo verifica mensaje
                        mensaje = error;
                    }
                    if (mensaje) {
                        expect(err.message).to.match(mensaje);
                    }
                }
            }
            ejecutar();
        });
    });
}

extendChai();

export default chai;
export { expect };