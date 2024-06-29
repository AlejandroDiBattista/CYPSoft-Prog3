import { MongoClient, ObjectId } from 'mongodb';

const url = 'mongodb://localhost:27017';
const cliente = new MongoClient(url)
let contactos = null;

async function cargarDatos() {
    const cantidad = await contactos.countDocuments();
    if (cantidad === 0) {
        await contactos.insertMany([
            { nombre: 'Juan',  apellido: 'Pérez', telefono: '12345678' },
            { nombre: 'Ana',   apellido: 'Gómez', telefono: '87654321' },
            { nombre: 'Pedro', apellido: 'López', telefono: '45678901' },
            { nombre: 'María', apellido: 'Díaz',  telefono: '78901234' }
        ]);
    }
}
 
async function conectar() {
    if (contactos !== null) return; // ya está conectado
    await cliente.connect();
    const db = cliente.db('agenda');
    contactos = db.collection('contactos');
    await cargarDatos()
}

async function leerTodo() {
    await conectar();
    return await contactos.find({}).sort({apellido: 1, nombre: 1}).toArray();
}

async function crear(contacto) {
    await conectar();
    const resultado = await contactos.insertOne(contacto);
    return { _id: resultado.insertedId};
}

async function borrar(id) {
    await conectar();
    await contactos.deleteOne({_id: new ObjectId(id)});
}

export default { leerTodo, crear, borrar };