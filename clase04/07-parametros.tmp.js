// Pasaje de parametros
function sumar(a, b) {
    return a + b
}

console.log('5#', JSON.stringify(sumar(10, 20)))
console.log('6#', JSON.stringify(sumar(100, 200, 300)))

console.log('8#', JSON.stringify(console.log(sumar(10, 20))))
console.log('9#', JSON.stringify(console.log(sumar(100, 200, 300))))
console.log('10#', JSON.stringify(console.log(sumar(100))))
console.log('11#', JSON.stringify(console.log(sumar())))