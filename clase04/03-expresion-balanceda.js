let e1 = "(1+2) * (3+(4*5) + 6) + 7";
let e2 = "((1+2)" 
let e3 = "(1+2) + 3) + 4)"


console.log(contador)

function mostrarBalance(expresion) {

    function esBalanceado(e) {
        function compare(a, b) {
            return a == b
        }
        let contador = 0;
        for (let x of e) { //
            if (compare(x, "(")) contador++;
            if (compare(x, ")")) contador--;
            if (contador < 0) return false;
        }
        return contador == 0
    }

    let resultado = esBalanceado(expresion)
    if (resultado) {
        console.log(expresion, "Balanceada");
    } else {
        console.log(expresion, "No balanceada");
    }
}

mostrarBalance(e1)
mostrarBalance(e2)
mostrarBalance("(()))")



