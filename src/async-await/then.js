// async-await-demo.js
// Run: node async-await-demo.js

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function makeCoffee() {
  console.log("1) Start making coffee...");

  // This "pauses" ONLY this async function (not the whole JS runtime)
  await delay(1000);
  console.log("2) Water boiled");

  await delay(800);
  console.log("3) Coffee brewed");

  return "☕ Coffee ready";
}

async function main() {
  console.log("A) Program start");

  const coffeePromise = makeCoffee(); // starts immediately (returns a Promise)

  console.log("B) While coffee is being made, I can do other work...");
  await delay(300);
  console.log("C) Still doing other work...");

  const coffee = await coffeePromise; // wait for the result
  console.log("D) Result:", coffee);

  console.log("E) Program end");
}

main().catch((err) => console.error("Unexpected error:", err));