// servidor/routers/agenda.js

import express from 'express';
import Agenda from '../controllers/agenda.js';

const router = express.Router();

router.get('/', Agenda.leerTodo);
router.post('/', Agenda.crear);
router.delete('/:id', Agenda.borrar);
router.put('/:id', Agenda.modificar); // Verificar que esta ruta esté correctamente definida

export default router;
