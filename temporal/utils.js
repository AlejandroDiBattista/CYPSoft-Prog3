import fs from 'fs'
import chalk from 'chalk'

/// Configuración

const ANCHO = 80
const PROMPT = '=> '
const SEPARADOR = '// '

/// Funciones auxiliares

const rellenar = (texto, cantidad, relleno = ' ') =>
    texto.toString().slice(0, cantidad).padEnd(cantidad, relleno)

const centrar = (texto, cantidad = ANCHO, relleno = ' ') =>
    relleno.repeat(cantidad / 2 - texto.length / 2 - 6) + `|| ${texto.toUpperCase()} ||`

const espacios = (texto) =>
    texto.replace(/\s+/g, ' ').trim()

const extraerCodigo = (linea) => {
    const dentro = /^\s*\w+\((?<codigo>.*?)\)[ ;]*\s*(?<comentario>\/\/.*)?\s*$/;
    const antes = /^\s*(?<codigo>.*?)[ ;]*\s*(?<comentario>\/\/.*)?\s*$/;
    const coincidencias = linea.match(dentro) ?? linea.match(antes) 
    const { groups: { codigo, comentario } } = coincidencias ?? { groups: { codigo: '', comentario: '' } }
    return { codigo, comentario }
}

const extraerLlamada = (nivel = 3) => {
    const e = (new Error()).stack.split('\n')[nivel].split(/[:]/)
    let [nombre, numero] = e.slice(-3, -1)
    numero = parseInt(numero)
    return { nombre, numero }
}

let lineas = []
const leerLineas = (origen) => fs.readFileSync(origen, 'utf8').split('\r\n');

let secciones = []
const agregar = (linea) => secciones.at(-1).push(linea)

/// API ///

function comenzar(titulo='Demostración') {
    const { nombre } = extraerLlamada()
    lineas = leerLineas(nombre)
    console.clear()
    console.log([chalk.bold.red(centrar(titulo))])
}

function seccion(titulo) {
    secciones.push([])
    agregar(chalk.red(`\n\n~~~ ${titulo} ~~~`))
}

function ver(expresion) {
    const conExpresion = arguments.length > 0
    const { numero } = extraerLlamada()
    const linea = lineas[numero - (conExpresion ? 1 : 2)]
    const { codigo, comentario } = extraerCodigo(linea)

    agregar('')
    
    if (comentario) {
        agregar(chalk.italic.green(espacios(comentario)))
    }

    agregar(chalk.cyan(`${rellenar(codigo, ANCHO - 9)} `) + chalk.gray(SEPARADOR + rellenar(numero, 3)))
    
    if (conExpresion) {
        let texto = expresion 
        if (typeof expresion === 'undefined') texto = 'undefined'
        if (typeof expresion === 'string') texto = `"${expresion}"`
        if (typeof expresion === 'function') texto = 'function'
        if (typeof expresion === 'object' && expresion !== null) texto = JSON.stringify(expresion)

        let tipo = Array.isArray(expresion) ? `[${typeof expresion[0]}]` : typeof expresion
        agregar(chalk.gray(PROMPT) + chalk.yellow(`${rellenar(texto, ANCHO - PROMPT.length - 9)} `) + chalk.gray(SEPARADOR + tipo))
    }
}   

function terminar(mostrar = -1) {
    let salida = secciones 
    
    if (typeof mostrar === 'number') {
        salida = [secciones.at(mostrar)];
    } else if (typeof mostrar === 'string') {
        salida = secciones.filter(seccion => seccion.at(0).toLowerCase().includes(mostrar.toLowerCase()))
    }

    for (const seccion of salida) {
        for (const linea of seccion) {
            console.log(linea)
        }
    }

    console.log(chalk.red('\n||')) 
}

export { comenzar, seccion, ver, terminar }
