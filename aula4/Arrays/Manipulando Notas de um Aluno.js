function calcularMedia(notas) {
    const notasOrdenadas = [...notas].sort((a, b) => b - a);
    const tresMelhoresNotas = notasOrdenadas.slice(0, 3);
    const soma = tresMelhoresNotas.reduce((total, nota) => total + nota, 0);
    const media = soma / tresMelhoresNotas.length;
    return media;
}

const notasAluno = [7.5, 8.0, 6.5, 9.2, 5.8, 7.0];
console.log(calcularMedia(notasAluno));