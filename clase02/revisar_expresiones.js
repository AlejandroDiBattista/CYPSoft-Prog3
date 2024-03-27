let e0 = "(1+2*(3+4))+ (5*6)"
let e1 = "(1+2*((3+4) + (5*6))"
let e2 = "(1+2*(3+4)) + (5*6))"

function esValida1(expresion) {
    let n = 0
    for (let i = 0; i < expresion.length; i++) {
        let c = expresion[i]
        if (c == "(") n++
        if (c == ")") n--
        if (n < 0) break
    }
    return n == 0
}

function esValida2(expresion) {
    let n = 0
    for (let c of expresion) {
        if (c == "(") n++
        if (c == ")") n--
        if (n < 0) break
    }
    return n == 0
}

function esValida2a(expresion) {
    let n = 0
    expresion.split('').forEach(c => {
        if (n >= 0) {
            if (c == "(") n++
            if (c == ")") n--
        }
    })
    return n == 0
}

function esValida2b(expresion) {
    let n = 0
    expresion.split('').forEach(c => n += n >= 0 ? (c == "(" ? +1 : c == ")" ? -1 : 0) : 0 )
    return n == 0
}

function esValida2c(expresion) {
    let n = 0;
    [...expresion].forEach(c => {
        n += (n >= 0) ? (c === "(" ? 1 : c === ")" ? -1 : 0) : 0;
    })
    return n == 0
}

function esValida3(expresion) {
    return expresion.split('').reduce((n, c) => {
        if (n >= 0) {
            if (c == "(") n++
            if (c == ")") n--
        }
        return n
    }) == 0;
}

function esValida3a(expresion) {
    const resultado = expresion.split('').reduce((n, c) => n + n >= 0 ? (c == "(" ? +1 : c == ")" ? -1 : 0) : 0, 0);
    return resultado === 0;
}

function esValida3b(expresion) {
    const resultado = [...expresion].reduce((n, c) => n + n >= 0 ? (c == "(" ? +1 : c == ")" ? -1 : 0) : 0, 0);
    return resultado === 0;
}

function esValida3c(expresion) {
    return 0 === [...expresion].reduce((n, c) => n + n >= 0 ? (c == "(" ? +1 : c == ")" ? -1 : 0) : 0, 0);
}

const esValida3d = (expresion) => 0 === [...expresion].reduce((n, c) => n + n >= 0 ? (c == "(" ? 1 : c == ")" ? -1 : 0) : 0, 0);

function esValida4(expresion) {
    expresion = expresion.replace(/[^()]/g, '');
    let anterior;
    do {
        anterior = expresion.length;
        expresion = expresion.replace(/\(\)/g, '');
    } while (anterior !== expresion.length);

    return soloParentesis.length === 0;
}

function esValida5(expresion) {
    expresion = expresion.split('').filter(c => c === '(' || c === ')').join('');
    let anterior;
    do {
        anterior = expresion.length;
        expresion = expresion.replace('()', '');
    } while (anterior !== expresion.length);

    return expresion.length === 0;
}

function esValida6(expresion) {
    try { return eval(expresion) }
    catch { return }
}

const esValida = esValida6
console.assert( esValida(e0))
console.assert(!esValida(e1))
console.assert(!esValida(e2))
