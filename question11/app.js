import { addTask, removeTask, listTasks } from "./todo.js";

console.log(addTask("Buy groceries"));
console.log(addTask("Finish homework"));
console.log(addTask("Go to gym"));

console.log(removeTask(1));

console.log("Current tasks:");
console.log(listTasks());