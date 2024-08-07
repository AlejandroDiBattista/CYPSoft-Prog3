// modelo/carrito.js
import mongoose from 'mongoose';

const productoEnCarritoSchema = new mongoose.Schema({
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    },
    cantidad: {
        type: Number,
        required: true,
        min: [0, 'La cantidad no puede ser negativa']
    },
    importe: {
        type: Number,
        required: true
    }
});

const carritoSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    productos: [productoEnCarritoSchema],
    estado: {
        type: String,
        enum: ['Abierto', 'Cancelado', 'Confirmado', 'Enviando', 'Recibido', 'Devuelto'],
        default: 'Abierto'
    },
    totalUnidades: {
        type: Number,
        default: 0
    },
    totalImporte: {
        type: Number,
        default: 0
    }
});

// Métodos estáticos
carritoSchema.statics.crearCarrito = async function (clienteId) {
    return await this.create({ cliente: clienteId });
};

carritoSchema.statics.agregarProducto = async function (carritoId, productoId, unidades) {
    if (unidades < 0) throw new Error('Las unidades a agregar no pueden ser negativas');

    const carrito = await this.findById(carritoId).populate('productos.producto');
    if (!carrito) throw new Error('Carrito no encontrado');

    const producto = carrito.productos.find(p => p.producto._id.equals(productoId));

    if (producto) {
        producto.cantidad += unidades;
        producto.importe = producto.cantidad * producto.producto.precio;
    } else {
        const Producto = mongoose.model('Producto');
        const prod = await Producto.findById(productoId);
        if (!prod) throw new Error('Producto no encontrado');

        carrito.productos.push({
            producto: productoId,
            cantidad: unidades,
            importe: unidades * prod.precio
        });
    }

    await carrito.calcularTotal();
    return await carrito.save();
};

carritoSchema.statics.quitarProducto = async function (carritoId, productoId, unidades) {
    if (unidades < 0) throw new Error('Las unidades a quitar no pueden ser negativas');

    const carrito = await this.findById(carritoId).populate('productos.producto');
    if (!carrito) throw new Error('Carrito no encontrado');

    const producto = carrito.productos.find(p => p.producto._id.equals(productoId));
    if (!producto) throw new Error('Producto no encontrado en el carrito');
    if (producto.cantidad < unidades) throw new Error('No hay suficientes unidades en el carrito');

    producto.cantidad -= unidades;
    producto.importe = producto.cantidad * producto.producto.precio;

    if (producto.cantidad === 0) {
        carrito.productos = carrito.productos.filter(p => !p.producto._id.equals(productoId));
    }

    await carrito.calcularTotal();
    return await carrito.save();
};

carritoSchema.statics.calcularTotal = async function (carritoId) {
    const carrito = await this.findById(carritoId).populate('productos.producto');

    carrito.totalUnidades = carrito.productos.reduce((total, p) => total + p.cantidad, 0);
    carrito.totalImporte = carrito.productos.reduce((total, p) => total + p.importe, 0);

    return carrito.save();
};

carritoSchema.statics.cambiarEstado = async function (carritoId, nuevoEstado) {
    const carrito = await this.findById(carritoId);
    if (!carrito) throw new Error('Carrito no encontrado');

    carrito.estado = nuevoEstado;
    return await carrito.save();
};

const Carrito = mongoose.model('Carrito', carritoSchema);

export default Carrito;
