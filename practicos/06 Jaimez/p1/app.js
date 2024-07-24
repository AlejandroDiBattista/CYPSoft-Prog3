const express = require('express')
const mongoose = require('mongoose');
const Persona = require('./models/product.model.js')
const path = require('path');
const app = express()

app.use(express.json());

app.use(express.static(path.join(__dirname, './public')));

//Mostrar todas las personas
app.get('/Hotel/personas', async (req, res) => {
    try {
        const personas = await Persona.find({});
        res.status(200).json(personas)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Agregar personas
app.post('/Hotel/personas', async (req, res) => {
    try {
        const persona = await Persona.create(req.body);
        res.status(200).json(Persona);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//actualizar datos de las personas
app.put('/Hotel/personas/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const persona = await Persona.findByIdAndUpdate(id, req.body);

        if (!persona) {
            return res.status(404).json({ message: "Persona no encontrada" });
        }

        const personaMod = await Persona.findById(id);

        res.status(200).json(personaMod);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Eliminar personas

app.delete('/Hotel/personas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const persona = await Persona.findByIdAndDelete(id);
        if (!persona) {
            return res.status(404).json({ message: "Persona no encontrada" });
        }
        res.status(200).json({ message: "Se a eliminado correctamente" })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

mongoose.connect("mongodb+srv://piolakpo11:RwgBUiwVmA8cfDWX@cluster0.v3nacjp.mongodb.net/Hotel?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Se conecto a MongoDB');
        app.listen(3000, () => {
            console.log('Esta funcionando');
            console.log('Servidor en http://localhost:3000');
        });
    })
    .catch(() => {
        console.log('Fallo la conexion');
    });