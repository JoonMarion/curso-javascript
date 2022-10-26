let n = parseInt(gets());

function somatorio(n) {
    if (n == 0) {
        return 0;
    } else {
        return n + somatorio(n - 1);
    }
}

print(somatorio(n));
