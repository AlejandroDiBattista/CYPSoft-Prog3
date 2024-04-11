// https://es.javascript.info

// Función como declaración (tradicional)
function sumar(a, b) {
    return a + b;
}

// Función como expresión   (flexible)
let sumar1 = function(a, b) {
    return a + b;
}

// Función como expresión con flecha gorda
let sumar2 = (a, b) => {
    return a + b;
}

// Funcion como expresion con flecha gorda y un solo return
// Se puede omitir las llaves y el return
let sumar3 = (a, b) => a + b;


// Usamos el objeto Math para hacer operaciones matemáticas
const Mate = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b,
}

let a = Mate.sumar
let b = Mate.restar(1, 2); // -1

const Consola = {
    mostrar: (mensaje) => console.log(mensaje),
    informar: (mensaje) => console.info(mensaje),
}

Consola.informar("Hola mundo!")


// Esto no funciona porque 'multiplicar' solo existe dentro de "Mate"
let c = multiplicar(1, 2); // 2