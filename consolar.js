import fs from 'fs';
import { exec } from 'child_process';

let ancho = 25
const leer = origen => fs.readFileSync(origen, 'utf8').split(/\r\n|\n|\r/);
const escribir = (destino, lineas) => fs.writeFileSync(destino, lineas.join('\r\n'), 'utf8');
const borrar = origen => fs.unlinkSync(origen);
const convertir = (linea, nro) => {
    let i = linea.indexOf('//>');
    if(i > ancho) ancho = i - 1;
    return i < 0 ? linea : `console.log('${nro}#', JSON.stringify(${linea.slice(0, i).trim()}))`;
}
const revertir = (lineas, resultado) => {
    let [nro, res] = resultado.split('#');
    if (+nro) {
        let i = lineas[nro].indexOf('//>');
        lineas[nro] = `${lineas[nro].slice(0, i).padEnd(ancho, ' ')}//> ${res}`;
    }
}

const procesarArchivo = async (origen) => {
    let temporal = origen.replace('.js', '.tmp.js');
    let lineas = leer(origen);
    
    escribir(temporal, lineas.map(convertir))
    exec(`bun ${temporal}`, (_, salida) => {
        let resultados = salida.split(/\r\n|\n|\r/);
        resultados.forEach(resultado => revertir(lineas, resultado));
        escribir(origen, lineas);
        borrar(temporal)
    });
}

let origen = process.argv[2];
procesarArchivo(origen);
