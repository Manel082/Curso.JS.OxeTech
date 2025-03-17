let nomeUsuario = prompt("Digite seu nome:")

let nomeFormatado = nomeUsuario.slice(0, 1).toUpperCase() + nomeUsuario.slice(1).toLowerCase()

console.log("Olá, " + nomeFormatado + ", seja bem-vindo(a)!")
