var field = document.getElementById('enter-field');
var localNum1 = undefined;
var localNum2 = undefined;
var sign = '';
// RESET field (input)
function allReset() {
    field.value = '';
    localNum1 = 0;
    localNum2 = 0;
    sign = '';
}
// Get value of the button and write in the field (input)
function getButton(symbol) {
    field.value += symbol;
    if (sign === '') {
        localNum1 = parseFloat(field.value);
    }
    else {
        localNum2 = parseFloat(field.value);
    }
}
// Get plus or minus or devide or multiply
function getOperation(operation) {
    if (operation === '+') {
        sign = '+';
    }
    else if (operation === '-') {
        sign = '-';
    }
    else if (operation === '*') {
        sign = '*';
    }
    else if (operation === '/') {
        sign = '/';
    }
    field.value = '';
}
// Get Result and show it in the field (input)
function getResult() {
    if (sign === '+') {
        localNum1 += localNum2;
    }
    else if (sign === '-') {
        localNum1 -= localNum2;
    }
    else if (sign === '*') {
        localNum1 *= localNum2;
    }
    else if (sign === '/') {
        localNum1 /= localNum2;
    }
    field.value = String(localNum1);
}
// Swap negative or positive value
function plusMinus() {
    localNum1 *= -1;
    field.value = String(localNum1);
}
