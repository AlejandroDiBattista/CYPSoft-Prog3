let a = 10, b = 20, c = 5

function min(a, b, c) { // if en cascada
    if (a < b && a < c) {
        return a
    } else if (b < a && b < c) {
        return b
    } else {
        return c
    }

}

function min3(a, b, c) {
    if(a < b){ // if anidados
        if(a < c){
            return a
        } else {
            return c
        }
    } else { // b <= a
        if(b < c){
            return b
        } else {
            return c
        }
    }
}

function min5(a, b, c, d, e) {
    let menor = a; // if en secuencia
    if (b < menor) menor = b
    if (c < menor) menor = c
    if (d < menor) menor = d
    if (e < menor) menor = e
    return menor
}

let min 
if(a < b){
    min = a
} else {
    min = b
}

// Operadore ternario es una forma mas compacta de escribir un if
min = a < b ? a : b

let aux = console.log("Hola")

// Una forma de escribir un if es con && (ejecucion condicional)
let edad = 16

// si (edad < 18) entonces evaluar console.log("Eres menor de edad")
(edad < 18) && console.log("Eres menor de edad")

if(edad < 18){
    console.log("Eres menor de edad")
}

// Otra forma de escribir un if es con operador ternario
edad < 18 
    ? console.log("Eres menor de edad") 
    : console.log("Eres mayor de edad")

    