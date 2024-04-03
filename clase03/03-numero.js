/// Tipos basicos ///

let a = 100    // Entero
typeof a 

a = 10.1       // Real | Punto flotante 
typeof a

a = 0xFF00FF   // Hexadecimal (colores)
typeof a

a = 0b10100101 // Binario
typeof a

// Operadores aritmeticos
a = 1 + 2          // Operadores 
a = 1 + 2 * 3      // Prioridad de operadores
a = (1 + 2) * 3    // () alterar prioridad
a = 8 / 4 / 2      // de izquierda a derecha
a = (8 / 4) / 2   
a = 8 / (4 / 2)

// Operadores de comparación
a = 10 > 5
a = 20 == 30
a = 30 <= 10

// Operadores de bits (binario)
a = 10 << 2 
a = 0b1100 & 0b0101
a.toString(2)

a = 0b1100 | 0b0101
a.toString(2)

// Convertir a String
a = 1023
a.toString()
a.toString(10)
a.toString(2)
a.toString(16)

// Liberia de matematicas
Math.max(10,20)
Math.pow(2,10)
Math.sqrt(10)
Math.sin(3)

// Valores especiales
a = 10 / 0 
a = -10 / 0 
a = 0/0