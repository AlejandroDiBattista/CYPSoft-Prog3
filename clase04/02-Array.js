let a = [1, 2, 3, 4, 6]
let b = a // Copiar un array por referencia
b[0] = 100
console.log(a)    // [100, 2, 3, 4, 6]
// Si modifico a 'b' se modifica 'a' porque 'b' es una referencia a 'a'


// Copiar un array con for(;;)
let c = []
for (let i = 0; i < a.length; i++) {
    let x = a[i]
    c.push( x )
}

// Copiar un array con for( of )
/// for( of ) recorre los elementos del array
let e = []
for(let x of a) {
    e.push(x)
}

// Copiar un array con spread (expandir) operator 
let d = [...a]
console.log(d)

// Los strings son arrays de caracteres
let saludo = "Hola Mundo"
let f = []
for(let x of saludo) {   // Recorrer un string con for( of )
    f.push(x)
}

// Los strings son como arrays de caracteres
f = [...saludo] // Convertir un String en un array de caracteres
console.log(f) //> ["H", "o", "l", "a", " ", "M", "u", "n", "d", "o"]

suma[2] = "X" // No se puede modificar un string
f[2] = "Y" // Se puede modificar un array
let suma = f.join("") // Convertir un array en un string

console.log(suma) //> "HoYa Mundo"
console.log(suma.toUpperCase()) //> "HOYA MUNDO"
