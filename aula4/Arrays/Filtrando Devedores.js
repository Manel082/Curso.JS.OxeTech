function filtrarDevedores(dividas) {
    return dividas.filter(divida => divida > 80);
}

const listaDividas = [50, 90, 30, 120, 75, 85, 200];
const devedores = filtrarDevedores(listaDividas);
console.log(devedores);