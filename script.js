//condicionais são uma forma de tomar decisões, de fazer o computador executar essas decisões.

// if significa "se"
// else significa "senão"
//if (condição) {codigo que será executado}


//variaveis
// 3 tipos: var, let e const
//prompt pergunta algo ao usuario;
//sempre que usamos dados textuais ""
//string
//let nome = prompt("Qual é o seu nome?");
//alert usamos para exibir uma mensagem
//alert("Seja bem vindo(a), " + nome)

//let idade = prompt ("Quantos anos você tem?")
// if significa "se"
// else significa "senão"
//if (condição) {codigo que sera executado}
//if (idade >= 18) {
    //alert(" Você ja pode tirar a carteira de motorista!!!!")
//}else{
    //alert("Você ainda não tem idade para dirigir!")
//}

let gostardePizza = prompt("Você gosta de pizza? Responda (sim ou não)");
// === estritamente igual
if (gostardePizza === "sim"){
    alert("Que otimo! Vamos comer juntos!")
}else{
    alert("Tudo bem, talvez você goste de outra comida");
}