import fs from 'fs'
import { exec } from 'child_process'

let origen = process.argv[2] 
let temporal = origen.replace('.js', '.tmp.js')

let leer = (origen) => fs.readFileSync(origen, 'utf8').split(/\r\n|\n|\r/) 
let escribir = (destino, lineas) => fs.writeFileSync(destino, lineas.join('\r\n'), 'utf8') 

let rellenar = (origen, largo) => origen + (largo > origen.length ? ' '.repeat(largo - origen.length) : '')

let convertir = (linea, nro) => {
    let i = linea.indexOf('//>')
    let codigo = linea.slice(0, i).trim()
    return i < 0 ? linea : `console.log('${nro}#', JSON.stringify(${codigo}))` 
}

let revertir = (lineas, resultado, borrar = false) => {
    let [nro, res] = resultado.split('#')
    if (+nro) {
        let linea = lineas[nro]
        let i = linea.indexOf('//>')
        lineas[nro] = rellenar(linea.slice(0, i), 40) + '//> ' + (borrar ? '' : res.trim())  
    }
}

let lineas = leer(origen)

let borrar = lineas.includes('//-')
lineas = lineas.map( x => x == '//-' ? "" : x )

escribir(temporal, lineas.map(convertir))

exec(`bun ${temporal}`, (_, salida) => {
    let resultados = salida.split(/\r\n|\n|\r/) 
    resultados.forEach(resultado => revertir(lineas, resultado, borrar))
    escribir(origen, lineas)
})
