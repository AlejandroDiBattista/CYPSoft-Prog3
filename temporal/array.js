import { comenzar, seccion, ver, terminar } from '../utils.js';

comenzar("Demostración de Array")
///-- Demostración de Array --///

seccion("Crear un array")
const a = [1, 2, 3, 4, 5]
ver()

ver(a)
ver(a.length)       // Cuantos elementos tiene?

ver(a.length = 3)   // Se puede contar un array
ver(a)

/// Acceder a Elementos ///
seccion("Acceder a elementos")

ver(a[0])           // Leer un elemento
ver(a[10])          // Error: indice fuera de rango

ver(a[1] = 100)     // Escribir el 2° elemento (base 0)
ver(a)

ver(a[5] = 500)     // Escribir el 6° elemento (base 0)
ver(a)
ver(a.length)

ver(a[a.length-1])  // Ultimo elemento

ver(a.at(1))        // 2° elemento (con con 'at')
ver(a.at(-1))       // último elemento (con con 'at')
ver(a.at(-2))       // penúltimo elemento (con con 'at')

seccion("Operaciones con array")
let numeros = Array.from({ length: 10 }, (_, i) => i*10 )
ver() 

ver(numeros)

ver(numeros.slice(4))       // Desde el 4° elementos
ver(numeros.slice(1,3))     // Extraer elementos
ver(numeros.slice(-2))      // Los dos ultimos
ver(numeros.slice(-3,-1))   // Los dos ultimos
ver(numeros.slice())

numeros.slice(4)            // Desde el 4° elementos
//> [40,50,60,70,80,90] 

numeros.slice(1, 3)         // Extraer elementos
//> [10,20]

numeros.slice(-2)           // Los dos ultimos
//> [80,90] 

numeros.slice(-3, -1)       // Los dos ultimos
//> [70,80] 

numeros.slice()
//> [0,10,20,30,40,50,60,70,80,90]

const aux = numeros
ver()
ver(aux[0] = 1000)
ver(aux)
ver(numeros)

seccion("Agregar / borrar")
numeros = Array.from({ length: 10 }, (_, i) => i + 1);

ver(numeros.push(100))              // Agrego al final
ver(numeros)

ver(numeros.unshift(200))           // Agrego al comienzo
ver(numeros)

ver(numeros.pop())                  // Saco el último
ver(numeros)

ver(numeros.unshift())              // Saco el primero
ver(numeros)

ver(numeros.splice(2,3)) 
ver(numeros)

seccion("Ordenar datos")
numeros[4] = 'Hola'
ver(numeros.sort())                 // ordenar (alfanumerico)

ver(numeros.sort((a,b) => a-b))     // ordenar (numericamente)

ver(numeros.sort((a, b) => b - a))  // ordenar (numericamente orden invertido)

seccion("Decostruccion")
numeros = Array.from({ length: 10 }, (_, i) => i + 1);
ver(numeros)
let [primero,segundo,,cuarto, ...resto ] = numeros
ver()

ver(primero)
ver(segundo)
ver(cuarto)
ver(resto)

seccion("Acceso por referencia")

let letras = ['a', 'b', 'c', 'd']
ver() 

let nuevo = letras                      // Copio la referencia al array original
ver()

ver(nuevo[2] = 'xxx')                   // Cambio en la copia
ver(nuevo)                              // Se modifica la copia
ver(letras)                             // Pero tambien el array original

seccion("Copiar arrays")

ver(letras = ['a', 'b', 'c', 'd'])      // Empecemos de nuevo

let copia = [...letras]                 // Copiar el array
ver()

copia[2] = "yyy"                        // Cambio el elemento
ver()
ver(copia)                              // Cambia la copia
ver(letras)                             // pero no el original

//~~~ Métodos - Ordenar ~~~
seccion("Métodos - Ordenar")

ver(letras = ['x', 'c', 'a', 'd'])      // Empecemos desordenado

ver(letras.sort())                      // Ordeno las letras
ver(letras)                             // cambia el original
ver(letras = ['x', 'c', 'a', 'd'])      // vamos de nuevo
ver(letras.toSorted())                  // Me da las letras ordenadas
ver(letras)                             // Pero no afecta al original

terminar(true)

