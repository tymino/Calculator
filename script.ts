let field = <HTMLInputElement>document.getElementById('enter-field');
let localNum1: number = undefined;
let localNum2: number = undefined;
let sign: string = '';

// RESET field (input)
function allReset(): void {
    field.value = '';
    localNum1 = 0;
    localNum2 = 0;
    sign = '';
}

// Get value of the button and write in the field (input)
function getButton(symbol: string): void {
    field.value += symbol;

    if(sign === '') {
        localNum1 = parseFloat(field.value);
    }
    else {
        localNum2 = parseFloat(field.value);
    }
}

// Get plus or minus or devide or multiply
function getOperation(operation: string): void {
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
function getResult(): void {
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
function plusMinus(): void {
    localNum1 *= -1;
    field.value = String(localNum1);
}