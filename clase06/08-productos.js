class Producto {
    constructor(nombre, precio, cantidad=0){
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    get valorExistencias(){
        return this.precio * this.cantidad
    }

    toString(){
        return `${this.nombre} $${this.precio} (${this.cantidad})`
    }

    comprar(cantidad){
        if(cantidad < 0){
            console.log("No se puede comprar una cantidad negativa")
            return
        }
        this.cantidad += cantidad
    }

    vender(cantidad){
        if(cantidad > this.cantidad){
            console.log("No hay suficiente stock")
            return
        }
        if(cantidad < 0){
            console.log("No se puede vender una cantidad negativa")
            return
        }
        this.cantidad -= cantidad
    }
}

class Almacen {
    constructor(nombre){
        this.nombre = nombre
        this.productos = []
    }

    agregarProducto(producto){
        this.productos.push(producto)
    }

    cantidadProductos(){
        let suma = 0
        for(let p of this.productos)
            suma += p.cantidad
        return suma
    }

    valorExistencias(){
        let suma = 0
        for(let p of this.productos)
            suma += p.valorExistencias
        return suma
    }
    precioPromedio(){
        return this.valorExistencias() / this.cantidadProductos()
    }
}

class Carrito{
    constructor(){
        this.items = []
    }
    agregar(producto){
        let producto = productos.find(p => p.nombre === producto.nombre)
        if(producto){
            producto.cantidad++
        } else {
            this.items.push({nombre: producto.nombre, cantidad: 1})
        }
    }
    valorTotal(){
        let suma = 0
        for(let p of this.items)
            suma += p.precio
        return suma
    }

}
let almacen = new Almacen("Deposito Central")

let notebook = new Producto("Notebook", 1000, 10)
almacen.agregarProducto(notebook)
let celular = new Producto("Celular", 900, 20)
almacen.agregarProducto(celular)
almacen.agregarProducto(new Producto("Tablet", 500, 15))
console.log(almacen.cantidadProductos())

let carrito = new Carrito()
carrito.agregar(notebook)
carrito.agregar(celular)
console.log(carrito.valorTotal())

carrito.agregar(notebook)
console.log(carrito.valorTotal())
