# Node.js Internals

## Architecture of Node.js
- The **V8 JavaScript engine** serves as the foundation for Node.js, which offers a runtime for running JavaScript outside of a browser.
- Its **single-threaded, event-driven architecture** allows it to effectively manage thousands of concurrent connections.
- Asynchronous operations and system-level tasks are coordinated via the **event loop** and **libuv** at the core of the design.

## JavaScript Engine (V8)
- Google's open-source JavaScript engine, V8, is written in C++.
- It ensures quick execution by compiling JavaScript into native machine code.
- Garbage collection, memory management, and support for contemporary JavaScript are among the capabilities it offers.

## Core APIs for Node.js
- Node.js has built-in modules to communicate with the operating system, such as `fs`, `http`, and `crypto`.
- Despite being implemented in JavaScript, some APIs have internal connections to native C/C++ implementations.
- The y enable developers to use JavaScript directly for activities like networking, file I/O, and cryptography.

## Native Connections
- Native bindings serve as a link between C/C++ code and JavaScript.
- They make it possible for Node.js to invoke low-level system operations.
- For instance, JavaScript's `fs.readFile` internally accesses OS-level file I/O via native bindings.

## Loop of Events
- The core of Node.js is the **event loop** , which handles asynchronous processes.
- It schedules activities, runs callbacks, and continuously looks for unfinished jobs.
- By assigning complex jobs to **libuv** and the **thread pool**, it guarantees non-blocking execution.

## Libuv

### Describe libuv.
- A C library that supports asynchronous I/O across several platforms.
- Manages functions such as clocks, file systems, and networking.

### Why libuv is necessary for Node.js
- Non-blocking I/O cannot be handled by JavaScript alone.
- Node.js is efficient because Libuv offers the underlying framework for async operations.## Libuv's obligations
Oversee the event loop.
- For costly tasks, offer a thread pool.
Manage cross-platform abstractions for file system and networking functions.

## Thread Pool ### Describe a thread pool.
- A group of worker threads under libuv's control.
- Heavy work can be carried out in parallel without interfering with the main thread.

## The rationale behind using a thread pool in Node.js
- To relieve CPU-intensive or time-consuming chores.
- Maintains the primary event loop's lightweight and responsiveness.

## Tasks performed by the thread pool
- File system functions.
- DNS searches.
- Encryption and compression jobs.


## Threads for Workers## Worker threads: what are they?
- JavaScript can be executed in parallel threads thanks to a Node.js module.
- Worker threads have the ability to run JavaScript code directly, in contrast to the libuv thread pool.

## Why are worker threads required?
- Data processing, picture transformation, and machine learning are examples of CPU-bound processes.
- It keeps the main event loop from being blocked.

## The distinction between worker threads and thread pools
I/O, encryption, DNS, and other native C/C++ operations are carried out via the thread pool.
Worker threads are used to run JavaScript code concurrently.

## Queues for Event Loops## Macro Task Queue
- Tasks like `setTimeout`, `setInterval`, and I/O callbacks are included.
- Performed in FIFO order, one at a time.## Micro-Task Queue
- Tasks such as `Promise.then` and `process.nextTick` are included.
- Performed right after the current operation, prior to macro tasks.

### Priority of execution
- Compared to macro chores, micro tasks are **higher priority**.
- Before proceeding to the next macro job, all micro tasks must be completed following each macro task.

## Illustrations
- SetTimeout, SetInterval, SetImmediate, and I/O callbacks are examples of macro jobs.
- Promise.then, process.nextTick, and queueMicrotask are examples of micro tasks.