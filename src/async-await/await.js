async function runAsyncAwait() {
  console.log("\n=== Using async/await ===");

  console.log("A) Program start");

  const coffeePromise2 = makeCoffee();

  console.log("B) Doing other work...");

  const coffee = await coffeePromise2;

  console.log("C) Result:", coffee);
  console.log("D) Program end");
}

runAsyncAwait();