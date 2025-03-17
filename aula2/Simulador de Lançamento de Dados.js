let numeroUsuario = parseInt(prompt("Escolha um número entre 1 e 6:"))
if (numeroUsuario >= 1 && numeroUsuario <= 6) {
    let resultadoDado = Math.floor(Math.random() * 6) + 1
    if (numeroUsuario === resultadoDado) {
        console.log("Parabéns, você acertou!")
    } else {
        console.log("Que pena, o número sorteado foi " + resultadoDado + ".")
    }
} else {
    console.log("Número inválido. Por favor, escolha um número entre 1 e 6.")
}
