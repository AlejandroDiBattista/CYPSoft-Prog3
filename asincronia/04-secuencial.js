const log = texto => console.log(texto.padEnd(30), new Date().toLocaleTimeString());
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function tarea1() {
    log('Tarea 1 iniciada');
    await esperar(1000);
    log('      1 finalizada');
}

async function tarea2() {
    log('Tarea 2 iniciada');
    await esperar(2000);
    log('      2 finalizada');
}

async function tarea3() {
    log('Tarea 3 iniciada');
    await esperar(3000);
    log('      3 finalizada');
}

console.time('Tiempo de ejecución');

// for(let tarea of [tarea3(),  tarea2(),  tarea1()]) await tarea;
// await Promise.race([tarea1(), tarea2(), tarea3()])
await Promise.all([tarea1(), tarea2(), tarea3()])
console.timeEnd('Tiempo de ejecución');
