import express from 'express';
import cors from 'cors';
import Agenda from './routers/agenda.js';

const app = express();

app.use(cors()); // permite el acceso desde cualquier origen
app.use(express.json()); // para poder manejar los datos json

app.use('/contactos', Agenda)

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
})