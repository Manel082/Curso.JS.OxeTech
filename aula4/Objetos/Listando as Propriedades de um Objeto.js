function listarPropriedades(objeto) {
    return Object.keys(objeto);
}

const pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Engenheiro'
};

const propriedades = listarPropriedades(pessoa);
console.log(propriedades);