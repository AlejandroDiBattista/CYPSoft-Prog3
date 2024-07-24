import { MongoClient, ObjectId } from "mongodb";

const url = 'mongodb://localhost:27017'

const Cliente = new MongoClient(url);
let contactos = null;

async function datosIniciales(){
    const cantidad = await contactos.countDocuments();
    if (cantidad === 0) {
        await contactos.insertMany([
            {nombre: "Jorge", apellido: "Acuña",    telefono: "456223125"},
            {nombre: "Pedro", apellido: "Sanchez",  telefono: "574345754"},
            {nombre: "Maria", apellido: "Gonzalez", telefono: "231854379"},
            {nombre: "Rocio", apellido: "Juarez",   telefono: "837462591"},
            {nombre: "Pablo", apellido: "Padilla",  telefono: "923475913"}
        ])
        
    }
}

async function conexion(){
    if (contactos !== null) return; //llama a conexion una sola vez 
    await Cliente.connect(); 
    const db= Cliente.db('agenda');
    contactos = db.collection('agenda');
    await datosIniciales();

}

async function verTodo(){
    await conexion();
    return await contactos.find({}).toArray();
}

async function verPorId(id) { // Añade esta función
    await conexion();
    return await contactos.findOne({ _id: new ObjectId(id) });
}

async function crear(contacto){
    await conexion();
    const respuesta = await contactos.insertOne(contacto);
    return {_id: respuesta.insertId};
}

async function actualizar(id, datosActualizar) {
    await conexion();
    delete datosActualizar._id; // Elimina el campo _id si se intenta actualizar
    await contactos.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: datosActualizar }
    );
}

async function borrar(id){
    await conexion();
    await contactos.deleteOne({_id:  new ObjectId(id)});
}

export default {verTodo, verPorId, crear, borrar, actualizar}
