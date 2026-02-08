# Promises

A promise is a value that will be available in the future

## Why?

JS is single-thread + I/O async

JS was made to:

- Run in browsers
- Do not block UI
- Handle async I/O

So, slow operations like network, disk, timers, could not be synchronous.

The initial solution was: CALLBACKS.

With this, it shows a new problem: CALLBACK HELL

![](callback-hell.jpg)

- Infinity callbacks
- hard to read
- hard to test
- hard to reuse

Now is when the Promises come out

Promises wasn't born in Javascript, it comes from:

- Functional languages
- Distributed systems
- Theory of computation

Previous examples of implementation:

- Scala Futures
- C# Tasks

## Todos

- Clarify the problems with callbacks
- Show examples with Promise.all, Promise.any, Promise.race...
- .then() always go to microtask queue in event loop (compare with Zalgo - sync and async)
- Maybe show event loop freezing with main queue blocked

---

It can have three states:

pending -> running

fulfilled -> resolved

rejected -> error

## Microtasks

Promises do not run callbacks immediately
They use the Microtask Queue from Event Loop:

![Promise Image](/promise.png)

## Chained Promises

The promise methods then(), catch() and finally() are used to associate further action with a promise that becomes settled.

```js
const minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

minhaPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);
```

## How promises works in event loop