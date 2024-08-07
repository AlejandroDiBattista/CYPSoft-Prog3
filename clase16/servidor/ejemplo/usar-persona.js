import mongoose from 'mongoose';
import Persona from '../modelos/persona.js';

const url = "mongodb://localhost:27017/test";

console.log('Inicio de la aplicación');


try {
    await mongoose.connect(url);
    console.log('Conexión exitosa');

    // Crear una persona

    const persona = new Persona({ nombre: "Alejandro", apellido: "Di Battista", edad: 56 });
    console.log('Persona:', persona.nombreCompleto);
    const p = await persona.save();
    console.log('Persona creada:', p);

} catch (error) {
    console.error('Error:', error);
} finally {
    await mongoose.connection.close();
}


console.log('Fin de la aplicación');