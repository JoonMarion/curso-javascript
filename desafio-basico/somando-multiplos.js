var a = parseInt(gets());
var N = parseInt(gets());
var r = 0;

for (let i = a; i <= N; i++) {
    if (i % a == 0) {
        r = r + i;
    }
}

print(r);
