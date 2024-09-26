let num1 = parseFloat(prompt('1 number'));

let num2 = parseFloat(prompt(2))

let num3 = parseFloat(prompt('+', '-', '*', '/'))

let answer = '0'

if (num3 === '+') {
    answer = num1 + num2
} else if (num3 === '-') {
    answer = num1 - num2
} else if (num3 === '*') {
    answer = num1 * num2
} else if (num3 === '/') {
    answer = num1 / num2
}

alert('Your answer is -' + ' ' + answer);   