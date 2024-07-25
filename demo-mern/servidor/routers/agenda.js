import express from 'express';
import AgendaController from '../controllers/agenda.js'

const router = express.Router();

router.get('/', AgendaController.listar);
router.post('/', AgendaController.crear);
router.delete('/:id', AgendaController.borrar);

export default router;