import express from 'express';

import Agenda from '../controllers/agenda.js';

const router = express.Router();

router.get('/contactos', Agenda.listar);
router.post('/contactos',Agenda.crear);
router.delete('/contactos/:id', Agenda.borrar);

export default router;
