const l = console.info 

function Persona(n,a){
    this.nombre = n
    this.apellido = a
}

Persona.prototype.nombreCompleto = function(){ return `> ${this.apellido}, ${this.nombre}`}

let p1 = new Persona('Alejandro','Di Battista')
l(p1.nombre)// let a = [1, 2, 3, 2, 1]
l(p1.apellido)
l(p1.nombreCompleto())

// a.sort()

// function sumar(lista){
//     let suma = 0
//     for(let x of lista) suma += x
//     return suma
// }

// Array.prototype.sumar = function(){
//     let suma = 0
//     for(let x of this) suma += x
//     return suma
// }

// l(a)
// l( a.sumar() )