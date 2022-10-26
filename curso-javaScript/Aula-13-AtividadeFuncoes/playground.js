const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1A',
    },
    {
        nome: 'Maria',
        nota: 9,
        turma: '2A',
    },
    {
        nome: 'Pedro',
        nota: 6,
        turma: '1C',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '1C',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];
    for (let i = 0; i < arr.length; i++) {
        // OBJECT DESTRUCTURING
        const { nome, nota } = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 6));
