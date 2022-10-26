var jogador1 = 0;
var jogador2 = 1;
var placar;

// IF TERNÁRIO CONDIÇAO ? SE : SENAO
// jogador1 > 0 ? console.log('O jogador 1 marcou ponto!') : console.log('O jogador 2 marcou ponto!');

// ESTRUTURA IF
if (jogador1 > 0 && jogador2 == 0) {
    console.log('O jogador 1 marcou ponto.');
    placar = jogador1 > jogador2;
} else if (jogador2 > 0 && jogador1 == 0) {
    console.log('O jogador 2 marcou ponto.');
    placar = jogador2 > jogador1;
} else {
    console.log('Ninguém marcou ponto.');
}

// ESTRUTURA SWITCH CASE
switch (placar) {
    case (placar = jogador1 > jogador2):
        console.log('Jogador 1 ganhou.');
        break;

    case (placar = jogador2 > jogador1):
        console.log('Jogador 2 ganhou.');
        break;

    default:
        console.log('Ninguém ganhou.');
        break;
}

// ESTRUTURA FOR
let valores = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = {
    propriedade1: 'prop1',
    propriedade2: 'prop2',
    propriedade3: 'prop3',
};

for (i = 0; i < valores.length; i++) {
    console.log(valores[i]);
}

for (i in valores) {
    console.log(i);
}

for (i in object) {
    console.log(i);
}

for (i of valores) {
    console.log(i);
}
