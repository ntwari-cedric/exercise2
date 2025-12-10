import { multiply } from "./operation_es6.js";
const a = 6;
const b = 7;

const result = multiply(a, b);

if (result % 2 === 0) {
    console.log(`${a} × ${b} = ${result} (Even Number)`);
} else {
    console.log(`${a} × ${b} = ${result} (Odd Number)`);
}