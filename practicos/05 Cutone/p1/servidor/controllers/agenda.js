// servidor/controllers/agenda.js

import Agenda from '../models/agenda.js';

// Función para leer todos los contactos
async function leerTodo(req, res) {
    try {
        const contactos = await Agenda.listar();
        console.log('Contactos obtenidos:', contactos); // Log para mostrar los contactos obtenidos
        res.status(200).json(contactos);
    } catch (error) {
        console.log('Error al leer contactos:', error); // Log para mostrar el error al leer contactos
        res.status(500).json({ error: error.message });
    }
}

// Función para crear un nuevo contacto
async function crear(req, res) {
    try {
        const contacto = req.body;
        const { _id } = await Agenda.crear(contacto);
        console.log('Contacto creado:', contacto); // Log para mostrar el contacto creado
        res.status(201).json({ _id });
    } catch (error) {
        console.log('Error al crear contacto:', error); // Log para mostrar el error al crear contacto
        res.status(500).json({ error: error.message });
    }
}

// Función para borrar un contacto existente
async function borrar(req, res) {
    try {
        const id = req.params.id;
        await Agenda.borrar(id);
        console.log('Contacto borrado con ID:', id); // Log para mostrar el contacto borrado
        res.status(200).json({ ok: true });
    } catch (error) {
        console.log('Error al borrar contacto:', error); // Log para mostrar el error al borrar contacto
        res.status(500).json({ error: error.message });
    }
}

// Función para modificar un contacto existente
async function modificar(req, res) {
    try {
        const id = req.params.id;
        const contacto = req.body;
        const actualizado = await Agenda.modificar(id, contacto);
        if (actualizado) {
            console.log('Contacto actualizado con ID:', id); // Log para mostrar el contacto actualizado
            res.status(200).json({ ok: true });
        } else {
            console.log('Contacto no encontrado para actualizar'); // Log para mostrar que el contacto no se encontró
            res.status(404).json({ error: 'Contacto no encontrado' });
        }
    } catch (error) {
        console.log('Error al modificar contacto:', error); // Log para mostrar el error al modificar contacto
        res.status(500).json({ error: error.message });
    }
}

export default { leerTodo, crear, borrar, modificar };
