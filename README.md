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