let jogador1 = parseInt(prompt("Jogador 1, escolha um número entre 1 e 6:"))
let jogador2 = parseInt(prompt("Jogador 2, escolha um número entre 1 e 6:"))

let dado1 = Math.floor(Math.random() * 6) + 1
let dado2 = Math.floor(Math.random() * 6) + 1

let diferenca1 = Math.abs(jogador1 - dado1)
let diferenca2 = Math.abs(jogador2 - dado2)

console.log("Dado do Jogador 1:", dado1)
console.log("Dado do Jogador 2:", dado2)

if (diferenca1 < diferenca2) {
    console.log("Jogador 1 venceu!")
} else if (diferenca2 < diferenca1) {
    console.log("Jogador 2 venceu!")
} else {
    console.log("Empate!")
}
