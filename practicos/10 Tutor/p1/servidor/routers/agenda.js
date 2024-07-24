import express from 'express';
import Agenda from '../controllers/agenda.js';

// Creación del enrutador utilizando Express
const router = express.Router();

// Definición de las rutas CRUD para la gestión de contactos
router.get('/', Agenda.leerTodo);
router.post('/', Agenda.crear);
router.delete('/:id', Agenda.borrar);
router.put('/:id', Agenda.modificar); 

export default router;
