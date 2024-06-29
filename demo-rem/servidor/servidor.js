import express from 'express';
import cors from 'cors';

import Agenda from './routers/agenda.js';

const app = express();

app.use(express.json());
app.use(cors()); // para permitir el acceso desde cualquier origen

app.use('/contactos', Agenda)

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
})