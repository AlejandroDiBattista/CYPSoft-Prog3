// modelo/producto.js
import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
    codigo: { type: String, required: true, unique: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, default: 0, min: [0, 'El precio no puede ser negativo'] },
    existencia: { type: Number, default: 0, min: [0, 'La existencia no puede ser negativa'] },
    proveedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Proveedor', required: true },
    activo: { type: Boolean, default: true }
});

// Métodos estáticos
productoSchema.statics.crearProducto = async function (datos) {
    if (datos.precio < 0) throw new Error('El precio no puede ser negativo');
    if (datos.existencia < 0) throw new Error('La existencia no puede ser negativa');
    return await this.create(datos);
};


productoSchema.statics.buscarPorCodigo = async function (codigo) {
    return await this.findOne({ codigo });
};

productoSchema.statics.buscarPorDescripcion = async function (descripcion) {
    return await this.find({ descripcion: new RegExp(descripcion, 'i') });
};

productoSchema.statics.listarPorProveedor = async function (proveedorId) {
    return await this.find({ proveedor: proveedorId });
};

// Métodos de instancia
productoSchema.methods.agregarUnidades = async function (unidades) {
    if (unidades < 0) throw new Error('Las unidades a agregar no pueden ser negativas');
    this.existencia += unidades;
    return await this.save();
};

productoSchema.methods.quitarUnidades = async function (unidades) {
    if (unidades < 0) throw new Error('Las unidades a quitar no pueden ser negativas');
    if (this.existencia < unidades) throw new Error('No hay suficientes unidades en existencia');
    this.existencia -= unidades;
    return await this.save();
};

productoSchema.methods.cambiarPrecio = async function (nuevoPrecio) {
    if (nuevoPrecio < 0) throw new Error('El precio no puede ser negativo');
    this.precio = nuevoPrecio;
    return await this.save();
};

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;
