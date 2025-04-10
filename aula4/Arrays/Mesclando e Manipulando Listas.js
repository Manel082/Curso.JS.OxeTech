function gerenciarListas(array1, array2, acao, quantidade) {
    const arrayConcatenado = array1.concat(array2);
    
    if (acao === "removerUltimos") {
        arrayConcatenado.splice(-quantidade);
    }
    
    return arrayConcatenado;
}

const frutas = ['maçã', 'banana'];
const vegetais = ['cenoura', 'batata'];

console.log(gerenciarListas(frutas, vegetais, "juntar"));

console.log(gerenciarListas(frutas, vegetais, "removerUltimos", 3));