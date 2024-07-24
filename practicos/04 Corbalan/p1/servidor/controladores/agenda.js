import Datos from '../modelos/agenda.js';

async function leer(req, res){
    try{
        const datos = await Datos.verTodo();
        res.json(datos);
    }catch(error){
        res.status(500).json({error: error.message});

    }
}

async function leerPorId(req, res) { 
    try {
        const id = req.params.id;
        const contacto = await Datos.verPorId(id);
        if (!contacto) {
            res.status(404).json({ mensaje: 'Contacto no encontrado' });
        } else {
            res.json(contacto);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function crear(req, res){
    try {
        const contacto = req.body;
        const id = await Datos.crear(contacto);
        res.json(id);
    } catch (error) {
        res.status(500).json({error: error.message});
        
    }
}

async function actualizar(req, res) {
    try {
        const id = req.params.id;
        const contactoActualizado = req.body;
        await Datos.actualizar(id, contactoActualizado);
        res.json({ mensaje: 'Contacto actualizado correctamente' });
    } catch (error) {
        console.error('Error al actualizar el contacto:', error);
        res.status(500).json({ error: error.message });
    }
}

async function borrar(req, res){
    try {
        const id = req.params.id;
        await Datos.borrar(id);
        res.json({mensaje: 'Contacto Eliminado'});

    } catch (error) {
        res.status(500).json({error: error.message});
        
    }
}

//async function leer(req,res) // por id

export default {leer, leerPorId, crear, actualizar, borrar};