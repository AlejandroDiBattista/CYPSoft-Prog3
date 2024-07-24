// servidor/models/agenda.js

import { MongoClient, ObjectId } from 'mongodb';

const url = "mongodb://localhost:27017";

let cliente = new MongoClient(url);
let contactos = null;

async function conectar() {
    if (contactos !== null) return;

    await cliente.connect();
    const db = cliente.db("agenda");
    contactos = db.collection("contactos");
}

async function cargaInicial() {
    await conectar();
    const cantidad = await contactos.countDocuments();
    if (cantidad === 0) {
        await contactos.insertMany([
            { nombre: "Jose",  apellido: "corbalan", telefono: "837469" },
            { nombre: "lucas", apellido: "gimenez",  telefono: "354334" },
            { nombre: "Diego", apellido: "segura",   telefono: "345345" }
        ]);
    }
}

async function listar() {
    await cargaInicial();
    await conectar();
    return await contactos
        .find({})
        .sort({ apellido: 1, nombre: 1 })
        .toArray();
}

async function crear(contacto) {
    await conectar();
    const resultado = await contactos.insertOne(contacto);
    return { _id: resultado.insertedId };
}

async function borrar(id) {
    await conectar();
    await contactos.deleteOne({ _id: new ObjectId(id) });
    return { ok: true };
}

async function modificar(id, contacto) {
    await conectar();
    delete contacto._id; // Eliminar el campo _id del objeto de contacto
    const resultado = await contactos.updateOne(
        { _id: new ObjectId(id) },
        { $set: contacto }
    );
    return resultado.matchedCount > 0;
}

export default { listar, crear, borrar, modificar };
