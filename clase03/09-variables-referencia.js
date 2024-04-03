// Variables por valor o referncia

// Los tipos primitivos son por valor (inmmutables)
let a = "Hola"
let b = a 
b = "Chau"
a 
b

b[2]
b[2] = "X"
b

// Los tipos compuestos son por referencia (multable)
a = [1, 2, 3, 4]
b = a 

b[2] = "Nuevo"
b
a

// Copia el array a => b 
a = [1, 2, 3, 4]
b = []
for(let x of a) 
  b.push(x)

a
b[2] = "Cambio"
b

a[2] = "Viejo"
a
b

b= [...a] // Copia el array ...[1,2,3] ==> 1,2,3
b
b[2] = "Esto cambia en la copia"
b
a

a = [1, 2, 3]
b = [...a, 20, 30, ...a]
b

// Los objetos son "referencias"
a = {x: 10, y: 20}
b = a 
b.x = 1000
a
b

a = {x: 10, y: 20}
b = {} // Copiar un objeto
for(let x in a)
  b[x] = a[x]

b
b.x = 200
b
a

a = {x: 10, y: 20}
b = {...a}  // Copio un objeto...{x: 10} ==> x: 10
b.x = 1000
a
b

a = {x: 1, y: 2}
b = {...a, z: 3, x: 1000}
b = {x: 1, y: 2, z: 3, x: 1000}
b


