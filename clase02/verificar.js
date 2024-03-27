function verificarExpresion(expresion){
    console.log("Estoy verificando" +expresion)
    return true
}

function mostrarMensaje() {   
    let a = document.getElementById("saludo")
    console.log("innerText" + a.innerText)
    a.innerText = "Mundo cruel"
    
    console.log("Estoy en 'Verificar.js'")
}
