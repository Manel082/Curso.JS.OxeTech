function converterMoeda(precosDolar) {
    return precosDolar.map(preco => preco * 5);
}

const precosEmDolar = [10, 20, 50, 100];
const precosEmReal = converterMoeda(precosEmDolar);
console.log(precosEmReal);