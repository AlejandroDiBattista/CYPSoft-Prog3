// tests/producto.test.js
import mongoose from 'mongoose';
import Producto from '../modelos/producto.js';
import Proveedor from '../modelos/proveedor.js'; // Suponiendo que tienes un modelo de proveedor
import { expect } from './chai.js';

describe('Producto Model', function () {
    let proveedorId;

    before(async function () {
        // Conectar a la base de datos
        await mongoose.connect('mongodb://localhost/test' );

        // Crear un proveedor para usar en los tests
        await Producto.deleteMany({});
        await Proveedor.deleteMany({});

        const proveedor = new Proveedor({ nombre: 'Proveedor de Prueba' });
        const savedProveedor = await proveedor.save();
        proveedorId = savedProveedor._id;
    });

    describe('Crear Producto', function () {
        it('debería crear un producto con datos válidos', async function () {
            const datos = {
                codigo: 'ABC123',
                descripcion: 'Producto de Prueba',
                precio: 100,
                existencia: 50,
                proveedor: proveedorId
            };

            const producto = await Producto.crearProducto(datos);
            expect(producto).to.have.property('_id');
            expect(producto.codigo).to.equal('ABC123');
        });

        it('no debería crear un producto con precio negativo', async function () {
            const datos = {
                codigo: 'DEF456',
                descripcion: 'Producto de Prueba',
                precio: -100,
                existencia: 50,
                proveedor: proveedorId
            };

            try {
                await Producto.crearProducto(datos);
            } catch (error) {
                expect(error.message).to.equal('El precio no puede ser negativo');
            }
        });
    });

    describe('Agregar Unidades', function () {
        it('debería agregar unidades a un producto existente', async function () {
            const producto = new Producto({
                codigo: 'GHI789',
                descripcion: 'Producto de Prueba',
                precio: 100,
                existencia: 10,
                proveedor: proveedorId
            });
            await producto.save();

            const updatedProducto = await Producto.agregarUnidades('GHI789', 20);
            expect(updatedProducto.existencia).to.equal(30);
        });

        it('no debería agregar unidades negativas', async function () {
            try {
                await Producto.agregarUnidades('GHI789', -5);
            } catch (error) {
                expect(error.message).to.equal('Las unidades a agregar no pueden ser negativas');
            }
        });
    });

    describe('Quitar Unidades', function () {
        it('debería quitar unidades de un producto existente', async function () {
            const producto = await Producto.buscarPorCodigo('GHI789');
            const updatedProducto = await Producto.quitarUnidades('GHI789', 5);
            expect(updatedProducto.existencia).to.equal(producto.existencia - 5);
        });

        it('no debería quitar unidades negativas', async function () {
            try {
                await Producto.quitarUnidades('GHI789', -5);
            } catch (error) {
                expect(error.message).to.equal('Las unidades a quitar no pueden ser negativas');
            }
        });

        it('no debería quitar más unidades de las que existen', async function () {
            try {
                await Producto.quitarUnidades('GHI789', 100);
            } catch (error) {
                expect(error.message).to.equal('No hay suficientes unidades en existencia');
            }
        });
    });

    describe('Cambiar Precio', function () {
        it('debería cambiar el precio de un producto existente', async function () {
            const producto = await Producto.buscarPorCodigo('GHI789');
            const updatedProducto = await Producto.cambiarPrecio('GHI789', 150);
            expect(updatedProducto.precio).to.equal(150);
        });

        it('no debería cambiar a un precio negativo', async function () {
            try {
                await Producto.cambiarPrecio('GHI789', -150);
            } catch (error) {
                expect(error.message).to.equal('El precio no puede ser negativo');
            }
        });
    });

    describe('Buscar Productos', function () {
        it('debería buscar un producto por código', async function () {
            const producto = await Producto.buscarPorCodigo('GHI789');
            expect(producto).to.not.be.null;
            expect(producto.codigo).to.equal('GHI789');
        });

        it('debería buscar productos por descripción', async function () {
            const productos = await Producto.buscarPorDescripcion('Producto de Prueba');
            expect(productos).to.be.an('array');
            expect(productos).to.have.length.above(0);
        });

        it('debería listar productos por proveedor', async function () {
            const productos = await Producto.listarPorProveedor(proveedorId);
            expect(productos).to.be.an('array');
            expect(productos).to.have.length.above(0);
        });
    });

    after(async function () {
        // Limpiar la base de datos y cerrar la conexión
        await mongoose.connection.close();
    });

});
