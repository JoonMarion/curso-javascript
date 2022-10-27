let resultado = gets();
print(checaPalindromo(resultado));

function checaPalindromo(resultado) {
    for (var i = 0; i < resultado.length / 2; i++) {
        if (resultado[i] != resultado[resultado.length - i - 1]) {
            return 'FALSE';
        } else {
            return 'TRUE';
        }
    }
}
