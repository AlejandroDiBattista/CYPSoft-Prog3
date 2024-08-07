// tests/carrito.test.js
import mongoose from 'mongoose';
import { expect } from 'chai';
import Carrito from '../modelo/carrito.js';
import Cliente from '../modelo/cliente.js'; // Asumiendo que tienes un modelo Cliente
import Producto from '../modelo/producto.js'; // Asumiendo que tienes un modelo Producto

describe('Carrito Model', function () {
    let clienteId, productoId;

    before(async function () {
        // Conectar a la base de datos
        await mongoose.connect('mongodb://localhost/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        // Crear un cliente y un producto para usar en los tests
        const cliente = new Cliente({ nombre: 'Cliente de Prueba' });
        const savedCliente = await cliente.save();
        clienteId = savedCliente._id;

        const producto = new Producto({
            codigo: 'ABC123',
            descripcion: 'Producto de Prueba',
            precio: 100,
            existencia: 50,
            proveedor: new mongoose.Types.ObjectId()
        });
        const savedProducto = await producto.save();
        productoId = savedProducto._id;
    });

    after(async function () {
        // Limpiar la base de datos y cerrar la conexión
        await Carrito.deleteMany({});
        await Cliente.deleteMany({});
        await Producto.deleteMany({});
        await mongoose.connection.close();
    });

    describe('Crear Carrito', function () {
        it('debería crear un carrito asociado a un cliente', async function () {
            const carrito = await Carrito.crearCarrito(clienteId);
            expect(carrito).to.have.property('_id');
            expect(carrito.cliente).to.equal(clienteId);
        });
    });

    describe('Agregar Producto', function () {
        it('debería agregar un producto al carrito', async function () {
            const carrito = await Carrito.crearCarrito(clienteId);
            const updatedCarrito = await Carrito.agregarProducto(carrito._id, productoId, 5);
            expect(updatedCarrito.productos).to.have.lengthOf(1);
            expect(updatedCarrito.productos[0].cantidad).to.equal(5);
        });

        it('debería incrementar la cantidad si el producto ya está en el carrito', async function () {
            const carrito = await Carrito.crearCarrito(clienteId);
            await Carrito.agregarProducto(carrito._id, productoId, 5);
            const updatedCarrito = await Carrito.agregarProducto(carrito._id, productoId, 3);
            expect(updatedCarrito.productos).to.have.lengthOf(1);
            expect(updatedCarrito.productos[0].cantidad).to.equal(8);
        });

        it('no debería agregar unidades negativas', async function () {
            const carrito = await Carrito.crearCarrito(clienteId);
            try {
                await Carrito.agregarProducto(carrito._id, productoId, -5);
            } catch (error) {
                expect(error.message).to.equal('Las unidades a agregar no pueden ser negativas');
            }
        });
    });

    describe('Quitar Producto', function () {
        it('debería quitar unidades de un producto en el carrito', async function () {
            const carrito = await Carrito.crearCarrito(clienteId);
            await Carrito.agregarProducto(carrito._id, productoId, 10);
            const updatedCarrito = await Carrito.quitarProducto(carrito._id, productoId, 4);
            expect(updatedCarrito.productos[0].cantidad).to.equal(6);
        });

        it('debería eliminar el producto del carrito si la cantidad llega a cero', async function () {
            const carrito = await Carrito.crearCarrito(clienteId);
            await Carrito.agregarProducto(carrito._id, productoId, 5);
            const updatedCarrito = await Carrito.quitarProducto(carrito._id, productoId, 5);
            expect(updatedCarrito.productos).to.have.lengthOf(0);
        });

        it('no debería quitar unidades negativas', async function () {
            const carrito = await Carrito.crearCarrito(clienteId);
            await Carrito.agregarProducto(carrito._id, productoId, 5);
            try {
                await Carrito.quitarProducto(carrito._id, productoId, -5);
            } catch (error) {
                expect(error.message).to.equal('Las unidades a quitar no pueden ser negativas');
            }
        });

        it('no debería quitar más unidades de las que existen en el carrito', async function () {
            const carrito = await Carrito.crearCarrito(clienteId);
            await Carrito.agregarProducto(carrito._id, productoId, 5);
            try {
                await Carrito.quitarProducto(carrito._id, productoId, 10);
            } catch (error) {
                expect(error.message).to.equal('No hay suficientes unidades en el carrito');
            }
        });
    });

    describe('Calcular Total', function () {
        it('debería calcular el total de unidades y el importe total del carrito', async function () {
            const carrito = await Carrito.crearCarrito(clienteId);
            await Carrito.agregarProducto(carrito._id, productoId, 5);
            const updatedCarrito = await Carrito.calcularTotal(carrito._id);
            expect(updatedCarrito.totalUnidades).to.equal(5);
            expect(updatedCarrito.totalImporte).to.equal(500);
        });
    });

    describe('Cambiar Estado', function () {
        it('debería cambiar el estado del carrito', async function () {
            const carrito = await Carrito.crearCarrito(clienteId);
            const updatedCarrito = await Carrito.cambiarEstado(carrito._id, 'Confirmado');
            expect(updatedCarrito.estado).to.equal('Confirmado');
        });
    });
});
