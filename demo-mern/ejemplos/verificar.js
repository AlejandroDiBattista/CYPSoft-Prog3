function noCero(n) {
    if (n == 0){
        throw new Error("No se puede dividir por cero")
    }
}

function enRango(valor, min, max) {
    if(!(valor >= min && valor <= max)){
        throw new Error("Número fuera de rango")
    }
}

function esMayor(valor, min) {
    if(!(valor >= min)){
        throw new Error("Número negativo")
    }
}

export default { noCero, enRango, esMayor }