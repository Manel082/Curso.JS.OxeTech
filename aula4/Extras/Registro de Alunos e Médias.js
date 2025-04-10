const alunos = [
    { nome: "Ana", notas: [8, 7.5, 9] },
    { nome: "Carlos", notas: [6, 5, 7] },
    { nome: "Mariana", notas: [9, 8.5, 10] },
    { nome: "Pedro", notas: [4, 5.5, 6] }
];

function calcularMedia(nome) {
    const aluno = alunos.find(a => a.nome === nome);
    
    if (!aluno) {
        return "Aluno não encontrado";
    }
    
    const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
    const media = soma / aluno.notas.length;
    return media.toFixed(2); 
}

function alunosAprovados() {
    return alunos.filter(aluno => {
        const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
        return (soma / aluno.notas.length) >= 7;
    }).map(aluno => aluno.nome);
}

console.log("Média da Ana:", calcularMedia("Ana")); 
console.log("Média do Carlos:", calcularMedia("Carlos")); 
console.log("Alunos aprovados:", alunosAprovados()); 