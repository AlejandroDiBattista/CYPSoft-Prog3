// Estructura de control

let años = 15
let condicion = años > 18
if(condicion) { 
  console.log("Es mayor de edad");
}
console.log("Me siento :)");
// if(<condicion>) <sentencia true> [else <sentencia false>]

let a = 30, b = 20;
let min;

if(a < b) {
  min = a;
} else {
  min = b;
}

c = 5;
// Menor entre a, b, c
if( a < b){
  if(a < c){
    min = a
  } else {
    min = c
  }
} else {
  if( b < c){
    min = b
  } else {
    min = c
  }
}

let d = 1

min = Infinity ;

if(a < min) min = a 
if(b < min) min = b
if(c < min) min = c
if(d < min) min = d

min
let nota = 10

calificacion = "sin definir"
if(nota < 4) {
  calificacion = "desaprobo"
} else if(nota <= 7) {
  calificacion = "aprobo"
} else if(nota <= 9){
  calificacion = "excelente"
} else {
  calificacion = "promociono"
}
calificacion


