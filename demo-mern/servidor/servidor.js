import express from 'express';
import cors from 'cors';

import AgendaRouter from './routers/agenda.js';

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(cors()); 

app.use('/contactos', AgendaRouter)

function mostrarServidorInstalado() {
    console.log('Servidor instalado en el puerto 3000');
}

app.listen(3000, mostrarServidorInstalado)

