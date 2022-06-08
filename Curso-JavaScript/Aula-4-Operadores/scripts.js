function comparaNumeros(num1, num2) {
    const PRIMEIRAFRASE = saoIguais(num1, num2);
    const SEGUNDAFRASE = somaNums(num1, num2);
    return `${PRIMEIRAFRASE} ${SEGUNDAFRASE}`;
}

function saoIguais(num1, num2) {
    let confirm = 'não ';

    if (num1 == num2) {
        confirm = '';
    }

    return `Os números ${num1} e ${num2} ${confirm}são iguais.`;
}

function somaNums(num1, num2) {
    const soma = num1 + num2;
    let comparaDez = 'menor';
    let comparaVinte = 'menor';

    if (soma > 10) {
        comparaDez = 'maior';
    }
    if (soma > 20) {
        comparaVinte = 'maior';
    }

    return `Sua soma é ${soma}, que é ${comparaDez} que 10 e ${comparaVinte} que 20.`;
}

console.log(comparaNumeros(10, 9));
