function calculadora() {
    var operacao = Number(
        prompt(
            'Escolha uma operação: \n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão (/)\n5 - Divisão inteira (%)\n6 - Potenciação (**)'
        )
    );

    // CONFIRMANDO SELEÇÃO DE OPERAÇÃO
    if (!operacao || operacao > 6 || operacao < 1) {
        alert('Erro - Operação inválida');
        calculadora();
    } else {
        // INSERINDO VALORES PARA OPERAÇÃO
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        // CONFIRMANDO VALORES INSERIDOS
        if (!n1 || !n2) {
            alert('Erro - Parâmetro inválido!');
            calculadora();
        } else {
            // OPERAÇÕES A REALIZAR
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisao() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoReal() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
                novaOperacao();
            }

            // PERGUNTANDO SE O USUÁRIO DESEJA FAZER OUTRA OPERAÇÃO
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n1 - Sim\n2 - Não');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!');
                } else {
                    alert('Opção inválida');
                    novaOperacao();
                }
            }

            // CHAMANDO OPERAÇÃO E A CHAMADA PARA OUTRA OPERAÇÃO
            // if (operacao == 1) {
            //     soma();
            // } else if (operacao == 2) {
            //     subtracao();
            // } else if (operacao == 3) {
            //     multiplicacao();
            // } else if (operacao == 4) {
            //     divisao();
            // } else if (operacao == 5) {
            //     divisaoReal();
            // } else if (operacao == 6) {
            //     potenciacao();
            // }

            // COM SWITCH CASE
            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisao();
                    break;
                case 5:
                    divisaoReal();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
        }
    }
}

calculadora();
