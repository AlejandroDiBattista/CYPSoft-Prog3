import { Router } from 'express';
import { enviarUno as crear, modificarUno as modificar, borrarUno as borrar, traerUno, traerTodo } from './controladores.js'

const router = Router();

router.get("/productos/", traerTodo)
router.get("/productos/:id", traerUno)
router.post("/productos/", crear)
router.put("/productos/:id", modificar)
router.delete("/productos/:id", borrar)

export default router;