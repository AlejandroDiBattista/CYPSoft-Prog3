// Factoreal(5) = 5*4*3*2*1 = 120
// Factoreal(9) = 9 * factoreal(8) = 362880
// n! = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 ... * n
// n! = n * (n-1)!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1 * 0!
// 0! = 1

function factoreal(num) {
    if (num === 0) {
        return 1;
    }
    return num * factoreal(num - 1);
}

console.log(factoreal(9));
console.log(factoreal(5));

let x = 118;

function adivinar(min, max) {
    let numero = (min + max) / 2 
    if (numero === x) {
        return true
    }
    if (numero < x)
        return adivinar(min, numero)
    else 
        return adivinar(numero, max)
}

console.log(adivinar(0, 1000));

function ordenar(lista, min, max) {
    if (min === max) {
        return [lista[min]]
    }
    let mitad = Math.floor((min + max) / 2)
    let izq = ordenar(lista, min, mitad)
    let der = ordenar(lista, mitad + 1, max)
    return merge(izq, der)

}