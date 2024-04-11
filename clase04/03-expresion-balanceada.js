let e1 = "(1+2) * (3+(4*5) + 6) + 7";
let e2 = "((1+2)" 
let e3 = "(1+2) + 3) + 4)"


// Ejemplo que una funcion puede contemplar otra funcion en su interior

function mostrarBalance(expresion) {
    // Funcion interna. No se puede acceder desde afuera

    function esBalanceado(e) {
        let contador = 0;
        for (let x of e) { //
            if (x == "(") contador++;
            if (x == ")") contador--;
            if (contador < 0) return false;
        }
        return contador == 0
    }

    let resultado = esBalanceado(expresion)
    if (resultado) {
        console.log(`La ${expresion} está balanceada`);
    } else {
        console.log(`La ${expresion} NO está balanceada`);
    }
}

mostrarBalance(e1)
mostrarBalance(e2)
mostrarBalance("(()))")



