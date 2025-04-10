function mesclarObjetos(objeto1, objeto2) {
    return Object.assign({}, objeto1, objeto2);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const resultado = mesclarObjetos(obj1, obj2);
console.log(resultado); 