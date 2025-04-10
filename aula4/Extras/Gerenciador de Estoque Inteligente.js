const estoque = [
    { nome: "Notebook", preco: 3500, quantidade: 5 },
    { nome: "Smartphone", preco: 2500, quantidade: 8 },
    { nome: "Tablet", preco: 1200, quantidade: 2 },
    { nome: "Fone de Ouvido", preco: 300, quantidade: 10 },
    { nome: "Mouse", preco: 150, quantidade: 1 }
];

function venderProduto(nome, qtd) {
    const produto = estoque.find(p => p.nome === nome);
    
    if (!produto) {
        return "Produto não encontrado no estoque.";
    }
    
    if (produto.quantidade < qtd) {
        return "Estoque insuficiente para este produto.";
    }
    
    produto.quantidade -= qtd;
    return `Venda realizada: ${qtd} unidades de ${nome}.`;
}

function adicionarProduto(nome, preco, qtd) {
    const produtoExistente = estoque.find(p => p.nome === nome);
    
    if (produtoExistente) {
        produtoExistente.quantidade += qtd;
        return `Quantidade do produto ${nome} atualizada.`;
    } else {
        estoque.push({ nome, preco, quantidade: qtd });
        return `Novo produto ${nome} adicionado ao estoque.`;
    }
}

function estoqueBaixo() {
    return estoque.filter(produto => produto.quantidade < 3);
}

console.log(venderProduto("Tablet", 1)); 
console.log(venderProduto("Mouse", 2)); 
console.log(adicionarProduto("Teclado", 200, 15)); 
console.log(adicionarProduto("Notebook", 3500, 3)); 
console.log(estoqueBaixo()); 
