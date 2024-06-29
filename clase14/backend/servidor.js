import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

const url = 'mongodb://localhost:27017';
const cliente = new MongoClient(url);

await cliente.connect()

const db = cliente.db('agenda-clase');
const contactos = db.collection('contactos');

app.post('/contactos', async (req, res) => {
    let contacto = req.body;
    let respuesta = await contactos.insertOne(contacto)
    res.json(respuesta);
});

app.get('/contactos', async (req, res)  => {    
    const contacts = await contactos.find().toArray();

    res.json(contacts);
});

app.delete('/contactos', async (req, res) => {
    let contacto = req.body;
    let respuesta = await contactos.deleteOne( { _id: contacto._id });
    res.json(respuesta);
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

