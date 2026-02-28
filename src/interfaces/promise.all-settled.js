Promise.allSettled([
  task("A", 1000),
  task("B", 2000, true),
  task("C", 1500)
])
  .then(results => {
    console.log("All settled:", results);
  });

// runs all tasks in parallel, and waits for all of them to finish,
// regardless of success or failure.
// The results array contains objects with the status and value or reason for each task.

// It is useful when you want the maximum information about all tasks, including which ones succeeded and which ones failed.