// modelo/proveedor.js
import mongoose from 'mongoose';
import Producto from './producto.js';

const proveedorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    cuit: { type: String, required: true, unique: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }
});

// Métodos estáticos
proveedorSchema.statics.crearProveedor = async function (datos) {
    return await this.create(datos);
};

proveedorSchema.statics.agregarProducto = async function (proveedorId, productoDatos) {
    productoDatos.proveedor = proveedorId;
    return await Producto.crearProducto(productoDatos);
};

proveedorSchema.statics.buscarPorNombre = async function (nombre) {
    return await this.find({ nombre: new RegExp(nombre, 'i') });
};

proveedorSchema.statics.listarProductosActivos = async function (proveedorId) {
    return await Producto.find({ proveedor: proveedorId, activo: true });
};

proveedorSchema.statics.listarProductos = async function (proveedorId) {
    return await Producto.find({ proveedor: proveedorId });
};

proveedorSchema.statics.listarProductosBajoUmbral = async function (proveedorId, umbral) {
    return await Producto.find({ proveedor: proveedorId, existencia: { $lt: umbral } });
};

// Métodos de instancia para operar con productos
proveedorSchema.methods.agregarUnidadesAProducto = async function (codigo, unidades) {
    const producto = await Producto.buscarPorCodigo(codigo);
    if (!producto) throw new Error('Producto no encontrado');
    return await producto.agregarUnidades(unidades);
};

proveedorSchema.methods.quitarUnidadesAProducto = async function (codigo, unidades) {
    const producto = await Producto.buscarPorCodigo(codigo);
    if (!producto) throw new Error('Producto no encontrado');
    return await producto.quitarUnidades(unidades);
};

proveedorSchema.methods.cambiarPrecioProducto = async function (codigo, nuevoPrecio) {
    const producto = await Producto.buscarPorCodigo(codigo);
    if (!producto) throw new Error('Producto no encontrado');
    return await producto.cambiarPrecio(nuevoPrecio);
};

const Proveedor = mongoose.model('Proveedor', proveedorSchema);

export default Proveedor;
