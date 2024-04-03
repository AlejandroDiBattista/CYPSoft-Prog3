

// Tipo String (cadenas de caracteres)

let a = "Nombre";


a
typeof a 

a = "Juan Perez"    // Comillas dobles
a = 'Juan Perez'    // Comillas simples
a = `Juan Perez`    // Comillas invertidas

a = "Sergio D'agatta";                       //? 
a = 'JavaScript es "fácil" de aprender'

a = "Agregar 😊"  // Emojis

// String interpolacion
a = `Se puede poner 
en varias líneas`

a = `1 + 2 = ${1+2}`

// Operaciones
a = "uno" + " " + "dos" // Contatenar 
a = "uno" > "dos"
a = "UNO" > "uno"
a = "uno" != "UNO"
a = "uno" <= "dos"

a = "uno dos"
a.toString()
a.toUpperCase()
a.toLowerCase()

a = "Di Battista, Alejandro"
a.slice(2,4)
a
a.split(",")

parseInt("10.2")
parseFloat("10.2")

Number("10")
a = String(10)

a = "Hola"
a.length

a = [..."Hola"]
