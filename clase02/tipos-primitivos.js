import { comenzar, seccion, ver, terminar } from './utils.js';

comenzar("Tipos primitivos | Numeros");

let a = 10
let b = 20

seccion("Operadores aritméticos")

ver(a + b)      // suma
ver(a - b)      // resta
ver(a * b)      // multiplicación
ver(a / b)      // división
ver(a % b)      // resto
ver(a ** b)     // potencia

// tipos-primitivos.js

seccion("Presedencia")
ver(1 + 2 * 3)      // 7
ver((1 + 2) * 3)    // 9
ver(1 + (2 * 3))    // 7

ver(1 + 2 * 3 ** 4)     //  163
ver((1 + (2 * (3 ** 4))))     //  163

ver(1 + 2 * (3 ** 4))   //  163
ver(1 + (2 * 3) ** 4)   // 1297
ver((1 + 2) * 3 ** 4)   // 243

ver(8/4/2)
ver(((8/4)/2))
ver((8/(4/2)))
terminar();