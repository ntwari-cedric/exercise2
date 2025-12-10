function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number"){ 
    return "Invalid input";
}
    return a + b;
}

function subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid input";
}
    return a - b;
}

function multiply(a, b){
    if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid input";
}
    return a * b;
}

function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number"){
        return "Invalid input";
    }
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function power(base, exponent) {
    if (typeof base !== "number" || typeof exponent !== "number"){
        return "Invalid input";
    }
    if (exponent === 0) {
        return 1;
    }
    if (exponent < 0) {
        return 1 / (base ** -exponent);
    }
    return base ** exponent;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power,
};
