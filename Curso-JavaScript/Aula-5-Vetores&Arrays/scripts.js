let array = [1, 2, true, 'string'];
let array2 = [1, 2, true, 'string', ['array2', 'array3', ['teste', 2]], ['array4']];

/* PEGANDO ÍNDICE DENTRO DO ARRAY*/
console.log(array2[4][2][0]);

/* PERCORRE TODO O ARRAY */
array2.forEach(function (item, index) {
    console.log(item, index);
});

/* ADICIONA ITEM AO FINAL DO ARRAY */
array.push('New item');
console.log(array);

/* RETIRA O ÚLTIMO ITEM DO ARRAY */
array.pop(array);
console.log(array);

/* RETIRA O PRIMEIRO ITEM DO ARRAY */
array.shift(array);
console.log(array);

/* ADICIONA ITEM NO INICIO DO ARRAY */
array.unshift('New start item');
console.log(array);

/* INDEX DO VALOR NO ARRAY */
console.log(array2[4][2].indexOf('teste'));

/* DELETANDO ITEM PELO ÍNDICE */
array.splice(0, 2);
console.log(array);

/* RETORNANDO ALGUNS ELEMENTOS DO ARRAY PELO ÍNDICE */
const sliceArray = array2.slice(1, 4);
console.log(sliceArray);

/* OBJETOS */
let object = {
    string: 'string2',
    number: 1,
    boolean: true,
    array: ['array'],
    objectInterno: {
        objectInterno: 'objeto interno',
    },
};

console.log(object.number);

var string = object.string;
console.log(string);

/* COMBINAR ELEMENTO INDEPENDENTE EM UM ARRAY */
const arrayWithArgument = (...args) => {
    return console.log(args);
};

arrayWithArgument(1, 'dois', 3);

/* SEPARANDO ARRAY EM ELEMENTOS INDEPENTES */
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
