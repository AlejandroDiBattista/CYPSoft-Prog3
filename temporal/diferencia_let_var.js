const l = (...a) => console.log(a.join(' '))

// Alcance de una variable
let x = 10

function a(){
  x = 20
  l("Dentro de A:",x);
}

l("Antes de A:", x);
a()
l("Despues de A:", x);


function b() {
  let x = 30
  l("Dentro de B:", x);
}
l()
l("Antes de B:", x);
b()
l("Despues de B:", x);
