# Promises

A promise is a value that will be available in the future

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