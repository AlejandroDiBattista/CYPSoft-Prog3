import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const url = 'mongodb://localhost:27017';
const dbName = 'miAgenda';
let db;

async function connectToDatabase() {
  const client = new MongoClient(url);
  await client.connect();
  console.log('Conectado a MongoDB');
  db = client.db(dbName);
}

// Rutas
// Pide los datos dentro de la base de datos
app.get('/contactos', async (req, res) => {
  const contactos = await db.collection('contactos').find().toArray();
  res.json(contactos);
});

// Añade datos a la base de datos
app.post('/contactos', async (req, res) => {
  const nuevoContacto = req.body;
  const resultado = await db.collection('contactos').insertOne(nuevoContacto);
  res.status(201).json(resultado);
});

// Elimina datos a la base de datos
app.delete('/contactos/:id', async (req, res) => {
  const id = req.params.id;
  const resultado = await db.collection('contactos').deleteOne({ _id: new ObjectId(id) });
  res.json(resultado);
});

// Modifica datos a la base de datos
app.put('/contactos/:id', async (req, res) => {
  const id = req.params.id;
  const { nombre, telefono, correo } = req.body;
  console.log('Datos recibidos para actualizar:', { nombre, telefono, correo });
  try {
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }
    const resultado = await db.collection('contactos').updateOne(
      { _id: new ObjectId(id) },
      { $set: { nombre, telefono, correo } }
    );
    console.log('Resultado de la actualización:', resultado);
    if (resultado.matchedCount === 0) {
      return res.status(404).json({ error: 'Contacto no encontrado' });
    }
    res.json({ message: 'Contacto actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar contacto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


// Iniciar el servidor
async function startServer() {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

startServer();