import AgendaModel from '../models/agenda.js';

async function listar(req, res) {
    try {
        const datos = await AgendaModel.leerTodo();
        res.json(datos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function crear(req, res) {
    try {
        const contacto = req.body;
        const id = await AgendaModel.crear(contacto);
        res.json({ mensaje: 'Contacto creado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function cambiar(req, res) {
    try {
        const id = req.params.id;
        const contacto = req.body;
        await AgendaModel.cambiar(id, contacto);
        res.json({ mensaje: 'Contacto actualizado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function borrar(req, res) {
    try {
        const id = req.params.id;
        await AgendaModel.borrar(id);
        res.json({ mensaje: 'Contacto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default { listar, crear, cambiar, borrar };