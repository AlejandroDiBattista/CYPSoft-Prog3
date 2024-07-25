import { MongoClient, ObjectId } from 'mongodb';

const url = 'mongodb://localhost:27017';
const cliente = new MongoClient(url)
let contactos = null;

async function cargarDatos() {
    const cantidad = await contactos.countDocuments();
    if (cantidad === 0) {
        await contactos.insertMany([
            { nombre: 'Juan',  apellido: 'Pérez', telefono: '(381) 123-45678' },
            { nombre: 'Ana',   apellido: 'Gómez', telefono: '(381) 876-54321' },
            { nombre: 'Pedro', apellido: 'López', telefono: '(381) 456-78901' },
            { nombre: 'María', apellido: 'Díaz',  telefono: '(381) 789-01234' }
        ]);
    }
}

async function conectar() {
    if (contactos !== null) return;
    
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

async function cambiar(id, contacto) {
    await conectar();
    await contactos.updateOne({_id: new ObjectId(id)}, {$set: contacto});
}

async function borrar(id) {
    await conectar();
    await contactos.deleteOne({_id: new ObjectId(id)});
}

export default { leerTodo, crear, borrar };