import { comenzar, seccion, ver, terminar } from '../utils.js';

comenzar("Tipos primitivos | Numeros");

let a = 10
let b = 20

let c = 0
seccion("Numeros literal (ingreso de numeros")

ver(c = 1000)       // Entero
ver(c = 1000.0)     // Decimal
ver(c = 1e3)        // Cientifica

ver(c = 0b00010101) // Binario
ver(c = 0x00010101) // Hexadecimal

ver(c = 1_000_000)  // Usar el separador "_"
ver(c = 1000000n)  // BigInteger


seccion("Operadores aritméticos")

ver(a + b)      // suma
ver(a - b)      // resta
ver(a * b)      // multiplicación
ver(a / b)      // división
ver(a % b)      // resto
ver(a ** b)     // potencia

seccion("Operadores comparacion")

ver(a == b)
ver(a != b)
ver(a > b)
ver(a < b)
ver(a >= b)
ver(a <= b)

seccion("Precedencia")
ver(1 + 2 * 3)      // 7
ver((1 + 2) * 3)    // 9
ver(1 + (2 * 3))    // 7

ver(1 + 2 * 3 ** 4)     //  163
ver((1 + (2 * (3 ** 4))))     //  163

ver(1 + 2 * (3 ** 4))   //  163
ver(1 + (2 * 3) ** 4)   // 1297
ver((1 + 2) * 3 ** 4)   // 243

seccion("Asociativo a la izquierda (se evalua de izquierda a derecha)")
ver(8/4/2)
ver(((8/4)/2))
ver((8/(4/2)))
terminar("literal");