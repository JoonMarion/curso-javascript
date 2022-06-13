const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

// PARAMETROS SÃO PASSADOS DENTRO DE UM ARRAY
soma.apply(myObj, [1, 5]);
