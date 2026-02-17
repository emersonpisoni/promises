function step(name, ms, cb) {
  setTimeout(() => cb(null, `${name} done`), ms);
}

step("Step 1", 150, (err, r1) => {
  if (err) return console.error("Error at step 1", err);

  step("Step 2", 150, (err, r2) => {
    if (err) return console.error("Error at step 2", err);

    step("Step 3", 150, (err, r3) => {
      if (err) return console.error("Error at step 3", err);

      console.log("Results:", r1, r2, r3);
    });
  });
});