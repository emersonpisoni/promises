task("A", 1000)
  .then(resultA => {
    console.log(resultA);
    return task("B", 1000);
  })
  .then(resultB => {
    console.log(resultB);
    return task("C", 1000);
  })
  .then(resultC => {
    console.log(resultC);
  })
  .catch(err => {
    console.error("Error:", err);
  });