let a = 10

a = a + 10  // Acumulador
a += 10

a = a + 1  // Contador
a += 1 
a++

// x = x OP y ==> x OP= y

a += 3  // a = a + 3
a -= 3  // a = a - 3
a *= 2  // a = a * 2
a /= 2  // a = a / 2
a %= 3  // a = a % 3

let b = true
b &&= false
b ||= true 

let c 
c ||= "hola"  // Asumir valor por defecto
c

c = null
c ||= "Hola 2"
c

c = undefined 
c ||= "Hola 3"
c

c = false 
c ||= "Hola 4"
c

c = null 
c ??= "Hola 5"
c

c = null
if( c == null || c == undefined ){ c = "Hola 6"}
c
