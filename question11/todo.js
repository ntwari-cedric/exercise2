import { tasks } from "./storage.js";

const addTask = (task) => {
    tasks.push(task);
    return `Task added: "${task}"`;
};

const removeTask = (taskIndex) => {
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        const removed = tasks.splice(taskIndex, 1);
        return `Task removed: "${removed[0]}"`;
    }
    return "Invalid task index";
};

const listTasks = () => {
    if (tasks.length === 0) {
        return "No tasks available";
    }
    return tasks.map((task, index) => `${index + 1}. ${task}`).join('\n');
};

export { addTask, removeTask, listTasks };