import Datos from '../models/agenda.js';

async function listar(req, res) {
    try {
        const datos = await Datos.leerTodo ();
        res.json(datos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function crear(req, res) {
    try {
        const contacto = req.body;
        const id = await Datos.crear(contacto);
        res.json(id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function borrar(req, res) {
    try {
        const id = req.params.id;
        await Datos.borrar(id);
        res.json({ mensaje: 'Contacto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}

export default { listar, crear, borrar };