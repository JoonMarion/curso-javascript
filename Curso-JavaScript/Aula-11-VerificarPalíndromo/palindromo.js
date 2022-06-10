// SOLUÇÃO 1
function verificaPalindromo(string) {
    if (!string) return 'String inexistente.';

    return string.split('').reverse().join('') === string;
}

let varPalindromo = false;

console.log(verificaPalindromo(varPalindromo));

// SOLUÇÃO 2
function verificaPalindromo2(string) {
    if (!string) return 'String inexistente.';

    for (i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

let varPalindromo2 = 'arara';

console.log(verificaPalindromo2(varPalindromo2));
