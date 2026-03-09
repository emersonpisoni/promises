function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function makeCoffee() {
  console.log("1) Start making coffee...");

  // This "pauses" ONLY this async function (not the whole JS runtime)
  await delay(1000);
  console.log("2) Water boiled");

  await delay(800);
  console.log("3) Coffee brewed");

  return "☕ Coffee ready";
}

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