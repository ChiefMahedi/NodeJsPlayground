import { EventEmitter } from 'events';

class TaskManager extends EventEmitter {}

const taskManager = new TaskManager();
let taskCompletionCount = 0;

// Listen for a 'taskCompleted' event only once
taskManager.once('taskCompleted', () => {
  console.log(`Task completed! Total completed tasks: ${++taskCompletionCount}`);
});

// Function to simulate completing a task
function completeTask() {
  taskManager.emit('taskCompleted');
}

// Simulating the first task completion
completeTask(); // Prints: Task completed! Total completed tasks: 1

// Simulating a second task completion (this won't trigger the event again)
completeTask(); // No output
