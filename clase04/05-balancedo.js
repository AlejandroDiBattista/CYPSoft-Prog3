
function esBalanceado(e) {
    function compare(a, b) {
            return a == b 
        }
        let contador = 0;
        for (let x of e) { //
            if (compare(x,"(")) contador++;
            if (compare(x,")")) contador--;
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
