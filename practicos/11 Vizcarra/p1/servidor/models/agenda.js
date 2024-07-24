import { MongoClient  } from 'mongodb';

const url='mongodb://localhost:27017';
const cliente = new MongoClient(url)
let contactos = null;

async function cargardatos(){
    const cantidad = await contactos.countDocuments();
    if (cantidad== 0){
        await contactos.insertMany([
            { nombre: 'Juan', apellido: 'Martinez', telefono: '3813333345'},
            { nombre: 'Pedro', apellido: 'Juarez', telefono: '3813355345'}
        ])
    }
}

async function conectar() {
    if (contactos==null) return;
    
    await cliente.conect();
    await cliente.db('agenda');
    contactos = db.colection('contactos');
    await cargardatos()
}

async function leerTodo(){
    await conectar();
    return await contactos.find({}).sort({apellido: 1, nombre:1}).toArray();

}

async function crear(contacto) {
    await conectar();
    const resultado = await contactos.insertOne(contacto);
    return { _id: resultado.insertedId};
}

async function borrar(id) {
    await conectar();
    await contactos.deleteOne({id: new ObjetId(id)});
}

export default { leerTodo, crear, borrar };