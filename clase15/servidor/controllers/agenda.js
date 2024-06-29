import Agenda from '../models/agenda.js';

async function leerTodo(req, res) {
    try {
        const contactos = await Agenda.listar();
        res.status(200).json(contactos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function crear(req, res) {
    try {
        const contacto = req.body;
        const { _id } = await Agenda.crear(contacto);
        res.status(201).json({ _id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function borrar(req, res) {
    try {
        const id = req.params.id;
        await Agenda.borrar(id);
        res.status(200).json({ ok: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default { leerTodo, crear, borrar };