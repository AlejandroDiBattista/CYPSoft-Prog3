function l(...a) { console.log(a.join(' ')) }

// Alcance de una variable
var x = 10

function a(){
  x = 20
  l("Dentro de A",x);
}

l()
l("Antes de A", x);
a()
l("Despues de A", x);


function b() {
  var x = 30
  l("Dentro de C", x);
}

l()
l("Antes de B", x);
b()
l("Despues de B", x);

function c() {
  var x = 40 
  if (true) {
    var x = 50
    l("Dentro de C", x);
  }
}
l()
l("Antes de C", x);
c()
l("Despues de C", x);
