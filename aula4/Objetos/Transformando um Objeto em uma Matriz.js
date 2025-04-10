function objetoParaMatriz(objeto) {
    return Object.entries(objeto);
}

const matriz = objetoParaMatriz({
    nome: 'Carlos',
    idade: 32,
    cidade: 'São Paulo'
});

console.log(matriz);