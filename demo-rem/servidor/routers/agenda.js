import Agenda from '../controllers/agenda.js'

import express from 'express';

const router = express.Router();

router.get('/', Agenda.listar);
router.post('/', Agenda.crear);
router.delete('/:id', Agenda.borrar);

// router.get('/:id', Agenda.leer);
// router.put('/:id', Agenda.actualizar);

export default router;