function listarValores(objeto) {
    return Object.values(objeto);
}

const pessoa = {
    nome: 'Maria',
    idade: 25,
    profissao: 'Desenvolvedora',
    ativo: true
};

const valores = listarValores(pessoa);
console.log(valores); 