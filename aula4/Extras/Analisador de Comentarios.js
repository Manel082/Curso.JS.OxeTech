const comentarios = [
    { usuario: "João Silva", texto: "Ótimo artigo, muito informativo!", likes: 45 },
    { usuario: "Maria Souza", texto: "Gostei bastante das dicas apresentadas.", likes: 32 },
    { usuario: "Carlos Oliveira", texto: "Conteúdo relevante e bem escrito.", likes: 28 },
    { usuario: "Ana Santos", texto: "Não concordo com alguns pontos do artigo.", likes: 12 },
    { usuario: "Pedro Costa", texto: "Excelente explicação, ajudou muito!", likes: 56 },
    { usuario: "Luiza Fernandes", texto: "Recomendo este artigo para todos.", likes: 39 }
];

function topComentarios() {
    return [...comentarios]
        .sort((a, b) => b.likes - a.likes)
        .slice(0, 3);
}

function buscarComentario(palavra) {
    const termo = palavra.toLowerCase();
    return comentarios.filter(comentario => 
        comentario.texto.toLowerCase().includes(termo)
    );
}

console.log("Top 3 comentários:", topComentarios());
console.log("Comentários com 'artigo':", buscarComentario("artigo"));
console.log("Comentários com 'excelente':", buscarComentario("excelente"));