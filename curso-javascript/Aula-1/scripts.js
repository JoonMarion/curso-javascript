// ARRAYS E FUNÇÕES
function returnEvenValues(array) {
    let evenNums = [];
    let oddNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            oddNums.push(array[i]);
        }
    }
    console.log('Núneros pares:', evenNums);
    console.log('Números ímpares:', oddNums);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
returnEvenValues(array);
