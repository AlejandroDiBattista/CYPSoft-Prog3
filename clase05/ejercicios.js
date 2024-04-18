// Lista inicial de productos
let productos = [
    { id: 1, nombre: "Producto 1", precio: 10.50, cantidad: 5 },
    { id: 2, nombre: "Producto 2", precio: 20.75, cantidad: 8 },
    { id: 3, nombre: "Producto 3", precio: 15.00, cantidad: 3 },
    { id: 4, nombre: "Producto 4", precio: 8.99, cantidad: 10 },
    { id: 5, nombre: "Producto 5", precio: 25.49, cantidad: 6 },
    { id: 6, nombre: "Producto 6", precio: 12.30, cantidad: 7 },
    { id: 7, nombre: "Producto 7", precio: 18.75, cantidad: 2 },
    { id: 8, nombre: "Producto 8", precio: 30.00, cantidad: 4 },
    { id: 9, nombre: "Producto 9", precio: 5.99, cantidad: 9 },
    { id: 10, nombre: "Producto 10", precio: 22.50, cantidad: 1 }
];

// Función para eliminar un producto por su ID
function eliminarProducto(productos, idProducto) {
    return productos.filter(producto => producto.id !== idProducto);
}

// Función para agregar un nuevo producto
function agregarProducto(productos, nuevoProducto) {
    return [...productos, nuevoProducto];
}

// Función para modificar un producto
function modificarProducto(productos, idProducto, datosNuevos) {
    return productos.map(producto =>
        producto.id === idProducto ? { ...producto, ...datosNuevos } : producto
    );
}

// Ejemplo de uso de las funciones

// Eliminar el producto con ID 3
productos = eliminarProducto(productos, 3);

// Agregar un nuevo producto
let nuevoProducto = { id: 11, nombre: "Producto 11", precio: 17.99, cantidad: 5 };
productos = agregarProducto(productos, nuevoProducto);

// Modificar el precio y la cantidad del producto con ID 5
productos = modificarProducto(productos, 5, { precio: 30.00, cantidad: 8 });

// Mostrar los productos actualizados
console.table(productos);
