const { add, subtract, multiply, divide, power } = require('./operation');
const sum = add(14, 13);
const diff = subtract(2, 1);
const product = multiply(9, 3);
const quotient = divide(28, 4);
const pow = power(9, 2)

const results = {sum,diff,product,quotient,pow };

console.log(Object.keys(results))
for (const t of Object.keys(results)) {
    console.log(`${t} =>${results[t]}`);
}

