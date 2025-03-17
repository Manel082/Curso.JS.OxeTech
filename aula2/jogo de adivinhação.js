let numeroAleatorio = Math.floor(Math.random() * 100) + 1
let tentativas = 0
let palpite

do {
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"))
    tentativas++;

    if (palpite < numeroAleatorio) {
        console.log("O número é maior.");
    } else if (palpite > numeroAleatorio) {
        console.log("O número é menor.");
    } else {
        console.log("Parabéns! Você acertou o número em " + tentativas + " tentativas.");
    }
} while (palpite !== numeroAleatorio);
