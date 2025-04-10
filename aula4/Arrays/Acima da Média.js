function calcularMedia(notas) {
    let soma = 0;
    notas.forEach(nota => {
        soma += nota;
    });
    return soma / notas.length;
}

function acimaMedia(notas) {
    const media = calcularMedia(notas);
    let contador = 0;
    notas.forEach(nota => {
        if (nota > media) {
            contador++;
        }
    });
    return contador;
}

const notas = [7.5, 8.0, 6.5, 9.2, 5.8, 7.0];
console.log("Média:", calcularMedia(notas))

console.log("Notas acima da média:", acimaMedia(notas));