const pessoa = {
    nome: 'João',
};

const animal = {
    nome: 'Murphy',
};

function getSomething() {
    return this.nome;
}

console.log(getSomething.call(pessoa));
console.log(getSomething.call(animal));

// // //

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);
