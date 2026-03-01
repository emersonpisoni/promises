Promise.all([
  task("A", 1000),
  task("B", 2000),
  task("C", 1500)
])
  .then(results => {
    console.log("All done:", results);
  })
  .catch(err => {
    console.error("One failed:", err);
  });

// runs all tasks in parallel, and waits for all of them to succeed.
// If any task fails, it immediately rejects with that error.
// The results array contains the successful results in the order of the input tasks.

// It is useful when you need that all tasks complete successfully before proceeding,
// and you want to handle errors immediately if any task fails.
// Ex.: Dashboard