import { comenzar, seccion, ver, terminar } from './utils.js';

comenzar("Tipos primitivos | Cadenas");

let a = "Hola"
let b = "Mundo"

let c = "Hola"

seccion("Literal")

ver(c = "Comillas Dobles")
ver(c = 'Comillas Simples')
ver(c = 'Comillas Simples')
ver(c = `Comillas Invertidas`)
ver(c = `
Comillas Invertidas
Multilineas
Con saltos de linea`)

ver(c = `1+2 = ${1+2}`)     // Interpolacion de string

seccion("Operadores ")

ver(a + b)      // suma
ver(a - b)      // resta (no definida)


terminar('literal');