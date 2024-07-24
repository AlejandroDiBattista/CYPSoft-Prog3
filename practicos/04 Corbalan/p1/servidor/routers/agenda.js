import Agenda from '../controladores/agenda.js'

import express from 'express'

const router = express.Router();

router.get('/', Agenda.leer);
router.get ('/:id', Agenda.leerPorId );
router.post('/', Agenda.crear);
router.put ('/:id', Agenda.actualizar );
router.delete('/:id', Agenda.borrar);


export default router;