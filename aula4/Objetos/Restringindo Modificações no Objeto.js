function impedirExtensao(obj) {
    Object.preventExtensions(obj);
    return obj;
}

function selarObjeto(obj) {
    Object.seal(obj);
    return obj;
}

function congelarObjeto(obj) {
    Object.freeze(obj);
    return obj;
}

const pessoa = {
    nome: 'João',
    idade: 30
};

const pessoaNaoExtensivel = impedirExtensao(pessoa);
pessoaNaoExtensivel.profissao = 'Engenheiro'; 
console.log(pessoaNaoExtensivel); 
const pessoaSelada = selarObjeto(pessoa);
delete pessoaSelada.idade; 
pessoaSelada.nome = 'Maria'; 
console.log(pessoaSelada); 

const pessoaCongelada = congelarObjeto(pessoa);
pessoaCongelada.nome = 'Carlos'; 
console.log(pessoaCongelada); 