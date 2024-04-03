// ARRAY => Conjunto de datos homogeneos

let a0 = 10
let a1 = 20
let a2 = 30

a0
a1
a2

let a = [10, 2, 30]
a[0]      // Leer elemento (derecha del "=")
a[1]
a[2]

a1 = 100
a[1]=100
a

a.length
a[a.length-1]

a.at(0)
a.at(2)
a.at(-1)
a.at(-2)

a.length = 10
a.length = 2

a = [10, 1, 1000]
a.sort()
a


//   0  1  2  3  4  5  6  7  8
a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
b = a.slice(3,5) 
b = a.splice(3,5)

b
a
a = []
a.push(100)
a.push(200)
a.push(300)
a

a.pop()
a

a.unshift(1000)
a.unshift(2000)
a.shift()
a

// Array anidados
a = [1, [2, 3], 4]  // Caso general
a[0] = 1000
a[1][0] = 2000
a 

a = [[1, 2],         // Matriz
     [3, 4]]

a[1][2] = 1000
a


