const {comenzar, seccion, ver, terminar, v=ver } = require('../utils.js')

comenzar("Tipo primitivos", true)

seccion("Declarar variables")

let a = 10
v(a)

let b = "Hola"
ver()

ver(b = "Hola")
ver(b = 'Hola')
ver(b = `Hola`)


let c = true
ver(c)
ver(1 > 2)
ver(2 > 1)
ver("2" > 10)
ver(2 > "10")
ver(2 > 10)

seccion("Declarar Numérico")
let n = 0 
ver(1 + 2)  
ver(1 - 2)
ver(1 + 2)
ver(1 / 2)
ver(3 % 2)
ver(2 ^ 3)

seccion("Precedencia")
ver(1 + 2 * 3)
ver(1 + (2 * 3))    // Se realiza antes la "*"
ver((1 + 2) * 3)    // Se realiza antes el "()"
ver(10 % 3)         // Resto de la division
ver(10 ** 3)         // Pontencia


ver(n = 0xff0000)       // Hexadecimal

ver(n = 0b01010101)     // Binario
ver(n = 0b0101_0101)    // Binario con separador 

ver(n = 1_000_000)      // Separador con "_"


ver(n = 10 / 3)         // Division
ver(n = n * 3)          // Forma normal
ver(n *= 3)             // Forma abreviada

seccion('Cadenas')

let s  // Declaro la variable s
ver()
ver(typeof s)           // De que tipo es una variable que no esta definida?
ver(s === undefined)   // De que valor tiene variable que no esta definida?

ver(s = "Hola")  // Defino la variable 's'

ver(s = "hola " + "mundo")

let x = "Chau"  // Declaro (let) y defino ("=") la variable "x"
ver(s.toUpperCase())                // Convertir a mayusculas
ver(s.toLowerCase())                //     Convertir a minusculas
ver(s.length)                       // Ver longitud del la cadena
ver(s.padEnd(100, ' '));;           // Rellena al final
seccion('Operadores abreviados')

let suma = 0, valor = 10 // Declaro y defino las variables
ver()

ver(suma += valor)             // Acumular
ver(suma += 1)             // Incrementar
ver(suma++)                // Autoicremento (despues)
ver(++suma)                // Autoicremento (antes)


let bandera = false 
ver()

ver(bandera = !bandera)
ver(bandera = bandera || true) 
ver(bandera ||= true)

seccion('Funciones')
function suma0(a, b) {  // Declaracion de funcion
    return a + b
}
ver(suma0)          // Las funciones son variables
ver(suma0(1, 2))    // Invocar

const suma1 = function(a, b) {  // Funcion como expresion
    return a + b
}

ver(suma1)          
ver(suma1(1, 2))    // Invocar

const suma2 = (a, b) => {  // Funcion como flecha
    return a + b
}

ver(suma2)
ver(suma2(1, 2))    // Invocar

const suma3 = (a, b) => a + b  // Funcion como flecha sin llaves

ver(suma3)
ver(suma3(1, 2))    // Invocar

seccion('Funciones como argumentos')

function incrementar(delta) {
    return (valor) => valor + delta 
}

const incrementar1 = incrementar(1)
const incrementar2 = incrementar(2)

ver(incrementar1)
ver(incrementar1(10))
ver(incrementar1(10))

ver(incrementar2)
ver(incrementar2(10))
ver(incrementar2(10))

terminar()