const express = require('express')
const mongoose = require('mongoose');
const Persona = require('./models/product.model.js')
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());

//Mostrar todas las personas
app.get('/personas', async (req, res) => {
    try {
        const personas = await Persona.find({});
        res.status(200).json(personas)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Agregar personas
app.post('/personas', async (req, res) => {
    try {
        const persona = await Persona.create(req.body);
        res.status(200).json(Persona);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//actualizar datos de las personas
app.put('/personas/:id', async (req, res) => {
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
app.delete('/personas/:id', async (req, res) => {
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

  mongoose.connect("mongodb+srv://pabloandrada280:4t0d8pH6TLHMZqeL@contactos.oeliqns.mongodb.net/Hotel?retryWrites=true&w=majority&appName=contactos")
    .then(() => {
        console.log('Se conecto a MongoDB');
        app.listen(3000, () => {
            console.log("Servidor corriendo en http://localhost:3000");
        });
    })
    .catch(() => {
        console.log('Fallo la conexion');
    });
