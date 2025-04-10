function gerenciarTarefas(tarefas, acao, novaTarefa = null) {
    let listaTarefas = [...tarefas];
    
    switch (acao) {
        case "adicionarInicio":
            if (novaTarefa) {
                listaTarefas.unshift(novaTarefa);
            }
            break;
        case "adicionarFim":
            if (novaTarefa) {
                listaTarefas.push(novaTarefa);
            }
            break;
        case "removerInicio":
            if (listaTarefas.length > 0) {
                listaTarefas.shift();
            }
            break;
        case "removerFim":
            if (listaTarefas.length > 0) {
                listaTarefas.pop();
            }
            break;
    }
    
    return listaTarefas;
}

let tarefas = ["Estudar", "Trabalhar", "Descansar"];

console.log("Lista inicial:", tarefas);

tarefas = gerenciarTarefas(tarefas, "adicionarInicio", "Acordar");
console.log("Após adicionar no início:", tarefas);

tarefas = gerenciarTarefas(tarefas, "adicionarFim", "Dormir");
console.log("Após adicionar no final:", tarefas);

tarefas = gerenciarTarefas(tarefas, "removerInicio");
console.log("Após remover do início:", tarefas);

tarefas = gerenciarTarefas(tarefas, "removerFim");
console.log("Após remover do final:", tarefas);