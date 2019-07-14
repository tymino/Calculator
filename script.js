let field = document.getElementById('enter-field');
let localNum1, localNum2;
let sign = '';

// RESET field (input)
function allReset() {
    field.value = '';
    localNum1 = 0;
    localNum2 = 0;
    sign = '';
}

// Get button and write in the field (input)
function getButton(number) {
    field.value += number;

    if(sign === '') {
        localNum1 = parseFloat(field.value);
        console.log(localNum1);
    }
    else {
        localNum2 = parseFloat(field.value);
        console.log(localNum2);
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

    field.value = localNum1;
}

// Swap negative or positive value
function plusMinus() {
    localNum1 *= -1;
    field.value = localNum1;
}