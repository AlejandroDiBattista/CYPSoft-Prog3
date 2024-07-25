import Verificar from './verificar.js';

function dividir(a, b) {
    Verificar.noCero(b);
    Verificar.enRango(a, 0, 100);
    Verificar.enRango(b, 0, 100);

    return a / b;
}

class Persona{
    #nombre;    // Atributos privados
    #edad;
    #sueldo;
    #aporte;

    constructor(nombre, edad, sueldo, aporte) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#sueldo = sueldo;
        this.#aporte = aporte;
    }

    get esJubilable() { // Propiedad de solo lectura
        return this.#edad >= 65 && this.#aporte >= 30;
    }

    jubilar() {         // Método
        Verificar.esMayor(this.#edad, 65);
        Verificar.esMayor(this.#aporte, 30);
        this.#sueldo *= 0.82
    }
}

let a = new Persona('Juan', 66, 1000, 31);
if (a.esJubilable) {
    a.jubilar();
}

a.edad   = 64; // No se puede modificar
a.aporte = 29;

console.log(a.sueldo);

let b = new Persona('Pedro', 66, 1000, 29);
b.jubilar();

console.log(b.sueldo);

