// Funciones anidadas

function tabla(n){
  
  function log(...lista){
    console.log(...lista)
  }
  
  log(`> Tabla del ${n}`)
  for(let i = 1; i <= 10; i++){
    log(i , " * ", n, " = ", i * n)
  }
}
tabla(5)

// Clausura | Preservar el estado interno
function contador(inicial = 0){
  let cuenta = inicial
  return () => ++cuenta
}

const c1 = contador(10), c2 = contador(0)

c1()
c1()
c1()

c2()
c2()

const sumar = (a, b) => a + b
const inc   = x => sumar(x, 1)
const inc2  = x => sumar(x, 2)

sumar(1, 3)
inc(10)
inc2(100)

// 
function contador(inicial=0){
  let cuenta = 0
  return {
    incrementar: () => ++cuenta,
    reiniciar: () => cuenta = 0,
  }
}

const a = contador(0)
a.incrementar()
a.incrementar()
a.reiniciar()
a.incrementar()
a.incrementar()

// Retorna dos funciones
function estado(inicial=0){
  let c = inicial
  return [() => c, (x)=>c=c]
}

const [edad, ponerEdad] = estado

log(`La edad es ${edad()}`)
ponerEdad(30)
log(`La edad es ${edad()}`)

const [precio, setPrecio] = estado(100)

// Funciones que retorna funciones
const esMultiplo = (x, n) => x % n == 0
const esPar =    x => esMultiplo(x,  2)
const esTriple = x => esMultiplo(x,  3)
const esDecena = x => esMultiplo(x, 10)
const esDocena = x => esMultiplo(x, 12)
const ambos = (a, b) => x => a(x) && b(x)

const esSextuple = x => ambos(esDoble, esTriple)

const filtrar = (lista, condicion) => {
  let salida = []
  for(let x of lista)
    if(condicion(x)) salida.add(x)
  return salida
}

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,20,21,22,30,31] 
log(filtrar(lista, esPar))
log(filtrar(lista, esDecena))
