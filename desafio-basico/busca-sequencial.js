let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];
let valor = parseInt(gets());
let confirma = 0;

for (let i = 0; i < elementos.length; i++) {
    if (valor == elementos[i]) {
        print(`Achei ${valor} na posicao ${i}`);
        confirma = 1;
    }
}

if (confirma == 0) {
    print(`Numero ${valor} nao encontrado!`);
}
