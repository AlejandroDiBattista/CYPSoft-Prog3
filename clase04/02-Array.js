const l = console.log 

let a = [1, 2, 3, 4, 6]
let b = a 

// Copiar un array con for(;;)
let c = []
for (let i = 0; i < a.length; i++) {
    let x = a[i]
    c.push( x )
}

// Copiar un array con for( of )
let e = []
for(let x of a) {
    e.push(x)
}

// Copiar un array con spread operator 
let d = [...a]
l(d)

let s = "Hola Mundo"
let f = []
for(let x of s) {   // Recorrer un string con for( of )
    f.push(x)
}

f = [...s]
