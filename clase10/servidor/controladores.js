let productos = [
    { id: 1, nombre: "Coca Cola", precio: 100 },
    { id: 2, nombre: "Pepsi", precio: 90 },
    { id: 3, nombre: "Fanta", precio: 80 },
    { id: 4, nombre: "Sprite", precio: 70 },
]

function proximoId() {
    return Math.max(...productos.map(p => p.id)) + 1
}

function traerUno(req, res) {
    const { id } = req.params

    const producto = productos.find(p => p.id == id)
    res.json(producto)
}

function enviarUno(req, res) {
    const persona = req.body

    const id = proximoId()
    productos = [...productos, {...persona, id }]
    
    res.json({id})
}

function modificarUno(req, res) {
    const { id } = req.params
    const producto = req.body

    productos = productos.map(p => p.id == id ?
        { ...p, ...producto } : p)
    res.json(producto)
}

function traerTodo(req, res) {
    res.json(productos)
}

function borrarUno(req, res) {
    const { id } = req.params
    productos = productos.filter(p => p.id != id)
    res.json({id})
}
export { enviarUno,modificarUno, borrarUno, traerUno, traerTodo }