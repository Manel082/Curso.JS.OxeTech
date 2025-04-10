const usuario = {};

Object.defineProperty(usuario, 'senha', {
    value: '123456',
    enumerable: false,    
    writable: false,      
    configurable: false   
});

console.log(usuario.senha);  

usuario.senha = 'novaSenha'; 
console.log(usuario.senha);  

console.log(Object.keys(usuario)); 