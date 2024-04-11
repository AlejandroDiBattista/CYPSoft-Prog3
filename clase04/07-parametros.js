function suma(a, b) { 
    return a + b;
}

// Si no se pasa un argumento, se asume undefined
function suma1(a, b) {
    if (a == undefined) a = 0;  // Si a es undefined, se asume 0
    if (b == undefined) b = 0;

    return a + b;
}

// Si no se pasa un argumento, se asume 0
function suma2(a=0, b=0) {
    return a + b;
}

console.log(suma(1, 2)); // 3
console.log(suma(3, 4)); // 7

// Exceso de argumentos son ignorados
console.log(suma(10, 20, 30, 40)); //> 30

// Faltan argumentos asume undefined
console.log(suma(10)); //

// Podemos tener muchos parametros
// para hacer una funcion más flexible (hasta 5 en este caso)
function sumar5(a, b=0, c=0, d=0, e=0) {
    return a + b + c + d + e;
}

// Podemos pasar un array como argumento
function sumarLista(lista) {
    let suma = 0;
    for (let x of lista) {
        suma += x;
    }
    return suma;
}

// Podemos pasar una lista de argumentos
function sumarLista2(...lista) {
    let suma = 0;
    for (let x of lista) {
        suma += x;
    }
    return suma;
}

console.log(sumar5(1, 2, 3, 4, 5));                 // Con 5 parametros
console.log(sumar5(1, 2, 3));                       // Solo con 3 parametros    

console.log(sumarLista([1, 2, 5, 1, 2, 3,23,4 ]));  // Se llama con un array
console.log(sumarLista2(1, 2, 23, 4));              // Se llama con una lista de valores
