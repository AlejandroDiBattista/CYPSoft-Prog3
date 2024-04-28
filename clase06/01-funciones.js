function sumar(lista){
    let suma = 0

    for(let x of lista){
        suma += x
    }
    return suma
}

function restar(x, y){
    if(y == undefined){
        y = 0
    }
    return x - y;
}

let lista = [1, 2, 3, 4, 5]
console.log(sumar(lista))   

console.log(lista.slice(0, 3))

restar(10)
let x = 1+2

let slice = function(lista, inicio=0, fin){
    if(fin == undefined){
        fin = lista.length
    }
    let nuevaLista = []
    for(let i = inicio; i < fin; i++){
        nuevaLista.push(lista[i])
    }
    return nuevaLista
}
