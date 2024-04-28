class Contacto {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefonos = [];
        this.direcciones = [];  
    }

    agregarTelefono(telefono){
        this.telefonos.push(telefono);
    }

    agregarDireccion(direccion){
        this.direcciones.push(direccion);
    }

    toString(){
        let texto = `${this.nombre} ${this.apellido}`
        texto += "\nTeléfonos:"
        for(let telefono of this.telefonos){
            texto += "\n" + telefono.toString()
        }
        texto += "\nDirecciones:"
        for(let direccion of this.direcciones){
            texto += "\n" + direccion.toString()
        }
        return texto
    }
}

class Telefono {
    constructor(numero, tipo){
        this.numero = numero;
        this.tipo = tipo;
    }

    toString(){
        return `${this.numero} (${this.tipo})`
    }
}

class Direccion {
    constructor(calle, numero, piso="", departamento=""){
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.departamento = departamento;
    }

    toString(){
        return `${this.calle} ${this.numero} ${this.piso} ${this.departamento}`
    }
}

let contacto = new Contacto("Juan", "Perez");
contacto.agregarTelefono(new Telefono("123456", "celular"));
contacto.agregarTelefono(new Telefono("456789", "fijo"));
contacto.agregarDireccion(new Direccion("Av. Siempre Viva", "742"));
contacto.agregarDireccion(new Direccion("Calle Falsa", "123", "1", "A"));

contacto.telefonos[1].numero