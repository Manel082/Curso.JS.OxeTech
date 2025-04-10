function maior(array) {
    let maiorNumero = array[0];
    for (const numero of array) {
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
    }
    return maiorNumero;
}

function menor(array) {
    let menorNumero = array[0];
    for (const numero of array) {
        if (numero < menorNumero) {
            menorNumero = numero;
        }
    }
    return menorNumero;
}

const numeros = [12, 6, 18, 5, 24, 7, 30];
console.log("Maior número:", maior(numeros)); 

console.log("Menor número:", menor(numeros));