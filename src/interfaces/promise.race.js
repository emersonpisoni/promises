import { task } from "../util.js";

Promise.race([
  task("Slow", 3000),
  task("Fast", 1000)
])
  .then(result => {
    console.log("Winner:", result);
  })
  .catch(err => {
    console.error("Error:", err);
  });

// runs all tasks in parallel, and resolves or rejects as soon as the first task finishes.
// the first task to complete (either success or failure)