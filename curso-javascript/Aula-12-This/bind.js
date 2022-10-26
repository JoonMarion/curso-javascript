const retornaNome = function () {
    return this.nome;
};

let mariano = retornaNome.bind({ nome: 'Mariano' });

console.log(mariano());
