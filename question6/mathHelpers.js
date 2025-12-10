function square(n) {
    if (typeof n !== "number") {
        return "Invalid input";
    }
    return n * n;
}

function cube(n) {
    if (typeof n !== "number") {
        return "Invalid input";
    }
    return n * n * n;
}

function sqrt(n) {
    if (typeof n !== "number") {
        return "Invalid input";
    }
    if (n < 0) {
        return "Error: Cannot calculate square root of negative number";
    }
    return Math.sqrt(n);
}

module.exports = {
    square,
    cube,
    sqrt
};