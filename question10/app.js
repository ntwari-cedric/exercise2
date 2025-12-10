import { searchById, searchByName, filterByAge } from "./search.js";

console.log(`Found student: ${JSON.stringify(searchById(1))}`);
console.log(`Search result: ${searchById(99)}`);
console.log(`Found student: ${JSON.stringify(searchByName("joLiVeT"))}`);
console.log(`Search result: ${searchByName("John")}`);
console.log(`Students aged 21 and above: ${JSON.stringify(filterByAge(21))}`);