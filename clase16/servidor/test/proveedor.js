// test/proveedor.test.js
import mongoose from 'mongoose';
import Proveedor from '../modelos/proveedor.js';
import Producto from '../modelos/producto.js';
import Usuario from '../modelos/usuario.js'; // Asumiendo que hay un modelo de Usuario
import { expect } from './chai.js';

describe('Prueba de la clase Proveedor', () => {
    let usuarioId;
    let proveedor;

    before(async () => {
        await mongoose.connect('mongodb://localhost:27017/test');
        await Proveedor.deleteMany({});
        await Producto.deleteMany({});
        await Usuario.deleteMany({});

        const usuario = await Usuario.create({ correo: "proveedor@mail.com", contraseña: "1234" });
        usuarioId = usuario._id;

        proveedor = await Proveedor.crearProveedor({ nombre: 'Proveedor 1', cuit: '20-12345678-9', usuario: usuarioId });
    });

    describe('Operaciones con proveedores', () => {
        it('Crear y buscar proveedor por nombre', async () => {
            const proveedores = await Proveedor.buscarPorNombre('Proveedor 1');
            expect(proveedores).to.have.lengthOf(1);
            expect(proveedores[0].cuit).to.equal('20-12345678-9');
        });

        it('Agregar producto a un proveedor', async () => {
            const datosProducto = {
                codigo: 'P001',
                descripcion: 'Producto 1',
                precio: 100,
                existencia: 50
            };
            await Proveedor.agregarProducto(proveedor._id, datosProducto);

            const producto = await Producto.buscarPorCodigo('P001');
            expect(producto.descripcion).to.equal('Producto 1');
            expect(producto.precio).to.equal(100);
            expect(producto.existencia).to.equal(50);
            expect(producto.proveedor.toString()).to.equal(proveedor._id.toString());
        });

        it('Listar productos activos de un proveedor', async () => {
            const productos = await Proveedor.listarProductosActivos(proveedor._id);
            expect(productos).to.have.lengthOf(1);
            expect(productos[0].codigo).to.equal('P001');
        });

        it('Listar todos los productos de un proveedor', async () => {
            const productos = await Proveedor.listarProductos(proveedor._id);
            expect(productos).to.have.lengthOf(1);
            expect(productos[0].codigo).to.equal('P001');
        });

        it('Agregar unidades a un producto', async () => {
            await proveedor.agregarUnidadesAProducto('P001', 20);
            const producto = await Producto.buscarPorCodigo('P001');
            expect(producto.existencia).to.equal(70);
        });

        it('Quitar unidades a un producto', async () => {
            await proveedor.quitarUnidadesAProducto('P001', 30);
            const producto = await Producto.buscarPorCodigo('P001');
            expect(producto.existencia).to.equal(40);
        });

        it('Cambiar el precio de un producto', async () => {
            await proveedor.cambiarPrecioProducto('P001', 150);
            const producto = await Producto.buscarPorCodigo('P001');
            expect(producto.precio).to.equal(150);
        });

        it('Listar productos con existencia por debajo de un umbral', async () => {
            const productos = await Proveedor.listarProductosBajoUmbral(proveedor._id, 100);
            expect(productos).to.have.lengthOf(1);
            expect(productos[0].codigo).to.equal('P001');
        });
    });

    after(async () => {
        await mongoose.connection.close();
    });
});
