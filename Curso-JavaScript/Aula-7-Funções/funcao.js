/* SINTAXE FUNÇÃO SIMPLES */
function mensagem(primeiro, segundo) {
    console.log(primeiro, segundo);
}
mensagem('Opa,', 'e aí vei');

/* FUNÇÃO DECLARATIVA (PRECISA, OBRIGATORIAMENTE, DE UM NOME) */
function funcao() {
    console.log('Função 0');
}
funcao();

/* EXPRESSÕES DE FUNÇÕES 'FUNÇÃO ANÔNIMA' (O NOME É OPCIONAL) */
var funcao1 = function () {
    console.log('Função 1');
};
funcao1();

// // //

function funcao2() {
    console.log('Função 2');
}
funcao2();

// // //

var funcao3 = () => {
    console.log('Função 3');
};
funcao3();

// // //

(function () {
    console.log('Funcao anônima');
})();

// // //

setTimeout(function () {
    console.log('After 2 seconds');
}, 2000);

/* ARROW FUNCTION */
let show = () => {
    console.log('Arrow function');
};
show();

// // //

let add = (a, b) => a + b;
console.log(add(1, 2));

/* IIFE FUNÇÃO AUTO INVOCÁVEL */
(function () {
    console.log('IIFE');
})();

/* CALLBACK */
const calc = function (operacao, num1, num2) {
    return operacao(num1, num2);
};

const soma = function (num1, num2) {
    return num1 + num2;
};

const sub = function (num1, num2) {
    return num1 - num2;
};

const resultSoma = calc(soma, 10, 5);
const resultSub = calc(sub, 10, 5);

console.log(resultSoma);
console.log(resultSub);

/* ARGUMENTS */
function showArguments() {
    return arguments;
}

console.log(showArguments(1, 'dois', 3, 4, 'teste'));
