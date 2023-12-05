// also called the 'concurency model'
// single thread - one task at a time
// JS engine - each browser has a JS engine.
// Js engine has 2 components -> headp, callstack.
// Heap is for memory allocation, call stack is for functional executions.
// js engine runs in a Javascript runtime environment. The js runtime env consists of the js engine and web apis
// js runtime env is within the browser.
// web api consists of timers, http request, dom to name a few.
// The funtions within the web apis are queued up in the task queue, after the call stack is empty, the task queue items are moved onto the task queue.
// this is called the event loop.
// Event loop steps:
// 1. Dequeue 1 task
// 2. Execute until the call stack is empty
// 3. Render Dom changes
// 4. Go to step 1.

// Avoiding slow tasks
//  -> keep the big computations on the server
//  or use chunking or web workers.

// Promises/asynchronous code with event loop
// In the Javascript runtime environment, we have a new queue to deals with promises called a micro task queue/ job queue in addition to task queue
// Callbacks in the then chain will not be added to the microtask queue until the previous promise resolves.
//

// Event loop steps with asynchronous code.
// 1. Dequeue 1 task
// 2. Execute until the call stack is empty
// 3. Execute all microtasks until the microtask queue is empty
// 4. Render Dom changes
// 5. Go to step 1.

// Event loop psuedo code
// while (true) {
//   if (!taskQueue.isEmpty()) {
//     execute(taskQueue.dequeue());
//   }
//   while (!microTaskQueue.isEmpty()) {
//     execute(microTaskQueue.dequeue());
//   }
//   reRender();
// }

// 1. timers are not exact -> for exact timings, we can use the date object/performance.now in combination with the setTimeout to get more accurate results
// 2. Promise callbacks can also be delayed
// 3. slow task can be completely blocking.
// One way to deal with slower taks is: chunking
//
