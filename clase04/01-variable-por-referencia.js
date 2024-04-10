let a = { x: 10, y: 20 }
let b = a

Object.keys(a)           //>  ["x","y"]
Object.values(a)         //>  [10,20]


// Recorrer un objeto con for(;;)
let k = Object.keys(a)  //>  ["x","y"]
for (let i = 0; i < k.length; i++) {
    let clave = k[i]
    console.log(`Clave: ${clave} Valor: ${a[clave]}`)
}

// Recorrer un objeto con for( in )
for(let clave in a) {
    console.log(`Clave: ${clave} Valor: ${a[clave]}`)
}

// Copiar un objeto
let c = {}
for (let clave in a) {
    c[clave] = a[clave]

}

// Copiar un objeto con Object.assign 
let d = Object.assign({}, a)

// Copiar un objeto con spread operator
b = { v: 100, w: 200 }
let e = { ...a, ...b, z: 5 } //> { x: 10, y: 20, z: 5 }
console.log(e)

