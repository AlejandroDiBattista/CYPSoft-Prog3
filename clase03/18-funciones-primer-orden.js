function log(...lista){ console.log(...lista) }

function probar(){ log("Probando función") }

probar()
otra()            // Hizó a "otra"

function otra(){ log('Otra función') }

typeof probar    // Las funciones son variables

let f 

f = probar       // ...pueden ser asignadas
log(`Llamando a "probar"`)
f()

f = otra
log(`Llamando a "otra"`)
f()

f = console.log
f(`Llamando a "console.log"`)

// o pasada como parámetro
function recorrer(lista, accion){
  for(let x of lista)
    accion(x)
}

function mapear(lista, convertir){
  let salida = []
  for(let x of lista)
    salida.add( convertir(x) )
  return salida
}

function filtrar(lista, condicion){
  let salida = []
  for(let x of lista){
    if(condicion(x)) {
      lista.add(x)
    }
  }
  return salida
}

function doble(x){ log(`El doble de ${x} es ${x*2}`)}
function triple(x){ log(`El triple de ${x} es ${x*3}`)}

function duplicar(x) { return x * 2 }
function repetir(x)  { return `${x} ${x}` }
function esPar(x) { return x % 2 == 0}
function esImpar(x) { return !esPar(x) }

let numeros = [1, 2, 3, 4, 5]
recorrer(numeros, doble)
recorrer(numeros, triple)
                    
let dobles = mapear(numeros, duplicar)
log(dobles)
let pares = filtrar(numeros, esPar)
log(pares)
let impares = filtrar(numeros, esImpar)

 recorrer(mapear(filtrar(numeros, esImpar), duplicar), doble)

function suma(a, b) { return a + b }

// Función como expresión
const producto = function(a, b) { return a * b }

// Función anónima
recorrer(numeros, 
  function(x){ 
    log(`función anónima: ${x}`)
  } 
)

// Flecha gorda
const resta = (a, b) => { return a - b }
const division = (a, b) => a / b  // Una línea que retorna un valor
const invertir = a => -a          // Un solo parámetro
const vacia = () => log("vacia")

recorrer( numero, x => log(`x: ${x}`) )

const Matematica = {
  suma: (a,b) => a + b,
  resta: (a,b) => a - b,
  producto: (a,b) => a * b,
  division: (a,b) => a / b,
} 

Matematica.suma(1,2)
Matematica.resta(10,2)

