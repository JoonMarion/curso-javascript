var lines = gets().split('\n');
var n = parseInt(lines.shift());
var r = 0;
var arrSoma = [];

if (n <= 2) {
    print(n);
} else {
    r = n;
    fatorial();
}

function fatorial() {
    n -= 1;
    if (n == 0) {
        return;
    }
    r = r * n;
    divide();
}

function divide() {
    n -= 1;

    if (n == 0) {
        arrSoma.push(r);
        return;
    }

    r = Math.round(r / n);
    arrSoma.push(r);

    r = 0;

    soma();
}

function soma() {
    n -= 1;

    if (n == 0) {
        return;
    }
    arrSoma.push(`+${n}`);

    subtrai();
}

function subtrai() {
    n -= 1;

    if (n == 0) {
        return;
    }

    r = -n * (n - 1);

    n -= 1;

    if (n == 0) {
        return;
    }

    divide();
}

print(Math.round(eval(arrSoma.join(''))));
