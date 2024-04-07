function esValida0(expresion){
    try { eval(expresion) } catch { return false }
    return true
}

function esValida1(expresion){
    let contar = 0
    for(let i = 0; i < expresion.length; i++){
        let x = expresion[i]
        if(x == "(") {
            contar++;
        } else if(x == ")") {
            contar--;
            if(contar < 0) return false;
        }
    }
    return contar == 0;
}

function esValida2(expresion){
    let contar = 0
    for(let i = 0; i < expresion.length; i++){
        let x = expresion[i]
        if( x == "(" ) {
            contar++;
        } else if( x == ")" ) {
            contar--;
        }
        if( contar < 0 ) break;
    }
    return contar == 0;
}

function esValida3(expresion){
    let contar = 0
    for(let i = 0; i < expresion.length; i++){
        let x = expresion[i]
        if( x == "(" ) contar++;
        if( x == ")" ) contar--;
        if( contar < 0 ) break;
    }
    return contar == 0;
}

function esValida4(expresion){
    let contar = 0
    for(let x of expresion){
        if( x == "(" ) contar++;
        if( x == ")" ) contar--;
        if( contar < 0 ) break;
    }
    return contar == 0;
}


let esValida = esValida4

 esValida("1+2*(1+3)")                               //>  true
 esValida("(((1)+(2))*((1)+(3)))")                   //>  true
 esValida("1+2*(1+3)")                               //>  true
 esValida("(1+2*(1+3)")                              //>  false
 esValida("1+2*(1+3))")                              //>  false
 esValida("1+2(*(1+3))")                             //>  true