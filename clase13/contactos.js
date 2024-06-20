export default class Datos {
    static estaConectado() {
        return cliente != null;
    }

    static async conectar() {
        if (Datos.estaConectado) return;

        cliente = new MongoClient(url)
        await cliente.connect();

        coleccion = cliente.db('tup').collection('contactos');
    }

    static async desconectar() {
        if (!Datos.estaConectado) return;

        await cliente.close();
        cliente = null;
        coleccion = null;
    }

    static async crear(contacto) {
        await Datos.conectar()

        let resultado = await coleccion.insertOne(contacto);
        contacto._id = resultado.insertedId;
        return contacto;
    }

    static async leerTodos() {
        await Datos.conectar()
        let resultado = await coleccion.find().toArray();
        return resultado;
    }

    static async leer(id) {
        await Datos.conectar()
        return await coleccion.findOne({ _id: id });
    }

    static async leerDonde(condicion) {
        await Datos.conectar()
        return await coleccion.find(condicion).toArray();
    }

    static async actualizar(id, contacto) {
        await Datos.conectar()
        await coleccion.updateOne(
            { _id: id },            // Indica que registros 
            { $set: contacto });    // Indica la operacione a realizar
    }

    static async borrar(id) {
        await Datos.conectar()
        await coleccion.deleteOne({ _id: id });
    }

    static async borrarTodos() {
        await Datos.conectar();
        await coleccion.deleteMany({});
    }

    static async obtenerTodosDondeEdad(edad) {
        await Datos.conectar()
        let enCliente  = await Datos.leerTodos().filter(c => c.edad == edad); // Ejemplo 
        let enServidor = await collection.find({ edad: edad }).toArray();
        return enSevidor 
    }
}