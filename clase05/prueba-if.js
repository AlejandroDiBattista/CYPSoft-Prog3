// https://github.com/AlejandroDiBattista/prog3

let a = 20, b = 30

function minimo(a,b){
    let minimo 
    if(a < b){
        minimo = a
    } else {
        minimo = b
    }
    return minimo
}

function minimo1(a,b){
    if(a < b){
        return a
    } else {
        return b
    }
}

function minimo2(a, b, c, d, e){
    let minimo = Infinity
    if( a < minimo ) minimo = a; 
    if( b < minimo ) minimo = b;
    if( c < minimo ) minimo = c;
    if( d < minimo ) minimo = d;
    if( e < minimo ) minimo = e;
    
    return minimo
}

function minimo3(a, b, c){
    if(a < b && a < c) return a
    if(a < b && c < a) return c
    if(b < a && b < c) return b
    if(b < a && c < b) return c
}

function minimo4(a,b,c,d,e){
    return Math.min(a,b,c,d,e)
}

function minimo5(lista){
    let minimo = Infinity
    for(let i=0; i < lista.length; i++){
        if(lista[i] < minimo){
            minimo = lista[i]
        }
    }
    return minimo
}

function minimo6(lista){
    let minimo = Infinity
    for(let elemento of lista){
        if(elemento < minimo){
            minimo = elemento
        }
    }
    return minimo
}

function minimo7(lista){
    return Math.min(...lista)
}

let numeros = [1, 20, 3, 4, 5]
let m1 = minimo4(1, 20, 3, 4, 5)
let m2 = minimo5(numeros)
let m3 = minimo4(1, 20, 3, 4, 5)


console.log("El minimo es: ", minimo(a,b))