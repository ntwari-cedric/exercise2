 export function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number"){ 
    return "Invalid input";
}
    return a + b;
}

export function subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid input";
}
    return a - b;
}

export function multiply(a, b){
    if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid input";
}
    return a * b;
}

export function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number"){
        return "Invalid input";
    }
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

export function power(base, exponent) {
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

