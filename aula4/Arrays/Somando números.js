function somarNumeros(array) {
    let soma = 0;
    for (const indice in array) {
        const numero = array[indice];
        if (numero % 2 === 0 && numero % 3 === 0) {
            soma += numero;
        }
    }
    return soma;
}

const numeros = [12, 6, 18, 5, 24, 7, 30];
console.log(somarNumeros(numeros));