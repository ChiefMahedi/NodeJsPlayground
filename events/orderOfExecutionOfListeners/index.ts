import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

// Listener 1 (synchronous)
myEmitter.on('event', () => {
  console.log('Listener 1: First execution');
});

// Listener 2 (asynchronous using setImmediate)
myEmitter.on('event', () => {
  setImmediate(() => {
    console.log('Listener 2: Second execution (async using setImmediate)');
  });
});

// Listener 3 (synchronous)
myEmitter.on('event', () => {
  console.log('Listener 3: Third execution');
});

// Emit the event
myEmitter.emit('event');

//Prints:
// Listener 1: First execution
// Listener 3: Third execution
// Listener 2: Second execution (async using setImmediate)