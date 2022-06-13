function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos.`;
}

console.log(calculaIdade(20));

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
};

const pessoa2 = {
    nome: 'Carla',
    idade: 26,
};

const animal = {
    nome: 'Fiona',
    idade: 3,
    raca: 'Vira-lata',
};

console.log(calculaIdade.call(pessoa2, 10));
console.log(calculaIdade.call(pessoa1, 10));
console.log(calculaIdade.call(animal, 10));
