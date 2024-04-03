// Repeticion

let i = 1, suma = 0

while(i < 10){
  suma = suma + i
  i = i + 1
}
suma


// Forma abreviada
suma = 0
i = 0          // for(i=0;;)
while(i < 10){ // for(;i < 10;)
  suma += i;
  i++;         // for(;;i++)
}

suma = 0
for(let i = 0; i < 10; i++){
  suma += i
}

let lista = [10, 20, 30, 40, 50]
suma = 0
for(let i = 0; i < lista.length; i++){
  x = lista[i]
  suma += x
}
suma

for(let i = 0; i < lista.length; i++){
  x = lista[i]
  console.log(`${i} = ${lista[i]}`)
}

suma = 0
for(let x of lista){
  suma += x
}

for(let x of lista){
  console.log(x)
}

for(let x in lista){
  console.log(x)
}
