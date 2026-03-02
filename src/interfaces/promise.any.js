Promise.any([
  task("Fail1", 1000, true),
  task("Fail2", 1500, true),
  task("Success", 2000)
])
  .then(result => {
    console.log("First success:", result);
  })
  .catch(err => {
    console.error("All failed:", err);
  });

// runs all tasks in parallel, and resolves as soon as the first task succeeds.

// Use the first successful result