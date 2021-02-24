// This is calculator based on Javascript Console Log
let result = 0;
let number1 = Number(prompt('Input No 1:'));
let number2 = Number(prompt('Input No. 2:'));
let operator = prompt('Input operator \n Contoh: tambah, kurang, kali, dan bagi');

// console.log('operator gan:', operator);
// console.log('number1:', number1);
// console.log('number2:', number2);
// console.log('operator tambah:', operator === 'tambah');

function myCalc(number1, number2, operator) {
    // console.log('operator gan:', operator);
    // console.log('operator tambah:', operator === 'tambah');
    // console.log('number1:', number1);
    // console.log('number2:', number2);
    // console.log('result:', result);
    if (operator === 'tambah') {
        // console.log('tes');
        // return result = (number1 + number2);
        // return number1 + number2;
        // console.log(number1 + number2);
        // console.log(result);
        // console.log('number1:', number1);
        // console.log('number2:', number2);
        // console.log('result gan1:', result);
        result = number1 + number2;
        // return result;
        // console.log('result gan2:', result);
    } else if (operator === 'kurang') {
        result = number1 - number2;
    } else if (operator === 'kali') {
        result = number1 * number2;
    } else if (operator === 'bagi') {
        result = number1 / number2;
    }
    // } else if (operator !== ('tambah' || 'kurang' || 'kali' || 'bagi')) {
    //     return console.log('Operator belum support');
    // }
    console.log('result gan3:', result);
    alert(`Hasilnya adalah: ${result}`);
    return result;
};

myCalc(number1, number2, operator);
// myCalc();