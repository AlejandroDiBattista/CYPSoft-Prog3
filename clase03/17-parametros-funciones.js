function minimo(a, b){
  let m;
  if(a < b) {
    m = a;
  } else {
    m = b;
  }
  return m;
}

let m = minimo(10, 20);

// ¿Qué es invocar un función?
  let a = 10, b = 20 // Asigna parámetros
  
  let _m             // Variables locales
  if(a < b)          // Ejecuta el 'cuerpo'
    _m = a
  else
    _m = b
  
  m = _m            // Retorna valor

function minimo(a, b, c, d, e, f){
  let min = Infinity
  
  if(a < min) min = a
  if(b < min) min = b
  if(c < min) min = c
  if(d < min) min = d
  if(e < min) min = e
  if(f < min) min = f

  return min
}

function minimo(...lista){
  let min = Infinity
  for(let x of lista)
    if(x < min) min = x
  return min
}

minimo(9, 3, 7, 4, 7, 5)
let valores = [5, 2, 4, 2, 8]
minimo(...valores)

function log(...lista){console.log(...lista)}

function tabla(n, cantidad=10){
  log(`> Tabla del ${n}`)
  log(`Argumentos : ${arguments.length}`)
  for(let i = 1; i <= cantidad; i++){
    log(`- ${i} * ${n} = ${i*n}`)
  }
}

tabla(5, 5)

// 
function probar(a,b){
  log(`a:${a} b:${b} (parámetros: ${arguments.length})`)
}

// ¿ Que pasa cuando no pasamos ?
probar(100,200)
probar(100)
probar(100,200,300)
probar()
probar(1,2,3,4,5,6,7,8,9,10)
log(probar.length)

// Desectruturar
function mostrar(persona){
    log(`
    Apellido: ${persona.apellido}
    Nombre  : ${persona.nombre}`)
}

function mostrar(persona){
    let {nombre, apellido} = persona
    log(`
    Apellido: ${apellido}
    Nombre  : ${nombre}`)
}


function mostrar({nombre, apellido}){
    log(`
    Apellido: ${apellido}
    Nombre  : ${nombre}`)
}


let contacto = {nombre: 'Alejandro', apellido: 'Di Battista', edad: 56}
mostrar(contacto)
mostrar({nombre: "Juan"})