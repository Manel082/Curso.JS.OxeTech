function calcularTotalVendas(valores) {
    return valores.reduce((total, valor) => total + valor, 0);
}

const vendas = [150, 220, 80, 310, 95];
const totalVendas = calcularTotalVendas(vendas);
console.log(totalVendas); 