var sub = document.getElementById('menos');
var sum = document.getElementById('mais');
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var count = 0;

sub.addEventListener('click', function () {
    if (count > -10) {
        currentNumber = currentNumber - 1;
        if (currentNumber < 0) {
            currentNumberWrapper.style.color = 'red';
        } else {
            currentNumberWrapper.style.color = 'black';
        }
        currentNumberWrapper.innerHTML = currentNumber;
        count--;
    }
});

sum.addEventListener('click', function () {
    if (count < 10) {
        currentNumber = currentNumber + 1;
        if (currentNumber >= 0) {
            currentNumberWrapper.style.color = 'black';
        }
        currentNumberWrapper.innerHTML = currentNumber;
        count++;
    }
});
