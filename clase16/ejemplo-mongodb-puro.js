import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient("mongodb://localhost:27017", { useUnifiedTopology: true });

let coneccion = await MongoClient.connect();

class Usuario {
    #id 
    #email
    #password
    
    constructor(email, password) {
        this.#id = null;
        this.#email = email;
        this.#password = password;
    }

    get email() {
        return this.#email;
    }

    get password() {
        return this.#password;
    }

    get domain() {
        return this.#email.split('@')[1];
    }

    async save() {
        const db = client.db('test');
        const collection = db.collection('usuarios');
        if (this.#id) {
            collection.updateOne({ email: this.#email }, { $set: { password: this.#password } });
        } else {
            await collection.insertOne({ email: this.#email, password: this.#password });
            this.#id = result.insertedId;
        }
    }

    static async find(email) {
        const db = client.db('test');
        const collection = db.collection('usuarios');
        const result = await collection
            .find({ email: email })
            .toArray();
        if (result.length === 0) {
            return null;
        }
        const usuario = new Usuario(result[0].email, result[0].password);
        usuario.#id = result[0]._id;
        return usuario;
    }
}

export default Usuario;