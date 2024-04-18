// Tipos Simples o básicos
let n = 100       // Comienza con Digito
let s = "Hola"    // Comienza con " o ' o `
let b = true      // false

// Tipos compuestos (despues vemos)
let a = [ 1, 2 ]          // Comienza con '['
let o = { x: 10, y: 20 }  // Comienza con '{'

// JS Lenguaje Dinámico y Debilmente Tipado
n = "hola"      // Dinámico
s = "100" + 10  // Débil 

/*
  /// En TypeScript (JavaScript + Type) ///
  
  let ss: String = "Hola"
  let nn: Number = 10
  let bb: Boolean = true 
  let aa: Array<Number> = [1, 2]
  let oo: Object<String,Number> = {x: 10, y: 20}
*/

// Conversion de tipos
n = Number(100)           //> 100
n = Number('100')         //> 100
n = Number(true)          //> 1
n = Number([])            //> 0
n = Number([1])           //> 1
n = Number([1,2])         //> NaN
n = Number({})            //> NaN

s = String(10)            //> "10"
s = String(true)          //> "true"
s = String(null)          //> "null"
s = String([])            //> ""
s = String({})            //> "[object Object]"

b = Boolean(true)         //> true
b = Boolean(1)            //> true
b = Boolean(0)            //> false
b = Boolean('')           //> false
b = Boolean('false')      //> true
b = Boolean('a')          //> true
b = Boolean({})           //> true

s = 100
s = '100' + 2             //> '1002'
n = '100' - 2             //> 98

// Como de define un Numero
n = 100            // Entero
n = 12.34          // Punto flotante o real
n = 0x100101       // Binario => Entero
n = 0xFF0012       // Hexadecimal => Entero
n = 100n           // ¿?
n = 1_000_000
n = 0xFF_AA_11
n = 0xFFAA11

// Como define un String
s = "Hola"    // Comillas dobles    (Tradicional)
s = 'Hola'    // Comillas sencillas (Simple)
s = `Hola`    // Comilla invertida  (Poderosa) 

s = "Es \"fácil\" aprender JS"
s = 'Es "fácil" aprender JS'
s = 'Sergio D\'agatta' 
s = "Sergio D'agatta"

s = `Puede contener " y ' sin problema`
s = `Puede ocupar
varias líneas`

s = `1+2 = ${1+2}`
a = []
o = {}
s = `n: ${n}, b:${b} a: ${a} o:${o}`

// Como declaro boolean
b = true 
b = false 
b = 1 > 2 
b = "Uno" > "uno"

// Si espera un String lo convierte a String
"10" + 2
'a'+'b'  // Concatenar (JUNTAR)
10+20    // Sumar

"10" + 2 == '10' + String(2)

// Si espera un Number to convierte a Number
'100' - 20 == Number('100') - 20

a = [1, 2, 3, 4]
a[1]
a['1']


