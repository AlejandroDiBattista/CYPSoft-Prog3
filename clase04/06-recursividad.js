// Factoreal(5) = 5*4*3*2*1 = 120
// Factoreal(9) = 9 * factoreal(8) = 362880
// n! = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 ... * n
// n! = n * (n-1)!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1 * 0!
// 0! = 1

function factoreal(num) {
    if (num === 0) return 1;
    return num * factoreal(num - 1);
}

console.log(factoreal(9));
console.log(factoreal(5));

let numeroSecreto = 118;

function adivinar(min=0, max=999) {
    let numero = (min + max) / 2 
    if (min === max) {
        return min
    }
    if (numero < numeroSecreto)
        return adivinar(min, numero-1)
    else // numero es >= x
        return adivinar(numero, max)
}

let estimacion = adivinar(0, 999)
console.log(`Estimo que el número secreto es ${estimacion}`);

// Función para ordenas un array
//   Toda una lista, la divide en dos mitades
//   Luego combina los dos mitades  
//   compiando siempre el elemento menor de cada mitad

function ordenar(lista, min=0, max=lista.length-1) {
    function combinar(izq, der) {
        let i = 0, j = 0, resultado = []
        while(i < izq.length && j < der.length) {
            if (izq[i] < der[j]) {                
                resultado.push(izq[i++])
            } else {
                resultado.push(der[j++])
            }
        }
        while (i < izq.length) resultado.push(izq[i++])
        while (j < der.length) resultado.push(der[j++])

        return resultado
    }

    if (min === max) return [lista[min]]    // Una lista de un solo elemento esta ordenada
    
    let mitad = Math.floor((min + max) / 2) // divide a la mitades
    let izq = ordenar(lista, min, mitad)        // ordena la primera mitad
    let der = ordenar(lista, mitad + 1, max)    // ordena la segunda mitad
    return combinar(izq, der)               // combina las dos mitades
}

