// SINTAXE PARA UM ARGUMENTO

(a, b) => {
    return a + b;
};

(a, b) => a + b;

//  //  //

let a = 5;
let b = 10;

let c = (num1, num2) => num1 + num2;

console.log(c(a, b));

// SINTAXE PARA VÁRIOS ARGUMENTOS

let d = (x, y) => {
    let op;

    if (x > 5) {
        op = x * y;
    } else {
        op = x / y;
    }

    return op;
};

console.log(d(a, b));

// // // UM ARGUMENTO

let frase = 'Testando split JavaScript';

let fraseArray = (frase) => frase.split(' ');

console.log(fraseArray(frase));

// // // SEM ARGUMENTO

let semArg = () => console.log('Sem argumento');

semArg();

// CASOS DE USO DAS ARROW FUNCTIONS

let roupas = [
    { produto: 'Camisa', preco: '25', cor: 'Amarelo' },
    { produto: 'Calça', preco: '80', cor: 'Azul' },
    { produto: 'Jaqueta', preco: '100', cor: 'Preto' },
    { produto: 'Camiseta', preco: '15', cor: 'Rosa' },
    { produto: 'Calção', preco: '20', cor: 'Azul' },
];

let precoMaiorQue50 = roupas.filter((roupa) => {
    return roupa.preco > 50;
});

let corAzul = roupas.filter((roupa) => {
    return roupa.cor == 'Azul';
});

console.log(precoMaiorQue50);
console.log(corAzul);
