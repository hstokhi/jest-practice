function capitalize (string) {
    return string[0].toUpperCase() + string.slice(1)
}

function reverseString(string) {
    let newString = '';
    for (let i = string.length -1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

class Calculator {
    add(x, y) { return x + y };
    subtract(x, y) { return x - y };
    divide(x, y) { return x / y };
    multiply(x, y) { return x * y };
}

module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;
module.exports.calculator = new Calculator();