const hotel = [
    { numero: 101, ocupado: false, hospede: null },
    { numero: 102, ocupado: false, hospede: null },
    { numero: 103, ocupado: false, hospede: null },
    { numero: 104, ocupado: false, hospede: null },
    { numero: 105, ocupado: false, hospede: null }
];

function reservarQuarto(hotel, nomeHospede) {
    const quartoDisponivel = hotel.find(quarto => !quarto.ocupado);
    
    if (quartoDisponivel) {
        quartoDisponivel.ocupado = true;
        quartoDisponivel.hospede = nomeHospede;
        return `Quarto ${quartoDisponivel.numero} reservado para ${nomeHospede}`;
    } else {
        return "Hotel lotado!";
    }
}

function liberarQuarto(hotel, numero) {
    const quarto = hotel.find(q => q.numero === numero);
    
    if (!quarto) {
        return "Quarto não encontrado.";
    }
    
    if (!quarto.ocupado) {
        return "Este quarto já está disponível.";
    }
    
    quarto.ocupado = false;
    quarto.hospede = null;
    return `Quarto ${numero} foi liberado.`;
}

function listarQuartos(hotel) {
    return hotel
        .filter(quarto => quarto.ocupado)
        .map(quarto => quarto.numero);
}

console.log(reservarQuarto(hotel, "João Silva")); 
console.log(reservarQuarto(hotel, "Maria Souza")); 
console.log(listarQuartos(hotel)); 
console.log(liberarQuarto(hotel, 101)); 
console.log(liberarQuarto(hotel, 101)); 
console.log(listarQuartos(hotel)); 