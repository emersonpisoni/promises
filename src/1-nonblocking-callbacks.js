console.log("A) Start");

setTimeout(() => {
  console.log("C) Timer finished (async callback)");
}, 200);

console.log("B) End (this runs before C)");